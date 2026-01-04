"use client"
import React, { useState } from 'react';
import SkillTag from './SkillTag';

type ProjectCardProps = {
  title: string;
  year?: string;
  description: string;
  skills: string[];
  link?: string;
  isDesign?: boolean;
};

const ProjectCard = ({
  title,
  year,
  description,
  skills,
  link,
  isDesign = false,
}: ProjectCardProps) => {
  return (
    <div className="group relative">
      <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${isDesign ? 'from-purple-500/20 to-pink-500/20' : 'from-purple-500/20 to-blue-500/20'} opacity-0 group-hover:opacity-100 transition-opacity blur`}></div>
      <div className="relative bg-black/40 p-6 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <div>
            {year && <div className="text-gray-400 text-sm mb-1">{year}</div>}
            <h3 className="text-xl font-semibold">
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-blue-400 transition-colors">
                  {title}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              ) : (
                title
              )}
            </h3>
          </div>
        </div>

        <p className="mb-6">{description}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillTag key={index} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            activeCategory === category
              ? 'bg-white text-black'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const projects = {
  'AI & Data': [
    {
      title: "F1 Intelligence",
      year: "2025",
      description: "A real-time Formula 1 analytics platform with live telemetry, race replays, and driver comparisons. Integrated OpenF1 API with Redis caching and implemented request debouncing and parallel processing for sub-second data loads across 5+ years of historical race data.",
      skills: ["TypeScript", "React", "FastAPI", "Python", "Redis", "Supabase"],
      link: "https://www.f1intelligence.org/",
    },
    {
      title: "KnowHub",
      year: "2024",
      description: "An AI-powered platform that turns meeting recordings into searchable knowledge. Built a RAG pipeline with hybrid search combining Pinecone vector search and PostgreSQL full-text search using Reciprocal Rank Fusion. Implemented async task processing with Celery and Redis, achieving sub-2-second query times and 95%+ transcription accuracy.",
      skills: ["TypeScript", "React", "Redux", "FastAPI", "Python", "Celery", "Redis", "PostgreSQL", "Pinecone", "OpenAI"],
    },
    {
      title: "Finsplore",
      year: "2025",
      description: "A personal finance app with AI-powered guidance for users without financial expertise. Built with Flutter frontend and Node.js backend, featuring natural language queries via AI integration, Firebase for real-time sync, and RESTful APIs for spending insights.",
      skills: ["Flutter", "Dart", "Node.js", "RESTful API", "AI Integration", "Firebase"],
    },
  ],
  'Full-Stack': [
    {
      title: "Rephrame",
      year: "2024",
      description: "A sustainability assessment tool for architects to calculate embodied carbon, energy, and water impact. Built with Flask backend, Plotly Dash for interactive visualizations, and deployed on Heroku—reducing assessment time by 50%.",
      skills: ["JavaScript", "Flask", "Python", "Tailwind CSS", "Plotly Dash", "Heroku"],
      link: "https://rephrame.com",
    },
    {
      title: "August Robotics",
      year: "2023",
      description: "A real-time dashboard for managing floor-marking robots. Built with Vue.js and Vuetify frontend, Django REST backend, PostgreSQL for data persistence, and Docker for containerized deployment. Features dynamic charts for visualizing robot performance metrics.",
      skills: ["TypeScript", "Vue.js", "Vuetify", "Python", "Django", "Docker", "PostgreSQL"],
    },
    {
      title: "Variation Form Project",
      year: "2025",
      description: "A web app for construction teams to manage contract variations digitally. Built with React frontend and Node.js/Express backend, MongoDB for document storage, and JWT authentication. Replaced paper workflows and cut processing time by 40%.",
      skills: ["React", "Node.js", "MongoDB", "Express", "JWT", "Material UI"],
      link: "https://variation-front-end.onrender.com/",
    },
    {
      title: "Music Events System",
      year: "2024",
      description: "An event management platform for live music venues across Australia. Built with Java Servlets and JSP, featuring JWT-authenticated REST APIs, secure ticketing, and venue management with role-based access control.",
      skills: ["Java", "JSP", "Servlet", "JWT", "REST API"],
    },
    {
      title: "Resource Monitoring",
      year: "2023",
      description: "Bash scripts for server health monitoring (CPU, memory, disk usage) with automated email alerts on threshold violations. Implemented cron-based scheduling and log rotation, improving platform reliability by 35% for an e-commerce site.",
      skills: ["Bash", "Linux", "Automation"],
    },
  ],
  'Design': [
    {
      title: "Advanced Ecosystem Renderer",
      year: "2024",
      description: "A visually immersive 3D ecosystem visualization project showcasing dynamic environmental rendering and interactive design elements.",
      skills: ["3D Design", "Visual Design", "Interactive Media"],
      link: "https://ecosystem-renderer.vercel.app/",
      isDesign: true,
    },
    {
      title: "Liquid Metal Shifter",
      year: "2024",
      description: "An experimental design project exploring fluid metallic aesthetics and morphing visual effects through advanced rendering techniques.",
      skills: ["Motion Design", "Visual Effects", "Creative Direction"],
      link: "https://liquid-metal-shifter.vercel.app/",
      isDesign: true,
    },
  ],
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'AI & Data', 'Full-Stack', 'Design'];

  const getFilteredProjects = () => {
    if (activeCategory === 'All') {
      return projects;
    }
    return { [activeCategory]: projects[activeCategory as keyof typeof projects] };
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div>
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {Object.entries(filteredProjects).map(([category, categoryProjects]) => (
        <div key={category} className="mb-12">
          {activeCategory === 'All' && (
            <h3 className="text-lg font-semibold text-gray-400 mb-6 flex items-center">
              <span className="w-8 h-px bg-gray-700 mr-3"></span>
              {category}
            </h3>
          )}

          <div className="space-y-6">
            {categoryProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                year={project.year}
                description={project.description}
                skills={project.skills}
                link={'link' in project ? project.link : undefined}
                isDesign={'isDesign' in project ? project.isDesign : false}
              />
            ))}
          </div>

          {category === 'Design' && (
            <a
              href="https://design.poorvithgowda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
            >
              <span>View more design projects</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
