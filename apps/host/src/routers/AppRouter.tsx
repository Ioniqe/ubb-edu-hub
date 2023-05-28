import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { BaseRoute, RouteEnums } from "../enums";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Signup from "../pages/Signup";
import { renderStudentRoutes } from "./student-routes";
// TODO add fallback for 404
// TODO add fallback for 500
// TODO add protectedRoute

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Navigate to={RouteEnums.LOGIN} />} />

        <Route path={RouteEnums.LOGIN} element={<Login />} />
        <Route path={RouteEnums.LOGOUT} element={<Logout />} />
        <Route path={RouteEnums.SIGN_UP} element={<Signup />} />

        {renderStudentRoutes()}

        <Route path={RouteEnums.SETTINGS} element={<Settings />} />
        <Route path={RouteEnums.PROFILE} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
