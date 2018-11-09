import styled from "styled-components";

import { theme } from "../../theme";

export const Grid = styled.main`
  display: grid;
  grid-template-columns: minmax(320px, 1fr) 3fr minmax(240px, 2fr);
  grid-template-rows: 240px 1fr;
  grid-template-areas: "cover cover cover" "meta content extras";
  grid-column-gap: 32px;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background-color: ${theme.bg.default};
  @media (max-width: 1028px) {
    grid-template-columns: 320px 1fr;
    grid-template-rows: 160px 1fr;
    grid-template-areas: "cover cover" "meta content";
  }
  @media (max-width: 768px) {
    grid-template-rows: 80px auto 1fr;
    grid-template-columns: 100%;
    grid-column-gap: 0;
    grid-row-gap: 16px;
    grid-template-areas: "cover" "meta" "content";
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled(Column)`
  grid-area: content;
  min-width: 0;
  align-items: stretch;
  @media (max-width: 1028px) and (min-width: 768px) {
    padding-right: 32px;
  }
`;
