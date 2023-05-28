import { Navigate, Outlet } from "react-router-dom";
import { BaseRoute } from "../enums";
import { routes } from "../constants";
import React from "react";
import { Wrapper } from "ui";

const ProtectedRoute = () => {
  let auth = true;
  return auth ? (
    <Wrapper
      title={"Student"}
      customBaseRoute={`/${BaseRoute.STUDENT}`}
      customRoutes={[...Object.values(routes[BaseRoute.STUDENT])]}
      standardRoutes={[...Object.values(routes[BaseRoute.STANDARD])]}
    >
      <Outlet />
    </Wrapper>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
