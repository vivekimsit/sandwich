import * as React from "react";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { InputField } from "../../shared/InputField";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@sandwich/controller";
import { validUserSchema } from "@sandwich/common";

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
            Create your account
            <div
              style={{
                fontSize: "14px",
                color: "rgba(0,0,0,.6)",
                textAlign: "center"
              }}
            >
              or <Link to="/login">log in to your account</Link>
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
                  Register
                </Button>
              </FormItem>
              <FormItem>
                <Link to="/login">Cancel</Link>
              </FormItem>
            </Form>
          </BoxBody>
        </Box>
      </FullscreenContent>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
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
