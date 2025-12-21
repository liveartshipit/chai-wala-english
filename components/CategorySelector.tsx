
import React from 'react';
import { Category } from '../types';
import { Briefcase, Home, Plane, PartyPopper, Play, Film, Trophy, Star, ChevronDown, Sparkles } from 'lucide-react';

interface CategorySelectorProps {
  onSelect: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect }) => {
  const categories: { name: Category; icon: React.ReactNode; color: string; desc: string; goal: string; img: string; prize: string }[] = [
    { 
      name: 'Office', 
      icon: <Briefcase />, 
      color: 'bg-indigo-600', 
      desc: 'Command the boardroom and lead with authority.', 
      goal: 'Become the CEO',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      prize: 'The Corner Office'
    },
    { 
      name: 'Routine', 
      icon: <Home />, 
      color: 'bg-slate-700', 
      desc: 'Charm the neighborhood and win the morning.', 
      goal: 'Local Legend Status',
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
      prize: 'Free Coffee for Life'
    },
    { 
      name: 'Travel', 
      icon: <Plane />, 
      color: 'bg-amber-600', 
      desc: 'Negotiate upgrades and explore like a VIP.', 
      goal: 'VIP Global Nomad',
      img: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=1200',
      prize: 'The Private Jet'
    },
    { 
      name: 'Party', 
      icon: <PartyPopper />, 
      color: 'bg-indigo-900', 
      desc: 'Rule the social scene with effortless wit.', 
      goal: 'The Social Icon',
      img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
      prize: 'Backstage Passes'
    },
  ];

  return (
    <div className="h-full snap-container bg-slate-950 overflow-x-hidden">
      {/* Cinematic Hero Landing */}
      <section className="snap-item h-[100dvh] w-full flex flex-col items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-indigo-950/40" />
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-50 grayscale"
            alt="Cinema"
          />
        </div>

        <div className="relative z-10 text-center space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-[1s]">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em] shadow-[0_0_40px_rgba(79,70,229,0.1)]">
            <Film className="w-5 h-5" /> CHAI WALA CINEMA
          </div>
          
          <h1 className="text-7xl sm:text-[14rem] font-serif text-white leading-none font-black tracking-tighter italic drop-shadow-2xl">
            Pick Your <span className="text-indigo-500">Destiny</span>
          </h1>

          <p className="text-slate-300 text-xl sm:text-4xl max-w-3xl mx-auto font-medium leading-relaxed">
            Deliver lines. Master <span className="text-indigo-400 font-black italic">50+ IELTS words</span>. Own the screen.
          </p>

          <div className="pt-12 flex flex-col items-center gap-4 animate-bounce">
            <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.6em]">Scroll to Enter</p>
            <ChevronDown className="w-8 h-8 text-indigo-500" />
          </div>
        </div>
      </section>

      {/* Categories as Full-Screen Snap Posters */}
      {categories.map((cat) => (
        <section 
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          className="snap-item h-[100dvh] w-full relative flex flex-col justify-end p-10 sm:p-24 group cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 transition-transform duration-[12s] group-hover:scale-110 ease-out">
            <img src={cat.img} alt={cat.name} className="w-full h-full object-cover brightness-[0.4] grayscale-[15%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto space-y-12 mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-2xl text-[10px] font-black text-indigo-400 uppercase tracking-widest border border-white/10">
                <Sparkles className="w-4 h-4 fill-current" /> GOAL: {cat.goal}
              </div>
              
              <h2 className="text-8xl sm:text-[14rem] font-serif font-black text-white italic tracking-tighter leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,1)]">
                {cat.name}
              </h2>
              
              <p className="text-white/60 text-2xl sm:text-4xl font-medium max-w-4xl leading-snug">
                {cat.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
              <div className="flex-1 p-8 bg-black/40 backdrop-blur-3xl rounded-[3rem] border border-white/5 flex items-center gap-6 shadow-4xl group-hover:border-indigo-500/30 transition-all duration-500">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0 transition-transform group-hover:rotate-6">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em] mb-1">Grand Reward</p>
                  <p className="text-white font-black text-2xl sm:text-3xl italic">{cat.prize}</p>
                </div>
              </div>

              <button className="sm:w-auto px-16 py-8 bg-white text-slate-950 rounded-[2.5rem] font-black text-2xl uppercase tracking-widest shadow-2xl hover:bg-indigo-600 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-4">
                START ACT 1 <Play className="w-8 h-8 fill-current" />
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CategorySelector;
