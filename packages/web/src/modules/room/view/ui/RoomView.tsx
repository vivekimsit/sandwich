import * as React from "react";

interface Props {
  room: any;
}

export class RoomView extends React.PureComponent<Props> {
  render() {
    const { room } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {room}
      </div>
    );
  }
}
