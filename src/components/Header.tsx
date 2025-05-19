import Link from 'next/link';
import { useState, useEffect } from 'react';

type HeaderProps = {
  activeSection?: string;
};

const Header = ({ activeSection }: HeaderProps) => {
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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800' : ''}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            PG
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['ABOUT', 'EXPERIENCE', 'PROJECTS'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-1 py-2 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>{item}</span>
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-white transform transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden pt-16 bg-black">
          <div className="w-full flex flex-col p-6">
            {['ABOUT', 'EXPERIENCE', 'PROJECTS'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`py-4 text-2xl font-medium border-b border-gray-800 ${
                  activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;