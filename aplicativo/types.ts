export type View = 'home' | 'guide' | 'about' | 'legal';

// FIX: Add Exercise type definition
export type Exercise = {
  id: number;
  title: string;
  description: string;
  image: string;
};
