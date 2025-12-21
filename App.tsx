
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { AppState, ScenarioOption, ResponseType, Category } from './types';
import { SCENARIOS } from './constants';
import CategorySelector from './components/CategorySelector';
import Timeline from './components/Timeline';
import ScenarioCard from './components/ScenarioCard';
import FeedbackModal from './components/FeedbackModal';
import Summary from './components/Summary';
import RewardModal from './components/RewardModal';
import { Sparkles, Play } from 'lucide-react';
import ChaiBuddy from './components/ChaiBuddy';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    currentScenarioIndex: -1,
    completedScenarios: [],
    learnedVocabulary: new Set<string>(),
    history: [],
    view: 'categories',
    selectedCategory: null
  });

  const [lastSelectedOption, setLastSelectedOption] = useState<ScenarioOption | null>(null);
  const [showReward, setShowReward] = useState<boolean>(false);

  const filteredScenarios = useMemo(() => {
    if (!state.selectedCategory) return [];
    return SCENARIOS.filter(s => s.category === state.selectedCategory);
  }, [state.selectedCategory]);

  const currentScenario = useMemo(() => {
    if (state.currentScenarioIndex === -1) return null;
    return filteredScenarios[state.currentScenarioIndex];
  }, [state.currentScenarioIndex, filteredScenarios]);

  const handleSelectCategory = useCallback((category: Category) => {
    setState(prev => ({ ...prev, selectedCategory: category, view: 'timeline' }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectScenario = useCallback((id: string) => {
    if (id === 'finish') {
      setState(prev => ({ ...prev, view: 'summary' }));
      return;
    }
    const index = filteredScenarios.findIndex(s => s.id === id);
    setState(prev => ({ ...prev, currentScenarioIndex: index, view: 'scenario' }));
  }, [filteredScenarios]);

  const handleResponseSelection = useCallback((option: ScenarioOption) => {
    setLastSelectedOption(option);
  }, []);

  const handleContinueFromFeedback = useCallback(() => {
    if (!lastSelectedOption || !currentScenario) return;
    
    setState(prev => {
      const isNewCompletion = !prev.completedScenarios.includes(currentScenario.id);
      const newCompleted = isNewCompletion 
        ? [...prev.completedScenarios, currentScenario.id] 
        : prev.completedScenarios;

      if (isNewCompletion && newCompleted.length > 0 && newCompleted.length % 5 === 0) {
        setShowReward(true);
      }

      const newVocab = new Set(prev.learnedVocabulary);
      lastSelectedOption.vocabulary.forEach(v => newVocab.add(v));
      
      const nextIndex = prev.currentScenarioIndex + 1;
      const isLastScenario = nextIndex >= filteredScenarios.length;

      return {
        ...prev,
        completedScenarios: newCompleted,
        learnedVocabulary: newVocab,
        history: [...prev.history, { scenarioId: currentScenario.id, type: lastSelectedOption.type }],
        view: isLastScenario ? 'timeline' : 'scenario',
        currentScenarioIndex: isLastScenario ? -1 : nextIndex
      };
    });
    setLastSelectedOption(null);
  }, [lastSelectedOption, currentScenario, filteredScenarios]);

  const resetToCategories = useCallback(() => {
    setState(prev => ({ ...prev, view: 'categories', selectedCategory: null, currentScenarioIndex: -1 }));
  }, []);

  const resetApp = useCallback(() => {
    setState({
      currentScenarioIndex: -1,
      completedScenarios: [],
      learnedVocabulary: new Set<string>(),
      history: [],
      view: 'categories',
      selectedCategory: null
    });
  }, []);

  return (
    <div className="h-[100dvh] w-screen flex flex-col bg-slate-950 text-slate-50 selection:bg-amber-500/30 overflow-hidden">
      {state.view !== 'scenario' && (
        <nav className="bg-slate-950/90 backdrop-blur-3xl border-b border-white/5 h-16 sm:h-24 flex-shrink-0 sticky top-0 z-[100] safe-top">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={resetApp}>
              <div className="relative w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center bg-indigo-900 rounded-xl shadow-lg group-hover:scale-105 transition-transform border border-white/10">
                <Play className="w-5 h-5 sm:w-8 sm:h-8 text-amber-500 fill-current" />
              </div>
              <div>
                <h1 className="font-serif text-lg sm:text-2xl font-black text-white tracking-tight leading-none italic">Chai Wala</h1>
                <p className="text-[8px] sm:text-[10px] font-black text-amber-500 uppercase tracking-widest">CINEMA ENGLISH</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-3 py-1.5 sm:px-6 sm:py-3 bg-white/5 rounded-xl border border-white/10">
              <div className="flex flex-col items-end">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Score</span>
                <span className="text-base sm:text-2xl font-black text-white leading-none flex items-center gap-1.5">
                  {state.completedScenarios.length} <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                </span>
              </div>
            </div>
          </div>
        </nav>
      )}

      <main className="flex-1 overflow-y-auto hide-scrollbar relative">
        {state.view === 'categories' && <CategorySelector onSelect={handleSelectCategory} />}
        {state.view === 'timeline' && (
          <Timeline 
            completedScenarios={state.completedScenarios} 
            onSelectScenario={handleSelectScenario}
            category={state.selectedCategory!}
            scenarios={filteredScenarios}
            onBackToCategories={resetToCategories}
          />
        )}
        {state.view === 'scenario' && currentScenario && (
          <ScenarioCard 
            key={currentScenario.id}
            scenario={currentScenario}
            totalScenarios={filteredScenarios.length}
            currentIndex={state.currentScenarioIndex}
            onBack={() => setState(prev => ({ ...prev, view: 'timeline', currentScenarioIndex: -1 }))}
            onSelect={handleResponseSelection}
          />
        )}
        {state.view === 'summary' && <Summary state={state} onReset={resetApp} />}
      </main>

      {/* Floating Character Buddy in menus */}
      {state.view !== 'scenario' && !lastSelectedOption && !showReward && (
        <div className="fixed bottom-6 right-6 z-[90] scale-75 sm:scale-100 pointer-events-none opacity-80">
          <ChaiBuddy emotion="happy" />
        </div>
      )}

      {lastSelectedOption && (
        <FeedbackModal option={lastSelectedOption} onContinue={handleContinueFromFeedback} />
      )}

      {showReward && state.selectedCategory && (
        <RewardModal 
          category={state.selectedCategory} 
          count={state.completedScenarios.length} 
          onClose={() => setShowReward(false)} 
        />
      )}
    </div>
  );
};

export default App;
