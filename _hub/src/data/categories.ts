export interface Category {
  id: string;
  title: string;
  description: string;
  subjectIds: string[];
}

// Purely organizational — groups subjects on the home page. Does not affect
// progress, routing, or subjects.ts. Add a subject's id to a category here
// once it exists in subjects.ts; a subject not listed in any category simply
// won't appear grouped (falls back to showing in "More subjects").
export const categories: Category[] = [
  {
    id: 'process-and-thinking',
    title: 'Process & Thinking',
    description: 'How to approach a problem before touching a screen.',
    subjectIds: ['ux-fundamentals', 'design-thinking', 'user-research'],
  },
  {
    id: 'craft-and-perception',
    title: 'Craft & Perception',
    description: 'How interfaces communicate, and the perceptual rules behind why.',
    subjectIds: ['visual-design-basics', 'interaction-design', 'gestalt-principles'],
  },
  {
    id: 'inclusive-and-systematic-design',
    title: 'Inclusive & Systematic Design',
    description: 'Designing for everyone, and designing so it stays consistent at scale.',
    subjectIds: ['accessibility-basics', 'design-systems'],
  },
  {
    id: 'ai-and-emerging-practice',
    title: 'AI & Emerging Practice',
    description: 'Designing the experience layer around models that are probabilistic, proactive, and sometimes wrong.',
    subjectIds: ['ux-for-ai'],
  },
];
