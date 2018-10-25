import * as React from "react";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@sandwich/controller";

import { InputField } from "../../shared/InputField";
import {
  Box,
  BoxHead,
  BoxBody,
  FullscreenContent,
  FullscreenViewContainer
} from "../../../style";

const FormItem = AntForm.Item;

interface FormValues {
  email: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <FullscreenViewContainer>
        <FullscreenContent>
          <Box>
            <BoxHead>Reset your password</BoxHead>
            <BoxBody>
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "32px"
                }}
              >
                <Field
                  name="email"
                  prefix={
                    (
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    ) as any
                  }
                  placeholder="Email"
                  component={InputField}
                />
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Reset password
                  </Button>
                </FormItem>
                <FormItem>
                  <Link to="/login">Cancel</Link>
                </FormItem>
              </Form>
            </BoxBody>
          </Box>
        </FullscreenContent>
      </FullscreenViewContainer>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(C);
