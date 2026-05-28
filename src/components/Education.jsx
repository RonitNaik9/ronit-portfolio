import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Education History</h2>
        <div className="space-y-6">
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-2">
                <h3 className="text-lg font-bold text-slate-200">{edu.institution}</h3>
                <span className="text-xs font-mono text-slate-500">{edu.timeline}</span>
              </div>
              <p className="text-xs font-mono text-emerald-400">{edu.degree}</p>
              <p className="text-xs text-slate-500 mt-1">GPA Accrued: <span className="text-slate-300 font-mono">{edu.gpa}</span></p>
              <div className="flex flex-wrap gap-1.5 items-center mt-4">
                {edu.courses.map(c => (
                  <span key={c} className="text-[10px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800/60">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}