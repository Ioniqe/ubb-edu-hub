import React from "react";
import "./App.css";
import { Wrapper } from "ui";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Wrapper title={"Student"} routes={[]}>
      <Dashboard />
    </Wrapper>
  );
}

export default App;
