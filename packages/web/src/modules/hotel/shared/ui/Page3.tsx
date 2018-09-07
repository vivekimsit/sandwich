import * as React from "react";
import { Field } from "formik";

import { InputField } from "../../../../modules/shared/InputField";

export const Page3 = () => (
  <>
    <Field
      label="Latitude"
      name="lat"
      placeholder="Latitude"
      component={InputField}
    />
    <Field
      label="Longtitude"
      name="lng"
      placeholder="Longitude"
      component={InputField}
    />
    <Field name="line1" placeholder="Line1" component={InputField} />
    <Field name="line2" placeholder="Line2" component={InputField} />
    <Field name="city" placeholder="City" component={InputField} />
    <Field name="state" placeholder="State" component={InputField} />
    <Field name="country" placeholder="Country" component={InputField} />
    <Field name="zip" placeholder="Zip" component={InputField} />
  </>
);
