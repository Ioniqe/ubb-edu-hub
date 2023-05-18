import React from "react";

import { Box, Divider, Typography } from "@mui/material";
import { Colors } from "./enums/colors";
import { Route } from "./types/route";

type WrapperProps = {
  title: string;
  routes: Route[];
  children: React.ReactNode;
};

export const Wrapper = ({ title, routes, children }: WrapperProps) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "250px",
          height: "auto",
          flexDirection: "column",
          alignItems: "start",
          backgroundColor: Colors.MAIN_BLUE,
          color: Colors.WHITE,
          py: 3,
        }}
      >
        <Typography textAlign={"center"}>{`UBB'S EDU HUB`}</Typography>
        <Typography textAlign={"center"}>{title}</Typography>

        <Divider
          sx={{
            height: "2px",
            my: 2,
          }}
          color={Colors.WHITE}
        />

        <Box sx={{ px: 2 }}>
          {routes.map((route: Route, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <span className="material-icons">{route.iconName}</span>
              <Typography sx={{ pl: 2 }}>{route.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ flex: 1, p: 4, backgroundColor: Colors.MAIN }}>{children}</Box>
    </Box>
  );
};
