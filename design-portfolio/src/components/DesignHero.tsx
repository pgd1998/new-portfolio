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
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/30 rotate-45 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-500/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rotate-12 animate-spin" style={{ animationDuration: '8s' }} />

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

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Design
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-24"></div>
            <span className="mx-4 text-purple-300 font-medium">Portfolio</span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-24"></div>
          </div>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where engineering precision meets design innovation. Crafting digital experiences 
            that are both <span className="text-purple-400 font-medium">beautiful</span> and 
            <span className="text-blue-400 font-medium"> functional</span>.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for projects
              </div>
              {/* <div>•</div> */}
              {/* <div>4 Featured Projects</div> */}
            </div>
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