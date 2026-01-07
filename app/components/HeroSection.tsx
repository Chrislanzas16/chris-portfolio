"use client";

type HeroSectionProps = {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
};

export default function HeroSection({
  isDarkMode,
  scrollToSection,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden mt-16 min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 
              w-md h-112 rounded-full blur-3xl opacity-10 animate-pulse ${
                isDarkMode ? "bg-blue-500" : "bg-blue-300"
              }`}
          style={{ animationDuration: "8s", animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 fade-in-up ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Hey I&apos;m Chris.
        </h1>

        <p
          className={`text-xl sm:text-2xl mb-8 max-w-2xl mx-auto fade-in-up delay-400 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I like building{" "}
          <span className="font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 inline-block transition-transform cursor-default">
            modern
          </span>
          ,{" "}
          <span className="font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 inline-block transition-transform cursor-default">
            responsive
          </span>{" "}
          web applications with React, Next.js & Typescript.
        </p>

        <div className="flex justify-center gap-4 flex-wrap fade-in-up delay-600">
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
  );
}
