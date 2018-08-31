import * as React from "react";
import { Link } from "react-router-dom";
import { Form as AntForm, Button } from "antd";
import { Form, Formik, FormikActions } from "formik";
import { ImageFile } from "react-dropzone";

import { Page1 } from "./ui/Page1";
import { Page2 } from "./ui/Page2";
import { Page3 } from "./ui/Page3";

const FormItem = AntForm.Item;

export interface HotelFormValues {
  pictureUrl: string | null;
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

// tslint:disable-next-line:jsx-key
const pages = [<Page1 />, <Page2 />, <Page3 />];

export const defaultHotelFormValues = {
  pictureUrl: null,
  picture: null,
  name: "",
  description: ""
};

export class HotelForm extends React.PureComponent<Props, State> {
  state = {
    page: 0
  };

  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

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
              <Link to="/logout">logout</Link>
              <div style={{ width: 400, margin: "auto" }}>
                {pages[this.state.page]}
                <FormItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    {this.state.page === pages.length - 1 ? (
                      <div>
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={isSubmitting}
                        >
                          create hotel
                        </Button>
                      </div>
                    ) : (
                      <Button type="primary" onClick={this.nextPage}>
                        next page
                      </Button>
                    )}
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
