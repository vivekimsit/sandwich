import * as React from "react";
import { SectionsContainer, Column, SectionCard } from "../style";

import { ViewHotel, UpdateHotel, UpdateAddress } from "@sandwich/controller";
import { HotelForm, defaultHotelFormValues } from "../../shared/HotelForm";

import {
  AddressForm,
  defaultAddressFormValues
} from "../../../address/shared/AddressForm";

interface Props {
  hotelId: string;
}

class C extends React.PureComponent<Props> {
  render() {
    const { hotelId } = this.props;
    return (
      <ViewHotel hotelId={hotelId}>
        {data => {
          if (!data.hotel) {
            return <div>Loading</div>;
          }
          const { id: _, owner: __, address: address, ...rest } = data.hotel;
          console.log(data);
          return (
            <SectionsContainer>
              <Column>
                <UpdateHotel>
                  {({ updateHotel }) => (
                    <SectionCard>
                      <HotelForm
                        initialValues={{ ...defaultHotelFormValues, ...rest }}
                        submit={async values => {
                          console.log(values);
                        }}
                      />
                    </SectionCard>
                  )}
                </UpdateHotel>
              </Column>

              <Column>
                <UpdateAddress>
                  {({ updateAddress }) => (
                    <SectionCard>
                      <AddressForm
                        initialValues={{
                          ...defaultAddressFormValues,
                          ...address
                        }}
                        submit={async values => {
                          console.log(values);
                        }}
                      />
                    </SectionCard>
                  )}
                </UpdateAddress>
              </Column>
            </SectionsContainer>
          );
        }}
      </ViewHotel>
    );
  }
}

export const HotelSetting = C;
