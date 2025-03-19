"use client"
import SocialLinks from '@/components/SocialLinks';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactInfo from '@/components/ContactInfo';
import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import Resume from '@/components/Resume';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeSection={activeSection} />
      
      <div className="flex flex-col px-8 pt-24 pb-10 md:px-20 lg:px-24">
        
        <section className="mb-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-3">Poorvith Gowda</h1>
          <h2 className="text-2xl mb-8">Software Engineer</h2>
          
          <div className="mb-8">
            <p className="max-w-2xl text-lg">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
          </div>
          
          <ContactInfo />
        </section>

      <main className="flex-grow">
        <section id="about" className="mb-16">
        <p className="max-w-2xl mb-6">
          I&#39;m a software engineer passionate about creating accessible, pixel-perfect user
          interfaces that blend thoughtful design with robust engineering. My favorite
          work lies at the intersection of design and development, creating experiences
          that not only look great but are meticulously built for performance and usability.
        </p>
        <p className="max-w-2xl mb-6">
          Currently, I&#39;m a Research Assistant (Software Developer) at the University of Melbourne, 
          where I contribute to the creation and maintenance of the components that power 
          the Rephrame platform, ensuring our software meets web accessibility standards and best 
          practices to deliver an inclusive user experience.
        </p>
        <p className="max-w-2xl mb-12">
          In the past, I&#39;ve had the opportunity to develop software across a variety of
          settings — from advertising agencies and large corporations to start-ups and
          small digital product studios.
        </p>
          
          <EducationSection />
        </section>

        <hr className="border-t-2 border-gray-800 my-12" />

        <section id="experience" className="mb-16">
          <ExperienceSection />
        </section>

        <hr className="border-t-2 border-gray-800 my-12" />

        <section id="resume" className="mb-16">
          <Resume />
        </section>
        <hr className="border-t-2 border-gray-800 my-12" />

        <section id="projects" className="mb-20">
          <ProjectsSection />
        </section>
      </main>
      </div>
      <footer className="mt-auto pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
          <SocialLinks />
          <div className="text-sm text-gray-400">
            <p>Loosely designed in <span className="text-gray-300">Figma</span> and coded in <span className="text-gray-300">VS Code</span></p>
            <p>Built with <span className="text-gray-300">Next.js</span> and <span className="text-gray-300">Tailwind CSS</span>, deployed with <span className="text-gray-300">Vercel</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}