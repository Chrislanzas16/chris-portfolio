"use client";

import { useState } from "react";

import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDownloadResume = () => {
    const resumeUrl = "/ChristopherLanzasResume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Christopher_Lanzas_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
          isDarkMode
            ? "bg-linear-to-br from-slate-900 via-purple-900 to-slate-900"
            : "bg-linear-to-br from-gray-50 via-purple-50 to-gray-50"
        }`}
      >
        <Navbar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          handleDownloadResume={handleDownloadResume}
        />
        <HeroSection
          isDarkMode={isDarkMode}
          scrollToSection={scrollToSection}
        />
        <AboutSection isDarkMode={isDarkMode} />
        <ProjectsSection isDarkMode={isDarkMode} />
        <SkillsSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default Portfolio;
