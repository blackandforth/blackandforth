import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2/Navbar2";

const Hero2 = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/foundation-hero.png')" }}></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Navbar */}
      <Navbar2 />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16 pt-32 lg:mt-80 md:mt-60">
        <div className="max-w-lg text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Breaking down barriers to create thriving societies.
          </h1>
          <Link to="/contact-us">
            <button className="mt-8 sm:mt-10 md:mt-12 bg-teal-700 text-white px-12 sm:px-20 py-3 rounded-full hover:bg-teal-600 transition-all duration-300">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
