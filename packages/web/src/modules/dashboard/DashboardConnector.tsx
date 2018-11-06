import * as React from "react";
import styled from "styled-components";

import Sidebar from "../sidebar/Sidebar";
import { Loading } from "../shared/loading";

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
    if (true) {
      return (
        <DashboardWrapper id="main">
          <Loading size={20} />
        </DashboardWrapper>
      );
    }
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
