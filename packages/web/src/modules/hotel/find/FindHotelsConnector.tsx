import * as React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withFindHotels, WithFindHotels } from "@sandwich/controller";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

import Sidebar from "../../sidebar/Sidebar";

const MyLink = props => <Link to="/hotel/create" {...props} />;

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

const HotelList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  max-height: 100%;
  position: relative;
  flex: 1 1 auto;
`;

class C extends React.PureComponent<WithFindHotels> {
  render() {
    const { hotels, loading } = this.props;
    return (
      <HotelWrapper id="main">
        <Sidebar />
        <ContentWrapper>
          <HotelList>
            {loading && <div>...loading</div>}
            {hotels.map((h: any) => (
              <Card
                key={`${h.id}-card`}
                style={{
                  display: "flex",
                  margin: 10,
                  minHeight: 150
                }}
              >
                <CardMedia
                  style={{ width: 151, height: 151 }}
                  image={h.thumbnailUrl}
                  title={h.name}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <CardContent style={{ flex: "1 0 auto" }}>
                    <Typography variant="headline">{h.name}</Typography>
                    <Typography variant="subheading">
                      {h.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/hotels/${h.id}`}>
                      <Button size="small">View Details</Button>
                    </Link>
                  </CardActions>
                </div>
              </Card>
            ))}
            <Button
              variant="fab"
              color="secondary"
              component={MyLink}
              style={{
                position: "fixed",
                bottom: 10 * 2,
                right: 10 * 2
              }}
            >
              <AddIcon />
            </Button>
          </HotelList>
        </ContentWrapper>
      </HotelWrapper>
    );
  }
}

export const FindHotelsConnector = withFindHotels(C);
