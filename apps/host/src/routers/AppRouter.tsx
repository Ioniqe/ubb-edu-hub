import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { RouteEnums } from "../enums";
import { Profile, Settings, NotFound } from "../pages";
import { renderAuthRoutes } from "./authRoutes";
import { renderStudentRoutes } from "./studentRoutes";
// TODO add fallback for 500

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path={"/"} element={<Navigate to={RouteEnums.LOGIN} />} />

        {renderAuthRoutes()}
        {renderStudentRoutes()}

        <Route path={RouteEnums.SETTINGS} element={<Settings />} />
        <Route path={RouteEnums.PROFILE} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
