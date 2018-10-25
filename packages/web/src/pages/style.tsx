import styled from "styled-components";

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Page = styled.main`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "content";
  overflow: auto;
  overflow-x: hidden;
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
`;

export const Wrapper = styled(FlexCol)`
  grid-area: content;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
  overflow: hidden;
  z-index: 1;
`;

export const Content = styled(FlexRow)`
  flex: auto;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100vw;
  margin-top: 92px;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: stretch;
  align-content: stretch;
  flex: auto;
  position: relative;
  padding: 32px;
  background-color: #000;
  color: #fff;
`;
