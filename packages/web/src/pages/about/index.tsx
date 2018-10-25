import * as React from "react";

import { Wrapper, Content, Footer } from "../style";
import { H1 } from "../../style";

export default class About extends React.Component {
  render() {
    return (
      <Wrapper data-cy="about-page">
        <Content>
          <H1>Welcome to about</H1>
        </Content>
        <Footer>Footer content here</Footer>
      </Wrapper>
    );
  }
}
