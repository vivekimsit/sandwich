import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

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
    console.log(hotelId);
    return <div>Todo</div>;
  }
}
