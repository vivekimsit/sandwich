import * as React from "react";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { loginSchema } from "@sandwich/common";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@sandwich/controller";

import { InputField } from "../../shared/InputField";

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
    return (
      <Form>
        <Field
          name="email"
          prefix={
            <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
          }
          placeholder="Email"
          component={InputField}
        />
        <Field
          name="password"
          type="password"
          prefix={
            <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any
          }
          placeholder="Password"
          component={InputField}
        />
        <FormItem>
          <Link to="/forgot-password">Forgot password</Link>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Login
          </Button>
        </FormItem>
        <FormItem>
          Or <Link to="/register">Register</Link>
        </FormItem>
      </Form>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  validateOnChange: false,
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
