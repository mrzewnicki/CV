import { ACTIVE_PALETTE_ID } from './active';
import { palettes, type PaletteId } from './palettes';
import { resolveThemeTokens } from './tokens';

export function paletteToPdfColors(id: PaletteId = ACTIVE_PALETTE_ID) {
  const p = palettes[id];
  const tokens = resolveThemeTokens(p);
  return {
    sidebar: p.sidebar,
    accent: p.accent,
    accentLight: p.accentHover,
    mainBg: p.main,
    pageBg: p.page,
    white: '#ffffff',
    lightGray: tokens.textPrimary,
    mutedGray: tokens.textMuted,
    secondaryGray: tokens.textSecondary,
    darkBlue: p.surface,
    purple: p.secondary,
    border: tokens.border,
    timelineLine: tokens.timelineLine,
    cardBg: p.sidebar,
  };
}
