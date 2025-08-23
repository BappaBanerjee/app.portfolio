// EducationSection.jsx
import React from "react";
import { educationList } from "../../data/education";

const EducationSection = () => {
  return (
    <div className="mt-20">
      <h2 className="section-title">
        My <span className="section-title-highlight">Education</span>
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="border-l-4 border-red-600 pl-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {edu.degree}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {edu.institution} • {edu.duration}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              {edu.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
