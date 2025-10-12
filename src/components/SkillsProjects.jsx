import React from "react";
import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "C", "C++", "GitHub", "Tailwind CSS"];

const projects = [
  {
    title: "Web-based Educational Platform (Frontend & Database Focus)",
    desc: "Built a full-stack platform using React and MongoDB for MCQ-based exams with secure authentication, focusing on frontend development and database management for real-time data handling and a responsive user interface.",
    linkText: "Quiz Whiz Educational Platform",
    link: "https://quiz-whiz-frontend.vercel.app/"
  },
  {
    title: "IoT-Based Smart Street Light System",
    desc: "Developed a smart street light system using Arduino, IR sensors, and ESP8266 WiFi for vehicle detection and remote light monitoring via a web dashboard.",
    linkText: "GitHub Repository",
    link: "https://github.com/Saqib-17/smart-street-light-project"
  },
  {
    title: "Quiz-based Educational Mobile App (Team Lead & Developer)",
    desc: "Developed using React Native with a Node.js and MongoDB backend for synchronized data management. Successfully deployed and published as a running Android app.",
    linkText: "GitHub Repository",
    link: "https://github.com/Saqib-17/QuizWhiz-Mobile-App"
  },
];

export default function SkillsProjects() {
  return (
    <section id="skills-projects" className="py-16 bg-[#B6CEB4]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Skills Section */}
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

        {/* Projects Section */}
        <motion.h2
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
              <p className="text-[#333] mb-3">{p.desc}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6FA4AF] font-medium hover:underline"
                >
                  {p.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
