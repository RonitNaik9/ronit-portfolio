import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Hobbies from './components/Hobbies';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen antialiased selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
      </main>
      <footer className="bg-slate-950 text-center py-12 text-[10px] font-mono text-slate-600 border-t border-slate-900">
        © {new Date().getFullYear()} Ronit Naik // Built with React + Tailwind v4.
      </footer>
    </div>
  );
}