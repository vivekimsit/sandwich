import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { RegisterConnector } from "../modules/register/RegisterConnector";
import { FindHotelsConnector } from "../modules/hotel/find/FindHotelsConnector";
import { CreateHotelConnector } from "../modules/hotel/create/CreateHotelConnector";
import { ViewHotelConnector } from "../modules/hotel/view/ViewHotelConnector";
import { LoginConnector } from "../modules/login/LoginConnector";
import NotFound from "../modules/NotFound";

export const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={RegisterConnector} />
    <Route exact={true} path="/register" component={RegisterConnector} />
    <Route exact={true} path="/login" component={LoginConnector} />
    <Route exact={true} path="/dashboard" component={RegisterConnector} />
    <Route exact={true} path="/hotels" component={FindHotelsConnector} />
    <Route
      exact={true}
      path="/hotels/:hotelId"
      component={ViewHotelConnector}
    />
    <Route exact={true} path="/hotel/create" component={CreateHotelConnector} />
    <Route component={NotFound} />
  </Switch>
);
