export type Language = "vi"|"en"|"zh";
export type Theme = "light" | "dark";
export interface DeveloperProfile {
  name: string;
  skills: string[];
  hardWorker: boolean;
  quickLearner: boolean;
  problemSolver: boolean;
  hireable: () => boolean;
}

export interface IExperience {
  timeline: string;
  title: string;
  description: string;
}