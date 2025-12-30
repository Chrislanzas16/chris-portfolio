"use client";

type FooterProps = {
  isDarkMode: boolean;
};

export default function Footer({ isDarkMode }: FooterProps) {
  return (
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
          © 2025 Christopher Lanzas. Built with Next.js, React, TypeScript &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
