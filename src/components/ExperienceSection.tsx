import React from 'react';
import SkillTag from './SkillTag';

type ExperienceItemProps = {
  period: string;
  title: string;
  company: string;
  description: string[];
  skills: string[];
};

const ExperienceItem = ({
  period,
  title,
  company,
  description,
  skills,
}: ExperienceItemProps) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
      <div className="relative bg-black/40 p-6 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors">
        <div className="text-gray-400 text-sm mb-2">{period}</div>
        <h3 className="text-xl font-semibold mb-1 flex flex-wrap items-baseline gap-x-2">
          <span>{title}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-300">{company}</span>
        </h3>
        
        <div className="space-y-2 my-4">
          {description.map((item, index) => (
            <p key={index} className="flex items-start">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span>{item}</span>
            </p>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <SkillTag key={index} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <>
      <ExperienceItem
        period="2023 - PRESENT"
        title="Software Developer"
        company="Beyond EPiC (University of Melbourne)"
        description={[
          "Joined as the second employee building computational tools for environmental modeling",
          "Led end-to-end development of Rephrame platform - architected React frontend with Python backend, handling complex embodied carbon calculations for sustainable building assessment, improving assessment efficiency by 50%",
          "Engineered responsive frontend and scalable backend for Nested Phoenix, resulting in 30% improvement in navigation and 25% decrease in server response time",
          "Designed and implemented cloud-based architecture using AWS services (EC2, S3, Lambda) for application hosting and automated data processing tasks",
          "Integrated SNS and SQS for reliable microservice communication, improving system scalability and resilience",
          "Established CI/CD pipelines and managed deployments, ensuring system reliability while halving release times",
          "Work independently with research team to ship features from conception to production - no hand-holding, owned product and technical decisions"
        ]}
        skills={["React","JavaScript", "Flask", "Python", "Tailwind CSS", "Plotly Dash", "REST API", "CI/CD", "Firebase"]}
      />
      
      <ExperienceItem
        period="2020 - 2022"
        title="Software Engineer"
        company="Accenture Solutions"
        description={[
          "Delivered enterprise software solutions for global clients",
          "Spearheaded development of Customer Care System for global client, reducing response time by 40% and boosting satisfaction scores by 25%",
          "Enhanced user experience through intuitive front-end features and optimized API performance and database scalability on the back end",
          "Streamlined deployment processes via CI/CD pipelines, cutting release times by 50% and improving delivery efficiency"
        ]}
        skills={["JavaScript", "React", "Node", "Express", "AWS", "Tailwind", "MongoDB", "Gulp"]}
      />
      
      <ExperienceItem
        period="2023 - 2024"
        title="Application Developer Intern"
        company="InflaMed Pty Ltd"
        description={[
          "Built full-stack health-tech platform for clinicians",
          "Developed full-stack health-tech platform tailored for clinicians, increasing workflow efficiency by 35% and deploying securely on cloud infrastructure",
          "Integrated real-time healthcare data features while ensuring FHIR compliance and maintaining 99% data accuracy",
          "Delivered secure video consultations and live transcription, reducing documentation time by 50% and enhancing user satisfaction by 25%"
        ]}
        skills={["Next.js", "TypeScript", "Material UI", "Python", "Django", "Firebase", "AWS", "100ms", "FHIR"]}
      />
    </>
  );
};

export default ExperienceSection;