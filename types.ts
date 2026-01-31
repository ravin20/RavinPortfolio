
export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'os';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  rank?: string;
}

export interface Experience {
  role: string;
  company: string;
  description: string;
  period: string;
}
