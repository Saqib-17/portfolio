import React from "react";
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

import quizwhiz from "../assets/quizwhiz.png";
import iot from "../assets/iot.png";
import mobileapp from "../assets/mobileapp.png";
import donationbd from "../assets/donationbd.png";

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
];

const projects = [
  {
    title: "Quiz Whiz – Web-based Educational Platform",
    tech: "React, Node.js, MongoDB, Express.js",
    img: quizwhiz,
    link: "https://quiz-whiz-frontend.vercel.app/",
  },
  {
    title: "IoT-Based Smart Street Light System",
    tech: "Arduino, IR Sensors, ESP8266 WiFi",
    img: iot,
    github: "https://github.com/Saqib-17/smart-street-light-project",
  },
  {
    title: "Donation BD – Charity & Fundraising Platform",
    tech: "React, Node.js, Express.js, MongoDB, Tailwind CSS, Firebase",
    img: donationbd,
    link: "https://donationbd.vercel.app/",
  },
  {
    title: "QuizWhiz Mobile App – Educational App",
    tech: "React Native, Expo, Node.js, Express.js, MongoDB",
    img: mobileapp,
    link: "https://github.com/Saqib-17/QuizWhiz-Mobile-App",
  },
];

export default function SkillsProjects() {
  return (
    <section id="projects" className="skills-section">
      <div className="container">
        {/* 🔧 Skills Section (untouched) */}
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

        {/* 💻 Projects Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title mt-16"
        >
          Featured Projects
        </motion.h2>

        {/* First 3 projects in normal grid */}
        <div className="project-grid grid grid-cols-1 sm:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((p, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="project-image-wrapper">
                <img src={p.img} alt={p.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p className="tech">{p.tech}</p>
                <div className="project-links">
                  {p.link && (
                    <a href={p.link} target="_blank" className="btn-primary-sm">
                      Live Link
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" className="btn-outline">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Last project centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-8">
          <div className="sm:col-start-2">
            {projects.slice(3).map((p, i) => (
              <motion.div
                key={i}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="project-image-wrapper">
                  <img src={p.img} alt={p.title} className="project-image" />
                </div>
                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p className="tech">{p.tech}</p>
                  <div className="project-links">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        className="btn-primary-sm"
                      >
                        Live Link
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        className="btn-outline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
