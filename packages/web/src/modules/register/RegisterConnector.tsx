import * as React from "react";

import { RegisterController } from "@sandwich/controller";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {(submit: any) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}