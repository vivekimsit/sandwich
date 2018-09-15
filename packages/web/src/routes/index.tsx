import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { AuthRoute } from "@sandwich/controller";
import { RegisterConnector } from "../modules/register/RegisterConnector";
import { FindHotelsConnector } from "../modules/hotel/find/FindHotelsConnector";
import { CreateHotelConnector } from "../modules/hotel/create/CreateHotelConnector";
import { CreateAddressConnector } from "../modules/address/create/CreateAddressConnector";
import { ViewHotelConnector } from "../modules/hotel/view/ViewHotelConnector";
import { EditHotelConnector } from "../modules/hotel/edit/EditHotelConnector";
import { LoginConnector } from "../modules/login/LoginConnector";
import { DashboardConnector } from "../modules/dashboard/DashboardConnector";

import { ViewRoomConnector } from "../modules/room/view/ViewRoomConnector";
import { CreateRoomConnector } from "../modules/room/create/CreateRoomConnector";
import { EditRoomConnector } from "../modules/room/edit/EditRoomConnector";

import { ViewAddressConnector } from "../modules/address/view/ViewAddressConnector";
import { EditAddressConnector } from "../modules/address/edit/EditAddressConnector";

import { Logout } from "../modules/logout";
import { NotFound } from "../modules/NotFound";
import { NavBar } from "../modules/navbar/NavBar";

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
      <Route component={NavBar} />
      <Switch>
        <Route exact={true} path="/register" component={RegisterConnector} />
        <Route exact={true} path="/login" component={LoginConnector} />
        <Route exact={true} path="/logout" component={Logout} />
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
          path="/rooms/:roomId"
          component={ViewRoomConnector}
        />
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId/rooms/:roomId"
          component={ViewRoomConnector}
        />
        <AuthRoute
          exact={true}
          path="/rooms/:roomId/edit"
          component={EditRoomConnector}
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
        <AuthRoute
          exact={true}
          path="/hotels/:hotelId/rooms/create"
          component={CreateRoomConnector}
        />
        <Route component={NotFound} />
      </Switch>
    </Body>
  </BrowserRouter>
);
