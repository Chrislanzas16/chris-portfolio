"use client";

import Image from "next/image";
import { User } from "lucide-react";

type AboutSectionProps = {
  isDarkMode: boolean;
};

export default function AboutSection({ isDarkMode }: AboutSectionProps) {
  return (
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
          className={`rounded-2xl p-8 border transition-all duration-200 hover:-translate-y-2 hover:shadow-xl ${
            isDarkMode
              ? "bg-slate-800/50 border-purple-500/20 hover:shadow-purple-500/20"
              : "bg-white border-purple-200 shadow-lg hover:shadow-purple-300/40"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <div
                className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border ${
                  isDarkMode
                    ? "border-purple-500/30 shadow-lg shadow-purple-500/20"
                    : "border-purple-200 shadow-lg shadow-purple-300/30"
                }`}
              >
                <div className="absolute -inset-6 bg-radial-[circle_at_center] from-purple-500/25 via-pink-500/10 to-transparent pointer-events-none" />

                <Image
                  src="/Me-profile.jpeg"
                  alt="Chris Lanzas"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I&apos;m a{" "}
                <span className="font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform cursor-default">
                  frontend developer
                </span>{" "}
                who builds fast, responsive web applications using{" "}
                <span className="font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform cursor-default">
                  React
                </span>{" "}
                and{" "}
                <span className="font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform cursor-default">
                  Next.js
                </span>
                . I focus on creating product-style experiences like dashboards,
                streaming platforms, and data-driven interfaces that feel smooth
                and intuitive to use.
              </p>

              <p
                className={`text-lg leading-relaxed mt-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Through projects like my Netflix-style app, crypto tracker, and
                Summarist, I&apos;ve worked with authentication, APIs, real-time
                data, and reusable component systems. I care deeply about
                performance, clean UI, and writing code that&apos;s easy for
                teams to maintain and scale.
              </p>

              <p
                className={`text-lg leading-relaxed mt-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I&apos;m excited to contribute to{" "}
                <span className="font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform cursor-default">
                  meaningful products
                </span>{" "}
                where I can keep growing as a developer while helping ship
                features that real users rely on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
