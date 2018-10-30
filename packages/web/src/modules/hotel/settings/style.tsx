import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 1 0%;
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    padding: 8px 0;
  }
`;

export const SectionCard = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(223, 231, 239);
  border-image: initial;
  background: rgb(255, 255, 255);
  padding: 16px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  flex: 1 0 33%;
  max-width: 600px;
  @media (max-width: 768px) {
    flex: 1 0 100%;
    padding: 0;
    max-width: 100%;
    &:first-of-type {
      padding-top: 8px;
    }
  }
`;
