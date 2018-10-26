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
        {loggedIn && (
          <ProfileTab to="/logout">
            <Label>Logout</Label>
          </ProfileTab>
        )}
        {!loggedIn && (
          <ProfileTab to="/login">
            <Label>Login</Label>
          </ProfileTab>
        )}
      </NavContainer>
    );
  }
}
