import * as React from "react";

import RoomListItem from "./RoomListItem";

interface Props {
  hotelId: string;
  rooms: any;
}

class RoomList extends React.PureComponent<Props> {
  render() {
    const { rooms, hotelId } = this.props;
    return (
      <div>
        {rooms.map(r => (
          <RoomListItem key={`room-${r.id}`} room={r} hotelId={hotelId} />
        ))}
      </div>
    );
  }
}

export default RoomList;
