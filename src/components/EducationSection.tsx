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
}: EducationItemProps) => {
  return (
    <div>
      <h4 className="text-lg font-medium">{degree}</h4>
      <p className="text-gray-400">{institution}, {location} {period && <span>• {period}</span>}</p>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="space-y-6">
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