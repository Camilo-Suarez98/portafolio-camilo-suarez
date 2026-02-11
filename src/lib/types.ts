export type Project = {
  name: string;
  description: string;
  stack: string;
  link: string;
};

export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
};

export type Profile = {
  name: string;
  city: string;
  role: string;
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  about: string;
  longBio: string;
  experienceDetail: string;
  experiences: Experience[];
  aiTools: string[];
  projects: Project[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};
