import * as React from "react";
import { ViewRoom } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";

import { RoomView } from "./ui/RoomView";

export class ViewRoomConnector extends React.PureComponent<
  RouteComponentProps<{ roomId: string }>
> {
  render() {
    const {
      match: {
        params: { roomId }
      }
    } = this.props;
    return (
      <ViewRoom roomId={roomId}>
        {({ loading, room }) => {
          if (loading || room == null) {
            return <div>...loading</div>;
          }
          return <RoomView room={room} />;
        }}
      </ViewRoom>
    );
  }
}
