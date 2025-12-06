import React from 'react';

interface FooterProps {
  copyrightYear: number;
}

const Footer: React.FC<FooterProps> = ({ copyrightYear }) => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p>&copy; {copyrightYear} NovaLink AI. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#10B981] transition-colors" aria-label="Follow NovaLink AI on Facebook">
            <img src="https://picsum.photos/24/24?random=1" alt="Facebook social media icon" className="w-6 h-6 rounded-full" />
          </a>
          <a href="#" className="hover:text-[#10B981] transition-colors" aria-label="Follow NovaLink AI on Twitter">
            <img src="https://picsum.photos/24/24?random=2" alt="Twitter social media icon" className="w-6 h-6 rounded-full" />
          </a>
          <a href="#" className="hover:text-[#10B981] transition-colors" aria-label="Follow NovaLink AI on LinkedIn">
            <img src="https://picsum.photos/24/24?random=3" alt="LinkedIn social media icon" className="w-6 h-6 rounded-full" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;