import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'languages.py', data: skills.languages },
    { id: 'frameworks', label: 'frameworks.json', data: skills.frameworks },
    { id: 'tools', label: 'infrastructure.sh', data: skills.tools }
  ];

  return (
    <section id="skills" className="bg-slate-950 py-24 px-6 relative overflow-hidden text-white border-b border-slate-900">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Technical Arsenal</h2>
          <p className="text-slate-500 text-xs font-mono mt-2">// select file tab to execute payload diagnostic</p>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-slate-900/80 px-4 py-3 border-b border-slate-800/80 flex justify-between items-center">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 bg-rose-500/80 rounded-full"></span>
              <span className="w-3 h-3 bg-amber-500/80 rounded-full"></span>
              <span className="w-3 h-3 bg-emerald-500/80 rounded-full"></span>
            </div>
            <div className="text-xs font-mono text-slate-500">zsh — core_sys.config</div>
            <div className="w-12"></div>
          </div>

          <div className="flex bg-slate-950/40 border-b border-slate-800/60 text-xs font-mono">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3.5 border-r border-slate-800 transition duration-200 ${
                  activeTab === tab.id ? 'text-emerald-400 bg-slate-900/60 border-b-2 border-b-emerald-400' : 'text-slate-500 hover:bg-slate-900/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6 font-mono text-sm min-h-[200px]">
            <div className="flex items-center space-x-2 text-slate-500 mb-6">
              <span className="text-emerald-500">~/ronit-naik</span>
              <span>$</span>
              <span className="text-slate-300">cat {tabs.find(t => t.id === activeTab).label}</span>
            </div>

            <div className="flex flex-wrap gap-3 animate-fadeIn">
              {tabs.find(t => t.id === activeTab).data.map((item, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800/80 px-4 py-2 rounded-lg text-slate-300 hover:border-emerald-500/30 hover:text-emerald-400 transition duration-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}