import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import { AppViewWrapper } from "../../../style";
import { HotelSetting } from "./ui";
import Header from "../../shared/Header";
import { Wrapper } from "./style";

class C extends React.PureComponent<RouteComponentProps<{ hotelId: string }>> {
  render() {
    const {
      match: {
        params: { hotelId }
      }
    } = this.props;
    return (
      <AppViewWrapper>
        <Wrapper>
          <Header heading={"Settings"} />
          <HotelSetting hotelId={hotelId} />
        </Wrapper>
      </AppViewWrapper>
    );
  }
}

export const HotelSettingsView = C;
