import * as React from "react";

interface Props {
  hotel: any;
}

export class RoomSettings extends React.Component<Props> {
  render() {
    const {
      hotel: { rooms }
    } = this.props;
    return rooms.map(r => <div key={`room-${r.id}`}>{r.name}</div>);
  }
}
