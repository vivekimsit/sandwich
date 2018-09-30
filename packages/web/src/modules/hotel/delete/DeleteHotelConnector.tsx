import * as React from "react";
import { DeleteHotel } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";

import { CallDeleteHotel } from "./CallDeleteHotel";

export class DeleteHotelConnector extends React.PureComponent<
  RouteComponentProps<{
    hotelId: string;
  }>
> {
  onFinish = () => {
    this.props.history.push("/hotels");
  };

  render() {
    const {
      match: {
        params: { hotelId }
      }
    } = this.props;
    return (
      <DeleteHotel hotelId={hotelId}>
        {({ remove }) => (
          <CallDeleteHotel remove={remove} onFinish={this.onFinish} />
        )}
      </DeleteHotel>
    );
  }
}
