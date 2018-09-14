import * as React from "react";
import { ViewAddress, UpdateAddress } from "@sandwich/controller";
import { RouteComponentProps } from "react-router-dom";
import { AddressForm, defaultAddressFormValues } from "../shared/AddressForm";

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
                    ...address
                  }}
                  submit={async values => {
                    const { __typename: ____, ...newValues } = values as any;

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
    );
  }
}
