import React from "react";
import { Box } from "@mui/material";
import { useCustomTheme } from "ui/theme";

const Dashboard = () => {
  const theme = useCustomTheme("light");
  console.log(theme);
  return <Box>The dashboard for the Student.</Box>;
};

export default Dashboard;
