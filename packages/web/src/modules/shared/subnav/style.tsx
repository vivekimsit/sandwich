import styled from "styled-components";

import { theme } from "../../../theme";

export const StyledSubnav = styled.div`
  display: flex;
  padding: 0 32px;
  border-bottom: 1px solid ${theme.bg.border};
  background: ${theme.bg.default};
  width: 100%;
  flex: none;
  @media (max-width: 768px) {
    padding: 0 16px;
    display: block;
    justify-content: center;
    overflow-x: scroll;
  }
`;

export const SubnavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding-left: 0;
`;

interface ItemProps {
  active?: boolean;
}

export const SubnavListItem = styled.li<ItemProps>`
  position: relative;
  top: 1px;
  border-bottom: 1px solid
    ${props => (props.active ? theme.text.default : "transparent")};
  color: ${props => (props.active ? theme.text.default : theme.text.alt)};
  font-weight: ${props => (props.active ? "500" : "400")};
  &:hover {
    color: ${theme.text.default};
  }
  a {
    padding: 16px;
    display: inline-block;
  }
`;
