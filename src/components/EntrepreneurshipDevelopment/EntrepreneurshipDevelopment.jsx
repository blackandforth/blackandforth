import React from "react";
import { FaPlus } from "react-icons/fa";

const EntrepreneurshipDevelopment = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-12">
      {/* Header */}
      <div className="w-16 border-t-4 border-teal-700 mt-2 mb-6"></div>
      <h2 className="text-3xl font-bold text-center">ENTREPRENEURSHIP DEVELOPMENT</h2>

      {/* Content Section */}
      <div className="max-w-5xl mt-8 flex flex-col md:flex-row">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 p-4 text-gray-700 text-justify">
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
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-start mt-8 md:mt-0">
          {/* Image Section */}
          <img
            src="/37197.jpg"
            alt="Success Illustration"
            className="w-full md:w-80 h-80 md:h-80 object-cover mb-4 md:mb-0"
          />

          {/* Expandable List */}
          <div className="w-full md:max-w-md flex flex-col justify-start md:ml-8">
            <p className="text-gray-700 mb-6 text-justify">
              Our approach places a strong emphasis on three fundamental building blocks
              that are essential for increasing entrepreneurship success.
            </p>
            <div className="w-full border-t border-gray-300">
              {["Entrepreneurial Mindset", "Market Development", "Market Access", "Operational Excellence"].map((item, index) => (
                <div key={index} className="border-b border-gray-300 py-3 flex items-center cursor-pointer">
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
