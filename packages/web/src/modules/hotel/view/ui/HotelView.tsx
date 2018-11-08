import * as React from "react";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import { Search } from "./Search";
import { AppViewWrapper, PhotoContainer } from "../../../../style";
import { Grid, Meta, Content, Extras, SegmentTabs, Segment } from "./style";

interface Props {
  hotel: any;
}

interface State {
  selectedView: string;
}

export class HotelView extends React.PureComponent<Props, State> {
  state = {
    selectedView: "rooms"
  };

  handleSegmentClick(label: string) {
    if (this.state.selectedView === label) {
      return;
    }

    return this.setState({
      selectedView: label
    });
  }

  render() {
    const {
      hotel,
      hotel: { address },
      hotel: { rooms }
    } = this.props;
    const { selectedView } = this.state;

    return (
      <AppViewWrapper>
        <Grid id="main">
          <PhotoContainer coverUrl={hotel.thumbnailUrl} large={true} />
          <Meta>
            <Typography variant="headline">{hotel.name}</Typography>
            <Typography variant="subheading">{hotel.description}</Typography>
            <Typography variant="subheading">Email: foo@example.com</Typography>
            <Typography variant="subheading">Phone: xxxxxxxxxxxxxxx</Typography>
            <Link to={`/${hotel.id}/settings`}>
              <Button variant="contained" color="secondary">
                Settings
                <SettingsIcon />
              </Button>
            </Link>
          </Meta>
          <Content>
            <SegmentTabs>
              <Segment
                onClick={() => this.handleSegmentClick("search")}
                selected={selectedView === "search"}
              >
                Search
              </Segment>
              <Segment
                onClick={() => this.handleSegmentClick("rooms")}
                selected={selectedView === "rooms"}
              >
                Rooms
              </Segment>
              <Segment
                onClick={() => this.handleSegmentClick("bookings")}
                selected={selectedView === "bookings"}
              >
                Bookings
              </Segment>
            </SegmentTabs>
            {// Search view
            selectedView === "search" && <Search />}

            {// Rooms view
            selectedView === "rooms" &&
              rooms.map(r => (
                <Card
                  key={`${r.id}-card`}
                  style={{
                    display: "flex",
                    margin: 10,
                    minHeight: 150
                  }}
                >
                  <CardMedia
                    style={{ width: 151, height: 151 }}
                    image={r.thumbnailUrl}
                    title={r.name}
                  />
                  <CardContent style={{ flex: "1 0 auto" }}>
                    <Typography variant="headline">{r.name}</Typography>
                    <Typography variant="subheading">
                      {r.description}
                    </Typography>
                    <Typography variant="subheading">{r.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/rooms/${r.id}`}>
                      <Button>View</Button>
                    </Link>
                    <Link to={`/rooms/${r.id}/edit`}>
                      <Button>Edit</Button>
                    </Link>
                  </CardActions>
                </Card>
              ))}
            {// Bookings
            selectedView === "bookings" && <div>Bookings</div>}
          </Content>
          <Extras>
            {address && (
              <>
                <Typography variant="headline">Address</Typography>
                <Typography variant="subheading">{address.city}</Typography>
                <Typography variant="subheading">{address.state}</Typography>
                <Typography variant="subheading">{address.country}</Typography>
                <Typography variant="subheading">{address.type}</Typography>
                <Typography variant="subheading">{address.zip}</Typography>
              </>
            )}
          </Extras>
        </Grid>
      </AppViewWrapper>
    );
  }
}
