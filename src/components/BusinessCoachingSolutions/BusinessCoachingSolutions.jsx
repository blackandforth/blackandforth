import React from "react";
import { FaUserTie, FaUsers, FaChartLine, FaWallet, FaComments, FaDigitalTachograph } from "react-icons/fa";

const BusinessCoachingSolutions = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-32 text-center">
      {/* Title Section */}
      <div className="mb-8">
        <div className="w-12 h-1 bg-gray-900 mx-auto mb-4"></div>
        <h2 className="text-2xl md:text-3xl font-bold font-poppins">BUSINESS COACHING SOLUTIONS</h2>
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-6xl mx-auto text-justify leading-relaxed mb-8 font-poppins">
        Delivering projects is crucial for any organization, regardless of its size or industry. It's pivotal to an organization's reputation and can significantly contribute to its growth. Moreover, the psychological aspects, tools, and techniques must be effectively organized and coordinated to achieve ultimate success. Project management has evolved from being considered an administrative function to a strategic enablement function. Our expertise is focused on helping your organization maximize project delivery through our highly experienced and qualified associates. Our delivery management capabilities include:
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto place-items-center font-poppins">
        {[
          { icon: <FaUserTie />, title: "Founder coaching" },
          { icon: <FaUsers />, title: "Team coaching" },
          { icon: <FaChartLine />, title: "Strategy and operations advisory" },
          { icon: <FaWallet />, title: "Financial coaching" },
          { icon: <FaComments />, title: "Integrated communications advisory" },
          { icon: <FaDigitalTachograph />, title: "Digital business transformation coaching" },
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow flex flex-col items-center justify-center w-56 h-56">
            <div className="text-3xl text-gray-700 mb-3">{item.icon}</div>
            <div className="text-gray-800 font-semibold">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Contact Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow font-poppins">
          CONTACT US FOR A DISCOVERY CALL
        </button>
      </div>
    </div>
  );
};

export default BusinessCoachingSolutions;
