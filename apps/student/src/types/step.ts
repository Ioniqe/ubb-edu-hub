import { Topic } from "./topic";

export type OverviewSkillsProgress = {
  skill: Topic;
  steps: Step[]; //array of descriptions -> MUST BE IN ORDER e.g. ['enroll', 'first assignent', 'second assignment']
};

export type Step = {
  description: string;
  completed: boolean;
};
