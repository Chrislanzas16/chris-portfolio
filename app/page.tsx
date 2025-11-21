"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Moon,
  Sun,
  Download,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDownloadResume = () => {
    // Replace this URL with your actual resume file path
    const resumeUrl = "/ChristopherLanzasResume.pdf"; // Place your resume.pdf in the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Christopher_Lanzas_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A Netflix-style streaming app built with React, Vite, and Firebase. Features user authentication, movie browsing UI, dynamic content rendering using TMDB API, responsive design, and protected routes. Built to practice real-world app structure.",
      tags: ["React", "Firebase", "Tailwind"],
      link: "https://chris-movie-app.vercel.app/",
      image: "/NetflixClone.png",
    },
    {
      title: "Ultraverse",
      description:
        "This internship consisted of converting a static website into a dynamic application using various Node.js libraries such as Axios, Owl Carousel, and Animate on Scroll. Maintained version control with repository branches and pull requests on github.",
      tags: ["React", "JavaScript", "Node.js", "Git"],
      link: "https://chris-internship-npxwbthbx-chrislanzas16s-projects.vercel.app/",
      image: "/Ultraverse.png",
    },
    {
      title: "Summarist",
      description:
        "Subscription-based book streaming platform built with Next.js, Firebase, and Stripe. Features secure authentication, responsive UI, and an integrated audio player for listening to books in the browser.",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      link: "https://virtual-internship-v2-zeta.vercel.app/",
      image: "/Summarist.png",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Backend/Database",
      items: ["Firebase", "Firestore", "Firebase Auth", "Cloud Functions"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Vercel", "Figma", "Responsive Design"],
    },
  ];

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
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
              isDarkMode ? "bg-purple-500" : "bg-purple-300"
            }`}
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
              isDarkMode ? "bg-pink-500" : "bg-pink-300"
            }`}
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          ></div>
          <div
            className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse ${
              isDarkMode ? "bg-blue-500" : "bg-blue-300"
            }`}
            style={{ animationDuration: "8s", animationDelay: "4s" }}
          ></div>
        </div>
        ```
        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav
            className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 ${
              isDarkMode
                ? "bg-slate-900/80 border-purple-500/20"
                : "bg-white/80 border-purple-200"
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div
                  className={`text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}
                >
                  Frontend Developer
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                  {["about", "projects", "skills", "contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`transition-colors capitalize cursor-pointer ${
                        isDarkMode
                          ? "text-gray-300 hover:text-purple-400"
                          : "text-gray-700 hover:text-purple-600"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                  <button
                    onClick={handleDownloadResume}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                      isDarkMode
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                  >
                    <Download size={18} />
                    Resume
                  </button>
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-lg transition-colors cursor-pointer  ${
                      isDarkMode
                        ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                        : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                    }`}
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      isDarkMode
                        ? "bg-slate-800 text-yellow-400"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`cursor-pointer ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div
                className={`md:hidden border-t transition-colors ${
                  isDarkMode
                    ? "bg-slate-900 border-purple-500/20"
                    : "bg-white border-purple-200"
                }`}
              >
                <div className="px-4 py-4 space-y-3">
                  {["about", "projects", "skills", "contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`block w-full text-left transition-colors capitalize py-2 cursor-pointer ${
                        isDarkMode
                          ? "text-gray-300 hover:text-purple-400"
                          : "text-gray-700 hover:text-purple-600"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                  <button
                    onClick={handleDownloadResume}
                    className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                      isDarkMode
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                  >
                    <Download size={18} />
                    Resume
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <section className="relative overflow-hidden mt-16 min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Hey I&apos;m Chris.
              </h1>
              <p
                className={`text-xl sm:text-2xl mb-8 max-w-2xl mx-auto ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I like building{" "}
                <span
                  className={`font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 inline-block transition-transform cursor-default`}
                >
                  modern
                </span>
                ,{" "}
                <span
                  className={`font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 inline-block transition-transform cursor-default`}
                >
                  responsive
                </span>{" "}
                web applications with React, Next.js & Typescript.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all cursor-pointer"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all border cursor-pointer ${
                    isDarkMode
                      ? "bg-slate-800 text-white hover:bg-slate-700 border-purple-500/30"
                      : "bg-white text-gray-900 hover:bg-gray-100 border-purple-300"
                  }`}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
              isDarkMode ? "bg-slate-900/50" : "bg-white/50"
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <User className="text-purple-400" size={32} />
                <h2
                  className={`text-4xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  About Me
                </h2>
              </div>
              <div
                className={`rounded-2xl p-8 border transition-colors ${
                  isDarkMode
                    ? "bg-slate-800/50 border-purple-500/20"
                    : "bg-white border-purple-200 shadow-lg"
                }`}
              >
                <p
                  className={`text-lg leading-relaxed mb-6 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  I&apos;m a{" "}
                  <span
                    className={`font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform cursor-default`}
                  >
                    passionate
                  </span>{" "}
                  frontend developer specializing in{" "}
                  <span
                    className={`font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform cursor-default`}
                  >
                    React
                  </span>{" "}
                  and{" "}
                  <span
                    className={`font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform cursor-default`}
                  >
                    Next.js
                  </span>{" "}
                  with Firebase integration. I focus on creating beautiful,
                  responsive user interfaces with{" "}
                  <span
                    className={`font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform cursor-default`}
                  >
                    seamless
                  </span>{" "}
                  real-time functionality and smooth user experiences.
                </p>
                <p
                  className={`text-lg leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  My expertise lies in modern frontend technologies,
                  component-based architecture, and leveraging Firebase for
                  authentication, real-time databases, and cloud functions.
                  I&apos;m committed to writing{" "}
                  <span
                    className={`font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform cursor-default`}
                  >
                    {" "}
                    clean, maintainable code
                  </span>{" "}
                  and staying up-to-date with the latest web development trends.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-purple-400" size={32} />
                <h2
                  className={`text-4xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`group relative h-72 md:h-80 rounded-2xl overflow-hidden  border transition-all ${
                      isDarkMode
                        ? "bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
                        : "bg-white border-purple-200 hover:border-purple-400 hover:shadow-xl"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-contain object-center bg-slate-900 duration-500 group-hover:scale-105 transition-transform"
                    />

                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex h-full flex-col p-6 justify-end">
                    <div className="opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <h3
                        className={`text-xl font-bold mb-3 text-white`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`mb-4 text-white`}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-sm ${
                              isDarkMode
                                ? "bg-purple-500/20 text-purple-300"
                                : "bg-purple-100 text-purple-700"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className={`inline-flex items-center gap-2 transition-colors ${
                          isDarkMode
                            ? "text-purple-400 hover:text-purple-300"
                            : "text-purple-600 hover:text-purple-700"
                        }`}
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
              isDarkMode ? "bg-slate-900/50" : "bg-white/50"
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Code className="text-purple-400" size={32} />
                <h2
                  className={`text-4xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Skills
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-6 border transition-colors ${
                      isDarkMode
                        ? "bg-slate-800/50 border-purple-500/20"
                        : "bg-white border-purple-200 shadow-lg"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-purple-400 mb-4">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-2 ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Mail className="text-purple-400" size={32} />
                <h2
                  className={`text-4xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Get in Touch
                </h2>
              </div>
              <p
                className={`text-lg mb-8 max-w-2xl mx-auto ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions.
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/Chrislanzas16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "bg-slate-800 hover:bg-purple-500"
                      : "bg-purple-100 hover:bg-purple-500"
                  }`}
                >
                  <Github
                    className={isDarkMode ? "text-white" : "text-purple-600"}
                    size={24}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/christopher-lanzas-12a325174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "bg-slate-800 hover:bg-purple-500"
                      : "bg-purple-100 hover:bg-purple-500"
                  }`}
                >
                  <Linkedin
                    className={isDarkMode ? "text-white" : "text-purple-600"}
                    size={24}
                  />
                </a>
                <a
                  href="mailto:chrislanzas89@gmail.com"
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "bg-slate-800 hover:bg-purple-500"
                      : "bg-purple-100 hover:bg-purple-500"
                  }`}
                >
                  <Mail
                    className={isDarkMode ? "text-white" : "text-purple-600"}
                    size={24}
                  />
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer
            className={`py-8 px-4 border-t transition-colors ${
              isDarkMode
                ? "border-purple-500/20 bg-slate-900/50"
                : "border-purple-200 bg-white/50"
            }`}
          >
            <div
              className={`max-w-6xl mx-auto text-center ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <p>
                © 2025 Christopher Lanzas. Built with Next.js, React, TypeScript
                & Tailwind CSS.
              </p>
            </div>
          </footer>
        </div>
      </div>
      ```
    </>
  );
};

export default Portfolio;
