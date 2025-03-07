import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";


const DeliveryManagement = () => {
  return (
    <div className="bg-white text-gray-900 font-poppins">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold uppercase mb-6">
          Delivery Management & Advisory
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 max-w-6xl mx-auto text-center text-justify leading-relaxed">
          Delivering projects is crucial for any organization, regardless of its size or industry. It’s pivotal to an organization's reputation and can significantly contribute to its growth. Moreover, the psychological aspects, tools, and techniques must be effectively organized and coordinated to achieve ultimate success. Project management has evolved from being considered an administrative function to a strategic enablement function. Our expertise is focused on helping your organization maximize project delivery through our highly experienced and qualified associates. Our delivery management capabilities include:
        </p>
        
        {/* Content section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/project-management.png"
              alt="Project Management"
              className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
            />
          </div>
          
          {/* List */}
          <div className="w-full md:w-1/2 px-4 sm:px-6">
  {[
    "Portfolio/Program management office (PMO) establishment and coaching",
    "Program and Project management Consulting and Coaching",
    "Project Management Outsourcing",
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center border-b pb-6 last:border-none py-2 mr-0 md:mr-8 flex-nowrap"
    >
      <Plus className="text-gray-600 mr-3 flex-shrink-0" />
      <span className="text-gray-700 leading-relaxed text-sm sm:text-base min-w-0">
        {item}
      </span>
    </div>
  ))}
</div>


        </div>
      </div>

      {/* Contact Section */}
      <div 
        className="relative bg-black text-white py-20 mt-12"
        style={{ backgroundImage: "url('/background-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Darkened overlay */}
        <div className="container mx-auto text-center relative z-10 px-6">
          <p className="text-lg font-semibold max-w-3xl mx-auto">
            We’d love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help.
          </p>
          <Link to="contact-us">
            <button className="mt-6 border border-white px-12 py-2 rounded-full hover:bg-white hover:text-gray-900 transition">
              Contact Us
            </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default DeliveryManagement;
