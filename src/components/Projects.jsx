import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaTerminal } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-24 px-6 text-white border-b border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Selected System Productions</h2>
          <div className="h-1 w-12 bg-emerald-500 mt-3 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="space-y-28">
          {portfolioData.projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col gap-8 md:gap-12 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Accent Stack Box */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-5 group-hover:opacity-10 blur-xl transition duration-500"></div>
                  <div className="bg-slate-900 border border-slate-800/60 rounded-xl p-8 min-h-[220px] flex flex-col justify-between relative overflow-hidden shadow-xl">
                    <span className="absolute right-4 bottom-[-20px] text-8xl font-black font-mono text-slate-800/10 select-none pointer-events-none">
                      0{idx + 1}
                    </span>
                    <div className="flex items-center space-x-3 text-emerald-400 mb-4">
                      <FaTerminal className="text-sm" />
                      <span className="text-xs font-mono tracking-widest uppercase">Stack Verification</span>
                    </div>
                    <div className="flex flex-wrap gap-2 z-10">
                      {proj.tech.map(t => (
                        <span key={t} className="text-xs font-mono bg-slate-950 border border-slate-800 text-slate-400 px-2.5 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Narrative Block */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold tracking-tight mb-3 text-slate-100">{proj.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>
                  <ul className="space-y-2 mb-6">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start">
                        <span className="text-emerald-500 mr-2 mt-1.5 block w-1.5 h-1.5 rounded-full shrink-0 bg-emerald-400 shadow-sm"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-mono uppercase tracking-wider bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 px-4 py-2.5 rounded-lg transition duration-300">
                      <FaGithub className="mr-2 text-sm" /> Source Repository
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}