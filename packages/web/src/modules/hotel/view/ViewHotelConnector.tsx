import * as React from "react";
import { ViewHotel } from "@sandwich/controller";
import { RouteComponentProps, Link } from "react-router-dom";

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

          return (
            <div>
              <div>{data.hotel.name}</div>
              <div>
                <Link to={`/hotel/${hotelId}/chat`}>chat</Link>
              </div>
              <div>
                <Link to={`/hotel/${hotelId}/edit`}>edit</Link>
              </div>
            </div>
          );
        }}
      </ViewHotel>
    );
  }
}
