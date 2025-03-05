import React from "react";

const SkillsSection = () => {
  return (
    <div className="flex justify-center items-center gap-6 p-8 bg-gray-100">
      {/* Professional Skills Programs */}
      <div className="bg-teal-800 text-white p-8 w-1/3 flex flex-col h-[400px]">
        <h2 className="text-lg font-semibold font-poppins">Professsional Skills Programs</h2>
        <hr className="w-16 border-black mt-2 font-poppins" />
        <ul className="mt-4 space-y-2">
          <li>Project Management</li>
          <li>Business Analysis</li>
        </ul>
      </div>

      {/* Technology Skills */}
      <div className="bg-white text-black p-8 w-1/3 flex flex-col shadow-lg h-[400px]">
        <h2 className="text-lg font-semibold font-poppins">Technology Skills</h2>
        <hr className="w-16 border-black mt-2" />
        <ul className="mt-4 space-y-2 font-poppins">
          <li>AI Development</li>
          <li>Coding</li>
          <li>UX Design</li>
          <li>UI Design</li>
          <li>Graphic Design</li>
        </ul>
      </div>

      {/* Technical Skills */}
      <div className="bg-teal-800 text-white p-8 w-1/3 flex flex-col h-[400px]">
        <h2 className="text-lg font-semibold font-poppins">Technical Skills</h2>
        <hr className="w-16 border-black mt-2" />
        <ul className="mt-4 space-y-2 font-poppins">
          <li>Artisan Training</li>
          <li>Agriculture Skills</li>
          <li>Circular Economy</li>
          <li>Manufacturing</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
