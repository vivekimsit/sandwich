import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Dropdown } from "../../shared/dropdown";
import { theme } from "../../../theme";

const UserProfileDropdownList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const UserProfileDropdownListItem = styled.li`
  font-size: 14px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.text.alt};
  border-bottom: 2px solid ${theme.bg.border};
  background: ${theme.bg.default};
  justify-content: center;
  &:hover {
    cursor: pointer;
    color: ${theme.text.default};
    background: ${theme.bg.wash};
  }
`;

interface Props {
  user: any;
}

export class ProfileDropdown extends React.PureComponent<Props> {
  render() {
    const {
      user: { email }
    } = this.props;
    console.log(email);
    return (
      <Dropdown className={"dropdown"}>
        <UserProfileDropdownList>
          <Link to="/about">
            <UserProfileDropdownListItem>About</UserProfileDropdownListItem>
          </Link>
          <Link to="/settings">
            <UserProfileDropdownListItem>Settings</UserProfileDropdownListItem>
          </Link>
        </UserProfileDropdownList>
      </Dropdown>
    );
  }
}
