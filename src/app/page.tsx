"use client"
import { useState, useEffect } from 'react';
import SocialLinks from '@/components/SocialLinks';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactInfo from '@/components/ContactInfo';
import Header from '@/components/Header';
import Resume from '@/components/Resume';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header activeSection={activeSection} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[92vh] flex flex-col justify-center relative overflow-hidden px-6 py-24 -mt-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="relative z-10 text-center flex flex-col items-center">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">Poorvith Gowda</h1>
              <h2 className="text-xl md:text-2xl text-gray-400 mb-6">Software Engineer</h2>

              <div className="max-w-4xl">
                <p className="text-lg md:text-xl mb-8">
                  From early-stage startup to solo-building AI platforms, I thrive where complex problems meet clean code. Fascinated by data, AI, and building products that solve real-world problems.
                </p>
                
                <ContactInfo />
                
                <div className="flex flex-nowrap justify-center gap-6">
                <a 
                    href="#experience" 
                    className="px-5 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
                  >
                    View Experience
                  </a>
                  <a 
                    href="#projects" 
                    className="px-5 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                  >
                    View Projects
                  </a>
                  <a 
                    href="https://design.poorvithgowda.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2"
                  >
                    <span>View Design Portfolio</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <Resume />
                </div>
              </div>
            </div>
            
            {/* Background Gradient */}
            <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-blue-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-1/4 w-1/4 h-1/3 bg-purple-500/10 blur-3xl rounded-full"></div>
          </div>
          {/* Add this to the bottom of your hero section, just before the closing </section> tag */}
<div className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-gray-400 animate-bounce">
  <span className="text-sm mb-2">Scroll for more</span>
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 5v14M5 12l7 7 7-7"/>
  </svg>
</div>
        </section>
        
        {/* About Section */}
        <section id="about" className="px-6 py-16 bg-black/60">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="4 17 10 11 4 5"></polyline>
                      <line x1="12" y1="19" x2="20" y2="19"></line>
                    </svg>
                  </span>
                  About Me
                </h2>
              </div>
              
              <div className="md:w-2/3 space-y-6">
                <p>
                  I&apos;m a full-stack engineer who builds end-to-end products—backend systems, data pipelines, and the interfaces people actually use. I care about clean code and real-world impact.
                </p>
                <p>
                  Currently at Beyond EPiC, a University of Melbourne-backed startup, where I build sustainability tools that help measure environmental impact in buildings.
                </p>
                <p>
                  Before this: enterprise systems at Accenture and health-tech platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </span>
                  Education
                </h2>
              </div>

              <div className="md:w-2/3">
                <EducationSection />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </span>
                  Experience
                </h2>
              </div>
              
              <div className="md:w-2/3 space-y-16">
                <ExperienceSection />
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="px-6 py-16 bg-black/60">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </span>
                  Projects
                </h2>
              </div>
              
              <div className="md:w-2/3 space-y-16">
                <ProjectsSection />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <SocialLinks />
            
            {/* <div className="text-sm text-gray-400">
              <p>Built with <span className="text-white">Next.js</span> and <span className="text-white">Tailwind CSS</span></p>
              <p>Coded in <span className="text-white">VS Code</span></p>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}