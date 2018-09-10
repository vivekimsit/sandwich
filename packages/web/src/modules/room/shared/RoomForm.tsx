import * as React from "react";
import { Form as AntForm, Button } from "antd";
import { Form, Field, FormikActions, withFormik, FormikProps } from "formik";
import { ImageFile } from "react-dropzone";

import { InputField } from "../../../modules/shared/InputField";
import { DropzoneField } from "../../../modules/shared/DropzoneField";

const FormItem = AntForm.Item;

export interface RoomFormValues {
  name: string;
  picture: ImageFile | null;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  hotelId: string;
  amenities: string[];
}

interface Props {
  hotelId: string;
  initialValues?: RoomFormValues;
  submit: (
    data: RoomFormValues,
    actions: FormikActions<RoomFormValues>
  ) => Promise<void>;
}

export const defaultRoomFormValues = {
  name: "",
  pictureUrl: null,
  picture: null,
  category: "",
  description: "",
  price: 0,
  beds: 0,
  guests: 0,
  latitude: 0,
  hotelId: "",
  amenities: []
};

class C extends React.PureComponent<FormikProps<RoomFormValues> & Props> {
  render() {
    const { isSubmitting } = this.props;
    return (
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <Field label="Hotel Id" name="hotelId" component={InputField} />
        <Field name="name" placeholder="Name" component={InputField} />
        <Field name="category" placeholder="Category" component={InputField} />
        <Field
          name="description"
          placeholder="Description"
          component={InputField}
        />
        <Field name="picture" component={DropzoneField} />
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
        <FormItem style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary" htmlType="submit" disabled={isSubmitting}>
            Save
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export const RoomForm = withFormik<Props, RoomFormValues>({
  mapPropsToValues: ({ hotelId }) => ({ ...defaultRoomFormValues, hotelId }),
  handleSubmit: async (values, { props, setSubmitting, ...rest }) => {
    await props.submit(values, { setSubmitting, ...rest });
  }
})(C);
