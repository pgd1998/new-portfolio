'use client'
import { useState, useEffect, useRef } from 'react';
import { ProjectCardProps } from '../types/designProject';

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to detect when card is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        // Only load iframe when card is in view
        if (entry.isIntersecting && !shouldLoadIframe) {
          // Delay iframe loading to prevent all loading at once
          setTimeout(() => setShouldLoadIframe(true), 100);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' 
      }
    );

    const card = cardRef.current;
    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, [shouldLoadIframe]);

  const handleClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Generate gradient based on project category and ID for variety
  const getGradientClass = (category: string, projectId: string) => {
    switch (category) {
      case '3D Web Experience':
        if (projectId === 'impossible-geometry-explorer') {
          return 'bg-gradient-to-br from-purple-600 to-blue-600';
        } else if (projectId === 'liquid-metal-shifter') {
          return 'bg-gradient-to-br from-slate-600 to-gray-700';
        } else if (projectId === 'ecosystem-renderer') {
          return 'bg-gradient-to-br from-green-700 to-teal-600';
        }
        return 'bg-gradient-to-br from-purple-600 to-blue-600';
      case 'Data Visualization & UX':
        return 'bg-gradient-to-br from-blue-600 to-cyan-600';
      case 'Enterprise UX Design':
        return 'bg-gradient-to-br from-green-600 to-emerald-600';
      case 'Process & Form Design':
        return 'bg-gradient-to-br from-orange-600 to-red-600';
      default:
        return 'bg-gradient-to-br from-purple-600 to-blue-600';
    }
  };

  return (
    <div 
      ref={cardRef}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        {/* Project Preview - Load only when in view */}
        {project.previewUrl && project.previewType === 'iframe' ? (
          <div className="absolute inset-0">
            {shouldLoadIframe && isInView ? (
              <iframe 
                src={project.previewUrl}
                className="w-full h-full border-0"
                style={{ 
                  transform: 'scale(0.6)', 
                  transformOrigin: 'top left',
                  width: '166.67%',
                  height: '166.67%',
                  pointerEvents: isHovered ? 'auto' : 'none'
                }}
                loading="lazy"
                title={project.title}
              />
            ) : (
              // Loading placeholder with gradient
              <div className={`absolute inset-0 ${getGradientClass(project.category, project.id)} flex items-center justify-center`}>
                <div className="text-center p-6">
                  <div className="text-white/90 text-2xl mb-2">🎨</div>
                  <div className="text-white/90 text-lg font-semibold mb-2">{project.title}</div>
                  <div className="text-white/70 text-sm">{project.category}</div>
                </div>
              </div>
            )}
            {/* Pause overlay when not hovered */}
            {!isHovered && shouldLoadIframe && (
              <div className="absolute inset-0 bg-black/10" />
            )}
          </div>
        ) : (
          /* Fallback Gradient for projects without preview */
          <div className={`absolute inset-0 ${getGradientClass(project.category, project.id)} flex items-center justify-center`}>
            <div className="text-center p-6">
              <div className="text-white/90 text-lg font-semibold mb-2">{project.title}</div>
              <div className="text-white/70 text-sm">{project.category}</div>
              <div className="text-white/50 text-xs mt-2">{project.year}</div>
            </div>
          </div>
        )}

        {/* Overlay - More subtle when not hovered */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-300 ${
          isHovered ? 'opacity-100 from-black/95' : 'opacity-90 from-black/80'
        }`} />

        {/* Project Info Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-400 text-sm font-medium">{project.category}</span>
              <span className="text-gray-400 text-sm">{project.year}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {project.subtitle}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-white/10 text-white text-xs rounded-md backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 bg-white/10 text-white text-xs rounded-md backdrop-blur-sm">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            {/* Call to Action */}
            <div className={`flex items-center justify-between transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>

              {project.featured && (
                <div className="flex items-center space-x-1 text-yellow-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-xs font-medium">Featured</span>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;