import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { BaseRoute, RouteEnums } from "../enums";
import { routes } from "../constants";
import { useAppTheme, Wrapper } from "ui";
import useAuthStore from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  const { switchColorMode } = useAppTheme();
  const { logout } = useAuthStore();
  const { theme } = useAppTheme();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  const onLogout = async () => {
    try {
      await logout();
      setError(null);
      navigate("/" + RouteEnums.LOGIN);
    } catch (e) {
      console.log(e);
      setError(e as string);
    }
  };

  return (
    <Wrapper
      title={"Student"} // verify if student
      customBaseRoute={`/${BaseRoute.STUDENT}`}
      customRoutes={[...Object.values(routes[BaseRoute.STUDENT])]}
      standardRoutes={[...Object.values(routes[BaseRoute.STANDARD])]}
    >
      <Box>The Settings</Box>
      <Button variant={"contained"} onClick={switchColorMode}>
        Change theme
      </Button>

      <Button variant={"contained"} onClick={onLogout}>
        Logout
      </Button>

      <Typography variant={"h4"} color={theme.palette.error.main}>
        {error}
      </Typography>
    </Wrapper>
  );
};
