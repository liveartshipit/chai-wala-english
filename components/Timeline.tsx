
import React from 'react';
import { Scenario, Category } from '../types';
import { Play, CheckCircle, ChevronLeft, Sparkles, MapPin, Film, Trophy, Star } from 'lucide-react';

interface TimelineProps {
  completedScenarios: string[];
  onSelectScenario: (id: string) => void;
  category: Category;
  scenarios: Scenario[];
  onBackToCategories: () => void;
}

const Timeline: React.FC<TimelineProps> = ({ completedScenarios, onSelectScenario, category, scenarios, onBackToCategories }) => {
  return (
    <div className="h-full snap-container hide-scrollbar bg-slate-950">
      {/* Introduction Header (Not Snapped) */}
      <div className="max-w-4xl mx-auto px-6 py-12 sm:py-24 animate-pop">
        <button 
          onClick={onBackToCategories}
          className="mb-12 flex items-center gap-2 px-8 py-4 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500 text-white/50 hover:text-white font-black text-xs uppercase tracking-[0.3em] transition-all group active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          CHOOSE NEW VIBE
        </button>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-10 py-4 bg-amber-600 rounded-full shadow-2xl border-4 border-amber-500 mb-10 font-black text-white text-sm uppercase tracking-[0.4em] animate-bounce-subtle">
            <MapPin className="w-6 h-6" /> {category} SEASON
          </div>
          <h1 className="text-7xl sm:text-9xl font-serif text-white leading-tight mb-8 font-black text-shadow-glow">
            The <span className="text-amber-500 italic">Script</span>
          </h1>
          <div className="flex justify-center items-center gap-8 text-white/40 text-lg sm:text-3xl font-black uppercase tracking-widest">
             <span>{completedScenarios.length} MASTERED</span>
             <div className="w-3 h-3 rounded-full bg-amber-500" />
             <span>{scenarios.length - completedScenarios.length} TO GO</span>
          </div>
        </div>
      </div>

      <div className="relative space-y-0 pb-20">
        {/* Progress Line */}
        <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-2 bg-white/5 sm:-translate-x-1/2 rounded-full overflow-hidden pointer-events-none">
           <div 
             className="w-full bg-amber-500 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(245,158,11,0.5)]" 
             style={{ height: `${(completedScenarios.length / scenarios.length) * 100}%` }}
           />
        </div>

        {scenarios.map((scenario, index) => {
          const isCompleted = completedScenarios.includes(scenario.id);
          // isNext is now purely for visual guidance, not a restriction
          const isNext = !isCompleted && (index === 0 || completedScenarios.includes(scenarios[index - 1].id));
          const isMilestone = (index + 1) % 5 === 0;
          
          return (
            <div 
              key={scenario.id}
              onClick={() => onSelectScenario(scenario.id)}
              className="snap-item min-h-[50vh] flex flex-col justify-center px-6 py-12 group transition-all cursor-pointer active:scale-[0.98]"
            >
              <div className={`max-w-4xl mx-auto flex flex-row sm:items-center gap-10 w-full ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}>
                <div className="z-10 flex-shrink-0 relative">
                  <div className={`w-20 h-20 sm:w-32 sm:h-32 rounded-[2rem] flex items-center justify-center text-white shadow-3xl transition-all duration-500 group-hover:scale-110 ${
                    isCompleted ? 'bg-green-500 rotate-6' : isNext ? 'bg-amber-600 animate-pulse scale-105' : 'bg-slate-800'
                  } ${isMilestone ? 'border-4 border-white' : ''}`}>
                    {isCompleted ? <CheckCircle className="w-10 h-10 sm:w-16 sm:h-16" /> : 
                     isMilestone ? <Trophy className="w-10 h-10 sm:w-16 sm:h-16" /> :
                     <Film className="w-10 h-10 sm:w-16 sm:h-16" />}
                  </div>
                  {isMilestone && (
                    <div className="absolute -top-6 -right-6 bg-white text-slate-950 text-xs font-black px-4 py-2 rounded-full shadow-2xl animate-bounce">
                      REWARD!
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className={`bg-white/5 border-2 rounded-[4rem] overflow-hidden transition-all duration-300 group-hover:bg-white/10 ${
                    isCompleted ? 'border-green-500/20' : 'border-white/5 group-hover:border-amber-500/30'
                  }`}>
                    <div className="p-10 sm:p-16">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-black text-amber-500 uppercase tracking-[0.3em]">{scenario.day}</span>
                        {isCompleted && (
                          <span className="text-xs font-black text-green-400 bg-green-400/10 px-4 py-1.5 rounded-full tracking-widest flex items-center gap-2">
                             <CheckCircle className="w-3 h-3" /> MASTERED
                          </span>
                        )}
                      </div>
                      <h3 className="text-3xl sm:text-6xl font-black text-white mb-6 leading-tight italic group-hover:text-amber-500 transition-colors">
                        {scenario.title}
                      </h3>
                      <p className="text-white/40 text-lg sm:text-2xl font-medium leading-relaxed italic line-clamp-2 group-hover:text-white/60">
                        {scenario.description}
                      </p>
                      
                      <div className="mt-10 flex items-center gap-5 text-amber-500 font-black text-xl sm:text-2xl uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                        <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center">
                          <Play className="w-6 h-6 fill-current" />
                        </div>
                        {isCompleted ? "RE-PLAY ACT" : "START ACT"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden sm:block" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="snap-item min-h-[60vh] flex flex-col items-center justify-center px-6 pb-40">
        <button 
          onClick={() => onSelectScenario('finish')}
          className="group relative px-20 py-10 rounded-[3rem] font-black text-3xl sm:text-5xl transition-all bg-white text-slate-950 shadow-[0_0_80px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95"
        >
          <div className="flex items-center gap-8">
             <Star className="w-14 h-14 fill-current animate-spin-slow" />
             WRAP SEASON 🎬
          </div>
        </button>
      </div>
    </div>
  );
};

export default Timeline;
