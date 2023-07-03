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
  const { theme, colorMode } = useAppTheme();
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
      <Box
        display={"flex"}
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}
        sx={{
          borderRadius: "18px",
          backgroundColor: theme.palette.background.paper,
          p: 4,
          overflowY: "scroll",
        }}
      >
        <Typography variant={"h4"} color={theme.palette.error.main}>
          {error}
        </Typography>

        <Box
          display={"flex"}
          justifyContent="start"
          alignItems={"center"}
          width={"100%"}
          height={"fit-content"}
        >
          <Typography
            sx={{ typography: "body" }}
            color={theme.palette.primary.main}
          >
            Current color theme:{" "}
            <b>{colorMode === "light" ? "standard" : "colorblind"}</b>
          </Typography>

          {[
            theme.palette.primary.main,
            theme.palette.text.primary,
            theme.palette.error.main,
          ].map((color: string, index: number) => (
            <Box
              key={index}
              width={"36px"}
              height={"36px"}
              sx={{ backgroundColor: color, m: 1 }}
            />
          ))}
        </Box>

        <Box height={"inherit"} display={"flex"}>
          <Box
            display={"flex"}
            justifyContent="end"
            alignSelf={"flex-end"}
            width={"100%"}
            height={"fit-content"}
          >
            <Button variant={"contained"} onClick={switchColorMode}>
              Change theme
            </Button>

            <Button variant={"contained"} onClick={onLogout} sx={{ ml: 2 }}>
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};
