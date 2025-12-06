import React from 'react';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, ctaText }) => {
  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-32 text-center text-white bg-gradient-to-br from-[#7C3AED] to-[#10B981] shadow-lg">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          {headline}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
          {subheadline}
        </p>
        <button className="bg-white text-[#7C3AED] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-lg">
          {ctaText}
        </button>
      </div>
      {/* Subtle background animations/shapes */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="0.1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,192C672,192,768,160,864,160C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;