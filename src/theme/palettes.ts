export type CvPalette = {
  id: string;
  name: string;
  page: string;
  sidebar: string;
  main: string;
  surface: string;
  accent: string;
  accentHover: string;
  secondary: string;
};

export const palettes = {
  'midnight-crimson': {
    id: 'midnight-crimson',
    name: 'Midnight Crimson (current)',
    page: '#0d0d1a',
    sidebar: '#1a1a2e',
    main: '#16213e',
    surface: '#0f3460',
    accent: '#e94560',
    accentHover: '#ff6b81',
    secondary: '#533483',
  },
  'slate-teal': {
    id: 'slate-teal',
    name: 'Slate & Teal',
    page: '#0c1218',
    sidebar: '#151d27',
    main: '#1e2a3a',
    surface: '#243447',
    accent: '#2dd4bf',
    accentHover: '#5eead4',
    secondary: '#0d9488',
  },
  'ocean-blue': {
    id: 'ocean-blue',
    name: 'Ocean Professional',
    page: '#0a1628',
    sidebar: '#0f2040',
    main: '#152a4a',
    surface: '#1a3a5c',
    accent: '#38bdf8',
    accentHover: '#7dd3fc',
    secondary: '#2563eb',
  },
  'ember-gold': {
    id: 'ember-gold',
    name: 'Ember & Gold',
    page: '#110f0c',
    sidebar: '#1c1814',
    main: '#262019',
    surface: '#332a22',
    accent: '#f59e0b',
    accentHover: '#fbbf24',
    secondary: '#b45309',
  },
  'violet-noir': {
    id: 'violet-noir',
    name: 'Violet Noir',
    page: '#0e0a14',
    sidebar: '#16101f',
    main: '#1f1630',
    surface: '#2a2040',
    accent: '#a78bfa',
    accentHover: '#c4b5fd',
    secondary: '#7c3aed',
  },
} as const satisfies Record<string, CvPalette>;

export type PaletteId = keyof typeof palettes;
