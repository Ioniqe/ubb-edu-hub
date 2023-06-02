import React, { useCallback } from "react";

import { Box, Divider, Typography } from "@mui/material";
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
  const { theme } = useAppTheme();

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
            color: theme.palette.text.secondary,
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
            color={theme.palette.text.secondary}
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

        <Box
          height={"100%"}
          sx={{
            flex: 1,
            p: 4,
            backgroundColor: theme.palette.background.default,
            overflowY: "scroll",
          }}
        >
          <Box
            width={"100%"}
            minHeight={"100%"}
            height={"fit-content"}
            sx={{
              borderRadius: "18px",
              backgroundColor: theme.palette.background.paper,
              p: 4,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </CustomAppThemeProvider>
  );
};
