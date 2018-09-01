import * as React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withFindHotels, WithFindHotels } from "@sandwich/controller";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const MyLink = props => <Link to="/create-hotel" {...props} />;

class C extends React.PureComponent<WithFindHotels> {
  render() {
    const { hotels, loading } = this.props;
    return (
      <div>
        {loading && <div>...loading</div>}
        {hotels.map((h: any) => (
          <Card key={`${h.id}-card`}>
            <div>
              <CardContent>
                <Typography variant="headline">{h.name}</Typography>
              </CardContent>
              <div>
                <IconButton aria-label="Play/pause">
                  <PlayArrowIcon />
                </IconButton>
              </div>
            </div>
            <CardMedia image={h.pictureUrl} title={h.name} />
          </Card>
        ))}
        <Button
          variant="fab"
          color="secondary"
          component={MyLink}
          style={{
            position: "absolute",
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
