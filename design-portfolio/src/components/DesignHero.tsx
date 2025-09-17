'use client'
import { useState, useEffect } from 'react';

const DesignHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      {isClient && (
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
      )}
      
      {/* Geometric shapes - optimized with transform3d for GPU acceleration */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/30 rotate-45" style={{ transform: 'rotate(45deg) translateZ(0)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-500/30 rounded-full" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rotate-12" style={{ transform: 'rotate(12deg) translateZ(0)' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Breadcrumb */}
          {/* <div className="mb-8">
            <a 
              href="https://poorvithgowda.com" 
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium inline-flex items-center group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Software Engineering Portfolio
            </a>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
            <span className="inline-block animate-wave mr-2">👋</span> Hey there, I&apos;m Poorvith
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-gray-400 mb-6">
            <span>Designer & Engineer</span>
            <span>•</span>
            <span>📍 Melbourne, Australia</span>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-24"></div>
            <span className="mx-4 text-purple-300 font-medium">Design Portfolio</span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-24"></div>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              Welcome to my design playground! I&apos;m passionate about crafting digital experiences 
              where engineering precision meets creative innovation. I specialize in 
              <span className="text-purple-400 font-medium"> 3D web experiences</span>, 
              <span className="text-blue-400 font-medium"> data visualization</span>, and building 
              interfaces that are both beautiful and blazing fast.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a 
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 inline-flex items-center group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </a>
            {/* <a 
              href="https://poorvithgowda.com" 
              className="px-6 py-3 border border-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/10 transition-colors inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l-5.882-5.882a8 8 0 1111.765 0L10 20z" />
              </svg>
              Software Portfolio
            </a> */}
            <a 
              href="mailto:poorvithgowda10@gmail.com"
              className="px-6 py-3 border border-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/10 transition-colors inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Available for design projects
            </div>
            <div>•</div>
            <div>Specializing in 3D Web & UX</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-gray-400 animate-bounce">
        <span className="text-sm mb-2">Explore projects</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default DesignHero;