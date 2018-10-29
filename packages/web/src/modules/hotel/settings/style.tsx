import styled from "styled-components";

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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  flex: 1 0 33%";
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
