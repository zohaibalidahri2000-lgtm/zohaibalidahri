
export interface CalculationResult {
  oneRepMax: number;
  epley: number;
  brzycki: number;
  percentageTable: { percentage: number; weight: number }[];
  strengthCategory: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
