import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import { withCreateRoom, WithCreateRoom } from "@sandwich/controller";
import {
  RoomFormValues,
  RoomForm,
  defaultRoomFormValues
} from "../shared/RoomForm";
import styled from "styled-components";
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
  align-items: center;
  flex: 1 1 auto;
`;

class C extends React.PureComponent<
  RouteComponentProps<{ hotelId: string }> & WithCreateRoom
> {
  submit = async (
    values: RoomFormValues,
    { setSubmitting }: FormikActions<RoomFormValues>
  ) => {
    const { thumbnailUrl: _, ...v } = values;
    await this.props.createRoom({
      input: v
    });
    setSubmitting(false);
    this.props.history.push(`/hotels/${values.hotelId}`);
  };

  render() {
    const {
      match: {
        params: { hotelId }
      }
    } = this.props;
    return (
      <MainWrapper>
        <Sidebar />
        <ContentWrapper>
          <Content>
            <RoomForm
              initialValues={{ ...defaultRoomFormValues, hotelId }}
              submit={this.submit}
            />
          </Content>
        </ContentWrapper>
      </MainWrapper>
    );
  }
}

export const CreateRoomConnector = withCreateRoom(C);
