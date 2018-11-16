import styled, { css } from "styled-components";

export const fontStack = css`
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica", "Segoe",
    sans-serif;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const H1 = styled.h1`
  ${fontStack};
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  ${fontStack};
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const FullscreenViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 4000;
  overflow-y: scroll;
  -webkit-transform: translate3d(0, 0, 0);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 400px;
  min-width: 320px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
  color: rgb(22, 23, 26);
  position: relative;
  margin: 32px;
  flex: 0 0 auto;
  padding: 24px;
  transition: all 0.2s ease-out;
`;

export const BoxHead = styled.div`
  font-size: 27px;
  font-weight: 300;
  color: #000;
  color: rgba(0, 0, 0, 0.75);
  padding: 0 10px;
`;

export const BoxBody = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FullscreenContent = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 16px;
  flex: 1 0 auto;
`;

interface Props {
  coverUrl: string;
  large: boolean;
}

export const PhotoContainer = styled.div<Props>`
  grid-area: cover;
  position: relative;
  width: 100%;
  flex: 0 0 "320px";
  background-color: #fff;
  background-image: ${props =>
    props.coverUrl ? `url(${props.coverUrl})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${props => (props.large ? "0" : "12px 12px 0 0")};
  @media (max-width: 768px) {
    flex: 0 0 ${props => (props.large ? "160px" : "64px")};
    border-radius: 0;
  }
`;

export const AppViewWrapper = styled(FlexRow)`
  order: 2;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden auto;
  flex: 1 1 auto;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
