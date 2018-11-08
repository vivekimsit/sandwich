import * as React from "react";
import { MeQuery_me } from "@sandwich/controller";

import { NavContainer, HomeTab, HotelsTab, ProfileTab, Label } from "./style";
import { Navatar } from "./Navatar";

interface IProps {
  currentUser: MeQuery_me;
}

export class NavBar extends React.PureComponent<IProps> {
  public render() {
    const { currentUser } = this.props;
    const loggedIn = currentUser && !!currentUser.email;
    return (
      <NavContainer>
        <HomeTab to="/">
          <Label>YABI</Label>
        </HomeTab>
        <HotelsTab to="/hotels">
          <Label>Hotels</Label>
        </HotelsTab>
        <ProfileTab to={loggedIn ? `/users/${currentUser.email}` : "/logout"}>
          {loggedIn && <Navatar user={currentUser} />}
          {!loggedIn && <Label>Login</Label>}
        </ProfileTab>
      </NavContainer>
    );
  }
}
