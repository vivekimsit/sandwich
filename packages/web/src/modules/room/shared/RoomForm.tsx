import * as React from "react";
import { Form as AntForm, Button } from "antd";
import { Form, Field, FormikActions, withFormik, FormikProps } from "formik";
import { ImageFile } from "react-dropzone";

import { InputField } from "../../../modules/shared/InputField";
import { DropzoneField } from "../../../modules/shared/DropzoneField";

const FormItem = AntForm.Item;

export interface RoomFormValues {
  thumbnailUrl: string | null;
  name: string;
  picture: ImageFile | null;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  hotelId: string;
}

interface Props {
  initialValues?: RoomFormValues;
  submit: (
    data: RoomFormValues,
    actions: FormikActions<RoomFormValues>
  ) => Promise<void>;
  detailView?: boolean;
}

export const defaultRoomFormValues = {
  name: "",
  thumbnailUrl: null,
  picture: null,
  category: "",
  description: "",
  price: 0,
  beds: 0,
  guests: 0,
  hotelId: ""
};

class C extends React.PureComponent<FormikProps<RoomFormValues> & Props> {
  render() {
    const { detailView, isSubmitting } = this.props;
    return (
      <Form>
        <Field name="picture" component={DropzoneField} />
        <Field name="name" placeholder="Name" component={InputField} />
        <Field name="category" placeholder="Category" component={InputField} />
        <Field
          name="description"
          placeholder="Description"
          component={InputField}
        />
        {detailView && (
          <>
            <Field
              label="Price"
              name="price"
              placeholder="Price"
              component={InputField}
              useNumberComponent={true}
            />
            <Field
              label="Beds"
              name="beds"
              placeholder="Beds"
              component={InputField}
              useNumberComponent={true}
            />
            <Field
              label="Guests"
              name="guests"
              placeholder="Guests"
              component={InputField}
              useNumberComponent={true}
            />
          </>
        )}
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
      </Form>
    );
  }
}

export const RoomForm = withFormik<Props, RoomFormValues>({
  mapPropsToValues: ({ initialValues }) => ({
    ...defaultRoomFormValues,
    ...initialValues
  }),
  handleSubmit: async (values, { props, setSubmitting, ...rest }) => {
    await props.submit(values, { setSubmitting, ...rest });
  }
})(C);
