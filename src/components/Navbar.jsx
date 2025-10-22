import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // modern icons

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Education", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-4/5 rounded-2xl shadow-xl z-50 transition-all backdrop-blur-lg ${
        darkMode ? "bg-[#1e1e1e]/90 text-white" : "bg-[#f3f3f3]/80 text-gray-800"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-3 md:py-4">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 mx-auto">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative font-semibold text-lg group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* 🌗 Neumorphic Light/Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`relative w-40 h-12 flex items-center rounded-full p-1 transition-all duration-500 ${
            darkMode
              ? "bg-[#2c2c2c] text-gray-200 shadow-[inset_4px_4px_8px_#141414,inset_-4px_-4px_8px_#3a3a3a]"
              : "bg-[#e6e6e6] text-gray-700 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]"
          }`}
        >
          {/* Label (light/dark) */}
          {!darkMode ? (
            <span className="absolute right-6 text-xs font-bold tracking-wide">
              LIGHT MODE
            </span>
          ) : (
            <span className="absolute left-6 text-xs font-bold tracking-wide">
              DARK MODE
            </span>
          )}

          {/* Knob */}
          <span
            className={`absolute top-1 w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-500 ease-in-out ${
              darkMode
                ? "translate-x-[110px] bg-[#1f1f1f] shadow-[3px_3px_8px_#000,inset_-2px_-2px_4px_#2a2a2a]"
                : "translate-x-0 bg-[#f9f9f9] shadow-[3px_3px_8px_#b0b0b0,inset_-2px_-2px_4px_#ffffff]"
            }`}
          >
            {darkMode ? (
              <FaMoon className="text-gray-300 text-[18px]" />
            ) : (
              <FaSun className="text-yellow-500 text-[20px]" />
            )}
          </span>
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl focus:outline-none relative z-50"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-0.5 bg-current mb-1 transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current mb-1 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center backdrop-blur-md rounded-b-2xl shadow-lg transition-max-height duration-500 overflow-hidden ${
          open
            ? darkMode
              ? "bg-[#111]/80 text-white max-h-96 py-4"
              : "bg-white/90 text-gray-800 max-h-96 py-4"
            : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="py-2 text-lg font-medium hover:text-gray-500 transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
