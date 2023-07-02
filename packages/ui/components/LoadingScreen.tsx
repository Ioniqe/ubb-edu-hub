import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const LoadingScreen = () => (
  <Box
    display={"flex"}
    width={"100%"}
    height={"100%"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <CircularProgress />
  </Box>
);
