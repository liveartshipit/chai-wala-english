
export enum ResponseType {
  RICH = 'RICH',
  SIMPLE = 'SIMPLE'
}

export type Category = 'Office' | 'Routine' | 'Travel' | 'Party';

export interface ScenarioOption {
  id: string;
  text: string;
  type: ResponseType;
  feedback: string;
  vocabulary: string[];
  definitions: string[]; // Added simple meanings
}

export interface Scenario {
  id: string;
  category: Category;
  day: string;
  time: string;
  title: string;
  description: string;
  hook: string;
  image: string;
  goal: string;
  options: ScenarioOption[];
}

export interface AppState {
  currentScenarioIndex: number;
  completedScenarios: string[];
  learnedVocabulary: Set<string>;
  history: { scenarioId: string; type: ResponseType }[];
  view: 'categories' | 'timeline' | 'scenario' | 'summary';
  selectedCategory: Category | null;
}
