import React from 'react';

type EducationItemProps = {
  degree: string;
  institution: string;
  location: string;
  period?: string;
};

const EducationItem = ({
  degree,
  institution,
  location,
  period,
}:EducationItemProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold">{degree}</h3>
      <p>{institution}</p>
      <p className="text-gray-400">{location} {period && <span>• {period}</span>}</p>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="mb-16">
      <br/>
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      
      <EducationItem
        degree="Master of Software Engineering"
        institution="University of Melbourne"
        location="Melbourne, VIC"
      />
      
      <EducationItem
        degree="Bachelor of Engineering in Computer Science"
        institution="Malnad College of Engineering"
        location="India"
      />
    </div>
  );
};

export default EducationSection;