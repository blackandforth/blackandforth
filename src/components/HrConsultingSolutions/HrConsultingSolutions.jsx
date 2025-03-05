import React from "react";

const HrConsultingSolutions = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-16 px-6 md:px-16 lg:px-32">
      <div className="text-center mb-8">
        <div className="w-12 h-1 bg-gray-900 mx-auto mb-4"></div>
        <h2 className="text-2xl md:text-3xl font-bold font-poppins">
          HR CONSULTING & CUSTOMIZED TRAINING SOLUTIONS
        </h2>
      </div>

      <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-8 font-poppins">
        Traditional training solutions, while effective in the past, often fail
        to meet the current needs of organizations, especially those that rely
        on high-performing teams for competitiveness. Our mission is to empower
        you and your teams to unlock your full potential, build high-performing
        teams, create an empowering workplace, and achieve long-term sustained
        growth.
      </p>

      <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold font-poppins">
        We offer the following solutions:
      </p>

      {/* Image containing both HR Consulting & Customized Training */}
      <div className="flex justify-center">
        <img
          src="/consulting-training.png"
          alt="HR Consulting & Customized Training"
          className="w-full max-w-4xl rounded-lg"
        />
      </div>
    </div>
  );
};

export default HrConsultingSolutions;
