import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }}></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content - Positioned Left */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16">
        {/* Shadow + Text Wrapper */}
        <div className="relative flex items-center">
          {/* Semi-Transparent Dark Rounded Shadow */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-black bg-opacity-40 w-[380px] h-[380px] rounded-full blur-2xl"></div>

          {/* Text Content */}
          <div className="relative max-w-lg text-white z-10">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight font-poppins">
              Your strategic partner in navigating the complexities of today’s business landscape to ensure future readiness.
            </h1>
            <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
