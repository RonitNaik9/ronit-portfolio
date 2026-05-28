import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'runtime.py', data: skills.languages },
    { id: 'ai_ml', label: 'deep_learning.tensor', data: skills.ai_ml },
    { id: 'generative_ai', label: 'agentic_orchestrator.agent', data: skills.generative_ai },
    { id: 'infra_mlops', label: 'cloud_infrastructure.yaml', data: skills.infra_mlops }
  ];

  return (
    <section id="skills" className="bg-slate-950 py-24 px-6 relative overflow-hidden text-white border-b border-slate-900">
      {/* Enhanced Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Technical Arsenal</h2>
          <p className="text-slate-500 text-xs font-mono mt-2">// system_diagnostic --inspect core_competencies</p>
        </div>

        {/* Console Container */}
        <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 rounded-xl shadow-2xl overflow-hidden">
          
          {/* Top Window Chrome Window controls */}
          <div className="bg-slate-900/60 px-4 py-3 border-b border-slate-800/80 flex justify-between items-center">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 bg-rose-500/80 rounded-full"></span>
              <span className="w-3 h-3 bg-amber-500/80 rounded-full"></span>
              <span className="w-3 h-3 bg-emerald-500/80 rounded-full"></span>
            </div>
            <div className="text-xs font-mono text-slate-500">zsh — ronit@engine-room</div>
            <div className="w-12"></div>
          </div>

          {/* Dynamic Responsive Tab Menu Grid */}
          <div className="grid grid-cols-2 md:flex bg-slate-950/40 border-b border-slate-800/60 text-[11px] font-mono">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3.5 text-left md:text-center border-r border-b md:border-b-0 border-slate-800 transition duration-200 md:min-w-[160px] ${
                  activeTab === tab.id 
                    ? 'text-emerald-400 bg-slate-900/50 border-b-2 border-b-emerald-400 font-bold' 
                    : 'text-slate-500 hover:bg-slate-900/20 hover:text-slate-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Interactive Shell Body */}
          <div className="p-6 font-mono text-xs md:text-sm min-h-[240px]">
            <div className="flex items-center space-x-2 text-slate-500 mb-6">
              <span className="text-emerald-500">~/ronit-naik</span>
              <span>$</span>
              <span className="text-slate-300">inspect --verbose --file={tabs.find(t => t.id === activeTab).label}</span>
            </div>

            {/* Matrix Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fadeIn">
              {tabs.find(t => t.id === activeTab).data.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-950/60 border border-slate-800/80 px-4 py-3 rounded-lg text-slate-300 hover:border-emerald-500/30 hover:text-emerald-400 transition duration-300 flex items-center space-x-3 group"
                >
                  <span className="text-emerald-500/40 group-hover:text-emerald-400 transition font-bold select-none">❯</span>
                  <span className="font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}