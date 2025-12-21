
import React, { useState, useRef } from 'react';
import { Scenario, ScenarioOption, ResponseType } from '../types';
import { ArrowLeft, Film, Mic2, PlayCircle, Star, Sparkles, ChevronDown, Quote } from 'lucide-react';
import ChaiBuddy from './ChaiBuddy';

interface ScenarioCardProps {
  scenario: Scenario;
  totalScenarios: number;
  currentIndex: number;
  onBack: () => void;
  onSelect: (option: ScenarioOption) => void;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, totalScenarios, currentIndex, onBack, onSelect }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelection = (option: ScenarioOption) => {
    setSelectedId(option.id);
  };

  const scrollToScript = () => {
    containerRef.current?.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#020617] flex flex-col h-[100dvh] w-screen overflow-hidden iris-in">
      
      {/* Cinematic Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 z-[100] flex gap-1 px-4 py-0">
        {Array.from({ length: totalScenarios }).map((_, i) => (
          <div 
            key={i} 
            className={`flex-1 h-full rounded-full transition-all duration-700 ${
              i <= currentIndex ? 'bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.6)]' : 'bg-white/10'
            }`}
          />
        ))}
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-8 pb-4 flex justify-between items-center bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-white/50 hover:text-white px-5 py-2.5 rounded-2xl bg-white/5 backdrop-blur-xl font-bold text-[10px] uppercase tracking-[0.25em] border border-white/10 active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> EXIT ACT
        </button>
        
        <div className="flex items-center gap-4">
           <div className="text-right">
              <p className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.5em] leading-none mb-1">SCENE {currentIndex + 1}</p>
              <p className="text-sm font-bold text-white italic truncate max-w-[140px]">{scenario.title}</p>
           </div>
           <div className="w-11 h-11 flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
              <ChaiBuddy emotion={selectedId ? 'happy' : 'idle'} />
           </div>
        </div>
      </header>

      {/* Main Snap Scroller */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto hide-scrollbar snap-y snap-mandatory scroll-smooth h-full"
      >
        
        {/* SNAP SECTION 1: THE VISUAL PROMPT */}
        <section className="snap-item h-[100dvh] w-full flex flex-col justify-center items-center px-6 pt-12">
          <div className="w-full max-w-2xl flex flex-col items-center">
            
            {/* Cinematic Frame */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10 group">
              <img 
                src={scenario.image} 
                alt="" 
                className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-[15s] ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40" />
              
              {/* On-Screen HUD - Indigo REC Indicator */}
              <div className="absolute top-8 left-8 flex items-center gap-3 z-30">
                 <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(79,70,229,0.8)]" />
                 <span className="text-[10px] font-black text-white uppercase tracking-[0.4em] drop-shadow-md">LIVE • ACT {currentIndex + 1}</span>
              </div>
            </div>

            {/* The Question (Description) */}
            <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 px-2">
              <span className="inline-block text-[10px] font-black text-indigo-400/50 uppercase tracking-[0.6em] mb-4">SCENARIO DETAILS</span>
              <h2 className="text-white font-serif italic font-black text-3xl sm:text-5xl leading-[1.1] max-w-lg mx-auto">
                {scenario.description}
              </h2>
            </div>

            {/* Hint to scroll */}
            <button 
              onClick={scrollToScript}
              className="mt-14 flex flex-col items-center gap-3 animate-bounce-subtle group"
            >
              <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.5em] group-hover:text-indigo-400 transition-colors">Open Script</span>
              <ChevronDown className="w-6 h-6 text-indigo-400/50 group-hover:text-indigo-400" />
            </button>
          </div>
        </section>

        {/* SNAP SECTION 2: THE SCRIPT */}
        <section className="snap-item h-[100dvh] w-full flex flex-col justify-center px-6 bg-[#020617] relative">
          
          <div className="max-w-xl mx-auto w-full space-y-10">
            
            <div className="flex flex-col items-center text-center opacity-60 mb-4 px-8">
              <Quote className="w-8 h-8 text-indigo-400/30 mb-4" />
              <p className="text-white font-serif italic font-medium text-xl sm:text-2xl leading-relaxed">
                {scenario.hook}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-indigo-400 font-black text-[10px] uppercase tracking-[0.7em]">
                <Film className="w-5 h-5" /> YOUR DIALOGUE
              </div>
              
              <div className="grid grid-cols-1 gap-5">
                {scenario.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelection(option)}
                    className={`group text-left p-8 sm:p-10 rounded-[2.5rem] border-2 transition-all relative flex items-center gap-6 active:scale-[0.98] ${
                      selectedId === option.id 
                        ? (option.type === ResponseType.RICH 
                            ? 'border-indigo-500/50 bg-indigo-500/10 shadow-[0_0_40px_rgba(79,70,229,0.15)]' 
                            : 'border-slate-500/50 bg-slate-500/10 shadow-[0_0_40px_rgba(71,85,105,0.15)]')
                        : 'border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      selectedId === option.id 
                        ? (option.type === ResponseType.RICH ? 'bg-indigo-600 border-white scale-110' : 'bg-slate-600 border-white scale-110')
                        : 'bg-white/5 border-white/10 group-hover:border-indigo-500/30'
                    }`}>
                      <Mic2 className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <p className={`text-xl sm:text-3xl font-inter font-black tracking-tight leading-snug ${selectedId === option.id ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                        {option.text}
                      </p>
                    </div>
                    
                    {selectedId === option.id && (
                      <div className="flex-shrink-0 animate-in zoom-in duration-500">
                        <Sparkles className="w-8 h-8 text-indigo-400 fill-current" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="h-40" />
        </section>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-transparent z-[60] safe-bottom flex justify-center">
        <button
          disabled={!selectedId}
          onClick={() => {
            const opt = scenario.options.find(o => o.id === selectedId);
            if (opt) onSelect(opt);
          }}
          className={`w-full max-w-md py-7 sm:py-9 rounded-[3rem] font-black text-2xl sm:text-3xl transition-all shadow-[0_35px_70px_rgba(0,0,0,0.6)] flex items-center justify-center gap-5 ${
            selectedId 
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-[1.03] active:scale-95 animate-in slide-in-from-bottom-4 duration-500' 
              : 'bg-white/5 text-white/10 border border-white/10 cursor-not-allowed opacity-40'
          }`}
        >
          {selectedId ? "CUT! ACTION! 🎬" : "SELECT YOUR LINE"} 
          {selectedId && <PlayCircle className="w-9 h-9" />}
        </button>
      </footer>
    </div>
  );
};

export default ScenarioCard;
