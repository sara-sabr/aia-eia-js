import { IPanel, Question, SurveyModel } from "survey-vue";

export interface RootState {
  sections: Section[];
  sectionsNames: string[];
  sectionsAllEnabled: boolean;
  sectionsEnabled: string[];
  answerData: any[];
  surveyModel?: SurveyModel;
  toolData: any;
  currentPageNo: number;
  currentPageName?: string;
  recommendations?: Recommendations;
  toolVersion: string;
}

export interface Section {
  sectionName: string;
  enabled: boolean;
  completed: boolean;
  questionsNames: string[];
  userScore: number;
  questions: Question[];
}

export interface ResultsData {
  sectionsEnabled: any;
  data: any;
}

export type LanguageString = {
  en: string;
  fr: string;
};

// Generated by https://quicktype.io

export interface Recommendations {
  settings: Settings;
  sectionRecommendations: SectionRecommendation[];
  performance: Performance[];
}

export interface Settings {
  version: string;
  score_type: string;
  score_tags: string;
}

export interface Performance {
  level: string;
  title: Message;
  message: Message;
}

export interface Message {
  en: string;
  fr: string;
}

export interface SectionRecommendation {
  name: string;
  icon: string;
  recommendations: Recommendation[];
}

export interface Recommendation {
  level: string;
  type: string;
  title: Title;
}

export interface Title {
  en: string[];
  fr: string[];
}
