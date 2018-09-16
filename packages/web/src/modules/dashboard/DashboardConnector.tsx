import * as React from "react";
import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";

const DashboardWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: hidden;
  flex: auto;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: hidden;
  flex: auto;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export class DashboardConnector extends React.Component {
  render() {
    return (
      <DashboardWrapper id="main">
        <Sidebar />
        <ContentWrapper>
          <div>Welcome to dashboard</div>
        </ContentWrapper>
      </DashboardWrapper>
    );
  }
}
