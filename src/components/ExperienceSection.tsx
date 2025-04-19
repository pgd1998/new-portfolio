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
        <div>{title} </div> {company && (
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
                Led development of <strong>Nested Phoenix</strong>, a computational tool supporting sustainable planning through life cycle assessment and material flow analysis.
              </p>
              <p>
                Engineered a responsive front end and a scalable back end, resulting in a 30% improvement in navigation and a 25% decrease in server response time.
              </p>
              <p>
                Also developed <strong>Rephrame</strong>, a tool for assessing embodied carbon and water use in buildings, improving efficiency of assessments by 50%.
              </p>
              <p>
                Managed deployment and CI/CD pipelines, halving release times while ensuring system reliability.
              </p>
        </div>

        }
        skills={["JavaScript", "Flask", "Python", "Tailwind CSS", "Plotly Dash", "REST API", "Firebase"]}
      />

<ExperienceItem
        period="2020  -  2022"
        title="Software Engineer"
        company="Accenture Solutions"
        description={
          <div className="space-y-2">
             <p>
        Spearheaded the development of a Customer Care System for a global client, reducing response time by 40% and boosting satisfaction scores by 25%.
      </p>
      <p>
        Enhanced user experience through intuitive front-end features and optimized API performance and database scalability on the back end.
      </p>
      <p>
        Streamlined deployment processes via CI/CD pipelines, cutting release times by 50% and improving delivery efficiency.
      </p>
          </div>

        }
        skills={["JavaScript", "React", "Node", "Express", "AWS", "Tailwind", "MongoDB", "Gulp"]}
      />

      <ExperienceItem
        period="2023  -  2024"
        title="Application Developer Intern"
        company="InflaMed Pty Ltd"
        description={
          <div className="space-y-2">
            <p>
        Developed a full-stack health-tech platform tailored for clinicians, increasing workflow efficiency by 35% and deploying securely on cloud infrastructure.
      </p>
      <p>
        Integrated real-time healthcare data features while ensuring FHIR compliance and maintaining 99% data accuracy.
      </p>
      <p>
        Delivered secure video consultations and live transcription, reducing documentation time by 50% and enhancing user satisfaction by 25%.
      </p>
          </div>
        }
        skills={["Next.js", "TypeScript", "Material UI", "Python", "Django", "Firebase", "AWS", "100ms", "FHIR"]}
      />


      
    </div>
  );
};

export default ExperienceSection;