import * as React from "react";

import { ViewHotelAddress, UpdateAddress } from "@sandwich/controller";
import { SectionCard } from "../../../shared/style";
import {
  AddressForm,
  defaultAddressFormValues
} from "../../../address/shared/AddressForm";

interface Props {
  hotelId: any;
}

class AddressList extends React.PureComponent<Props> {
  render() {
    const { hotelId } = this.props;
    return (
      <ViewHotelAddress hotelId={hotelId}>
        {({ loading, address }) => {
          if (loading || address == null) {
            return <div>...loading</div>;
          }
          return (
            <UpdateAddress>
              {({ updateAddress }) => (
                <SectionCard>
                  <AddressForm
                    initialValues={{
                      ...defaultAddressFormValues,
                      ...address
                    }}
                    submit={async (values, { setSubmitting }) => {
                      setSubmitting(true);
                      const {
                        __typename: ____,
                        hotelId: ______,
                        ...rest
                      } = values as any;

                      await updateAddress({
                        variables: {
                          input: rest
                        }
                      });
                      setSubmitting(false);
                    }}
                  />
                </SectionCard>
              )}
            </UpdateAddress>
          );
        }}
      </ViewHotelAddress>
    );
  }
}

export default AddressList;
