import * as React from "react";

import { HeaderText, Heading, StyledHeader } from "./style";

interface Props {
  heading: string;
  subheading?: string;
}

class Header extends React.Component<Props> {
  render() {
    const { heading } = this.props;
    return (
      <StyledHeader>
        <HeaderText>
          <Heading>{heading}</Heading>
        </HeaderText>
      </StyledHeader>
    );
  }
}

export default Header;
