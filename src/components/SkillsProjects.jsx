import React from "react";
import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "C", "C++", "GitHub", "Tailwind CSS"];

const projects = [
  {
    title: "QuizWhiz Educational Platform",
    desc: "Full-stack React & MongoDB platform for MCQ exams.",
  },
  {
    title: "IoT Smart Street Light System",
    desc: "Arduino & ESP8266 system with remote monitoring.",
  },
  {
    title: "Fitness Center Member System",
    desc: "C++ data structure project for managing members.",
  },
];

export default function SkillsProjects() {
  return (
    <section id="skills" className="py-16 bg-[#B6CEB4]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#4b6043] mb-8"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-[#96A78D] text-white px-4 py-2 rounded-xl text-sm hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>

        <motion.h2
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#4b6043] mb-8"
        >
          Projects
        </motion.h2>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-[#D9E9CF] p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold text-[#4b6043] mb-2">{p.title}</h3>
              <p className="text-[#333]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
