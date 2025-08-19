import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution:
        "Global Institute of Technology & Management, Farrukhnagar, Gurgaon",
      duration: "Aug 2020 - May 2024",
      description:
        "Focused on full-stack web development, Data Structures & Algorithms, and AI-based projects.",
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "ABC School",
      duration: "Jun 2018 - May 2020",
      description: "Science stream with Physics, Chemistry, and Mathematics.",
    },
    {
      degree: "Secondary (10th)",
      institution: "XYZ School",
      duration: "Apr 2016 - Mar 2018",
      description: "Completed with distinction, strong foundation in science and mathematics.",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Education
        </h2>
        <div className="relative border-l-2 border-blue-500 ml-6">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-10 ml-8 relative">
              {/* Circle with Icon */}
              <div className="absolute -left-7 top-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
                <FaGraduationCap size={20} />
              </div>

              {/* Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 mt-1">{edu.institution}</p>
                <p className="text-gray-500 italic text-sm">{edu.duration}</p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

