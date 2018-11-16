import * as React from "react";

import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

interface Props {
  hotelId: string;
  room: any;
}

class RoomListView extends React.PureComponent<Props> {
  render() {
    const { room, hotelId } = this.props;
    return (
      <Link to={`/${hotelId}/${room.id}/settings`}>
        <Card
          key={`room-${room.id}`}
          style={{
            display: "flex",
            margin: 10
          }}
        >
          <CardMedia
            style={{ width: 151, height: 151 }}
            image={room.thumbnailUrl}
            title={room.name}
          />
          <CardContent style={{ flex: "1 0 auto" }}>
            <Typography variant="headline">{room.name}</Typography>
            <Typography variant="subheading">{room.description}</Typography>
            <Typography variant="subheading">{room.price}</Typography>
          </CardContent>
        </Card>
      </Link>
    );
  }
}

export default RoomListView;
