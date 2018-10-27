import styled from "styled-components";

import { FlexRow } from "../../../../style";

export const HotelWrapper = styled(FlexRow)`
  order: 2;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  overflow-y: auto;
  flex: auto;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const HotelContent = styled.main`
  display: grid;
  grid-template-columns: minmax(320px, 1fr) 3fr minmax(240px, 2fr);
  grid-template-rows: 240px 1fr;
  grid-template-areas: "cover cover cover" "meta content extras";
  grid-column-gap: 32px;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background-color: #fff;
  @media (max-width: 1280px) {
    grid-template-columns: 320px 1fr;
    grid-template-rows: 160px auto 1fr;
    grid-template-areas: "cover cover" "meta content" "extras content";
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

export const Meta = styled(Column)`
  grid-area: meta;
  margin-left: 32px;
  margin-top: 32px;
  > a > button {
    margin-top: 16px;
    width: calc(100% - 32px);
    @media (max-width: 768px) {
      margin-left: 0;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 0 16px;
    > div {
      margin-left: 0;
    }
  }
  > .member-button {
    margin-left: 32px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

export const Content = styled(Column)`
  grid-area: content;
  margin-top: 32px;
  min-width: 0;
  align-items: stretch;
  @media (max-width: 1280px) and (min-width: 768px) {
    padding-right: 32px;
  }
`;

export const Extras = styled(Column)`
  grid-area: extras;
  margin-top: 32px;
`;
