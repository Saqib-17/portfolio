import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutEducation from "./components/AboutEducation";
import SkillsProjects from "./components/SkillsProjects";
import ContactFooter from "./components/ContactFooter";

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
