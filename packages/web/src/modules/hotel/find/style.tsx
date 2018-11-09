import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../../theme";

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1 0 auto;
  padding: 0 32px;
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
  align-self: stretch;
`;

export const HotelListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  align-items: stretch;
`;

export const Container = styled(Link)`
  background: ${theme.bg.default};
  flex: 0 0 22%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  position: relative;
  margin: 16px;
  @media (max-width: 1168px) {
    flex-basis: 44%;
  }
  @media (max-width: 540px) {
    flex-basis: 100%;
  }
`;
