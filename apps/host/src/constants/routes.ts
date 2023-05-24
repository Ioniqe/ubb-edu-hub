import { Route } from "ui/dist";
import { BaseRoute, RouteEnums } from "../enums";

const studentRoutes: { [key: string]: Route } = {
  [RouteEnums.STUDENT_DASHBOARD]: {
    name: "Home",
    route: "",
    iconName: "home",
  },
  [RouteEnums.STUDENT_ASSIGNMENTS]: {
    name: "Assignments",
    route: "assignments",
    iconName: "assignment",
  },
  [RouteEnums.STUDENT_BADGES]: {
    name: "Badges",
    route: "badges",
    iconName: "military_tech",
  },
  [RouteEnums.STUDENT_CHALLENGES]: {
    name: "Challenges",
    route: "challenges",
    iconName: "landscape",
  },
  [RouteEnums.STUDENT_CHECKLISTS]: {
    name: "Checklists",
    route: "checklists",
    iconName: "checklist",
  },
  [RouteEnums.STUDENT_ROADMAPS]: {
    name: "Roadmaps",
    route: "roadmaps",
    iconName: "linear_scale",
  },
  [RouteEnums.STUDENT_SUBJECTS]: {
    name: "Subjects",
    route: "subjects",
    iconName: "subject",
  },
};

const authRoutes: { [key: string]: Route } = {
  [RouteEnums.SIGN_UP]: {
    name: "",
    route: "",
    iconName: "",
  },
  [RouteEnums.LOGIN]: {
    name: "",
    route: "",
    iconName: "",
  },
  [RouteEnums.LOGOUT]: {
    name: "",
    route: "",
    iconName: "",
  },
};

const baseRoutes: { [key: string]: Route } = {
  [RouteEnums.PROFILE]: {
    name: "Profile",
    route: "/profile",
    iconName: "person",
  },
  [RouteEnums.SETTINGS]: {
    name: "Settings",
    route: "/settings",
    iconName: "settings",
  },
};

export const routes: { [category: string]: { [key: string]: Route } } = {
  [BaseRoute.STUDENT]: studentRoutes,
  [BaseRoute.STANDARD]: baseRoutes,
  [BaseRoute.AUTH]: authRoutes,
};
