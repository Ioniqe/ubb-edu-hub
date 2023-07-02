import { Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { BaseRoute, RouteEnums } from "../enums";
import ProtectedRoute from "../components/ProtectedRoute";
import { LoadingScreen } from "ui";

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
        <Suspense fallback={<LoadingScreen />}>
          <StudentDashboard />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_ASSIGNMENTS}
      element={
        <Suspense fallback={<LoadingScreen />}>
          <StudentAssignments />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_BADGES}
      element={
        <Suspense fallback={<LoadingScreen />}>
          <StudentBadges />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_CHALLENGES}
      element={
        <Suspense fallback={<LoadingScreen />}>
          <StudentChallenges />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_CHECKLISTS}
      element={
        <Suspense fallback={<LoadingScreen />}>
          <StudentChecklists />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_ROADMAPS}
      element={
        <Suspense fallback={<LoadingScreen />}>
          <StudentRoadmaps />
        </Suspense>
      }
    />

    <Route
      path={RouteEnums.STUDENT_SUBJECTS}
      element={
        <Suspense fallback={<LoadingScreen />}>
          <StudentSubjects />
        </Suspense>
      }
    />
  </Route>
);
