import React from "react";
import { useAppTheme } from "ui";
import { Box, Typography } from "@mui/material";
import login from "../assets/images/login.svg";
import { Outlet } from "react-router-dom";

export const AuthWrapper = () => {
  const { theme } = useAppTheme();

  return (
    <Box display={"flex"} width={"100vw"} height={"100vh"}>
      <Box
        display={{ xs: "none", md: "flex" }}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        height={"100%"}
        width={"40%"}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.secondary,
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          sx={{ textAlign: "center" }}
        >
          <Typography variant={"h1"} fontWeight={200}>
            Welcome to
          </Typography>
          <Typography variant={"h1"} fontWeight={500}>
            {`UBB's Edu Hub`}
          </Typography>
        </Box>

        <Box component={"img"} src={login} alt={"Login Image"} width={"70%"} />
      </Box>

      <Box
        width={{ xs: "100%", md: "60%" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
