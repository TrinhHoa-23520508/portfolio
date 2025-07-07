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

export interface IItemCarousel {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface IProject {
  title: string;
    description: string;
    image: string;
    githubLink: string;
    demoLink: string;
}