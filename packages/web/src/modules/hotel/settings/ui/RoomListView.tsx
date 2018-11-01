import * as React from "react";

import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

interface Props {
  hotelId: string;
  room: any;
}

class RoomListView extends React.PureComponent<Props> {
  render() {
    const { room, hotelId } = this.props;
    return (
      <Card
        key={`room-${room.id}`}
        style={{
          display: "flex",
          margin: 10
        }}
      >
        <CardContent style={{ flex: "1 0 auto" }}>
          <Typography variant="headline">{room.name}</Typography>
          <Typography variant="subheading">{room.description}</Typography>
          <Typography variant="subheading">{room.price}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/${hotelId}/${room.id}/settings`}>
            <Button>View</Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default RoomListView;
