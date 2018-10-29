import * as React from "react";
import { Form as AntForm, Button } from "antd";
import { FormikActions, withFormik, FormikProps, Field } from "formik";
import { ImageFile } from "react-dropzone";

import { InputField } from "../../../modules/shared/InputField";
import { DropzoneField } from "../../shared/DropzoneField";
import { StyledForm } from "./style";

const FormItem = AntForm.Item;

export interface HotelFormValues {
  id: string | null;
  thumbnailUrl: string | null;
  picture: ImageFile | null;
  name: string;
  description: string;
  address?: null;
  rooms?: any[] | null;
}

interface Props {
  initialValues?: HotelFormValues;
  submit: (
    data: HotelFormValues,
    actions: FormikActions<HotelFormValues>
  ) => Promise<void>;
}

export const defaultHotelFormValues = {
  id: null,
  thumbnailUrl: null,
  picture: null,
  name: "",
  description: ""
};

class C extends React.PureComponent<FormikProps<HotelFormValues> & Props> {
  render() {
    const { isSubmitting } = this.props;
    return (
      <StyledForm>
        <Field name="name" placeholder="Name" component={InputField} />
        <Field
          name="description"
          placeholder="Description"
          component={InputField}
        />
        <Field name="thumbnailUrl" component={DropzoneField} />
        <FormItem>
          <Button type="primary" htmlType="submit" disabled={isSubmitting}>
            Save
          </Button>
        </FormItem>
      </StyledForm>
    );
  }
}

export const HotelForm = withFormik<Props, HotelFormValues>({
  mapPropsToValues: ({ initialValues }) => ({
    ...defaultHotelFormValues,
    ...initialValues
  }),
  handleSubmit: async (values, { props, setSubmitting, ...rest }) => {
    await props.submit(values, { setSubmitting, ...rest });
  }
})(C);
