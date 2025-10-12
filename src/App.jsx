import React from "react";
import Navbar from "./components/Navbar";
import AboutEducation from "./components/AboutEducation";
import SkillsProjects from "./components/SkillsProjects";
import ContactFooter from "./components/ContactFooter";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <AboutEducation />
        <SkillsProjects />
        <ContactFooter />
      </main>
    </>
  );
}
