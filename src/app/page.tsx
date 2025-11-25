"use client"
import { useState, useEffect } from 'react';
import SocialLinks from '@/components/SocialLinks';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
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
        <section className="min-h-[92vh] flex flex-col justify-center relative overflow-hidden px-6 py-24">
          <div className="max-w-6xl mx-auto w-full">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Poorvith Gowda</h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold">Full-Stack Software Engineer</h2>

              <div className="max-w-2xl">
                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                  I build production systems from 0→1 — from React frontends to FastAPI backends, ML pipelines to AWS infrastructure. Currently building environmental modeling tools at Beyond EPiC.
                </p>

                <p className="text-base md:text-lg text-gray-400 mb-8">
                  <span className="font-semibold text-white">Looking for:</span> Full-stack SWE roles at early-stage startups in Melbourne/Sydney
                </p>

                <div className="flex flex-wrap gap-4">
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
                    href="https://github.com/Poorvak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 border border-gray-600 text-gray-300 font-medium rounded-md hover:border-gray-400 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/poorvithgowda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 border border-gray-600 text-gray-300 font-medium rounded-md hover:border-gray-400 hover:text-white transition-colors"
                  >
                    LinkedIn
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
        <section id="about" className="px-6 py-24 bg-black/60">
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

              <div className="md:w-2/3 space-y-6 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a software engineer passionate about creating accessible, well-engineered user interfaces that blend thoughtful design with robust technical implementation. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                </p>
                <p>
                  Currently, I&apos;m a Software Developer at <span className="text-white font-medium">Beyond EPiC</span> (backed by University of Melbourne), where I joined as the <span className="text-white font-medium">second employee</span> and have been building computational tools for environmental impact modeling. I lead development of the Rephrame platform and Nested Phoenix, ensuring our software meets web accessibility standards and best practices to deliver an inclusive user experience.
                </p>
                <p>
                  In the past, I&apos;ve had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. This diverse experience has given me a strong foundation in building software that scales and adapts to different needs.
                </p>
                <p>
                  Outside of work, I&apos;m an active builder — I created <span className="text-white font-medium">F1 Intelligence</span>, a machine learning system for race predictions, and <span className="text-white font-medium">KnowHub</span>, an AI-powered knowledge management platform. I&apos;m passionate about exploring the intersection of AI, data visualization, and web technologies.
                </p>

                <EducationSection />
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="px-6 py-24">
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
        <section id="projects" className="px-6 py-24 bg-black/60">
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

        {/* Closing CTA Section */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
              <div className="relative bg-black/60 p-8 md:p-12 rounded-2xl border border-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build Something</h2>

                <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
                  I&apos;m looking for full-stack engineering roles at early-stage startups in Melbourne or Sydney where I can contribute across the stack, make architecture decisions, and help build 0→1 products.
                </p>

                <p className="text-base text-gray-400 mb-8">
                  Currently on 485 visa (valid until 2029)
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <a
                    href="mailto:poorvithgowda@gmail.com"
                    className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Email Me
                  </a>
                  <a
                    href="https://calendly.com/poorvithgowda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                  >
                    Schedule Call
                  </a>
                  <Resume />
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-500 mb-3">Tech I&apos;m excited about right now:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">RAG systems</span>
                    <span className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">AI agents</span>
                    <span className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Real-time data processing</span>
                    <span className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Vector databases</span>
                  </div>
                </div>
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
            
            <div className="text-sm text-gray-400">
              <p>Built with <span className="text-white">Next.js</span> and <span className="text-white">Tailwind CSS</span>, deployed with <span className="text-white">Vercel</span></p>
              <p>Coded in <span className="text-white">VS Code</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}