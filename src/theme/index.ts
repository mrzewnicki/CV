import { applyPalette } from './applyPalette';
import { ACTIVE_PALETTE_ID } from './active';

export { palettes, type PaletteId, type CvPalette } from './palettes';
export { applyPalette } from './applyPalette';
export { ACTIVE_PALETTE_ID } from './active';
export { paletteToPdfColors } from './pdfColors';

export function initTheme() {
  applyPalette(ACTIVE_PALETTE_ID);
}

if (import.meta.env.DEV) {
  import('./palettes').then(({ palettes }) => {
    const w = window as unknown as {
      __setCvPalette?: (id: keyof typeof palettes) => void;
      __cvPalettes?: typeof palettes;
    };
    w.__setCvPalette = applyPalette;
    w.__cvPalettes = palettes;
  });
}
