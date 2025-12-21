
import React from 'react';
import { AppState, ResponseType } from '../types';
import { Trophy, Star, RefreshCw, Zap, Film, Award, Sparkles, ChevronRight, Play } from 'lucide-react';

interface SummaryProps {
  state: AppState;
  onReset: () => void;
}

const Summary: React.FC<SummaryProps> = ({ state, onReset }) => {
  const richCount = state.history.filter(h => h.type === ResponseType.RICH).length;
  const streakCount = Math.floor(state.completedScenarios.length / 5);

  return (
    <div className="h-full snap-container bg-slate-950 relative overflow-x-hidden">
      {/* Cinematic High-Contrast Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-indigo-950/40" />
        <img 
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1600" 
          className="w-full h-full object-cover opacity-20 grayscale"
          alt="Cinema Stage"
        />
      </div>

      <section className="relative z-10 flex flex-col items-center min-h-screen px-6 py-24 sm:py-32">
        {/* Award Badge - Mid Indigo */}
        <div className="animate-in zoom-in duration-1000 mb-10">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center shadow-[0_0_80px_rgba(79,70,229,0.5)] rotate-6 border-4 border-white/20">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </div>
        </div>

        {/* Huge Hero Title */}
        <div className="text-center space-y-4 mb-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em]">
            <Film className="w-4 h-4" /> GLOBAL PREMIERE
          </div>
          <h1 className="text-8xl sm:text-[14rem] font-serif text-white leading-none font-black tracking-tighter italic drop-shadow-[0_20px_40px_rgba(0,0,0,1)]">
            A New <span className="text-indigo-500">Star.</span>
          </h1>
          <p className="text-slate-400 text-2xl sm:text-5xl max-w-3xl mx-auto font-medium leading-tight italic opacity-80">
            "An impeccable performance in <span className="text-white">{state.selectedCategory}</span>."
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl mb-24">
          
          <div className="p-12 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex flex-col items-center text-center gap-6 shadow-2xl transition-all hover:bg-white/10 group">
            <div className="w-20 h-20 bg-indigo-500/20 rounded-3xl flex items-center justify-center border border-indigo-500/30 group-hover:scale-110 transition-transform">
              <Star className="w-10 h-10 text-indigo-400 fill-current" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-2">DIALOGUE QUALITY</p>
              <p className="text-white font-black text-5xl italic tracking-tighter">{richCount} Rich Acts</p>
            </div>
          </div>

          <div className="p-12 bg-indigo-600 rounded-[4rem] flex flex-col items-center text-center gap-6 shadow-[0_40px_80px_rgba(79,70,229,0.3)] transition-all hover:scale-105 group">
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
              <Zap className="w-10 h-10 text-white fill-current" />
            </div>
            <div>
              <p className="text-[10px] font-black text-indigo-100 uppercase tracking-[0.4em] mb-2">CAREER STATUS</p>
              <p className="text-white font-black text-5xl italic tracking-tighter">{streakCount} Promotions</p>
            </div>
          </div>

          <div className="p-12 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex flex-col items-center text-center gap-6 shadow-2xl transition-all hover:bg-white/10 group">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
              <Film className="w-10 h-10 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-2">TOTAL SCENES</p>
              <p className="text-white font-black text-5xl italic tracking-tighter">{state.completedScenarios.length} Shot</p>
            </div>
          </div>
        </div>

        {/* Vocabulary Credits Roll */}
        <div className="w-full max-w-5xl bg-black/40 backdrop-blur-2xl border border-white/5 rounded-[5rem] p-16 sm:p-24 mb-24 shadow-inner">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-indigo-500" />
              <span className="text-[12px] font-black text-white/20 uppercase tracking-[0.6em]">Starring Vocab</span>
            </div>
            <h3 className="text-5xl sm:text-8xl font-serif font-black text-white italic tracking-tighter leading-none">The Master Script</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {Array.from(state.learnedVocabulary).map(word => (
              <div key={word} className="px-10 py-5 bg-white text-slate-950 rounded-[2.5rem] text-2xl sm:text-4xl font-black italic tracking-tighter shadow-lg hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all cursor-default">
                {word}
              </div>
            ))}
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5 text-center flex flex-col items-center gap-2">
            <div className="w-16 h-1 bg-indigo-500/20 rounded-full mb-4" />
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">Executive Producer: Chai Wala • Written in 8K English</p>
          </div>
        </div>

        {/* Restart Button */}
        <button 
          onClick={onReset}
          className="group px-24 py-12 bg-white text-slate-950 rounded-[4rem] font-black text-4xl sm:text-6xl uppercase tracking-tighter shadow-[0_50px_100px_rgba(255,255,255,0.1)] hover:bg-indigo-600 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-8 mb-20"
        >
          START NEW ACT <Play className="w-14 h-14 fill-current group-hover:scale-110 transition-transform" />
        </button>
      </section>
    </div>
  );
};

export default Summary;
