import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutEducation from "./components/AboutEducation";
import SkillsProjects from "./components/SkillsProjects";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Persist dark mode across reloads
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className="transition-all duration-500">
        <Home />
        <AboutEducation />
        <SkillsProjects />
        <ContactFooter />
      </main>
    </>
  );
}
