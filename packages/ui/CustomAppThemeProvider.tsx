import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useAppTheme } from "./theme";

export const CustomAppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
