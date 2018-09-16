import * as React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Sidebar from "../../../sidebar/Sidebar";

const HotelWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: hidden;
  flex: auto;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: flex-start;
  overflow-y: hidden;
  flex: 1 1 auto;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  max-height: 100%;
  position: relative;
  flex: 1 1 auto;
`;

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
    const {
      hotel,
      hotel: { address },
      hotel: { rooms }
    } = this.props;
    return (
      <HotelWrapper>
        <Sidebar />
        <ContentWrapper>
          <Content>
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
                  <Typography variant="subheading">
                    {hotel.description}
                  </Typography>
                  <Typography variant="subheading">
                    Email: foo@example.com
                  </Typography>
                  <Typography variant="subheading">
                    Phone: xxxxxxxxxxxxxxx
                  </Typography>
                  <Link to={`/hotels/${hotel.id}/edit`}>
                    <Button>Edit</Button>
                  </Link>
                </TabContainer>
              )}
              {this.state.currentTab === 1 &&
                (rooms && (
                  <TabContainer>
                    {rooms.map(r => (
                      <div key={`room-${r.id}`}>
                        <Typography variant="headline">{r.name}</Typography>
                        <Typography variant="subheading">
                          {r.description}
                        </Typography>
                        <Typography variant="subheading">{r.price}</Typography>
                        <Link to={`/rooms/${r.id}`}>
                          <Button>View</Button>
                        </Link>
                      </div>
                    ))}
                    <Link to={`/hotels/${hotel.id}/rooms/create`}>
                      <Button>Add room</Button>
                    </Link>
                  </TabContainer>
                ))}
              {this.state.currentTab === 2 &&
                (address && (
                  <TabContainer>
                    <Typography variant="headline">{address.city}</Typography>
                    <Typography variant="subheading">{address.lat}</Typography>
                    <Typography variant="subheading">{address.lng}</Typography>
                    <Typography variant="subheading">
                      {address.state}
                    </Typography>
                    <Typography variant="subheading">
                      {address.country}
                    </Typography>
                    <Typography variant="subheading">{address.type}</Typography>
                    <Typography variant="subheading">{address.zip}</Typography>
                    <Link to={`/hotels/${hotel.id}/address/${address.id}/edit`}>
                      <Button>Edit</Button>
                    </Link>
                  </TabContainer>
                ))}
              {this.state.currentTab === 2 &&
                (!address && (
                  <TabContainer>
                    <Link to={`/hotels/${hotel.id}/address/create`}>
                      <Button>Add Address</Button>
                    </Link>
                  </TabContainer>
                ))}
            </div>
          </Content>
        </ContentWrapper>
      </HotelWrapper>
    );
  }
}
