import { palettes, type PaletteId } from './palettes';
import { resolveThemeTokens } from './tokens';

export function applyPalette(id: PaletteId) {
  const palette = palettes[id];
  const tokens = resolveThemeTokens(palette);
  const root = document.documentElement;

  root.style.setProperty('--cv-page', palette.page);
  root.style.setProperty('--cv-sidebar', palette.sidebar);
  root.style.setProperty('--cv-main', palette.main);
  root.style.setProperty('--cv-surface', palette.surface);
  root.style.setProperty('--cv-accent', palette.accent);
  root.style.setProperty('--cv-accent-hover', palette.accentHover);
  root.style.setProperty('--cv-secondary', palette.secondary);
  root.style.setProperty('--cv-text-primary', tokens.textPrimary);
  root.style.setProperty('--cv-text-secondary', tokens.textSecondary);
  root.style.setProperty('--cv-text-muted', tokens.textMuted);
  root.style.setProperty('--cv-border', tokens.border);
  root.style.setProperty('--cv-border-subtle', tokens.borderSubtle);
  root.style.setProperty('--cv-accent-soft', tokens.accentSoft);
  root.style.setProperty('--cv-timeline-line', tokens.timelineLine);
  root.dataset.cvPalette = id;
}
