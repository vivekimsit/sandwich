import * as React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withFindHotels, WithFindHotels } from "@sandwich/controller";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

const MyLink = props => <Link to="/hotel/create" {...props} />;

class C extends React.PureComponent<WithFindHotels> {
  render() {
    const { hotels, loading } = this.props;
    console.log(hotels);
    return (
      <div
        style={{
          margin: "100px 100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {loading && <div>...loading</div>}
        {hotels.map((h: any) => (
          <Card
            key={`${h.id}-card`}
            style={{
              display: "flex",
              margin: 10,
              justifyContent: "space-between",
              width: 600
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <CardContent style={{ flex: "1 0 auto" }}>
                <Typography variant="headline">{h.name}</Typography>
                <Typography variant="subheading">{h.description}</Typography>
              </CardContent>
              <CardActions>
                <Link to={`/hotels/${h.id}`}>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </div>
            <CardMedia
              style={{ width: 151, height: 151 }}
              image={h.thumbnailUrl}
              title={h.name}
            />
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
      </div>
    );
  }
}
export const FindHotelsConnector = withFindHotels(C);
