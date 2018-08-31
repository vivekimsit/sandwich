import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import { withCreateListing, WithCreateListing } from "@sandwich/controller";
import { HotelFormValues, HotelForm } from "../shared/HotelForm";

class C extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListing
> {
  submit = async (
    values: HotelFormValues,
    { setSubmitting }: FormikActions<HotelFormValues>
  ) => {
    await this.props.createListing(values);
    setSubmitting(false);
  };

  render() {
    return <HotelForm submit={this.submit} />;
  }
}

export const CreateListingConnector = withCreateListing(C);
