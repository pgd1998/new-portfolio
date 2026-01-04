import React from 'react';
import SkillTag from './SkillTag';

type ExperienceItemProps = {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string[];
  skills: string[];
};

const ExperienceItem = ({
  period,
  title,
  company,
  companyUrl,
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
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors inline-flex items-center gap-1">
              {company}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          ) : (
            <span className="text-gray-300">{company}</span>
          )}
        </h3>
        
        <div className="space-y-2 my-4">
          {description.map((item, index) => (
            <p key={index} className="flex items-start">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 min-w-3.5 min-h-3.5 w-3.5 h-3.5 flex-shrink-0">
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
        company="Beyond EPiC"
        companyUrl="https://www.beyondepic.io/"
        description={[
          "Joined Beyond EPiC as the second engineer and led development of Nested Phoenix, a computational tool supporting sustainable planning through life cycle assessment and material flow analysis.",
          "Engineered a responsive front end and a scalable back end, resulting in a 30% improvement in navigation and a 25% decrease in server response time.",
          "Designed and implemented cloud-based architecture using AWS services, including EC2 for application hosting, S3 for static asset storage, and Lambda functions to automate data processing tasks.",
          "Integrated SNS and SQS for reliable communication between microservices, improving system scalability and resilience",
          "Also developed Rephrame, a tool for assessing embodied carbon and water use in buildings, improving efficiency of assessments by 50%.",
          "Managed deployment and CI/CD pipelines, halving release times while ensuring system reliability."
        ]}
        skills={["React","JavaScript", "Flask", "Python", "Tailwind CSS", "Plotly Dash", "REST API", "CI/CD", "Firebase"]}
      />
      
      <ExperienceItem
        period="2020 - 2022"
        title="Software Engineer"
        company="Accenture Solutions"
        description={[
          "Spearheaded the development of a Customer Care System for a global client, reducing response time by 40% and boosting satisfaction scores by 25%.",
          "Enhanced user experience through intuitive front-end features and optimized API performance and database scalability on the back end.",
          "Streamlined deployment processes via CI/CD pipelines, cutting release times by 50% and improving delivery efficiency."
        ]}
        skills={["JavaScript", "React", "Node", "Express", "AWS", "Tailwind", "MongoDB", "Gulp"]}
      />
      
      <ExperienceItem
        period="2023 - 2024"
        title="Application Developer Intern"
        company="InflaMed Pty Ltd"
        description={[
          "Developed a full-stack health-tech platform tailored for clinicians, increasing workflow efficiency by 35% and deploying securely on cloud infrastructure.",
          "Integrated real-time healthcare data features while ensuring FHIR compliance and maintaining 99% data accuracy.",
          "Delivered secure video consultations and live transcription, reducing documentation time by 50% and enhancing user satisfaction by 25%."
        ]}
        skills={["Next.js", "TypeScript", "Material UI", "Python", "Django", "Firebase", "AWS", "100ms", "FHIR"]}
      />
    </>
  );
};

export default ExperienceSection;