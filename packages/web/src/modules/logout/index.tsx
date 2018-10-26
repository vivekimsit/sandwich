import * as React from "react";
import { LogoutController } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";

import { CallLogout } from "./CallLogout";

export class Logout extends React.PureComponent<RouteComponentProps<{}>> {
  onFinish = () => {
    console.log("Logged out");
    this.props.history.push("/login");
  };

  render() {
    return (
      <LogoutController>
        {({ logout }) => (
          <CallLogout logout={logout} onFinish={this.onFinish} />
        )}
      </LogoutController>
    );
  }
}
