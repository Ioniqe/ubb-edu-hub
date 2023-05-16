import React from "react";
import "./App.css";
import { Wrapper } from "ui";
import Dashboard from "./Dashboard";
import { studentRoutes } from "./constants/studentRoutes";

function App() {
  return (
    <Wrapper title={"Student"} routes={studentRoutes}>
      <Dashboard />
    </Wrapper>
  );
}

export default App;
