import React from "react";
import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <section id="contact" className="bg-[#96A78D] text-white py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>
      <p className="text-lg">📧 shahidul.sakib17@gmail.com</p>
      <p className="text-lg mt-2">
        💻{" "}
        <a href="https://github.com/Saqib-17" target="_blank" className="underline hover:text-[#D9E9CF]">
          github.com/Saqib-17
        </a>
      </p>

      <footer className="mt-10 border-t border-[#D9E9CF]/40 pt-6 text-sm text-[#D9E9CF]">
        © {new Date().getFullYear()} Md. Shahidul Islam Sakib. All Rights Reserved.
      </footer>
    </section>
  );
}
