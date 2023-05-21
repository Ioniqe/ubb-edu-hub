import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div className="container">
      <div>Name: student</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <Dashboard />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
