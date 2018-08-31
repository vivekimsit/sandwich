import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { RegisterConnector } from "../modules/register/RegisterConnector";

export const Routes = () => (
  <Switch>
    <Route exact={true} path="/register" component={RegisterConnector} />
    <Route exact={true} path="/hotels" component={RegisterConnector} />
    <Route exact={true} path="/dashboard" component={RegisterConnector} />
  </Switch>
);
