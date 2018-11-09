import * as React from "react";
import { Link } from "react-router-dom";

import { StyledSubnav, SubnavList, SubnavListItem } from "./style";

export interface SubnavItem {
  link: string;
  label: string;
  path: string;
}

interface Props {
  items: any[];
  activeTab: string;
}

class Subnav extends React.Component<Props> {
  render() {
    const { activeTab, items } = this.props;

    return (
      <StyledSubnav>
        <SubnavList>
          {items.map((item, i) => {
            return (
              <SubnavListItem key={i} active={activeTab === item.activeLabel}>
                <Link to={item.url}>{item.label}</Link>
              </SubnavListItem>
            );
          })}
        </SubnavList>
      </StyledSubnav>
    );
  }
}

export default Subnav;
