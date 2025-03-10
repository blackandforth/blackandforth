import React from "react";
import { Link } from "react-router-dom";

const BusinessConsultingSolutions = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="w-12 h-1 bg-gray-900 mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold font-poppins">
            BUSINESS CONSULTING SOLUTIONS
          </h2>
        </div>

        {/* Introductory Section */}
        <div className="bg-gray-100 rounded-lg grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden">
          <div className="p-6 md:p-10 flex items-center">
            <p className="text-gray-700 leading-relaxed font-poppins text-justify">
              We assist companies in developing comprehensive corporate strategies aligned with market conditions, growth objectives, and capital flows. We craft profitable go-to-market strategies and provide strategic enablement frameworks to support their success. Our strategies are tailored to diverse business domains, catering to your specific needs. We empower businesses to achieve their strategic objectives through industry-proven models that deliver a return on investment. We offer customized solutions to foster growth, scalability, and stability for our clients, encompassing startups, entrepreneurs, corporates, MSMEs, and non-profits.
            </p>
          </div>
          <div className="w-full h-full">
            <img
              src="/business-consulting.jpg"
              alt="Business Consulting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Service Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
          <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 w-full">
            <h3 className="font-semibold text-lg text-gray-900 font-poppins">
              Strategy Planning & Facilitation Services
            </h3>
            <ul className="mt-4 text-gray-600 space-y-2 text-sm font-poppins">
              <li>Corporate Strategies</li>
              <li>Global & Growth Strategies for expansion</li>
              <li>Business Model Development & Transformation</li>
            </ul>
          </div>

          <div className="bg-gray-900 text-white shadow-md p-6 rounded-lg w-full">
            <h3 className="font-semibold text-lg font-poppins">
              Operations Consulting Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm font-poppins">
              <li>Target Operating Models</li>
              <li>Business Processes Modelling & Re-engineering</li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 w-full">
            <h3 className="font-semibold text-lg text-gray-900 font-poppins">
              Technology Consulting Services
            </h3>
            <ul className="mt-4 text-gray-600 space-y-2 text-sm font-poppins">
              <li>Digital Transformation Strategies</li>
              <li>Web Development</li>
              <li>Mobile Development</li>
            </ul>
          </div>

          <div className="bg-gray-900 text-white shadow-md p-6 rounded-lg w-full">
            <h3 className="font-semibold text-lg font-poppins">
              Business Outsourcing & Secondment Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm font-poppins">
              <li>Business-Focused Project Management</li>
              <li>IT Project Management</li>
              <li>Applications Development: AI Tools (Web and Mobile)</li>
              <li>Applications Support</li>
              <li>Desktop Support</li>
              <li>SETA Accredited Training</li>
              <li>Customized Training</li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center w-full">
          <Link to="/contact-us">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md font-poppins">
              CONTACT US FOR A DISCOVERY CALL
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessConsultingSolutions;
