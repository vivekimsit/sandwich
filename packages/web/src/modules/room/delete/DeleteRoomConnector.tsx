import * as React from "react";
import { DeleteRoom } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";

import { CallDeleteRoom } from "./CallDeleteRoom";

export class DeleteRoomConnector extends React.PureComponent<
  RouteComponentProps<{
    roomId: string;
  }>
> {
  onFinish = () => {
    this.props.history.push("/hotels");
  };

  render() {
    const {
      match: {
        params: { roomId }
      }
    } = this.props;
    return (
      <DeleteRoom roomId={roomId}>
        {({ remove }) => (
          <CallDeleteRoom remove={remove} onFinish={this.onFinish} />
        )}
      </DeleteRoom>
    );
  }
}
