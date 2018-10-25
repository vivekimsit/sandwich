import * as React from "react";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { loginSchema } from "@sandwich/common";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@sandwich/controller";

import { InputField } from "../../shared/InputField";
import { Box, BoxHead, BoxBody, FullscreenContent } from "../../../style";

const FormItem = AntForm.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { isSubmitting, errors, dirty } = this.props;
    return (
      <FullscreenContent>
        <Box>
          <BoxHead>
            Log in to your account
            <div
              style={{
                fontSize: "14px",
                color: "rgba(0,0,0,.6)",
                textAlign: "center"
              }}
            >
              or <Link to="/register">create account</Link>
            </div>
          </BoxHead>
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
              <Field
                name="password"
                type="password"
                prefix={
                  (
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  ) as any
                }
                placeholder="Password"
                component={InputField}
              />
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  disabled={
                    isSubmitting || Object.keys(errors).length !== 0 || !dirty
                  }
                >
                  Login
                </Button>
              </FormItem>
              <FormItem>
                <Link to="/forgot-password">Forgot password?</Link>
              </FormItem>
            </Form>
          </BoxBody>
        </Box>
      </FullscreenContent>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  validateOnChange: true,
  validateOnBlur: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(C);
