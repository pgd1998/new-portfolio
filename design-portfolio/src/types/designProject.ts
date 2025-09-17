export interface DesignProject {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  thumbnail: string;
  previewType: 'iframe' | 'video' | 'gif';
  previewUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  challenge: string;
  solution: string;
  process: string[];
  techStack: string[];
  designTools: string[];
  impact: string;
  designDecisions: {
    [key: string]: string;
  };
  featured: boolean;
  images?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface ProjectCardProps {
  project: DesignProject;
  onPreview?: (project: DesignProject) => void;
}

export interface ProjectModalProps {
  project: DesignProject | null;
  isOpen: boolean;
  onClose: () => void;
}