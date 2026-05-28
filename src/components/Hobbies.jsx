import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaFutbol, FaJedi, FaRunning, FaCubes } from 'react-icons/fa';

export default function Hobbies() {
  const { hobbies } = portfolioData;

  return (
    <section id="hobbies" className="bg-slate-950 py-24 px-6 text-white relative overflow-hidden border-b border-slate-900">
      {/* Visual Contrast Background Glow: Deep Red/Crimson */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-rose-950/40 border border-rose-900/40 rounded-full px-4 py-1 mb-4">
            <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase">
              [ execution state: off-duty ]
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Beyond the Code</h2>
          <p className="text-slate-500 text-xs font-mono mt-2">// exploring creative algorithms and lifelong obsessions</p>
        </div>

        {/* Mosaic Grid System */}
        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Manchester United Box (7 Columns) */}
          <div className="md:col-span-7 bg-gradient-to-br from-slate-900 via-rose-950/10 to-slate-900 border border-slate-800 hover:border-rose-500/30 rounded-2xl overflow-hidden flex flex-col justify-between transition duration-300 group shadow-xl">
            <div className="p-8">
              <div className="flex items-center space-x-3 text-rose-500 mb-4">
                <FaFutbol className="text-xl group-hover:rotate-45 transition duration-500" />
                <span className="text-xs font-mono tracking-widest uppercase">Matchday Protocol</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2 text-slate-100">{hobbies.manUtd.title}</h3>
              <p className="text-rose-400/90 font-mono text-xs mb-4">{hobbies.manUtd.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{hobbies.manUtd.description}</p>
            </div>
            <div className="h-48 overflow-hidden relative mt-4 border-t border-slate-800/80">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
              <img 
                src={hobbies.manUtd.imageUrl} 
                alt="Old Trafford Stadium Atmosphere" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-60 filter grayscale hover:grayscale-0"
              />
            </div>
          </div>

          {/* Card 2: Star Wars Box (5 Columns) */}
          <div className="md:col-span-5 bg-gradient-to-br from-slate-900 via-rose-950/10 to-slate-900 border border-slate-800 hover:border-rose-500/30 rounded-2xl overflow-hidden flex flex-col justify-between transition duration-300 group shadow-xl relative">
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-rose-500/0 via-rose-500/20 to-rose-500/0 z-20"></div>
            <div className="p-8">
              <div className="flex items-center space-x-3 text-rose-500 mb-4">
                <FaJedi className="text-xl animate-pulse" />
                <span className="text-xs font-mono tracking-widest uppercase">System Lore</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2 text-slate-100">{hobbies.starWars.title}</h3>
              <p className="text-rose-400/90 font-mono text-xs mb-4">{hobbies.starWars.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{hobbies.starWars.description}</p>
            </div>
            <div className="h-48 overflow-hidden relative mt-4 border-t border-slate-800/80">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
              <img 
                src={hobbies.starWars.imageUrl} 
                alt="Darth Vader Cinematic Profile" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700 opacity-40 filter grayscale group-hover:grayscale-0 group-hover:opacity-60"
              />
              <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-600 z-20 group-hover:text-rose-400 transition duration-300">
                // A long time ago in a galaxy far, far away...
              </div>
            </div>
          </div>

          {/* Card 3: Lego Modular Box (5 Columns - Inverted Split for Staggered Effect) */}
          <div className="md:col-span-5 bg-gradient-to-br from-slate-900 via-rose-950/10 to-slate-900 border border-slate-800 hover:border-rose-500/30 rounded-2xl overflow-hidden flex flex-col justify-between transition duration-300 group shadow-xl relative">
            <div className="p-8">
              <div className="flex items-center space-x-3 text-rose-500 mb-4">
                <FaCubes className="text-xl" />
                <span className="text-xs font-mono tracking-widest uppercase">Object Compositions</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2 text-slate-100">{hobbies.lego.title}</h3>
              <p className="text-rose-400/90 font-mono text-xs mb-4">{hobbies.lego.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{hobbies.lego.description}</p>
            </div>
            <div className="h-48 overflow-hidden relative mt-4 border-t border-slate-800/80">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
              <img 
                src={hobbies.lego.imageUrl} 
                alt="Lego Batman Minifigure Profile" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700 opacity-40 filter grayscale group-hover:grayscale-0 group-hover:opacity-70"
                />
              {/* <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-600 z-20 group-hover:text-rose-400 transition duration-300">
                // atomic_structural_assembly
              </div> */}
            </div>
          </div>

          {/* Card 4: Sports Box (7 Columns) */}
          <div className="md:col-span-7 bg-gradient-to-br from-slate-900 via-rose-950/10 to-slate-900 border border-slate-800 hover:border-rose-500/30 rounded-2xl p-8 flex flex-col justify-between transition duration-300 shadow-xl group">
            <div>
              <div className="flex items-center space-x-3 text-rose-500 mb-4">
                <FaRunning className="text-xl" />
                <span className="text-xs font-mono tracking-widest uppercase">Kinetic Energy</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2 text-slate-100">{hobbies.sports.title}</h3>
              <p className="text-rose-400/90 font-mono text-xs mb-4">{hobbies.sports.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{hobbies.sports.description}</p>
            </div>
            <div className="flex items-center justify-between border-t border-slate-800/60 pt-6 mt-6">
              <span className="text-[10px] font-mono text-slate-600 group-hover:text-rose-400/50 transition">
                // runtime_optimization_via_athletics
              </span>
              <div className="w-10 h-10 rounded-full bg-rose-950/30 border border-rose-900/40 text-rose-400 text-sm flex items-center justify-center shadow-inner">
                ⚡
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}