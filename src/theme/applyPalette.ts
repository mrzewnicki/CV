import { palettes, type PaletteId } from './palettes';

const CSS_VARS = [
  'page',
  'sidebar',
  'main',
  'surface',
  'accent',
  'accent-hover',
  'secondary',
] as const;

export function applyPalette(id: PaletteId) {
  const palette = palettes[id];
  const root = document.documentElement;

  root.style.setProperty('--cv-page', palette.page);
  root.style.setProperty('--cv-sidebar', palette.sidebar);
  root.style.setProperty('--cv-main', palette.main);
  root.style.setProperty('--cv-surface', palette.surface);
  root.style.setProperty('--cv-accent', palette.accent);
  root.style.setProperty('--cv-accent-hover', palette.accentHover);
  root.style.setProperty('--cv-secondary', palette.secondary);
  root.dataset.cvPalette = id;
}

export function getCssVarNames() {
  return CSS_VARS.map((v) => `--cv-${v}`);
}
