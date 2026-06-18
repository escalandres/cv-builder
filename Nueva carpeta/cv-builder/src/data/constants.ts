export const CV_TEMPLATES = [
  { value: 'standard', label: 'Standard'   },
  { value: 'harvard',  label: 'Harvard'    },
  { value: 'europass', label: 'Europass'   },
  { value: 'modern',   label: 'Modern ATS' },
  { value: 'minimal',  label: 'Minimal'    },
  { value: 'academic', label: 'Academic'   },
] as const;

export type TemplateValue = typeof CV_TEMPLATES[number]['value'];

export const LANGUAGE_LEVELS = [
  '',
  'A1 - Beginner',
  'A2 - Elementary',
  'B1 - Intermediate',
  'B2 - Upper Intermediate',
  'C1 - Advanced',
  'C2 - Proficient',
  'Native',
] as const;

export const LANGUAGES = [
  '',
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Portuguese',
  'Mandarin Chinese',
  'Japanese',
  'Korean',
  'Dutch',
  'Russian',
  'Arabic',
] as const;
