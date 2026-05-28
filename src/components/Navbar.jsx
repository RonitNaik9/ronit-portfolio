import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#hero" className="text-xl font-mono font-bold tracking-tight text-emerald-400">
          ronit.naik()
        </a>
        <div className="space-x-6 text-xs font-mono text-slate-400">
          <a href="#experience" className="hover:text-emerald-400 transition">.experience()</a>
          <a href="#projects" className="hover:text-emerald-400 transition">.projects()</a>
          <a href="#skills" className="hover:text-emerald-400 transition">.skills()</a>
          <a href="#education" className="hover:text-emerald-400 transition">.education()</a>
          <a href="#hobbies" className="hover:text-rose-400 transition">.interests()</a> {/* Added here */}
          
        </div>
      </div>
    </nav>
  );
}