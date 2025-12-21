
import React from 'react';
import { Music, Coffee } from 'lucide-react';

export type BuddyEmotion = 'idle' | 'happy' | 'sad' | 'thinking';

interface ChaiBuddyProps {
  emotion?: BuddyEmotion;
  isLarge?: boolean;
}

const ChaiBuddy: React.FC<ChaiBuddyProps> = ({ emotion = 'idle', isLarge = false }) => {
  const getEmotionClass = () => {
    switch (emotion) {
      case 'happy': return 'animate-buddy-celebrate';
      case 'sad': return 'animate-buddy-disapprove';
      case 'thinking': return 'animate-pulse';
      default: return 'animate-buddy-idle';
    }
  };

  return (
    <div className={`flex flex-col items-center pointer-events-none transition-all duration-300 ${isLarge ? 'scale-125' : 'scale-90'}`}>
      <div className="relative">
        {/* Animated Character Base */}
        <div className={`relative w-16 h-20 flex flex-col items-center justify-end ${getEmotionClass()}`}>
          
          {/* Turban (Distinctive feature) - Updated to Slate-Blue/Indigo for professional look */}
          <div className="absolute top-0 w-14 h-6 bg-slate-800 rounded-full shadow-md z-20 flex items-center justify-center border-b-2 border-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
          </div>

          {/* Face */}
          <div className="w-12 h-12 bg-[#fef3c7] rounded-full shadow-lg flex flex-col items-center justify-center relative z-10 border-b-2 border-amber-200">
            {/* Eyes */}
            <div className="flex gap-2 mb-1">
              <div className={`w-1.5 h-1.5 bg-slate-900 rounded-full ${emotion === 'sad' ? 'scale-y-[0.1]' : 'animate-pulse'}`} />
              <div className={`w-1.5 h-1.5 bg-slate-900 rounded-full ${emotion === 'sad' ? 'scale-y-[0.1]' : 'animate-pulse'}`} />
            </div>
            
            {/* Mustache & Smile */}
            <div className="flex flex-col items-center">
              <div className="flex">
                <div className={`w-3.5 h-1 bg-slate-900 rounded-full rotate-12 transition-all ${emotion === 'happy' ? '-translate-y-0.5' : ''}`} />
                <div className={`w-3.5 h-1 bg-slate-900 rounded-full -rotate-12 transition-all ${emotion === 'happy' ? '-translate-y-0.5' : ''}`} />
              </div>
              {emotion === 'happy' && (
                <div className="w-3 h-1.5 border-b-2 border-slate-900 rounded-full mt-0.5" />
              )}
            </div>
          </div>

          {/* Vest */}
          <div className="w-10 h-7 bg-slate-900 rounded-t-xl z-0 -mt-1 shadow-md flex items-center justify-center">
             <div className="w-3 h-full bg-slate-800" />
          </div>

          {/* Hand with Cup */}
          <div className={`absolute -right-2 bottom-3 w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center border-2 border-white shadow-lg rotate-12 ${emotion === 'happy' ? 'animate-bounce' : ''}`}>
             <Coffee className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChaiBuddy;
