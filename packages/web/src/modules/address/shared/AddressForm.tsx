import * as React from "react";
import { Form as AntForm, Button } from "antd";
import { Field, FormikActions, withFormik, FormikProps } from "formik";

import { InputField } from "../../../modules/shared/InputField";
import { StyledForm } from "./style";
import { H2 } from "../../../style";

const FormItem = AntForm.Item;

export interface AddressFormValues {
  id: string | null;
  lat: number;
  lng: number;
  line1: string | null;
  line2: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  hotelId: string;
}

interface Props {
  initialValues?: AddressFormValues;
  submit: (
    data: AddressFormValues,
    actions: FormikActions<AddressFormValues>
  ) => Promise<void>;
}

export const defaultAddressFormValues = {
  id: null,
  lat: 0,
  lng: 0,
  line1: "",
  line2: "",
  city: "",
  state: "",
  country: "",
  hotelId: ""
};

class C extends React.PureComponent<FormikProps<AddressFormValues> & Props> {
  render() {
    const { isSubmitting } = this.props;
    return (
      <StyledForm>
        <H2>Address Settings</H2>
        <Field
          label="Latitude"
          name="lat"
          placeholder="Latitude"
          component={InputField}
        />
        <Field
          label="Longtitude"
          name="lng"
          placeholder="Longitude"
          component={InputField}
        />
        <Field
          name="line1"
          label="Line1"
          placeholder="Line1"
          component={InputField}
        />
        <Field
          name="line2"
          label="Line2"
          placeholder="Line2"
          component={InputField}
        />
        <Field
          name="city"
          label="City"
          placeholder="City"
          component={InputField}
        />
        <Field
          name="state"
          label="State"
          placeholder="State"
          component={InputField}
        />
        <Field
          name="country"
          label="Country"
          placeholder="Country"
          component={InputField}
        />
        <Field
          name="zip"
          label="Zip/Postcode"
          placeholder="Zip/Postcode"
          component={InputField}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormItem>
            <Button type="danger" icon="delete">
              Delete
            </Button>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" disabled={isSubmitting}>
              Save
            </Button>
          </FormItem>
        </div>
      </StyledForm>
    );
  }
}

export const AddressForm = withFormik<Props, AddressFormValues>({
  mapPropsToValues: ({ initialValues }) => ({
    ...defaultAddressFormValues,
    ...initialValues
  }),
  handleSubmit: async (values, { props, setSubmitting, ...rest }) => {
    await props.submit(values, { setSubmitting, ...rest });
  }
})(C);
