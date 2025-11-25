import React from 'react';

type SkillTagProps = {
  name: string;
};

// Tech brand colors mapping
const techColors: { [key: string]: { bg: string; text: string } } = {
  // Frontend
  'React': { bg: 'bg-[#61DAFB]/20', text: 'text-[#61DAFB]' },
  'TypeScript': { bg: 'bg-[#3178C6]/20', text: 'text-[#3178C6]' },
  'JavaScript': { bg: 'bg-[#F7DF1E]/20', text: 'text-[#F7DF1E]' },
  'Next.js': { bg: 'bg-white/20', text: 'text-white' },
  'Vue.js': { bg: 'bg-[#4FC08D]/20', text: 'text-[#4FC08D]' },
  'Redux': { bg: 'bg-[#764ABC]/20', text: 'text-[#764ABC]' },
  'Tailwind CSS': { bg: 'bg-[#06B6D4]/20', text: 'text-[#06B6D4]' },
  'Material UI': { bg: 'bg-[#007FFF]/20', text: 'text-[#007FFF]' },
  'Vuetify': { bg: 'bg-[#1867C0]/20', text: 'text-[#1867C0]' },
  'Flutter': { bg: 'bg-[#02569B]/20', text: 'text-[#02569B]' },

  // Backend
  'Python': { bg: 'bg-[#3776AB]/20', text: 'text-[#3776AB]' },
  'FastAPI': { bg: 'bg-[#009688]/20', text: 'text-[#009688]' },
  'Fast API': { bg: 'bg-[#009688]/20', text: 'text-[#009688]' },
  'Flask': { bg: 'bg-white/20', text: 'text-white' },
  'Django': { bg: 'bg-[#092E20]/30', text: 'text-[#44B78B]' },
  'Node.js': { bg: 'bg-[#339933]/20', text: 'text-[#339933]' },
  'Node': { bg: 'bg-[#339933]/20', text: 'text-[#339933]' },
  'Express': { bg: 'bg-white/20', text: 'text-white' },
  'Java': { bg: 'bg-[#007396]/20', text: 'text-[#007396]' },
  'Spring Boot': { bg: 'bg-[#6DB33F]/20', text: 'text-[#6DB33F]' },
  'Dart': { bg: 'bg-[#0175C2]/20', text: 'text-[#0175C2]' },

  // Databases
  'PostgreSQL': { bg: 'bg-[#4169E1]/20', text: 'text-[#4169E1]' },
  'MongoDB': { bg: 'bg-[#47A248]/20', text: 'text-[#47A248]' },
  'Redis': { bg: 'bg-[#DC382D]/20', text: 'text-[#DC382D]' },
  'Supabase': { bg: 'bg-[#3ECF8E]/20', text: 'text-[#3ECF8E]' },
  'Firebase': { bg: 'bg-[#FFCA28]/20', text: 'text-[#FFCA28]' },
  'Pinecone': { bg: 'bg-[#000000]/30', text: 'text-white' },

  // Cloud & DevOps
  'AWS': { bg: 'bg-[#FF9900]/20', text: 'text-[#FF9900]' },
  'Docker': { bg: 'bg-[#2496ED]/20', text: 'text-[#2496ED]' },
  'CI/CD': { bg: 'bg-[#2088FF]/20', text: 'text-[#2088FF]' },
  'Heroku': { bg: 'bg-[#430098]/30', text: 'text-[#430098]' },

  // AI/ML
  'OpenAI': { bg: 'bg-[#10A37F]/20', text: 'text-[#10A37F]' },
  'Celery': { bg: 'bg-[#37814A]/20', text: 'text-[#37814A]' },
};

const SkillTag = ({ name }: SkillTagProps) => {
  const colors = techColors[name] || { bg: 'bg-white/10', text: 'text-gray-300' };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border border-current/20`}>
      {name}
    </span>
  );
};

export default SkillTag;