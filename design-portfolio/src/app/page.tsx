import DesignHero from '../components/DesignHero';
import ProjectGrid from '../components/ProjectGrid';
import { designProjects } from '../data/designProjects';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <DesignHero />
      <ProjectGrid 
        projects={designProjects}
        title="Featured Design Work"
        subtitle="A collection of projects where thoughtful design meets robust engineering. Each project showcases user-centered design principles, technical innovation, and measurable impact."
      />
    </div>
  );
}
