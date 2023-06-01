import { Route } from "react-router-dom";
import React from "react";
import { RouteEnums } from "../enums";
import { AuthWrapper } from "../containers";
import { Login, Signup } from "../pages";

export const renderAuthRoutes = () => (
  <Route path={"/"} element={<AuthWrapper />}>
    <Route path={RouteEnums.LOGIN} element={<Login />} />

    <Route path={RouteEnums.SIGN_UP} element={<Signup />} />
  </Route>
);
