import React from "react";

const EngagementModel = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-16 lg:px-32">
      <div className="mb-12">
        <div className="w-12 h-1 bg-white mx-auto mb-4 leading-relaxed"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-center font-poppins">ENGAGEMENT MODEL</h2>
        <p className="text-gray-300 mt-4 max-w-6xl mx-auto font-poppins">
          Our engagement model is based on the integration of behavioral science, business science, and human capabilities as the foundation of organizational success. These core areas should not operate independently; a systemic thinking approach is necessary to enable comprehensive analysis, solution formulation, and execution. Our engagement model is designed with a future-oriented mindset, while acknowledging current circumstances as the starting point for designing the ideal future.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="relative max-w-3xl">
          <img src="/chart-01.png" alt="Engagement Model Chart" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default EngagementModel;
