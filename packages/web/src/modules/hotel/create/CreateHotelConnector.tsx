import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import styled from "styled-components";
import { withCreateHotel, WithCreateHotel } from "@sandwich/controller";

import { HotelFormValues, HotelForm } from "../shared/HotelForm";
import { AppViewWrapper, FlexCol } from "../../../style";

const ContentWrapper = styled(FlexCol)`
  margin: 32px 16px;
  align-items: stretch;
  min-width: 320px;
  flex: 2 1 60%;
  max-width: 640px;
`;

const Content = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: auto;
`;

class C extends React.PureComponent<RouteComponentProps<{}> & WithCreateHotel> {
  submit = async (
    values: HotelFormValues,
    { setSubmitting }: FormikActions<HotelFormValues>
  ) => {
    console.log(values);
    await this.props.createHotel(values);
    setSubmitting(false);
    this.props.history.push("/hotels");
  };

  render() {
    return (
      <AppViewWrapper id="main">
        <ContentWrapper>
          <Content>
            <HotelForm submit={this.submit} />
          </Content>
        </ContentWrapper>
      </AppViewWrapper>
    );
  }
}

export const CreateHotelConnector = withCreateHotel(C);
