import * as React from "react";
import { LoginController } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import { LoginView } from "./ui/LoginView";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;

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
          <Section>
            <LoginView onFinish={this.onFinish} submit={submit} />
          </Section>
        )}
      </LoginController>
    );
  }
}
