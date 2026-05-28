import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

export default function Hero() {
  const { profile } = portfolioData;
  return (
    <section id="hero" className="bg-slate-950 text-white py-32 px-6 relative overflow-hidden border-b border-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06)_0%,transparent_65%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-emerald-950/40 border border-emerald-800/40 rounded-full px-4 py-1.5 backdrop-blur-md">
          <span className="w-2 h-2 bg-emerald-400 rounded-full block shadow-[0_0_8px_#34d399]"></span>
          <span className="text-xs font-mono tracking-wider font-semibold text-emerald-400 uppercase">
            {profile.citizenship} • Active Pipeline
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-8 bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          {profile.name}
        </h1>
        
        <p className="text-lg md:text-xl font-mono tracking-tight text-emerald-400/90 mt-4 max-w-xl mx-auto font-medium">
          // {profile.title}
        </p>
        
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
          {profile.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
  
            {/* Social Icons Container */}
            <div className="flex space-x-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition duration-300">
                <FaGithub className="text-xl" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition duration-300">
                <FaLinkedin className="text-xl" />
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition duration-300">
                <FaEnvelope className="text-xl" />
              </a>
            </div>

            {/* Premium Download Resume Button */}
            <a 
              href={profile.resumeUrl} 
              download="Ronit_Naik_Resume.pdf" 
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl font-mono text-xs uppercase tracking-wider bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition duration-300 font-bold w-full sm:w-auto mt-2 sm:mt-0"
            >
              <FaDownload className="mr-2 text-sm" /> Download Resume
            </a>

          </div>
      </div>
    </section>
  );
}