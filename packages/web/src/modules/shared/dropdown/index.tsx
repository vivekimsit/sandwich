import * as React from "react";

import { StyledDropdown, StyledCard } from "./style";

interface Props {
  children: JSX.Element;
  className: string;
}

export class Dropdown extends React.PureComponent<Props> {
  render() {
    return (
      <StyledDropdown className={this.props.className}>
        <StyledCard>{this.props.children}</StyledCard>
      </StyledDropdown>
    );
  }
}
