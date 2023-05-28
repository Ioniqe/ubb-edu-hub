import React, { useCallback } from "react";

import { Box, Button, Divider, Typography } from "@mui/material";
import { Colors } from "./enums";
import { Route } from "./types";
import MenuItem from "./internal-components/MenuItem";
import { CustomAppThemeProvider } from "./CustomAppThemeProvider";
import { useAppTheme } from "./theme";

type WrapperProps = {
  title: string;
  customBaseRoute: string;
  customRoutes: Route[];
  standardRoutes: Route[];
  children: React.ReactNode;
};

export const Wrapper = ({
  title,
  customBaseRoute,
  customRoutes,
  standardRoutes,
  children,
}: WrapperProps) => {
  const { pathname } = window.location;
  const { theme, switchColorMode } = useAppTheme();

  const isCurrentPage = useCallback((path) => path === pathname, []);

  return (
    <CustomAppThemeProvider>
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
            backgroundColor: theme.palette.primary.main,
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

          <Box sx={{ mx: 1 }}>
            {customRoutes.map((route: Route, index) => {
              const currentPath =
                route.route.length > 0
                  ? customBaseRoute + "/" + route.route
                  : customBaseRoute;

              return (
                <MenuItem
                  key={index}
                  currentPath={currentPath}
                  route={route}
                  isActive={isCurrentPage(currentPath)}
                />
              );
            })}

            {standardRoutes.map((route: Route, index) => (
              <MenuItem
                key={index}
                currentPath={route.route}
                route={route}
                isActive={isCurrentPage(route.route)}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: 1, p: 4, backgroundColor: Colors.MAIN }}>
          {children}
        </Box>

        <Button onClick={switchColorMode}>Change theme</Button>
      </Box>
    </CustomAppThemeProvider>
  );
};
