import React from 'react';
import SkillTag from './SkillTag';

type ExperienceProps = {
  period: string;
  title: string;
  company: string;
  companyLink?: string;
  description: React.ReactNode;
  skills: string[];
};

const ExperienceItem = ({
  period,
  title,
  company,
  companyLink,
  description,
  skills,
}:ExperienceProps) => {
  return (
    <div className="mb-14">
      <div className="text-gray-400 mb-1">{period}</div>
      <h3 className="text-xl font-semibold flex items-center gap-1 mb-1">
        {title} {company && (
          <>
            <span className="mx-2">·</span>
            {companyLink ? (
              <a href={companyLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {company} <span className="inline-block ml-1">→</span>
              </a>
            ) : (
              <span>{company}</span>
            )}
          </>
        )}
      </h3>
      <div className="mb-3">{description}</div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillTag key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div>
      {/* <h2 className="sr-only">Experience</h2> */}
      <br/>
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      
      <ExperienceItem
        period="2023  -  PRESENT"
        title="Research Assistant (Software Developer)"
        company="University of Melbourne"
        description={
          <div className="space-y-2">
            <p>
              Drove the development and design of Rephrame, a cutting-edge software tool for building designers to assess embodied carbon, energy, and water, leading to a 50% increase in assessment efficiency.
            </p>
            <p>
              Led the front-end development using JavaScript and Tailwind CSS, creating an intuitive and visually appealing user interface that improved user satisfaction by 40%.
            </p>
            <p>
              Implemented interactive data visualizations with Plotly Dash, enhancing the user experience and enabling more insightful assessments.
            </p>
          </div>
        }
        skills={["JavaScript", "Flask", "Python", "Tailwind CSS", "Plotly Dash", "REST API", "Firebase"]}
      />

      <ExperienceItem
        period="2023  -  2024"
        title="Application Developer Intern"
        company="InflaMed Pty Ltd"
        description={
          <div className="space-y-2">
            <p>
              Built a full-stack, clinician-focused health-tech application using <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Material UI</strong>, <strong>Python</strong>, and <strong>Django</strong>, achieving a <strong>35% improvement</strong> in clinical workflow efficiency and deployed securely on <strong>AWS</strong>.
            </p>
            <p>
              Ensured compliance with <strong>FHIR standards</strong> and maintained <strong>99% data accuracy</strong> by managing real-time healthcare data using <strong>Firebase Realtime Database</strong>, supporting reliable patient record access.
            </p>
            <p>
              Conducted user acceptance testing with clinicians and patients; integrated <strong>100ms SDK</strong> for secure video consultations and developed a live transcription feature, reducing documentation time by <strong>50%</strong> and boosting user satisfaction by <strong>25%</strong>.
            </p>
          </div>
        }
        skills={["Next.js", "TypeScript", "Material UI", "Python", "Django", "Firebase", "AWS", "100ms", "FHIR"]}
      />


      <ExperienceItem
        period="2020  -  2022"
        title="Software Engineer"
        company="Accenture Solutions"
        description={
          <div className="space-y-2">
            <p>
              Developed a high-performance front-end for a Restaurant Booking Service web application using JavaScript and React, leading to a 30% increase in user engagement and satisfaction.
            </p>
            <p>
              Led the full-stack development of a Customer Care Software System for an international client, resulting in a 40% reduction in customer response time.
            </p>
            <p>
              Deployed the application on AWS and set up a CI/CD pipeline, which streamlined the deployment process and reduced release times by 50%.
            </p>
          </div>
        }
        skills={["JavaScript", "React", "Node", "Express", "AWS", "Tailwind", "MongoDB", "Gulp"]}
      />
    </div>
  );
};

export default ExperienceSection;