import Image from 'next/image';
import React from 'react';
import SkillTag from './SkillTag';

type ProjectProps = {
  title: string;
  description: React.ReactNode;
  skills: string[];
  image?: string;
  link?: string;
  year?: string;
};

const ProjectCard= ({
  title,
  description,
  skills,
  image,
  link,
  year
}:ProjectProps) => {
  return (
    <div className="mb-14">
      {year && <div className="text-gray-400 mb-1">{year}</div>}
      
      <h3 className="text-xl font-semibold flex items-center gap-1 mb-2">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            {title} <span className="inline-block ml-1">→</span>
          </a>
        ) : (
          title
        )}
      </h3>
      
      {image && (
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-800">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="mb-3">{description}</div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillTag key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div>
      <br/>
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      
      
      <ProjectCard
        title="Rephrame"
        year="2023"
        description={
          <p>
            A cutting-edge software tool for building designers to assess embodied carbon, energy, and water. The platform offers interactive visualizations and comprehensive assessment tools that improve efficiency by 50%.
          </p>
        }
        skills={["JavaScript", "Flask", "Python", "Tailwind CSS", "Plotly Dash", "Heroku"]}
        link="https://rephrame.com"
      />
      
      <ProjectCard
        title="August Robotics"
        description={
          <p>
            As a Full-Stack developer, I drove the development of a comprehensive software system for managing and preserving critical operational data generated by floor-marking robots. Created an interactive dashboard with dynamic charts for visualizing robot performance and operational data.
          </p>
        }
        skills={["TypeScript", "Vue.js", "Vuetify", "Python", "Django", "Docker", "CI/CD", "PostgreSQL", "Redux"]}
      />
      
      <ProjectCard
        title="Finsplore - Smart Financial Assistant"
        description={
          <p>
            Leading the development of an innovative financial management application focused on automation and accessibility, designed to simplify complex financial decisions for users without financial expertise. Integrated AI-powered assistant functionality that provides personalized financial guidance.
          </p>
        }
        skills={["Flutter", "Dart", "Java", "Spring Boot", "RESTful API", "AI Integration", "Data Visualization", "Firebase"]}
      />
      
      <ProjectCard
        title="Variation Form Project"
        description={
          <p>
            Designed and developed a specialized web application to streamline the construction variation management process, enabling digital submission, tracking, and approval of contract modifications. Reduced form processing time by approximately 40% compared to paper-based methods.
          </p>
        }
        skills={["React", "Node.js", "MongoDB", "Express", "RESTful API", "JWT", "Material UI"]}
      />

      <ProjectCard
        title="Resource Monitoring"
        description={
          <p>
            Created Bash scripts to monitor server resources (CPU, memory, disk space) for e-commerce website and implemented email alert system for threshold violations, improving platform reliability by 35%.         
          </p>
        }
        skills={["Bash Scripting", "Linux Server Administration", "Alerting Mechanisms", "Automation"]}
      />
      
      <ProjectCard
        title="Music Events System Project"
        description={
          <p>
            Developed a comprehensive online platform for managing and promoting live music events across Australia, encompassing robust data management, secure user authentication, and a user-friendly interface. Implemented JWT-based authentication for securing the API endpoints.
          </p>
        }
        skills={["Java", "JavaServer Pages (JSP)", "Servlet", "JWT", "Render", "CI/CD", "REST API"]}
      />
    </div>
  );
};

export default ProjectsSection;