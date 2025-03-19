import React from 'react';

type SkillTagProps = {
  name: string;
};

const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  return (
    <span className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300">
      {name}
    </span>
  );
};

export default SkillTag;