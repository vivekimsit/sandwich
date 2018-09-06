import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { RegisterConnector } from "../modules/register/RegisterConnector";
import { FindHotelsConnector } from "../modules/hotel/find/FindHotelsConnector";
import { CreateHotelConnector } from "../modules/hotel/create/CreateHotelConnector";
import { ViewHotelConnector } from "../modules/hotel/view/ViewHotelConnector";
import { LoginConnector } from "../modules/login/LoginConnector";
import NotFound from "../modules/NotFound";
import { AuthRoute } from "@sandwich/controller";

export const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={RegisterConnector} />
    <Route exact={true} path="/register" component={RegisterConnector} />
    <Route exact={true} path="/login" component={LoginConnector} />
    <AuthRoute exact={true} path="/dashboard" component={RegisterConnector} />
    <AuthRoute exact={true} path="/hotels" component={FindHotelsConnector} />
    <AuthRoute
      exact={true}
      path="/hotels/:hotelId"
      component={ViewHotelConnector}
    />
    <AuthRoute
      exact={true}
      path="/hotel/create"
      component={CreateHotelConnector}
    />
    <Route component={NotFound} />
  </Switch>
);
