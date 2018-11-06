import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../theme";

export const NavContainer = styled.div`
  display: grid;
  grid-template-rows: 68px;
  grid-template-columns: auto;
  grid-template-areas: "tabs";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const Tabs = styled.div`
  display: grid;
  padding: 0 16px;
  color: #fff;
  grid-template-columns: auto 1fr repeat(3, auto);
  grid-column-gap: 32px;
  grid-template-rows: auto;
  grid-template-areas: "logo . features support auth";
  align-items: center;
  justify-items: center;
  grid-area: tabs;
  line-height: 1;
  @media (max-width: 768px) {
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "logo . menu";
  }
`;

export const Tab = styled(Link)`
  padding: 4px 8px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  &:hover {
    color: #e5e5e5;
    text-shadow: none;
  }
`;

export const AboutTab = styled(Tab)`
  grid-area: features;
  @media (max-width: 768px) {
    display: none;
  }
`;

interface AuthTabProps {
  dark?: boolean;
}

export const AuthTab = styled.div<AuthTabProps>`
  grid-area: auth;
  color: ${props => (props.dark ? theme.text.reverse : theme.brand.alt)};
  > a > button {
    font-weight: 700;
    ${props =>
      props.dark &&
      css`
        color: ${theme.brand.alt};
        background-image: none;
        background-color: ${theme.bg.default};
        &:hover {
          color: ${theme.brand.default};
          background-color: ${theme.bg.default};
          box-shadow: 0 0 16px ${theme.brand.border};
        }
      `};
  }
  > a > div {
    box-shadow: ${props =>
      props.dark ? `0 0 0 2px ${theme.bg.default}` : "none"};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
