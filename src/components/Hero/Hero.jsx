import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      ></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content - Positioned Left */}
      <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-16">
        {/* Dark Oval Shape */}
        <div className="relative">
          {/* Dark Oval Shape */}
        <div className="absolute -top-[500px] -left-20 sm:-left-40 
          w-[100vw] sm:w-[800px] 
          h-[110vh] sm:h-[1260px] 
          bg-black bg-opacity-60 rounded-[50%] transform rotate-[-6deg]">
        </div>


          {/* Text Content */}
          <div className="relative max-w-md sm:max-w-lg text-white p-6 sm:p-10 z-10">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug sm:leading-tight font-poppins">
              Your strategic partner in navigating the complexities of today’s business landscape to ensure future readiness.
            </h1>
            <Link to="/contact-us">
              <button className="mt-4 sm:mt-6 bg-teal-700 text-white px-20 sm:px-20 lg:px-40 md:px-40 py-2 sm:py-3 rounded-full hover:bg-teal-600 sm:w-auto">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
