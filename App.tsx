import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar startupName="NovaLink AI" tagline="Connecting ideas with intelligent precision." />
      <main className="flex-grow">
        <Hero
          headline="Unleash Your Ideas with NovaLink AI's Precision Intelligence"
          subheadline="Revolutionizing data analysis and content generation through advanced AI."
          ctaText="Get Started Free"
        />
        <ProblemSolution
          problem="Overwhelmed by information overload and struggling to extract meaningful insights quickly."
          solution="NovaLink AI provides an intelligent platform that sifts through vast amounts of data, delivering concise summaries and actionable insights, dramatically improving decision-making and productivity."
        />
        <Features
          features={[
            { icon: '🎯', title: 'Targeted Data Extraction', description: 'Quickly pinpoint and retrieve the most relevant information from unstructured data sources.' },
            { icon: '⚡', title: 'Real-time Content Generation', description: 'Generate high-quality, contextually relevant content in seconds.' },
            { icon: '🔒', title: 'Secure Knowledge Base', description: 'Safely store and manage your insights with enterprise-grade security.' },
          ]}
        />
        <CallToAction ctaText="Get Started Free" />
      </main>
      <Footer copyrightYear={currentYear} />
    </div>
  );
};

export default App;