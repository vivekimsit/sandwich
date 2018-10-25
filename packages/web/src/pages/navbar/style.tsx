import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const AuthTab = styled.div`
  grid-area: auth;
  > a > button {
    color: #fff;
    font-weight: 700;
  }
  > a > div {
    box-shadow: "none";
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AboutTab = styled(Tab)`
  grid-area: features;
  @media (max-width: 768px) {
    display: none;
  }
`;
