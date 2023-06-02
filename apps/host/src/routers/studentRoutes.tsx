import { Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { BaseRoute, RouteEnums } from "../enums";
import ProtectedRoute from "../components/ProtectedRoute";
import { CircularProgress } from "@mui/material";

const StudentAssignments = lazy(() => import("student/Assignments"));
const StudentBadges = lazy(() => import("student/Badges"));
const StudentChallenges = lazy(() => import("student/Challenges"));
const StudentChecklists = lazy(() => import("student/Checklists"));
const StudentDashboard = lazy(() => import("student/Dashboard"));
const StudentRoadmaps = lazy(() => import("student/Roadmaps"));
const StudentSubjects = lazy(() => import("student/Subjects"));

export const renderStudentRoutes = () => (
  <Route path={"/" + BaseRoute.STUDENT} element={<ProtectedRoute />}>
    <Route
      path={RouteEnums.STUDENT_DASHBOARD}
      element={
        <Suspense fallback={<CircularProgress />}>
          <StudentDashboard />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_ASSIGNMENTS}
      element={
        <Suspense fallback={<CircularProgress />}>
          <StudentAssignments />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_BADGES}
      element={
        <Suspense fallback={<CircularProgress />}>
          <StudentBadges />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_CHALLENGES}
      element={
        <Suspense fallback={<CircularProgress />}>
          <StudentChallenges />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_CHECKLISTS}
      element={
        <Suspense fallback={<CircularProgress />}>
          <StudentChecklists />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_ROADMAPS}
      element={
        <Suspense fallback={<CircularProgress />}>
          <StudentRoadmaps />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_SUBJECTS}
      element={
        <Suspense fallback={<CircularProgress />}>
          <StudentSubjects />
        </Suspense>
      }
    />
  </Route>
);
