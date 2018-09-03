import * as React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3, margin: "20px 50px" }}>
      {props.children}
    </Typography>
  );
};

interface Props {
  hotel: any;
}

export class HotelView extends React.PureComponent<Props> {
  state = {
    currentTab: 0
  };

  handleTabChange = (_, currentTab) => {
    this.setState({ currentTab });
  };

  render() {
    const { hotel } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardMedia
          style={{ width: "100%", height: 300 }}
          image={hotel.thumbnailUrl}
          title={hotel.name}
        />
        <div>
          <Tabs
            value={this.state.currentTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleTabChange}
            scrollable={true}
            scrollButtons="auto"
          >
            <Tab label="Details" />
            <Tab label="Rooms" />
            <Tab label="Address" />
          </Tabs>
          {this.state.currentTab === 0 && (
            <TabContainer>
              <Typography variant="headline">{hotel.name}</Typography>
              <Typography variant="subheading">{hotel.description}</Typography>
              <Typography variant="subheading">
                Email: foo@example.com
              </Typography>
              <Typography variant="subheading">
                Phone: xxxxxxxxxxxxxxx
              </Typography>
            </TabContainer>
          )}
          {this.state.currentTab === 1 && <TabContainer>Item One</TabContainer>}
          {this.state.currentTab === 2 && <TabContainer>Item One</TabContainer>}
          <div>
            <Link to={`/hotel/${hotel.id}/edit`}>
              <Button>Edit</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
