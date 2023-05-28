import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Box, Typography } from "@mui/material";
import { Colors } from "ui";

const App = () => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: Colors.ACCENT_YELLOW }}
    >
      <Typography>This is the Student module</Typography>
    </Box>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
