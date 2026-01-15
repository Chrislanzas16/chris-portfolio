"use client";

import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef } from "react";

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;

  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;

  scrollToSection: (sectionId: string) => void;
  handleDownloadResume: () => void;
};

export default function Navbar({
  isDarkMode,
  setIsDarkMode,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  handleDownloadResume,
}: NavbarProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <div className="relative z-10">
      <nav
        className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 ${
          isDarkMode
            ? "bg-slate-900/80 border-purple-500/20"
            : "bg-white/80 border-purple-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="leading-tight">
              <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Chris Lanzas
              </div>
              <div
                className={`text-xs uppercase tracking-wide ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Frontend Developer
              </div>
            </div>

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
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isDarkMode
                    ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                    : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

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

        {isMenuOpen && (
          <div
            ref={menuRef}
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
    </div>
  );
}
