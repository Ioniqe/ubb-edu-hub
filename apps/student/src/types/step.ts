import { Topic } from "./topic";

export type OverviewSkillsProgress = Topic & {
  steps: Step[]; //array of descriptions -> MUST BE IN ORDER e.g. ['enroll', 'first assignent', 'second assignment']
};

export type Step = {
  id: number;
  description: string;
  completed: boolean;
  nextSteps: Step[];
  previousSteps: Step[];
};
