import React from 'react';
import SkillTag from './SkillTag';

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  liveLink?: string;
  githubLink?: string;
  imagePlaceholder: string;
  imageAlt: string;
};

const ProjectCard = ({
  title,
  subtitle,
  description,
  skills,
  liveLink,
  githubLink,
  imagePlaceholder,
  imageAlt,
}: ProjectCardProps) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
      <div className="relative bg-black/40 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-all overflow-hidden group-hover:transform group-hover:translate-y-[-4px]">
        {/* Image Section - 40-50% of card */}
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-sm">{imagePlaceholder}</p>
              <p className="text-gray-600 text-xs mt-1">{imageAlt}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-blue-400 text-sm font-medium mb-4">{subtitle}</p>

          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

          {/* Tech Stack Badges */}
          <div className="mb-6">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <SkillTag key={index} name={skill} />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                View Live Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-600 text-gray-300 font-medium rounded-md hover:border-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                View GitHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
            <button
              disabled
              className="px-4 py-2 border border-gray-700 text-gray-500 font-medium rounded-md cursor-not-allowed opacity-50"
            >
              Technical Deep Dive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="space-y-12">
      <ProjectCard
        title="Rephrame"
        subtitle="Sustainable Building Assessment Platform"
        description="A cutting-edge software tool for building designers to assess embodied carbon, energy, and water. The platform offers interactive visualizations and comprehensive assessment tools that improve efficiency by 50%. Built as the second employee at Beyond EPiC, architecting the full-stack solution from ground up with React frontend and Python backend."
        skills={["JavaScript", "Flask", "Python", "Tailwind CSS", "Plotly Dash", "Heroku"]}
        liveLink="https://rephrame.com"
        imagePlaceholder="Screenshot Needed"
        imageAlt="Rephrame assessment tool interface"
      />

      <ProjectCard
        title="F1 Intelligence"
        subtitle="Real-Time Formula 1 Race Analytics & Prediction Engine"
        description="A full-stack web application delivering real-time Formula 1 telemetry data, race analytics, and interactive race replay visualization. Built machine learning models achieving 96.4% R² accuracy in lap time predictions using 84 features across historical race data from 2019-2024. Processes 1000+ races with sub-2-second query response times using Redis caching and FastAPI backend."
        skills={["TypeScript", "React", "FastAPI", "Python", "CI/CD", "Supabase", "Redis"]}
        liveLink="https://f1intelligence.org"
        imagePlaceholder="Screenshot Needed"
        imageAlt="F1 Intelligence dashboard showing race predictions"
      />

      <ProjectCard
        title="KnowHub"
        subtitle="AI-Powered Knowledge Management Platform"
        description="An AI-powered knowledge management platform that automatically captures, transcribes, and organizes team meeting discussions into searchable, structured insights. Built sophisticated RAG pipeline with hybrid search architecture combining semantic vector search (Pinecone) and PostgreSQL full-text search using Reciprocal Rank Fusion algorithm, achieving sub-2-second query response times. Reduced team knowledge search time from 10+ minutes to under 2 minutes with 95%+ transcription accuracy."
        skills={["TypeScript", "React", "Redux", "FastAPI", "Python", "Celery", "Redis", "PostgreSQL", "Pinecone", "OpenAI", "Supabase", "CI/CD"]}
        imagePlaceholder="Screenshot Needed"
        imageAlt="KnowHub search interface or RAG pipeline visualization"
      />

      <ProjectCard
        title="August Robotics"
        subtitle="Robot Fleet Management System"
        description="A comprehensive software system for managing and preserving critical operational data generated by floor-marking robots. Built interactive dashboard with dynamic charts for visualizing robot performance and operational data in real-time. Engineered full-stack solution with TypeScript frontend and Python backend, handling real-time data processing for multiple autonomous robots."
        skills={["TypeScript", "Vue.js", "Vuetify", "Python", "Django", "Docker", "CI/CD", "PostgreSQL", "Redux"]}
        imagePlaceholder="Screenshot Needed"
        imageAlt="Robot fleet management dashboard"
      />

      <ProjectCard
        title="Variation Form Project"
        subtitle="Construction Contract Management System"
        description="Designed and developed a specialized web application to streamline the construction variation management process, enabling digital submission, tracking, and approval of contract modifications. Reduced form processing time by approximately 40% compared to paper-based methods. Built modern React frontend with Node.js backend, implementing JWT authentication for secure API endpoints."
        skills={["React", "Node.js", "MongoDB", "Express", "RESTful API", "JWT", "Material UI"]}
        liveLink="https://variation-front-end.onrender.com/"
        imagePlaceholder="Screenshot Needed"
        imageAlt="Variation form management interface"
      />

      <ProjectCard
        title="Finsplore"
        subtitle="Smart Financial Assistant (Under Development)"
        description="Leading development of an innovative financial management application focused on automation and accessibility, designed to simplify complex financial decisions for users without financial expertise. Integrated AI-powered assistant functionality that provides personalized financial guidance. Building with modern full-stack architecture featuring Flutter mobile app and Spring Boot backend with RESTful APIs."
        skills={["Flutter", "Dart", "Java", "Spring Boot", "RESTful API", "AI Integration", "Data Visualization", "Firebase"]}
        imagePlaceholder="Mockup Needed"
        imageAlt="Finsplore financial assistant interface mockup"
      />

      <ProjectCard
        title="Resource Monitoring"
        subtitle="E-Commerce Infrastructure Monitoring System"
        description="Created Bash scripts to monitor server resources (CPU, memory, disk space) for e-commerce website and implemented email alert system for threshold violations, improving platform reliability by 35%. Automated critical infrastructure monitoring reducing manual checks and enabling proactive incident response."
        skills={["Bash Scripting", "Linux Server Administration", "Alerting Mechanisms", "Automation"]}
        imagePlaceholder="Screenshot Needed"
        imageAlt="Monitoring dashboard with server metrics"
      />

      <ProjectCard
        title="Music Events System"
        subtitle="Live Music Event Management Platform"
        description="Developed a comprehensive online platform for managing and promoting live music events across Australia, encompassing robust data management, secure user authentication, and a user-friendly interface. Implemented JWT-based authentication for securing API endpoints and built responsive frontend with server-side rendering for optimal performance."
        skills={["Java", "JavaServer Pages (JSP)", "Servlet", "JWT", "Render", "CI/CD", "REST API"]}
        imagePlaceholder="Screenshot Needed"
        imageAlt="Music event management platform"
      />
    </div>
  );
};

export default ProjectsSection;