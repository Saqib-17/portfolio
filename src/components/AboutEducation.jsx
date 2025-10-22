import React from "react";
import { motion } from "framer-motion";

export default function AboutEducation() {
  return (
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
         I’m Md. Shahidul Islam Sakib, a CSE enthusiast focused on crafting responsive websites and innovative IoT systems. I turn concepts into functional, user-friendly experiences.
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
            <h3 className="text-xl font-semibold text-[#4b6043]">B.Sc. in CSE</h3>
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
  );
}
