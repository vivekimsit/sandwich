import * as React from "react";
import { MeQuery_me } from "@sandwich/controller";

import { NavContainer, HomeTab, ProfileTab, Label } from "./style";

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
        <ProfileTab to="/">
          {!loggedIn && <Label>Login</Label>}
          {loggedIn && <Label>Logout</Label>}
        </ProfileTab>
      </NavContainer>
    );
  }
}
