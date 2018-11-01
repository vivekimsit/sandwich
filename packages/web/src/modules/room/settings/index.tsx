import * as React from "react";
import { RouteComponentProps, Route, Switch } from "react-router-dom";

import { ViewRoom } from "@sandwich/controller";
import { AppViewWrapper } from "../../../style";
import Header from "../../shared/Header";
import { Wrapper } from "../../hotel/settings/style";
import Subnav from "../../shared/subnav";
import RoomSettings from "./ui/RoomSettings";

class RoomSettingsView extends React.PureComponent<
  RouteComponentProps<{ hotelId: string; roomId: string }>
> {
  render() {
    const {
      match,
      match: {
        params: { hotelId, roomId }
      }
    } = this.props;
    const navItems = [
      {
        url: `/${hotelId}/${roomId}/settings`,
        label: "Settings",
        path: "settings"
      }
    ];
    return (
      <ViewRoom roomId={roomId}>
        {({ loading, room }) => {
          if (loading || room == null) {
            return <div>...loading</div>;
          }
          return (
            <AppViewWrapper>
              <Wrapper>
                <Header heading={"Settings"} />
                <Subnav items={navItems} activeTab={"settings"} />
                <Switch>
                  <Route path={`${match.url}`}>
                    {<RoomSettings room={room} />}
                  </Route>
                </Switch>
              </Wrapper>
            </AppViewWrapper>
          );
        }}
      </ViewRoom>
    );
  }
}

export default RoomSettingsView;
