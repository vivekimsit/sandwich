import * as React from "react";
import { Form as AntForm, Button } from "antd";
import { Form, Formik, FormikActions } from "formik";
import { ImageFile } from "react-dropzone";

import { Page1 } from "./ui/Page1";

const FormItem = AntForm.Item;

export interface HotelFormValues {
  thumbnailUrl: string | null;
  picture: ImageFile | null;
  name: string;
  description: string;
}

interface State {
  page: number;
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

export class HotelForm extends React.PureComponent<Props, State> {
  render() {
    const { submit, initialValues = defaultHotelFormValues } = this.props;

    return (
      <Formik<{}, HotelFormValues>
        initialValues={initialValues}
        onSubmit={submit}
      >
        {({ isSubmitting, values }) =>
          console.log(values) || (
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
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={isSubmitting}
                    >
                      Save
                    </Button>
                  </div>
                </FormItem>
              </div>
            </Form>
          )
        }
      </Formik>
    );
  }
}
