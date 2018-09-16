import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import styled from "styled-components";
import { withCreateHotel, WithCreateHotel } from "@sandwich/controller";

import { HotelFormValues, HotelForm } from "../shared/HotelForm";
import Sidebar from "../../sidebar/Sidebar";

const MainWrapper = styled.main`
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
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: flex-start;
  overflow-y: hidden;
  flex: 1 1 auto;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  max-height: 100%;
  position: relative;
  flex: 1 1 auto;
`;

class C extends React.PureComponent<RouteComponentProps<{}> & WithCreateHotel> {
  submit = async (
    values: HotelFormValues,
    { setSubmitting }: FormikActions<HotelFormValues>
  ) => {
    await this.props.createHotel(values);
    setSubmitting(false);
    this.props.history.push("/hotels");
  };

  render() {
    return (
      <MainWrapper>
        <Sidebar />
        <ContentWrapper>
          <Content>
            <HotelForm submit={this.submit} />
          </Content>
        </ContentWrapper>
      </MainWrapper>
    );
  }
}

export const CreateHotelConnector = withCreateHotel(C);
