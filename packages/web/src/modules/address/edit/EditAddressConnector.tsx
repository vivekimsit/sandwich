import * as React from "react";
import { ViewAddress, UpdateAddress } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import { AddressForm, defaultAddressFormValues } from "../shared/AddressForm";

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

export class EditAddressConnector extends React.PureComponent<
  RouteComponentProps<{
    addressId: string;
  }>
> {
  render() {
    const {
      match: {
        params: { addressId }
      }
    } = this.props;
    return (
      <MainWrapper>
        <Sidebar />
        <ContentWrapper>
          <Content>
            <ViewAddress addressId={addressId}>
              {data => {
                if (!data.address) {
                  return <div>...loading</div>;
                }

                const { id: _, hotel: hotel, ...address } = data.address;
                return (
                  <UpdateAddress>
                    {({ updateAddress }) => (
                      <AddressForm
                        initialValues={{
                          ...defaultAddressFormValues,
                          ...address,
                          hotelId: hotel.id
                        }}
                        submit={async values => {
                          const {
                            __typename: ____,
                            hotelId: ______,
                            ...newValues
                          } = values as any;

                          await updateAddress({
                            variables: {
                              input: newValues,
                              addressId
                            }
                          });
                          this.props.history.push(`/hotels/${hotel.id}`);
                        }}
                      />
                    )}
                  </UpdateAddress>
                );
              }}
            </ViewAddress>
          </Content>
        </ContentWrapper>
      </MainWrapper>
    );
  }
}
