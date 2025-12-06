import React from 'react';

interface NavbarProps {
  startupName: string;
  tagline: string;
}

const Navbar: React.FC<NavbarProps> = ({ startupName, tagline }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-sm p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#10B981]">
            {startupName}
          </span>
          <p className="hidden md:block ml-4 text-gray-600 text-sm italic">
            {tagline}
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="text-gray-600 hover:text-[#7C3AED] transition-colors">Home</a>
          <a href="#problem-solution" onClick={(e) => handleScroll(e, 'problem-solution')} className="text-gray-600 hover:text-[#7C3AED] transition-colors">About</a>
          <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-gray-600 hover:text-[#7C3AED] transition-colors">Features</a>
          <a href="#call-to-action" onClick={(e) => handleScroll(e, 'call-to-action')} className="text-gray-600 hover:text-[#7C3AED] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;