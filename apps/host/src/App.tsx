import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import AppRouter from "./routers/AppRouter";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";

const App = () => {
  return (
    <CustomAppThemeProvider>
      <AppRouter />
    </CustomAppThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
