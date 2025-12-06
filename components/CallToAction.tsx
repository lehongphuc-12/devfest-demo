import React from 'react';

interface CallToActionProps {
  ctaText: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ ctaText }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white text-center shadow-inner">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
          Ready to transform your data into insights?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Join NovaLink AI today and experience the future of intelligent information management.
        </p>
        <button className="bg-white text-[#7C3AED] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-lg">
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;