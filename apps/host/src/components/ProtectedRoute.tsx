import { Navigate, Outlet } from "react-router-dom";
import { BaseRoute } from "../enums";
import { routes } from "../constants";
import React from "react";
import { Wrapper } from "ui";
import useAuthStore from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { user } = useAuthStore();
  // TODO redirect the page the user wanted to go to prior login

  console.log(user);
  return user ? (
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
