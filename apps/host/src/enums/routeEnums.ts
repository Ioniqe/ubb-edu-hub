export enum RouteEnums {
  //student
  STUDENT_ASSIGNMENTS = "assignments",
  STUDENT_BADGES = "badges",
  STUDENT_CHALLENGES = "challenges",
  STUDENT_CHECKLISTS = "checklists",
  STUDENT_DASHBOARD = "",
  STUDENT_ROADMAPS = "roadmaps",
  STUDENT_SUBJECTS = "subjects",

  // basic
  PROFILE = "profile",
  SETTINGS = "settings",

  //auth
  LOGIN = "login",
  LOGOUT = "logout",
  SIGN_UP = "sing-up",

  //errors
  PAGE_NOT_FOUND = "page-not-found",
  ERROR = "something-went-wrong", // poate n-ai nevoie de route pt asta
}

export enum BaseRoute {
  STUDENT = "student",
  STANDARD = "standard",
}
