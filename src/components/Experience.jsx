import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-24 px-6 text-white border-b border-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Professional Experience</h2>
        <div className="space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 border-l border-slate-800">
              <div className="absolute w-2 h-2 bg-emerald-400 rounded-full -left-[4px] top-2 shadow-[0_0_8px_#34d399]"></div>
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
                  <p className="text-emerald-400 font-mono text-xs mt-0.5">{exp.company} — <span className="text-slate-500">{exp.location}</span></p>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 px-2 py-1 rounded mt-2 md:mt-0">{exp.timeline}</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-xs text-slate-400 leading-relaxed">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}