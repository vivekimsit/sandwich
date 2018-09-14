import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import { withCreateAddress, WithCreateAddress } from "@sandwich/controller";
import {
  AddressFormValues,
  AddressForm,
  defaultAddressFormValues
} from "../shared/AddressForm";

class C extends React.PureComponent<
  RouteComponentProps<{ hotelId: string }> & WithCreateAddress
> {
  submit = async (
    values: AddressFormValues,
    { setSubmitting }: FormikActions<AddressFormValues>
  ) => {
    await this.props.createAddress({
      input: values
    });
    setSubmitting(false);
    this.props.history.push("/hotels");
  };

  render() {
    const {
      match: {
        params: { hotelId }
      }
    } = this.props;
    return (
      <AddressForm
        initialValues={{
          ...defaultAddressFormValues,
          hotelId
        }}
        submit={this.submit}
      />
    );
  }
}

export const CreateAddressConnector = withCreateAddress(C);
