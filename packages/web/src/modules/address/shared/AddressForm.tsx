import * as React from "react";
import { Form as AntForm, Button } from "antd";
import { Form, Field, FormikActions, withFormik, FormikProps } from "formik";

import { InputField } from "../../../modules/shared/InputField";

const FormItem = AntForm.Item;

export interface AddressFormValues {
  lat: number;
  lng: number;
  hotelId: string;
}

interface Props {
  hotelId: string;
  initialValues?: AddressFormValues;
  submit: (
    data: AddressFormValues,
    actions: FormikActions<AddressFormValues>
  ) => Promise<void>;
}

export const defaultAddressFormValues = {
  lat: 0,
  lng: 0,
  hotelId: ""
};

class C extends React.PureComponent<FormikProps<AddressFormValues> & Props> {
  render() {
    const { isSubmitting } = this.props;
    return (
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <Field label="Hotel Id" name="hotelId" component={InputField} />
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
        <Field name="line1" placeholder="Line1" component={InputField} />
        <Field name="line2" placeholder="Line2" component={InputField} />
        <Field name="city" placeholder="City" component={InputField} />
        <Field name="state" placeholder="State" component={InputField} />
        <Field name="country" placeholder="Country" component={InputField} />
        <Field name="zip" placeholder="Zip" component={InputField} />
        <FormItem style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary" htmlType="submit" disabled={isSubmitting}>
            Save
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export const AddressForm = withFormik<Props, AddressFormValues>({
  mapPropsToValues: ({ hotelId }) => ({ ...defaultAddressFormValues, hotelId }),
  handleSubmit: async (values, { props, setSubmitting, ...rest }) => {
    await props.submit(values, { setSubmitting, ...rest });
  }
})(C);
