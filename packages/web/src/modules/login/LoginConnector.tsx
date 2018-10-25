import * as React from "react";
import { LoginController } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";

import { LoginView } from "./ui/LoginView";
import { FullscreenViewContainer } from "../../style";

export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const {
      history,
      location: { state }
    } = this.props;
    if (state && state.next) {
      return history.push(state.next);
    }

    history.push("/dashboard");
  };

  render() {
    return (
      <LoginController>
        {({ submit }) => (
          <FullscreenViewContainer>
            <LoginView onFinish={this.onFinish} submit={submit} />
          </FullscreenViewContainer>
        )}
      </LoginController>
    );
  }
}
