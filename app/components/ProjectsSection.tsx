"use client";

import Image from "next/image";
import { Briefcase, ExternalLink, Github } from "lucide-react";
import { projects } from "@/app/data/projects";

type ProjectsSectionProps = {
  isDarkMode: boolean;
};

export default function ProjectsSection({ isDarkMode }: ProjectsSectionProps) {
  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative h-72 md:h-80 rounded-2xl overflow-hidden border transition-all ${
                isDarkMode
                  ? "bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
                  : "bg-white border-purple-200 hover:border-purple-400 hover:shadow-xl"
              }`}
            >
              <div className="absolute inset-0 p-4 md:p-5">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-contain object-center duration-500 group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-black/80 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex h-full flex-col p-6 justify-end">
                <div
                  className="
                    absolute inset-x-0 bottom-0
                    md:inset-0
                    bg-linear-to-t from-black/80 via-black/60 to-transparent
                    opacity-100
                    md:opacity-0 md:group-hover:opacity-100
                    transition-opacity duration-500
                    px-4 py-4 md:p-6
                    flex flex-col justify-end
                  "
                >
                  <h3 className="md:text-xl text-lg font-bold mb-2 text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base mb-4 text-white">
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

                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 transition-colors ${
                        isDarkMode
                          ? "text-purple-400 hover:text-purple-300"
                          : "text-purple-600 hover:text-purple-700"
                      }`}
                    >
                      View Project <ExternalLink size={16} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 transition-colors ${
                        isDarkMode
                          ? "text-purple-400 hover:text-purple-300"
                          : "text-purple-600 hover:text-purple-700"
                      }`}
                    >
                      View Code <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
