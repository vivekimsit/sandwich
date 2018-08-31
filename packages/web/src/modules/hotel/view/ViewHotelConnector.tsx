import * as React from "react";
import { ViewHotel } from "@sandwich/controller";
import { RouteComponentProps, Link } from "react-router-dom";

export class ViewHotelConnector extends React.PureComponent<
  RouteComponentProps<{
    listingId: string;
  }>
> {
  render() {
    const {
      match: {
        params: { listingId }
      }
    } = this.props;
    return (
      <ViewHotel listingId={listingId}>
        {(data: any) => {
          console.log(data);
          if (!data.listing) {
            return <div>...loading</div>;
          }

          return (
            <div>
              <div>{data.listing.name}</div>
              <div>
                <Link to={`/listing/${listingId}/chat`}>chat</Link>
              </div>
              <div>
                <Link to={`/listing/${listingId}/edit`}>edit</Link>
              </div>
            </div>
          );
        }}
      </ViewHotel>
    );
  }
}
