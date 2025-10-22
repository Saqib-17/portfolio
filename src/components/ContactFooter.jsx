import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactFooter() {
  return (
    <section
      id="contact"
      className="relative bg-[#96A78D] text-[#F3F7F0] py-24 px-10 md:px-20 overflow-hidden flex flex-col justify-center items-center text-center"
    >
      {/* Subtle texture overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/noise-texture.png')] bg-cover opacity-10"
      ></motion.div>

      {/* Back to Top */}
      <motion.a
        href="#top"
        whileHover={{ scale: 1.05 }}
        className="absolute top-8 right-8 text-xs font-semibold text-[#F3F7F0]/90 flex items-center gap-2 hover:text-white transition-all"
      >
        BACK TO TOP
        <span className="w-7 h-7 flex items-center justify-center border border-[#F3F7F0]/70 rounded-full text-sm">
          ↑
        </span>
      </motion.a>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 min-h-[40vh]">
        {/* Text block */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.15em] text-sm text-[#F4F8F1]/80"
        >
          Have a project in mind?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[3.5rem] md:text-[6rem] font-semibold text-[#F7FAF5]/60 leading-none select-none"
        >
          LET’S CONNECT
        </motion.h2>

        {/* Animated Social Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-4">
          {[
            {
              href: "https://github.com/Saqib-17",
              icon: <Github size={18} />,
              label: "GITHUB",
            },
            {
              href: "https://www.linkedin.com/in/saqib1712",
              icon: <Linkedin size={18} />,
              label: "LINKEDIN",
            },
            {
              href: "mailto:shahidul.sakib17@gmail.com",
              icon: <Mail size={18} />,
              label: "EMAIL",
            },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 12px rgba(243, 247, 240, 0.3)",
              }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 border border-[#F3F7F0]/50 text-[#F3F7F0] px-6 py-2 rounded-full hover:bg-[#F3F7F0]/10 transition-all duration-300"
            >
              {link.icon}
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Copyright (centered under links) */}
        <footer className="mt-8 text-sm text-[#F3F7F0]/70">
          © {new Date().getFullYear()} Md. Shahidul Islam Sakib. All Rights Reserved.
        </footer>
      </div>
    </section>
  );
}
