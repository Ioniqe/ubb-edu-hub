import React, { lazy, Suspense } from "react";
import "./App.css";
import { Wrapper } from "ui";
import { studentRoutes } from "./constants/studentRoutes";

const StudentDashboard = lazy(() => import("student/Dashboard"));

function App() {
  return (
    <Wrapper title={"Host"} routes={studentRoutes}>
      <Suspense fallback={"loading"}>
        <StudentDashboard />
      </Suspense>
    </Wrapper>
  );
}

export default App;
