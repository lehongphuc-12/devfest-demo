import React, { useRef, useEffect, useState } from 'react';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: FeatureItem[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleStates, setVisibleStates] = useState<boolean[]>(features.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '-1');
          if (index !== -1) {
            setVisibleStates((prev) => {
              const newState = [...prev];
              if (entry.isIntersecting) {
                newState[index] = true;
              }
              return newState;
            });
          }
        });
      },
      {
        threshold: 0.4, // Trigger when 40% of the item is visible
      }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [features]);

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              // FIX: Ensure the ref callback does not return a value.
              // The ref prop expects a function that takes an HTMLDivElement or null and returns void.
              // The original `(el) => (featureRefs.current[index] = el)` implicitly returned `el`.
              ref={(el) => { featureRefs.current[index] = el; }}
              data-index={index}
              className={`bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-700 ease-out
                ${visibleStates[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              aria-label={`Feature: ${feature.title}. Description: ${feature.description}`}
            >
              <div className="text-5xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;