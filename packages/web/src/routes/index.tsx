import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

// Hotel
import { ViewHotelConnector } from "../modules/hotel/view/ViewHotelConnector";
import { FindHotelsConnector } from "../modules/hotel/find/FindHotelsConnector";
import { CreateHotelConnector } from "../modules/hotel/create/CreateHotelConnector";
import { EditHotelConnector } from "../modules/hotel/edit/EditHotelConnector";
import { DeleteHotelConnector } from "../modules/hotel/delete/DeleteHotelConnector";
import { HotelSettingsView } from "../modules/hotel/settings";

// Room
import { ViewRoomConnector } from "../modules/room/view/ViewRoomConnector";
import { CreateRoomConnector } from "../modules/room/create/CreateRoomConnector";
import { EditRoomConnector } from "../modules/room/edit/EditRoomConnector";
import { DeleteRoomConnector } from "../modules/room/delete/DeleteRoomConnector";

// Address
import { CreateAddressConnector } from "../modules/address/create/CreateAddressConnector";
import { ViewAddressConnector } from "../modules/address/view/ViewAddressConnector";
import { EditAddressConnector } from "../modules/address/edit/EditAddressConnector";

import { AuthRoute } from "@sandwich/controller";
import { RegisterConnector } from "../modules/register/RegisterConnector";
import { LoginConnector } from "../modules/login/LoginConnector";
import { DashboardConnector } from "../modules/dashboard/DashboardConnector";

import { Logout } from "../modules/logout";
import { NotFound } from "../modules/NotFound";
import { ForgotPasswordView } from "../modules/forgotPassword/ui/ForgotPasswordView";

import Pages from "../pages";
import { NavBarConnector } from "../modules/navbar/NavBarConnector";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

export const Routes = () => (
  <BrowserRouter>
    <Body>
      <Route component={NavBarConnector} />
      <Switch>
        <AuthRoute
          exact={true}
          path="/"
          component={DashboardConnector}
          fallbackComponent={Pages}
        />
        <Route exact={true} path="/about" component={Pages} />
        <Route exact={true} path="/register" component={RegisterConnector} />
        <Route exact={true} path="/login" component={LoginConnector} />
        <Route exact={true} path="/logout" component={Logout} />
        <Route
          exact={true}
          path="/forgot-password"
          component={ForgotPasswordView}
        />
        <AuthRoute
          exact={true}
          path="/dashboard"
          component={DashboardConnector}
        />
        <AuthRoute exact={true} path="/" component={DashboardConnector} />
        <AuthRoute
          exact={true}
          path="/hotels"
          component={FindHotelsConnector}
        />
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId"
          component={ViewHotelConnector}
        />
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId/rooms/create"
          component={CreateRoomConnector}
        />
        <AuthRoute
          exact={true}
          path="/rooms/:roomId"
          component={ViewRoomConnector}
        />
        <AuthRoute
          exact={true}
          path="/rooms/:roomId/edit"
          component={EditRoomConnector}
        />
        <AuthRoute
          exact={true}
          path="/rooms/:roomId/delete"
          component={DeleteRoomConnector}
        />
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId/edit"
          component={EditHotelConnector}
        />
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId/settings"
          component={HotelSettingsView}
        />
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId/delete"
          component={DeleteHotelConnector}
        />
        <AuthRoute
          exact={true}
          path="/hotel/create"
          component={CreateHotelConnector}
        />
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId/address/edit"
          component={EditAddressConnector}
        />
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId/address/create"
          component={CreateAddressConnector}
        />
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId/address/:addressId"
          component={ViewAddressConnector}
        />
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId/address/:addressId/edit"
          component={EditAddressConnector}
        />
        <Route component={NotFound} />
      </Switch>
    </Body>
  </BrowserRouter>
);
