import * as React from "react";
import { ViewRoom, UpdateRoom } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";
import { RoomForm, defaultRoomFormValues } from "../shared/RoomForm";

export class EditRoomConnector extends React.PureComponent<
  RouteComponentProps<{
    roomId: string;
  }>
> {
  render() {
    const {
      match: {
        params: { roomId }
      }
    } = this.props;
    return (
      <ViewRoom roomId={roomId}>
        {data => {
          if (!data.room) {
            return <div>...loading</div>;
          }

          const { id: _, hotel: hotel, ...room } = data.room;
          return (
            <UpdateRoom>
              {({ updateRoom }) => (
                <RoomForm
                  initialValues={{
                    ...defaultRoomFormValues,
                    ...room,
                    hotelId: hotel.id
                  }}
                  submit={async values => {
                    const {
                      __typename: ____,
                      hotelId: ______,
                      ...newValues
                    } = values as any;

                    if (newValues.thumbnailUrl) {
                      const parts = newValues.thumbnailUrl.split("/");
                      newValues.thumbnailUrl = parts[parts.length - 1];
                    }

                    await updateRoom({
                      variables: {
                        input: newValues,
                        roomId
                      }
                    });
                    this.props.history.push(
                      `/hotels/${hotel.id}/rooms/${roomId}`
                    );
                  }}
                />
              )}
            </UpdateRoom>
          );
        }}
      </ViewRoom>
    );
  }
}
