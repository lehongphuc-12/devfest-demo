import React from 'react';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, ctaText }) => {
  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById('problem-solution'); // Scrolls to the Problem/Solution section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-32 text-center text-white bg-gradient-to-br from-[#7C3AED] to-[#10B981] shadow-lg">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-24 h-24 bg-white rounded-full blur-xl top-1/4 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-32 h-32 bg-white rounded-full blur-xl bottom-1/3 right-1/3 animate-pulse-medium"></div>
        <div className="absolute w-20 h-20 bg-white rounded-full blur-xl top-1/2 right-1/4 animate-pulse-fast"></div>
        <div className="absolute w-28 h-28 bg-white rounded-full blur-xl bottom-1/4 left-1/3 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg" aria-label={headline}>
          {headline}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
          {subheadline}
        </p>
        <button
          className="bg-white text-[#7C3AED] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-lg"
          aria-label={ctaText}
        >
          {ctaText}
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={handleScrollToNextSection}
          className="animate-bounce p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300"
          aria-label="Scroll down to learn more about NovaLink AI"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;