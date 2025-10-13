import React from "react";
import { motion } from "framer-motion";
import saqib from "../assets/saqib.jpg"; // change extension if needed

const Home = () => {
  const name = "S A Q I B".split(" ");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-gradient-to-br from-[#D9E9CF] to-[#F0F0F0]">
      {/* Centered Image */}
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

      {/* Animated Name */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        {name.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
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
        Computer Science Student
      </motion.p>
    </section>
  );
};

export default Home;
