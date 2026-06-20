export type CVTemplate =
  | 'standard'
  | 'harvard'
  | 'europass'
  | 'modern';

// ── Tipos base ────────────────────────────────────────────────

export interface Personal {
  name:string;
  role:string;
  email:string;
  phone:string;
  location:string;
  address:string;
  dateOfBirth:string;
  nationality:string;
  gender:string;
  linkedin:string;
  github:string;
  portfolio:string;
}

export interface Job {
  id:number;
  title:string;
  company:string;
  location:string;
  startDate:string;
  endDate:string;
  bullets:string[];
}

export interface Project {
  id:number;
  title:string;
  tech:string;
  startDate:string;
  endDate:string;
  bullets:string[];
}

export interface Education {
  degree:string;
  school:string;
  location:string;
  graduation:string;
  eqf:string;
  gpa:string;
  thesis:string;
  coursework:string[];
}

export interface Certification {
  id:number;
  name:string;
  date:string;
}

export interface Language {
  id:number;
  name:string;
  level:string;
}

// ── Modelo completo del CV ────────────────────────────────────

export interface CV {
  template:CVTemplate;
  personal:Personal;
  summary:string;
  skills:string[];
  experience:Job[];
  projects:Project[];
  education:Education;
  certifications:Certification[];
  languages:Language[];
  softSkills:string[];
}
