"use client";
import React from "react";

const ExperienceSection = () => {
  return (
    <div 
      className="hero]">
          <h1 className="text-4xl font-bold py-5 text-[#4F6F52]">Experience</h1>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <p className="py-1 font-semibold text-lg">Intern at CloudEye Technologies - Full Stack developer</p>
          <p className="text-[#266631] text-lg lg:mt-2">Worked on developing and enhancing full-stack web applications. Implemented responsive user interfaces using modern front-end frameworks, while managing backend logic and database integration. Collaborated with cross-functional teams to deliver scalable, efficient, and user-friendly solutions, focusing on both UI/UX design and server-side performance optimization.</p>
        </div>
        
        <div>
          <p className="py-1 font-semibold text-lg">Intern at Aegion dynamics - Frontend developer</p>
          <p className="text-[#266631] text-lg lg:mt-2">Specializing in developing responsive, user-friendly web interfaces using technologies like React, JavaScript and Tailwind CSS. Collaborated with design and development teams to implement visually appealing UI/UX, optimize performance, and ensure cross-browser compatibility. Focused on writing clean, maintainable code and leveraging modern frontend frameworks to deliver scalable and high-quality web solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
