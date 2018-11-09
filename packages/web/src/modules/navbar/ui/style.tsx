import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../../theme";

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
  @media (max-width: 360px) {
    display: none;
  }
`;

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto 1fr auto auto;
  grid-template-rows: 1fr;
  grid-template-areas: "logo home hotels messages . notifications profile";
  -webkit-box-align: stretch;
  align-items: stretch;
  width: 100%;
  line-height: 1;
  box-shadow: rgba(22, 23, 26, 0.15) 0px 4px 8px;
  z-index: 3000;
  flex: 0 0 48px;
  padding: 0px 16px;
  background: rgb(22, 23, 26);
`;

export const Tab = styled(Link)`
  display: grid;
  grid-template-columns: "auto auto";
  grid-template-rows: "auto";
  grid-template-areas: "icon label";
  align-items: center;
  justify-items: center;
  padding: 0 16px;
  color: #fff;
  > div {
    grid-area: icon;
  }
  > ${Label} {
    grid-area: label;
  }
  @media (max-width: 768px) {
    padding: 0;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-template-areas: icon label;
    align-content: center;
  }
`;

export const HomeTab = styled(Tab)`
  grid-area: home;
`;

export const HotelsTab = styled(Tab)`
  grid-area: hotels;
`;

export const ProfileTab = styled(Tab)`
  grid-area: profile;
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
