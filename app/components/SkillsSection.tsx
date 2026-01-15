"use client";

import Image from "next/image";
import { Code } from "lucide-react";
import { skills, skillLogos } from "@/app/data/skills";

type SkillsSectionProps = {
  isDarkMode: boolean;
};

export default function SkillsSection({ isDarkMode }: SkillsSectionProps) {
  const cardBase =
    "rounded-xl p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl";
  const cardTheme = isDarkMode
    ? "bg-slate-800/50 border-purple-500/20 hover:border-purple-400/60"
    : "bg-white border-purple-200 shadow-lg hover:border-purple-300";

  const chipBase =
    "flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm md:text-base font-medium transition-all duration-150 hover:shadow-sm";

  const chipTheme = isDarkMode
    ? "bg-slate-900/60 text-gray-200 hover:bg-purple-500/20 hover:text-white"
    : "bg-purple-50 text-gray-800 hover:bg-purple-100 hover:text-gray-900";

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
            <div key={index} className={`${cardBase} ${cardTheme}`}>
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-1">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className={`${chipBase} ${chipTheme}`}>
                    {skillLogos[skill] && (
                      <span className="w-5 h-5 grid place-items-center shrink-0">
                        <Image
                          src={skillLogos[skill]}
                          alt={`${skill} logo`}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                        />
                      </span>
                    )}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
