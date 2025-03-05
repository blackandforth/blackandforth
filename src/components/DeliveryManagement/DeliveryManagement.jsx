import React from "react";
import { Plus } from "lucide-react";

const DeliveryManagement = () => {
  return (
    <div className="bg-white text-gray-900 font-poppins">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-center text-2xl font-bold uppercase mb-4">
          Delivery Management & Advisory
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 font-poppins">
          Delivering projects is crucial for any organization, regardless of its size or industry. It’s pivotal to an organization's reputation and can significantly contribute to its growth. Moreover, the psychological aspects, tools, and techniques must be effectively organized and coordinated to achieve ultimate success.
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
          <img
            src="/project-management.png"
            alt="Project Management"
            className="w-3/4 md:w-1/3 rounded-lg shadow-lg"
          />
          <div className="w-full md:w-1/2 p-6">
            {[
              "Portfolio/Program management office (PMO) establishment and coaching",
              "Program and Project management Consulting and Coaching",
              "Project Management Outsourcing",
            ].map((item, index) => (
              <div
                key={index}
                className="flex text-justify leading-relaxed border-b pb-3 last:border-none py-2"
              >
                <Plus className="text-gray-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div 
        className="relative bg-black text-white py-20"
        style={{ backgroundImage: "url('/background-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <p className="text-lg font-semibold max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help.
          </p>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg shadow-lg border border-gray-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryManagement;