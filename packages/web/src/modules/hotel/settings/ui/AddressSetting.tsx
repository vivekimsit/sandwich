import * as React from "react";
import { SectionsContainer, Column, SectionCard } from "../style";
import { UpdateAddress } from "@sandwich/controller";

import {
  AddressForm,
  defaultAddressFormValues
} from "../../../address/shared/AddressForm";

interface Props {
  address: any;
}

class C extends React.PureComponent<Props> {
  render() {
    const { address } = this.props;
    return (
      <SectionsContainer>
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
          );
        </Column>
      </SectionsContainer>
    );
  }
}

export const AddressSetting = C;
