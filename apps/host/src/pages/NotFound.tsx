import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "ui";

export const NotFound = () => {
  const { theme } = useAppTheme();
  return <Box>Not found</Box>;
};
