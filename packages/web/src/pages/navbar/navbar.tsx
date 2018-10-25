import * as React from "react";
import { Link } from "react-router-dom";
import { MeQuery_me } from "@sandwich/controller";
import { NavContainer, Tabs, Tab, AboutTab, AuthTab } from "./style";

interface IProps {
  currentUser: MeQuery_me;
}

export class NavBar extends React.PureComponent<IProps> {
  public render() {
    const { currentUser } = this.props;
    const loggedIn = currentUser && !!currentUser.email;
    return (
      <NavContainer>
        {loggedIn && <div>Menu Here</div>}
        <Tabs>
          <Tab to="/">YABI</Tab>
          <AboutTab to="/about">About</AboutTab>
          <AuthTab>
            {!loggedIn && <Link to="/login">Login</Link>}
            {loggedIn && <Link to="/logout">Logout</Link>}
          </AuthTab>
        </Tabs>
      </NavContainer>
    );
  }
}
