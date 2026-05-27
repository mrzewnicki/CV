import type { CvPalette } from './palettes';

export type CvThemeTokens = {
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderSubtle: string;
  accentSoft: string;
  timelineLine: string;
};

export const DEFAULT_THEME_TOKENS: CvThemeTokens = {
  textPrimary: '#E5E7EB',
  textSecondary: '#9CA3AF',
  textMuted: '#6B7280',
  border: '#1F2937',
  borderSubtle: '#2A3441',
  accentSoft: 'rgba(59, 130, 246, 0.12)',
  timelineLine: '#243041',
};

export function resolveThemeTokens(palette: CvPalette): CvThemeTokens {
  return {
    textPrimary: palette.textPrimary ?? DEFAULT_THEME_TOKENS.textPrimary,
    textSecondary: palette.textSecondary ?? DEFAULT_THEME_TOKENS.textSecondary,
    textMuted: palette.textMuted ?? DEFAULT_THEME_TOKENS.textMuted,
    border: palette.border ?? DEFAULT_THEME_TOKENS.border,
    borderSubtle: palette.borderSubtle ?? DEFAULT_THEME_TOKENS.borderSubtle,
    accentSoft: palette.accentSoft ?? DEFAULT_THEME_TOKENS.accentSoft,
    timelineLine: palette.timelineLine ?? DEFAULT_THEME_TOKENS.timelineLine,
  };
}
