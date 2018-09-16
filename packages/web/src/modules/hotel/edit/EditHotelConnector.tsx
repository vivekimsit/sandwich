import * as React from "react";
import { ViewHotel, UpdateHotel } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import { HotelForm, defaultHotelFormValues } from "../shared/HotelForm";
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

export class EditHotelConnector extends React.PureComponent<
  RouteComponentProps<{
    hotelId: string;
  }>
> {
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
            <ViewHotel hotelId={hotelId}>
              {data => {
                if (!data.hotel) {
                  return <div>...loading</div>;
                }

                const {
                  id: _,
                  owner: ___,
                  address: address,
                  ...hotel
                } = data.hotel;
                return (
                  <UpdateHotel>
                    {({ updateHotel }) => (
                      <HotelForm
                        initialValues={{
                          ...defaultHotelFormValues,
                          ...hotel
                        }}
                        submit={async values => {
                          const {
                            __typename: ____,
                            ...newValues
                          } = values as any;

                          if (newValues.thumbnailUrl) {
                            const parts = newValues.thumbnailUrl.split("/");
                            newValues.thumbnailUrl = parts[parts.length - 1];
                          }

                          await updateHotel({
                            variables: {
                              input: newValues,
                              hotelId
                            }
                          });
                          this.props.history.push("/hotels");
                        }}
                      />
                    )}
                  </UpdateHotel>
                );
              }}
            </ViewHotel>
          </Content>
        </ContentWrapper>
      </MainWrapper>
    );
  }
}
