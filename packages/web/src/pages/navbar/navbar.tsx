import * as React from "react";
import { Link } from "react-router-dom";

import { MeQuery_me } from "@sandwich/controller";
import { NavContainer, Tabs, Tab, AboutTab, AuthTab } from "./style";
import { Button } from "../../modules/shared/buttons";

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
          <AuthTab dark={true}>
            {loggedIn ? (
              <Link to={"/logout"}>
                <Button>Logout</Button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <Button>Login</Button>
              </Link>
            )}
          </AuthTab>
        </Tabs>
      </NavContainer>
    );
  }
}
