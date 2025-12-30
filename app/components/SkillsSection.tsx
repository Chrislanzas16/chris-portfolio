"use client";

import Image from "next/image";
import { Code } from "lucide-react";
import { skills, skillLogos } from "@/app/data/skills";

type SkillsSectionProps = {
  isDarkMode: boolean;
};

export default function SkillsSection({ isDarkMode }: SkillsSectionProps) {
  return (
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
              className={`rounded-xl p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-purple-400/60 ${
                isDarkMode
                  ? "bg-slate-800/50 border-purple-500/20"
                  : "bg-white border-purple-200 shadow-lg"
              }`}
            >
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                {skillGroup.category}
              </h3>

              <ul className="space-y-4">
                {skillGroup.items.map((skill, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 transition-transform duration-150 hover:translate-x-1 hover:text-purple-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {skillLogos[skill] ? (
                      <Image
                        src={skillLogos[skill]}
                        alt={`${skill} logo`}
                        width={30}
                        height={30}
                        className="w-6 h-6 object-contain"
                      />
                    ) : (
                      <span className="w-3 h-3 bg-purple-400 rounded-full" />
                    )}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
