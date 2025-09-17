'use client'
import { useState } from 'react';
import { DesignProject } from '@/types/designProject';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: DesignProject[];
  title?: string;
  subtitle?: string;
}

const ProjectGrid = ({ projects, title = "Featured Projects", subtitle }: ProjectGridProps) => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">{projects.length}</div>
            <div className="text-gray-400 text-sm">Total Projects</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">{projects.filter(p => p.featured).length}</div>
            <div className="text-gray-400 text-sm">Featured</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <div className="text-3xl font-bold text-green-400 mb-2">{projects.filter(p => p.category === '3D Web Experience').length}</div>
            <div className="text-gray-400 text-sm">3D Projects</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">User-Centered</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 pt-16 border-t border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and interesting projects. 
            Let&apos;s create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:poorvithgowda10@gmail.com"
              className="px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
            <a 
              href="https://poorvithgowda.com"
              className="px-8 py-3 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View SE Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;