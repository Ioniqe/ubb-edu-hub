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
  SIGN_UP = "sign-up",

  //errors
  ERROR = "something-went-wrong", // poate n-ai nevoie de route pt asta
}

export enum BaseRoute {
  STUDENT = "student",
  STANDARD = "standard",
}
