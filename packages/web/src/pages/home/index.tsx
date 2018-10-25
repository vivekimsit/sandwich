import * as React from "react";

import { Wrapper, Content, Footer } from "../style";
import { H1 } from "../../style";

export default class Home extends React.Component {
  render() {
    return (
      <Wrapper data-cy="home-page">
        <Content>
          <H1>Welcome to home</H1>
        </Content>
        <Content>
          <H1>Why you are gonna love it</H1>
        </Content>
        <Footer>Footer content here</Footer>
      </Wrapper>
    );
  }
}
