import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
        <Link to={`/rooms/${room.id}/edit`}>
          <Button>Edit</Button>
        </Link>
      </div>
    );
  }
}
