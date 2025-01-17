export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  github?: string;
  demo?: string;
  highlighted: boolean;
}
  
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}
  
export interface ReadingItem {
  id: string;
  title: string;
  type: string;
  link: string;
  date: string;
  tags: string[];
  notes?: string;
}