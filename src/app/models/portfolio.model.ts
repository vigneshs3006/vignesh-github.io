export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  location: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description?: string;
}

export interface Project {
  name: string;
  url: string;
  description: string;
  technologies: string[];
}

export interface Contact {
  email: string;
  linkedin: string;
  phone?: string;
}