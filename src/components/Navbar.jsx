import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-4/5 bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl z-50 transition-all">
      <div className="flex justify-between items-center px-6 py-3 md:py-4">
        {/* Empty space for logo removed */}

        {/* Desktop links centered */}
        <div className="hidden md:flex gap-12 mx-auto">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-gray-800 font-semibold text-lg group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#6FA4AF] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-gray-800 text-3xl focus:outline-none relative z-50"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-white/70 backdrop-blur-md rounded-b-2xl shadow-lg transition-max-height duration-500 overflow-hidden ${
          open ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        {links.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="py-2 text-gray-800 text-lg font-medium hover:text-[#6FA4AF] transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
