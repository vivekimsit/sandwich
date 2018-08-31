import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import { withCreateHotel, WithCreateHotel } from "@sandwich/controller";
import { HotelFormValues, HotelForm } from "../shared/HotelForm";

class C extends React.PureComponent<RouteComponentProps<{}> & WithCreateHotel> {
  submit = async (
    values: HotelFormValues,
    { setSubmitting }: FormikActions<HotelFormValues>
  ) => {
    await this.props.createHotel(values);
    setSubmitting(false);
  };

  render() {
    return <HotelForm submit={this.submit} />;
  }
}

export const CreateHotelConnector = withCreateHotel(C);
