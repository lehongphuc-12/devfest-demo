import React from 'react';

interface ProblemSolutionProps {
  problem: string;
  solution: string;
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ problem, solution }) => {
  return (
    <section id="problem-solution" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          From Problem to Solution
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 items-center justify-center">
          {/* Problem Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2 max-w-md border-t-4 border-red-500">
            <h3 className="text-2xl font-semibold mb-4 text-red-600 flex items-center">
              <span className="text-3xl mr-3">⚠️</span> Problem
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {problem}
            </p>
          </div>

          {/* Solution Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2 max-w-md border-t-4 border-[#10B981]">
            <h3 className="text-2xl font-semibold mb-4 text-[#10B981] flex items-center">
              <span className="text-3xl mr-3">💡</span> Solution
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;