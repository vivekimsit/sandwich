import * as React from "react";
import { Form as AntForm, Button } from "antd";
import { FormikActions, withFormik, FormikProps, Field } from "formik";
import { ImageFile } from "react-dropzone";

import { InputField } from "../../../modules/shared/InputField";
import { DropzoneField } from "../../shared/DropzoneField";
import { StyledForm } from "./style";
import { H2 } from "../../../style";

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
  onDelete?: (id: string) => void;
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
    const {
      isSubmitting,
      values: { id }
    } = this.props;
    return (
      <StyledForm>
        <H2>Hotel Settings</H2>
        <FormItem>
          <Field name="picture" component={DropzoneField} />
        </FormItem>
        <FormItem label="Name">
          <Field name="name" placeholder="Name" component={InputField} />
        </FormItem>
        <FormItem label="Description">
          <Field
            name="description"
            placeholder="Description"
            component={InputField}
          />
        </FormItem>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormItem>
            <Button
              type="danger"
              icon="delete"
              onClick={() => {
                if (!id || !this.props.onDelete) {
                  return;
                }
                this.props.onDelete(id);
              }}
            >
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

export const HotelForm = withFormik<Props, HotelFormValues>({
  mapPropsToValues: ({ initialValues }) => ({
    ...defaultHotelFormValues,
    ...initialValues
  }),
  handleSubmit: async (values, { props, setSubmitting, ...rest }) => {
    await props.submit(values, { setSubmitting, ...rest });
  }
})(C);
