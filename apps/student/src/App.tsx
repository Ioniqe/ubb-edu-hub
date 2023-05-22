import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Dashboard from "./Dashboard";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Dashboard />
    </Box>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
