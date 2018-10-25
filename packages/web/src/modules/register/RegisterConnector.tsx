import * as React from "react";
import { RegisterController } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";

import { RegisterView } from "./ui/RegisterView";
import { FullscreenViewContainer } from "../../style";

export class RegisterConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/m/confirm-email", {
      message: "check your email to confirm your account"
    });
  };

  render() {
    return (
      <RegisterController>
        {({ submit }) => (
          <FullscreenViewContainer>
            <RegisterView onFinish={this.onFinish} submit={submit} />
          </FullscreenViewContainer>
        )}
      </RegisterController>
    );
  }
}
