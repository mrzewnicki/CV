import { ACTIVE_PALETTE_ID } from './active';
import { palettes, type PaletteId } from './palettes';

export function paletteToPdfColors(id: PaletteId = ACTIVE_PALETTE_ID) {
  const p = palettes[id];
  return {
    sidebar: p.sidebar,
    accent: p.accent,
    accentLight: p.accentHover,
    mainBg: p.main,
    white: '#ffffff',
    lightGray: '#c8c8d0',
    mutedGray: '#8888a0',
    darkBlue: p.surface,
    purple: p.secondary,
  };
}
