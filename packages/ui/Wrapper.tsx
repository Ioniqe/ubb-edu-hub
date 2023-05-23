import React from "react";

import {
  Box,
  Button,
  CssBaseline,
  Divider,
  PaletteMode,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Colors } from "./enums";
import { Route } from "./types";
import { useCustomTheme } from "./theme";

type WrapperProps = {
  title: string;
  routes: Route[];
  children: React.ReactNode;
};

export const Wrapper = ({ title, routes, children }: WrapperProps) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const theme = useCustomTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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

          <Box sx={{ mx: 2 }}>
            {routes.map((route: Route, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  py: 1,
                }}
              >
                <Divider
                  flexItem
                  orientation="vertical"
                  color={Colors.WHITE}
                  sx={{
                    width: "3px",
                    m: 0,
                    ml: -2,
                    mr: 2,
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box className="material-icons" sx={{ fontSize: "18px" }}>
                    {route.iconName}
                  </Box>
                  <Typography sx={{ pl: 1 }}>{route.name}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: 1, p: 4, backgroundColor: Colors.MAIN }}>
          {children}
        </Box>

        <Button
          onClick={() =>
            setMode((prevMode: PaletteMode) =>
              prevMode === "light" ? "dark" : "light"
            )
          }
        >
          Change theme
        </Button>
      </Box>
    </ThemeProvider>
  );
};
