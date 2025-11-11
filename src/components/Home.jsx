// src/components/Home.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import saqib from "../assets/saqib.jpg";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiGithub,
  SiExpo,
  SiNextdotjs,
  SiArduino,
} from "react-icons/si";

// (these PNGs are still fine to keep if you use them elsewhere later)
import arduinoIcon from "../assets/arduino.png";
import irsensorIcon from "../assets/irsensor.png";
import espIcon from "../assets/esp.png";

import quizwhiz from "../assets/quizwhiz.png";
import iot from "../assets/iot.png";
import mobileapp from "../assets/mobileapp.png";
import donationbd from "../assets/donationbd.png";

import greenEarth from "../assets/green-earth.png";
import flowerMart from "../assets/flower-mart.png";

import ss01 from "../assets/ss01.png";
import ss02 from "../assets/ss02.png";
import ss03 from "../assets/ss03.png";
import ss04 from "../assets/ss04.png";
import ss05 from "../assets/ss05.png";
import ss06 from "../assets/ss06.png";

const skills = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiNodedotjs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Firebase", Icon: SiFirebase },
  { name: "C", Icon: SiC },
  { name: "C++", Icon: SiCplusplus },
  { name: "GitHub", Icon: SiGithub },
  { name: "React Native", Icon: SiReact },
  { name: "Expo", Icon: SiExpo },
];

// tech label → icon map (for project pills)
const techIconMap = {
  React: SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  Node: SiNodedotjs,
  MongoDB: SiMongodb,
  Express: SiNodedotjs,
  Tailwind: SiTailwindcss,
  Firebase: SiFirebase,
  C: SiC,
  "C++": SiCplusplus,
  Arduino: SiArduino,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  Expo: SiExpo,
  // things like JSON, Vercel, API, Netlify will just show text only (no icon)
};

const projects = [
  {
    title: "Quiz Whiz – Web-based Educational Platform",
    tech: "React, Node, MongoDB, Express, Firebase, Tailwind",
    img: quizwhiz,
    live: "https://quiz-whiz-frontend.vercel.app/",
  },
  {
    title: "IoT-Based Smart Street Light System",
    tech: "Arduino, IR Sensor, ESP8266 WiFi, React, Node",
    img: iot,
    github: "https://github.com/Saqib-17/smart-street-light-project",
  },
  {
    title: "Donation BD – Charity & Fundraising Platform",
    tech: "React, Node, Express, MongoDB, Tailwind, Firebase",
    img: donationbd,
    live: "https://donation-client-six.vercel.app/",
  },
  {
    title: "QuizWhiz Mobile App – Educational App",
    tech: "React Native, Expo, Node, Express, Firebase, MongoDB",
    img: mobileapp,
    github: "https://github.com/Saqib-17/QuizWhiz-Mobile-App",
    drive:
      "https://drive.google.com/file/d/1IexOYfIYzKe7QeHKx27_2SvXTigHdZSS/view?usp=sharing",
    screenshots: [ss01, ss02, ss03, ss04, ss05, ss06],
  },
  // 🌱 Green Earth
  {
    title: "Green Earth – Eco Campaign Platform",
    tech: "Next.js, React, Tailwind, JSON, Vercel",
    img: greenEarth,
    live: "https://green-earth-ebon.vercel.app/",
    github: "https://github.com/Saqib-17/Green-Earth.git",
  },
  // 🌸 Flower Mart
  {
    title: "Flower Mart – Online Flower Shop",
    tech: "React, Tailwind, React Router, Netlify, API",
    img: flowerMart,
    live: "https://flower-mart.netlify.app/",
    github: "https://github.com/Saqib-17/Flower-Mart.git",
  },
];

const Home = () => {
  const name = "S A Q I B".split(" ");
  const [selectedImages, setSelectedImages] = useState([]);

  return (
    <>
      {/* HERO SECTION (unchanged) */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-gradient-to-br from-[#D9E9CF] to-[#F0F0F0]"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <img
            src={saqib}
            alt="Saqib"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-[#B6CEB4]"
          />
        </motion.div>

        {/* Greeting */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-medium text-[#5c6b57] mb-3"
        >
          Hi, I am
        </motion.h2>

        {/* Animated Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {name.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * index, duration: 0.5 }}
              className="inline-block text-[#6FA4AF] hover:text-[#96A78D] transition-colors duration-300"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl font-medium text-[#5c6b57]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          Developer and Tech Enthusiast
        </motion.p>
      </section>

      {/* ABOUT + EDUCATION (same as your original) */}
      <section id="about" className="pt-28 pb-16 bg-[#D9E9CF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#4b6043] mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg leading-relaxed"
          >
            I’m Md. Shahidul Islam Sakib, a CSE enthusiast focused on crafting
            responsive websites and innovative IoT systems. I turn concepts into
            functional, user-friendly experiences.
          </motion.p>
        </div>

        <div id="education" className="max-w-4xl mx-auto px-6 mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#4b6043] mb-8 text-center"
          >
            Education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-xl font-semibold text-[#4b6043]">
                B.Sc. in CSE
              </h3>
              <p>East Delta University, Chittagong</p>
              <p className="text-sm text-gray-600">2022 – Present</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-xl font-semibold text-[#4b6043]">HSC</h3>
              <p>CDA Public College, Chittagong</p>
              <p className="text-sm text-gray-600">2019 – 2021</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-xl font-semibold text-[#4b6043]">SSC</h3>
              <p>Nasirabad Govt. High School, Chittagong</p>
              <p className="text-sm text-gray-600">2017 – 2019</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS + PROJECTS (same structure & classes as you gave) */}
      <section id="skills" className="skills-section">
        <div className="container">
          {/* Skills Section */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Skills & Tools
          </motion.h2>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="skill-item"
              >
                <skill.Icon className="skill-icon" />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Projects Section */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title mt-16"
          >
            Featured Projects
          </motion.h2>

          <div
            id="projects"
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8"
          >
            {projects.map((p, i) => {
              const isLastSingle =
                i === projects.length - 1 && projects.length % 3 === 1;

              return (
                <motion.div
                  key={i}
                  className={`project-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                    isLastSingle ? "sm:col-start-2" : ""
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <div className="project-image-wrapper overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="project-image w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="project-content p-4 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">{p.title}</h3>

                    {/* Tech pills (same design, dynamic icons) */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {p.tech.split(", ").map((t, idx) => {
                        const label = t.trim();
                        const IconComp = techIconMap[label] || null;

                        return (
                          <span
                            key={idx}
                            className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {IconComp && (
                              <IconComp className="w-3 h-3 object-contain" />
                            )}
                            {label}
                          </span>
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm"
                        >
                          GitHub
                        </a>
                      )}

                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-1 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 text-sm"
                        >
                          Live Link
                        </a>
                      )}

                      {p.screenshots && (
                        <button
                          onClick={() => setSelectedImages(p.screenshots)}
                          className="px-4 py-1 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm"
                        >
                          Screenshots
                        </button>
                      )}

                      {p.drive && (
                        <a
                          href={p.drive}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-1 border border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors duration-300 text-sm"
                        >
                          Download APK
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Screenshot Modal (Phone-style layout) */}
          {selectedImages.length > 0 && (
            <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center p-4 z-50">
              <div className="bg-white p-6 rounded-2xl max-w-5xl w-full overflow-y-auto max-h-[85vh]">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  App Screenshots
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {selectedImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-black rounded-[2rem] w-52 h-[28rem] flex items-center justify-center shadow-md"
                    >
                      <img
                        src={img}
                        alt={`screenshot-${idx}`}
                        className="h-full object-cover rounded-[1.5rem]"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setSelectedImages([])}
                    className="px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
