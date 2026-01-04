import React from 'react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-400 mb-12">
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>Melbourne, Victoria</span>
      </div>
      <div className="hidden sm:block h-4 w-px bg-gray-700"></div>
      <a href="mailto:poorvithgowda10@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span>poorvithgowda10@gmail.com</span>
      </a>
      <div className="hidden sm:block h-4 w-px bg-gray-700"></div>
      <a href="tel:0410876750" className="flex items-center gap-2 hover:text-white transition-colors">
        <span>0410 876 750</span>
      </a>
    </div>
  );
};

export default ContactInfo;