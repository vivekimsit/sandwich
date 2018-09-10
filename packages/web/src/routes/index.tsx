import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute } from "@sandwich/controller";
import { RegisterConnector } from "../modules/register/RegisterConnector";
import { FindHotelsConnector } from "../modules/hotel/find/FindHotelsConnector";
import { CreateHotelConnector } from "../modules/hotel/create/CreateHotelConnector";
import { CreateAddressConnector } from "../modules/address/create/CreateAddressConnector";
import { CreateRoomConnector } from "../modules/room/create/CreateRoomConnector";
import { ViewHotelConnector } from "../modules/hotel/view/ViewHotelConnector";
import { EditHotelConnector } from "../modules/hotel/edit/EditHotelConnector";
import { LoginConnector } from "../modules/login/LoginConnector";
import { DashboardConnector } from "../modules/dashboard/DashboardConnector";
import { NotFound } from "../modules/NotFound";

export const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={LoginConnector} />
    <Route exact={true} path="/register" component={RegisterConnector} />
    <Route exact={true} path="/login" component={LoginConnector} />
    <AuthRoute exact={true} path="/dashboard" component={DashboardConnector} />
    <AuthRoute exact={true} path="/hotels" component={FindHotelsConnector} />
    <AuthRoute
      exact={true}
      path="/hotels/:hotelId"
      component={ViewHotelConnector}
    />
    <AuthRoute
      exact={true}
      path="/hotels/:hotelId/edit"
      component={EditHotelConnector}
    />
    <AuthRoute
      exact={true}
      path="/hotel/create"
      component={CreateHotelConnector}
    />
    <AuthRoute
      exact={true}
      path="/hotels/:hotelId/address/edit"
      component={CreateAddressConnector}
    />
    <AuthRoute
      exact={true}
      path="/hotels/:hotelId/address/create"
      component={CreateAddressConnector}
    />
    <AuthRoute
      exact={true}
      path="/hotels/:hotelId/rooms/create"
      component={CreateRoomConnector}
    />
    <Route component={NotFound} />
  </Switch>
);
