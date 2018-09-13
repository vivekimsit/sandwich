import * as React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {
  room: any;
}

export class RoomView extends React.PureComponent<Props> {
  render() {
    const { room } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography variant="headline">{room.name}</Typography>
        <Typography variant="subheading">{room.description}</Typography>
        <Typography variant="subheading">{room.price}</Typography>
      </div>
    );
  }
}
