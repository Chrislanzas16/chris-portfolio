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
  );
}
