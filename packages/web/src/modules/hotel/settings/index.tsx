import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import { AppViewWrapper } from "../../../style";
import { HotelSetting } from "./ui/HotelSetting";

class C extends React.PureComponent<RouteComponentProps<{ hotelId: string }>> {
  render() {
    const {
      match: {
        params: { hotelId }
      }
    } = this.props;
    return (
      <AppViewWrapper>
        <HotelSetting hotelId={hotelId} />
      </AppViewWrapper>
    );
  }
}

export const HotelSettingsView = C;
