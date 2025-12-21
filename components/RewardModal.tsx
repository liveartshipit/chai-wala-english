
import React from 'react';
import { Trophy, Star, TrendingUp, Plane, Coffee, PartyPopper, Sparkles } from 'lucide-react';
import { Category } from '../types';

interface RewardModalProps {
  category: Category;
  count: number;
  onClose: () => void;
}

const RewardModal: React.FC<RewardModalProps> = ({ category, count, onClose }) => {
  const getRewardDetails = () => {
    switch (category) {
      case 'Office':
        return { 
          title: "PROMOTED TO MANAGER! 👔", 
          desc: "The CEO is impressed. You just got a 20% virtual raise!", 
          icon: <TrendingUp className="w-20 h-20 text-indigo-100" />,
          color: "bg-indigo-600",
          glow: "bg-indigo-500/20"
        };
      case 'Travel':
        return { 
          title: "FIRST CLASS UPGRADE! ✈️", 
          desc: "Your charm worked. You've been moved to the Penthouse Suite!", 
          icon: <Plane className="w-20 h-20 text-indigo-100" />,
          color: "bg-indigo-600",
          glow: "bg-indigo-500/20"
        };
      case 'Party':
        return { 
          title: "A-LIST CELEBRITY! 🥂", 
          desc: "You're the talk of the town. Access to the VIP Lounge unlocked!", 
          icon: <PartyPopper className="w-20 h-20 text-indigo-100" />,
          color: "bg-indigo-700",
          glow: "bg-indigo-500/20"
        };
      default:
        return { 
          title: "LOCAL LEGEND! ☕", 
          desc: "Everyone knows your name. Free Chai for life at the cafe!", 
          icon: <Coffee className="w-20 h-20 text-indigo-100" />,
          color: "bg-indigo-600",
          glow: "bg-indigo-500/20"
        };
    }
  };

  const reward = getRewardDetails();

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-950/98 backdrop-blur-3xl animate-in fade-in zoom-in duration-500">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute animate-emoji-dance text-5xl opacity-20"
            style={{ 
              left: `${Math.random() * 100}%`, 
              bottom: `-10%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {['💎', '✨', '🏆', '🎬', '🌟'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[5rem] shadow-[0_60px_120px_rgba(0,0,0,1)] max-w-2xl w-full p-12 sm:p-24 text-center border border-white/10 border-b-[24px] border-indigo-500 transform transition-transform animate-pop overflow-hidden relative">
        {/* Glow Effect */}
        <div className={`absolute -top-24 -left-24 w-64 h-64 ${reward.color} blur-[120px] opacity-20`} />

        <div className={`w-32 h-32 sm:w-48 sm:h-48 ${reward.color} rounded-[3.5rem] mx-auto mb-12 flex items-center justify-center shadow-2xl rotate-6 border-8 border-white/20`}>
          {reward.icon}
        </div>
        
        <div className="flex justify-center items-center gap-4 mb-8">
           <div className="h-px flex-1 bg-white/5" />
           <h3 className="text-indigo-400 font-black text-xs sm:text-lg uppercase tracking-[0.6em] whitespace-nowrap">
            MILESTONE {count}
           </h3>
           <div className="h-px flex-1 bg-white/5" />
        </div>
        
        <h2 className="text-white text-6xl sm:text-8xl font-serif font-black leading-none mb-10 italic tracking-tighter drop-shadow-2xl">
          {reward.title}
        </h2>
        
        <p className="text-slate-400 text-2xl sm:text-4xl font-medium mb-16 leading-tight italic">
          {reward.desc}
        </p>

        <button 
          onClick={onClose}
          className="w-full py-10 bg-white text-slate-950 rounded-[2.5rem] font-black text-3xl uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          KEEP ROLLING 🎬
        </button>
      </div>
    </div>
  );
};

export default RewardModal;
