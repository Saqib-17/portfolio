import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center space-y-4 px-6 sm:px-12 py-24 rounded-xl
                 bg-gradient-to-b from-[#B6CEB4] to-[#D9E9CF]"
      style={{ paddingTop: '120px' }} // optional extra padding if navbar is tall
    >
      <h1 className="text-5xl sm:text-6xl font-bold text-[#6FA4AF] fade-in-up">
        Hi, I’m Saqib
      </h1>

      <h2 className="text-2xl text-[#D97D55] fade-in-up delay-200">
        Computer Science Student & Frontend Developer
      </h2>

      <p className="max-w-xl text-gray-700 leading-relaxed fade-in-up delay-400">
        I build modern, responsive web applications with React, Node.js, and MongoDB. I’m passionate
        about design, interactivity, and creating meaningful digital experiences.
      </p>

      <a
        href="#skills-projects"
        className="mt-4 inline-block bg-[#6FA4AF] text-white px-6 py-3 rounded-full shadow-lg 
                   hover:bg-[#D97D55] hover:shadow-xl transform hover:scale-105 transition"
      >
        View My Work
      </a>
    </section>
  );
}
