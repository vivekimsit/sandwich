import * as React from "react";
import { FormikActions } from "formik";

import { withCreateRoom, WithCreateRoom } from "@sandwich/controller";
import { Column, SectionCard, SectionsContainer } from "../style";
import RoomListView from "./RoomListView";
import { H2 } from "./../../../../style";
import {
  defaultRoomFormValues,
  RoomFormValues,
  RoomForm
} from "../../../room/shared/RoomForm";

interface Props {
  hotel: any;
}

class RoomSettings extends React.Component<Props & WithCreateRoom> {
  submit = async (
    values: RoomFormValues,
    { setSubmitting }: FormikActions<RoomFormValues>
  ) => {
    const { thumbnailUrl: _, ...v } = values;
    await this.props.createRoom({
      input: v
    });
    setSubmitting(false);
  };

  render() {
    const {
      hotel: { id },
      hotel: { rooms }
    } = this.props;
    return (
      <SectionsContainer>
        <Column>
          <SectionCard>
            <H2>Rooms</H2>
            {rooms.map(r => (
              <RoomListView key={`room-${r.id}`} room={r} />
            ))}
          </SectionCard>
        </Column>
        <Column>
          <SectionCard>
            <H2>Add Room</H2>
            <RoomForm
              initialValues={{ ...defaultRoomFormValues, hotelId: id }}
              submit={this.submit}
              detailView={false}
            />
          </SectionCard>
        </Column>
      </SectionsContainer>
    );
  }
}

export default withCreateRoom(RoomSettings);
