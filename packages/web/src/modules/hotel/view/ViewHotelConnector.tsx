import * as React from "react";
import { ViewHotel } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";

import { HotelView } from "./ui/HotelView";

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
          if (!data.hotel) {
            return <div>...loading</div>;
          }
          const { hotel } = data;
          return <HotelView hotel={hotel} />;
        }}
      </ViewHotel>
    );
  }
}
