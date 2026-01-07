"use client";

import { Github, Linkedin, Mail } from "lucide-react";

type ContactSectionProps = {
  isDarkMode: boolean;
};

export default function ContactSection({ isDarkMode }: ContactSectionProps) {
  return (
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
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/Chrislanzas16"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1 ${
                isDarkMode
                  ? "bg-slate-800 group-hover:ring-2 group-hover:ring-purple-500"

                  : "bg-purple-100 group-hover:bg-purple-500"
              }`}
            >
              <Github
                className={isDarkMode ? "text-white" : "text-purple-600"}
                size={28}
              />
            </div>
            <span
              className={`hidden sm:block text-sm transition-opacity duration-200 opacity-70 group-hover:opacity-100 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/christopher-lanzas-12a325174"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1 ${
                isDarkMode
                  ? "bg-slate-800 group-hover:ring-2 group-hover:ring-purple-500"
                  : "bg-purple-100 group-hover:bg-purple-500"
              }`}
            >
              <Linkedin
                className={isDarkMode ? "text-white" : "text-purple-600"}
                size={28}
              />
            </div>
            <span
              className={`hidden sm:block text-sm transition-opacity duration-200 opacity-70 group-hover:opacity-100 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              LinkedIn
            </span>
          </a>

          <a
            href="mailto:chrislanzas89@gmail.com"
            aria-label="Send an email"
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1 ${
                isDarkMode
                  ? "bg-slate-800 group-hover:ring-2 group-hover:ring-purple-500"
                  : "bg-purple-100 group-hover:bg-purple-500"
              }`}
            >
              <Mail
                className={isDarkMode ? "text-white" : "text-purple-600"}
                size={28}
              />
            </div>
            <span
              className={`hidden sm:block text-sm transition-opacity duration-200 opacity-70 group-hover:opacity-100 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Email
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
