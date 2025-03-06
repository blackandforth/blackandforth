import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      ></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content - Positioned Left */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16">
        {/* Dark Oval Shape */}
        <div className="relative">
        <div className="absolute -top-[580px] -left-40 w-[800px] h-[1220px] bg-black bg-opacity-60 rounded-[40%] transform rotate-[-6deg]"></div>


          {/* Text Content */}
          <div className="relative max-w-lg text-white p-10 z-10">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight font-poppins">
              Your strategic partner in navigating the complexities of today’s business landscape to ensure future readiness.
            </h1>
            <Link to="/contact-us">
              <button className="mt-6 bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-600 w-full">
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
