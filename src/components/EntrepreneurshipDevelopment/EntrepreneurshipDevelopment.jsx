import React from "react";
import { FaPlus } from "react-icons/fa";

const EntrepreneurshipDevelopment = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-12">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center">ENTREPRENEURSHIP DEVELOPMENT</h2>
      <div className="w-16 border-t-4 border-teal-700 mt-2"></div>

      {/* Content Section */}
      <div className="max-w-5xl mt-8">
        {/* Left Text Section */}
        <div className="w-full p-4 text-gray-700 text-justify">
          <p>
            Entrepreneurship in Africa, particularly in South Africa, holds immense
            significance in fostering economic growth, job creation, and social
            transformation. The continent’s youthful population, coupled with its abundant
            natural resources and growing digital connectivity, presents a substantial
            opportunity for entrepreneurial flourishing. However, South Africa continues
            to grapple with stagnant economic growth and high unemployment rates.
          </p>
          <p className="mt-4">
            Despite the numerous entrepreneurship interventions initiated annually, the
            impact of these initiatives has yet to be realized in a meaningful and
            impactful manner. Our entrepreneurship development approach stands out in
            several ways. Unlike traditional approaches, it emphasizes ongoing support,
            enabling entrepreneurs to unlock the ability to realize return on investment
            in real time.
          </p>
        </div>
        
        {/* Right Section with Image & List */}
        <div className="w-full p-4 flex flex-row items-center mt-8 text-center">
          <img
            src="/37197.jpg"
            alt="Success Illustration"
            className="w-80 h-80 mb-6"
          />
          
          {/* Expandable List */}
          <div className="max-w-md">
            <p className="text-gray-700 mb-6 px-4">
              Our approach places a strong emphasis on three fundamental building blocks
              that are essential for increasing entrepreneurship success.
            </p>
            <div className="w-full max-w-md border-t border-gray-300">
              {["Entrepreneurial Mindset", "Market Development", "Market Access", "Operational Excellence"].map((item, index) => (
                <div key={index} className="border-b border-gray-300 py-3 flex items-center cursor-pointer px-2">
                  <FaPlus className="text-gray-500 mr-6" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurshipDevelopment;
