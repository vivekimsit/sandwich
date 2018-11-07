import * as React from "react";
import { RouteComponentProps, Route, Switch } from "react-router-dom";

import { ViewHotel } from "@sandwich/controller";
import { AppViewWrapper } from "../../../style";
import { HotelSetting, RoomSettings } from "./ui";
import Header from "../../shared/Header";
import { Wrapper } from "./style";
import Subnav from "../../shared/subnav";

class C extends React.PureComponent<RouteComponentProps<{ hotelId: string }>> {
  render() {
    const {
      match,
      match: {
        params: { hotelId }
      }
    } = this.props;
    const navItems = [
      {
        url: `/${hotelId}/settings`,
        label: "Settings",
        path: "settings"
      },
      {
        url: `/${hotelId}/settings/rooms`,
        label: "Rooms",
        path: "rooms"
      }
    ];
    return (
      <ViewHotel hotelId={hotelId}>
        {data => {
          if (!data.hotel) {
            return <div>Loading</div>;
          }
          const { owner: _, address: address, ...hotel } = data.hotel;
          console.log("Settings", data);
          return (
            <AppViewWrapper>
              <Wrapper>
                <Header heading={"Settings"} />
                <Subnav items={navItems} activeTab={"settings"} />
                <Switch>
                  <Route path={`${match.url}/rooms`}>
                    {<RoomSettings hotel={hotel} />}
                  </Route>
                  <Route path={`${match.url}`}>
                    {<HotelSetting hotel={hotel} />}
                  </Route>
                </Switch>
              </Wrapper>
            </AppViewWrapper>
          );
        }}
      </ViewHotel>
    );
  }
}

export const HotelSettingsView = C;
