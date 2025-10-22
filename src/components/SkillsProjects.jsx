import React, { useState } from "react";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/physics.png";
import nodejs from "../assets/node-js.png";
import mongodb from "../assets/mongodb.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import c from "../assets/c.png";
import express from "../assets/express.png";
import cpp from "../assets/c++.png";
import github from "../assets/github.png";
import reactnativeIcon from "../assets/reactnative.png";
import expoIcon from "../assets/expo.png";

import arduinoIcon from "../assets/arduino.png";
import irsensorIcon from "../assets/irsensor.png";
import espIcon from "../assets/esp.png";

import quizwhiz from "../assets/quizwhiz.png";
import iot from "../assets/iot.png";
import mobileapp from "../assets/mobileapp.png";
import donationbd from "../assets/donationbd.png";

import ss01 from "../assets/ss01.png";
import ss02 from "../assets/ss02.png";
import ss03 from "../assets/ss03.png";
import ss04 from "../assets/ss04.png";
import ss05 from "../assets/ss05.png";
import ss06 from "../assets/ss06.png";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Firebase", icon: firebase },
  { name: "C", icon: c },
  { name: "C++", icon: cpp },
  { name: "GitHub", icon: github },
  { name: "React Native", icon: reactnativeIcon },
  { name: "Expo", icon: expoIcon },
];

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
];

export default function SkillsProjects() {
  const [selectedImages, setSelectedImages] = useState([]);

  return (
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
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
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

        <div id="projects" className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
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
                  <div className="flex flex-wrap gap-2 mt-1">
                    {p.tech.split(", ").map((t, idx) => {
                      let icon;
                      switch (t.trim()) {
                        case "React":
                          icon = react;
                          break;
                        case "React Native":
                          icon = reactnativeIcon;
                          break;
                        case "Expo":
                          icon = expoIcon;
                          break;
                        case "Node":
                          icon = nodejs;
                          break;
                        case "MongoDB":
                          icon = mongodb;
                          break;
                        case "Express":
                          icon = express;
                          break;
                        case "Tailwind":
                          icon = tailwind;
                          break;
                        case "Firebase":
                          icon = firebase;
                          break;
                        case "C":
                          icon = c;
                          break;
                        case "C++":
                          icon = cpp;
                          break;
                        case "Arduino":
                          icon = arduinoIcon;
                          break;
                        case "IR Sensor":
                          icon = irsensorIcon;
                          break;
                        case "ESP8266 WiFi":
                          icon = espIcon;
                          break;
                        case "JavaScript":
                          icon = js;
                          break;
                        case "HTML":
                          icon = html;
                          break;
                        case "CSS":
                          icon = css;
                          break;
                        default:
                          icon = null;
                      }

                      return (
                        <span
                          key={idx}
                          className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {icon && (
                            <img
                              src={icon}
                              alt={t}
                              className="w-3 h-3 object-contain"
                            />
                          )}
                          {t}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        className="px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm"
                      >
                        GitHub
                      </a>
                    )}

                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
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
  );
}
