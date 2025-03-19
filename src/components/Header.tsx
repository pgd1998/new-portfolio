import Link from 'next/link';
import { useState, useEffect } from 'react';

type HeaderProps = {
  activeSection?: string;
};

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`py-6 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 px-8 md:px-20 lg:px-24' : ''}`}>
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Poorvith Gowda
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`}
          >
            ABOUT
          </Link>
          <Link 
            href="#experience" 
            className={`nav-link ${activeSection === 'experience' ? 'active-link' : ''}`}
          >
            EXPERIENCE
          </Link>
          <Link 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active-link' : ''}`}
          >
            PROJECTS
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <nav className="mt-4 md:hidden flex flex-col space-y-4">
          <Link 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link 
            href="#experience" 
            className={`nav-link ${activeSection === 'experience' ? 'active-link' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            EXPERIENCE
          </Link>
          <Link 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active-link' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            PROJECTS
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;