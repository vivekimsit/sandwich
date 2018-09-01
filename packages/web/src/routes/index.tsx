import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { RegisterConnector } from "../modules/register/RegisterConnector";
import { FindHotelsConnector } from "../modules/hotel/find/FindHotelsConnector";
import NotFound from "../modules/NotFound";

export const Routes = () => (
  <Switch>
    <Route exact={true} path="/register" component={RegisterConnector} />
    <Route exact={true} path="/dashboard" component={RegisterConnector} />
    <Route exact={true} path="/hotels" component={FindHotelsConnector} />
    <Route component={NotFound} />
  </Switch>
);
