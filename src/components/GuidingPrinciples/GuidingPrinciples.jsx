import React from "react";
import AboutImg from "../../assets/website/about-us.png";
import GuidingPrinciplesImg from "/principles.png"; // Replace with your actual image path

const GuidingPrinciples = () => {
    return (
      <div className="bg-gray-100 py-16 px-6 md:px-16 lg:px-32">
        <div className="text-center mb-8">
          <div className="w-12 h-1 bg-black mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins">
            OUR GUIDING PRINCIPLES
          </h2>
        </div>

        {/* Image replacing the previous table */}
        <div className="flex justify-center">
          <img 
            src={GuidingPrinciplesImg} 
            alt="Guiding Principles" 
            className="w-full max-w-7xl rounded-lg"
          />
        </div>
      </div>
    );
}

export default GuidingPrinciples;
