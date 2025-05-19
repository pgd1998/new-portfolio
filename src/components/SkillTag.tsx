import React from 'react';

type SkillTagProps = {
  name: string;
};

const SkillTag = ({ name }: SkillTagProps) => {
  return (
    <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
      {name}
    </span>
  );
};

export default SkillTag;