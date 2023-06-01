import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "ui";

export const NotFound = () => {
  const { theme } = useAppTheme();
  return (
    <Box
      display={"flex"}
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
      }}
    >
      <Typography variant={"h1"}>Page not found</Typography>
    </Box>
  );
};
