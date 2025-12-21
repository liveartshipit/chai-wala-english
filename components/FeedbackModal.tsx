
import React, { useEffect, useState } from 'react';
import { ScenarioOption, ResponseType } from '../types';
import { Sparkles, Play, BookOpen, RotateCcw, Clapperboard, Star, CheckCircle2, Info } from 'lucide-react';
import ChaiBuddy from './ChaiBuddy';

interface FeedbackModalProps {
  option: ScenarioOption;
  onContinue: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ option, onContinue }) => {
  const isRich = option.type === ResponseType.RICH;
  const [timeLeft, setTimeLeft] = useState(8000); 
  const [emojis, setEmojis] = useState<{ id: number; char: string; x: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => Math.max(0, prev - 100)), 100);
    const autoAdvance = setTimeout(() => onContinue(), 8000);
    return () => { clearInterval(timer); clearTimeout(autoAdvance); };
  }, [onContinue]);

  useEffect(() => {
    const partyChars = isRich 
      ? ['🕺', '🎬', '✨', '🏆', '💎', '🎉', '🌟', '🍿']
      : ['💡', '🎬', '✍️', '⚡', '🎙️'];
    
    setEmojis(Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      char: partyChars[Math.floor(Math.random() * partyChars.length)],
      x: `${Math.random() * 95}vw`,
      delay: `${Math.random() * 1}s`,
      duration: `${2 + Math.random() * 2}s`
    })));
  }, [isRich]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-950/98 backdrop-blur-3xl overflow-hidden iris-in">
      
      {/* EMOJI CELEBRATION */}
      <div className="absolute inset-0 pointer-events-none">
        {emojis.map((e) => (
          <div key={e.id} className="animate-emoji-dance text-6xl opacity-30"
            style={{ left: e.x, animationDelay: e.delay, animationDuration: e.duration } as any}
          >
            {e.char}
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[3rem] sm:rounded-[4rem] shadow-[0_50px_150px_rgba(0,0,0,1)] max-w-xl w-full overflow-hidden flex flex-col relative border border-white/10 border-b-[12px] border-b-indigo-500 animate-in zoom-in duration-300">
        
        {/* Progress Bar (Timer) */}
        <div className="absolute bottom-0 left-0 h-2 bg-white/5 w-full">
          <div className="h-full bg-indigo-500 transition-all duration-100 linear shadow-[0_0_20px_rgba(79,70,229,0.6)]" 
            style={{ width: `${(timeLeft / 8000) * 100}%` }}
          />
        </div>

        {/* Status Header - Mid-Indigo Themed */}
        <div className={`p-10 sm:p-14 text-center text-white relative transition-colors duration-500 ${isRich ? 'bg-indigo-600' : 'bg-slate-950'}`}>
          <div className="flex justify-center mb-6 relative z-10">
             <div className="transform scale-[1.3] sm:scale-[1.5]">
                <ChaiBuddy emotion={isRich ? 'happy' : 'thinking'} />
             </div>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl font-serif font-black mb-3 italic tracking-tighter drop-shadow-xl flex items-center justify-center gap-4 ${isRich ? 'text-white' : 'text-slate-400'}`}>
            {isRich ? <Sparkles className="w-8 h-8 fill-current" /> : <Clapperboard className="w-8 h-8" />}
            {isRich ? 'ACTION! 🔥' : 'RE-TAKE! 🎬'}
          </h2>
          
          <p className="text-xl sm:text-2xl font-black italic opacity-95 leading-tight tracking-tight px-2 drop-shadow-lg">
            "{option.feedback}"
          </p>
          
          {isRich && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full -z-10 animate-pulse" />}
        </div>

        {/* Revision List Area - Dark Themed */}
        <div className="p-8 sm:p-12 bg-slate-900 flex flex-col items-center max-h-[50vh] overflow-y-auto hide-scrollbar">
          <div className="w-full mb-8">
            <div className="flex items-center gap-3 text-indigo-400 mb-6 justify-center">
              <BookOpen className="w-5 h-5" />
              <p className="text-[10px] font-black uppercase tracking-[0.5em]">EPISODE REVISION LIST</p>
            </div>
            
            <div className="space-y-4">
              {option.vocabulary.map((word, idx) => (
                <div key={word} className="bg-white/5 p-6 rounded-[2rem] border border-white/5 shadow-inner transition-all hover:bg-white/10 hover:border-indigo-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                      <span className="text-2xl font-black text-white tracking-tight italic">{word}</span>
                    </div>
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Mastered</span>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-white/5">
                    <Info className="w-4 h-4 text-indigo-400/50 mt-1 flex-shrink-0" />
                    <p className="text-base sm:text-lg font-bold text-slate-300 leading-relaxed italic">
                      {option.definitions?.[idx] || "Essential term for professional IELTS communication."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={onContinue}
            className="w-full py-6 bg-white text-slate-950 rounded-[2.5rem] font-black text-xl uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4"
          >
            {isRich ? <Play className="w-6 h-6 fill-current" /> : <RotateCcw className="w-6 h-6" />}
            {isRich ? 'CONTINUE SCRIPT' : 'TRY AGAIN'} ({Math.ceil(timeLeft / 1000)}s)
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
