"use client";

import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-emerald-400">
            Nagacharan
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white transition-colors text-sm">
              Skills
            </a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors text-sm">
              Experience
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold transition-colors text-sm">
              Contact Me
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#about" onClick={() => setOpen(false)} className="text-slate-300 hover:text-white text-sm py-1">About</a>
            <a href="#skills" onClick={() => setOpen(false)} className="text-slate-300 hover:text-white text-sm py-1">Skills</a>
            <a href="#experience" onClick={() => setOpen(false)} className="text-slate-300 hover:text-white text-sm py-1">Experience</a>
            <a href="#projects" onClick={() => setOpen(false)} className="text-slate-300 hover:text-white text-sm py-1">Projects</a>
            <a href="#contact" className="bg-emerald-500 text-white px-5 py-2 rounded-lg font-semibold text-sm text-center">Contact Me</a>
          </div>
        )}
      </div>
    </nav>
  );
}
