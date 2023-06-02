export enum Filter {
  COMPLETED = "COMPLETED",
  NOT_COMPLETED = "NOT_COMPLETED",
  ALL = "ALL",
  COMING_UP = "COMING_UP",
}

export const mappedFilters = {
  [Filter.COMPLETED]: "Completed",
  [Filter.NOT_COMPLETED]: "Not completed",
  [Filter.ALL]: "All",
  [Filter.COMING_UP]: "Coming up",
};
