import { Topic } from "./topic";

export type OverviewSkillsProgress = Topic & {
  SkillOnStep: Step[]; //array of descriptions -> MUST BE IN ORDER e.g. ['enroll', 'first assignent', 'second assignment']
};

export type Step = {
  descrption: string;
  completed: boolean;
};
