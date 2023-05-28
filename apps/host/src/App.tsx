import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import AppRouter from "./routers/AppRouter";

const App = () => {
  return <AppRouter />;
};

ReactDOM.render(<App />, document.getElementById("app"));
