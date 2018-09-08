import * as React from "react";
import { Form as AntForm, Button } from "antd";
import { Form, FormikActions, withFormik, FormikProps } from "formik";
import { ImageFile } from "react-dropzone";

import { Page1 } from "./ui/Page1";

const FormItem = AntForm.Item;

export interface HotelFormValues {
  thumbnailUrl: string | null;
  picture: ImageFile | null;
  name: string;
  description: string;
  address?: null;
}

interface Props {
  initialValues?: HotelFormValues;
  submit: (
    data: HotelFormValues,
    actions: FormikActions<HotelFormValues>
  ) => Promise<void>;
}

export const defaultHotelFormValues = {
  thumbnailUrl: null,
  picture: null,
  name: "",
  description: ""
};

class C extends React.PureComponent<FormikProps<HotelFormValues> & Props> {
  render() {
    const { isSubmitting } = this.props;
    return (
      <Form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "100px auto" }}>
          <Page1 />
          <FormItem>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                Save
              </Button>
            </div>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export const HotelForm = withFormik<Props, HotelFormValues>({
  mapPropsToValues: ({}) => defaultHotelFormValues,
  handleSubmit: async (values, { props, setSubmitting, ...rest }) => {
    await props.submit(values, { setSubmitting, ...rest });
  }
})(C);
