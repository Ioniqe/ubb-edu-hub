import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Wrapper } from "ui";
import { studentRoutes } from "./constants/studentRoutes";
const StudentDashboard = lazy(() => import("student/Dashboard"));

const App = () => {
  return (
    <Wrapper title={"Student"} routes={studentRoutes}>
      <Suspense fallback={"loading"}>
        <StudentDashboard />
      </Suspense>
    </Wrapper>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
