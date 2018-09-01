import * as React from "react";
import Button from "@material-ui/core/Button";
import { ViewHotel } from "@sandwich/controller";
import { RouteComponentProps, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export class ViewHotelConnector extends React.PureComponent<
  RouteComponentProps<{
    hotelId: string;
  }>
> {
  render() {
    const {
      match: {
        params: { hotelId }
      }
    } = this.props;
    return (
      <ViewHotel hotelId={hotelId}>
        {(data: any) => {
          console.log(data);
          if (!data.hotel) {
            return <div>...loading</div>;
          }

          const { hotel } = data;
          return (
            <div
              style={{ margin: 100, display: "flex", flexDirection: "column" }}
            >
              <div>
                <Typography variant="headline">{hotel.name}</Typography>
              </div>
              <div>
                <Typography variant="subheading">
                  {hotel.description}
                </Typography>
              </div>
              <div>
                <Link to={`/hotel/${hotelId}/edit`}>
                  <Button>Edit</Button>
                </Link>
              </div>
            </div>
          );
        }}
      </ViewHotel>
    );
  }
}
