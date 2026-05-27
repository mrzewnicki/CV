/**
 * CV Application Version
 * This version is displayed in the PDF document and embedded as metadata.
 * Update this when making significant changes to the CV content or structure.
 *
 * Format: MAJOR.MINOR.PATCH
 * - MAJOR: Significant structural changes
 * - MINOR: Content updates (new experience, projects, skills)
 * - PATCH: Minor fixes and corrections
 */
export const CV_VERSION = '1.0.0';

/**
 * Build timestamp - automatically set at build time
 * Used to track exactly when this version was generated
 */
export const BUILD_DATE = new Date().toISOString().split('T')[0];

/**
 * Returns a formatted version string for display
 */
export function getVersionString(): string {
  return `v${CV_VERSION}`;
}

/**
 * Returns version info for PDF metadata
 */
export function getVersionMetadata(): { version: string; buildDate: string } {
  return {
    version: CV_VERSION,
    buildDate: BUILD_DATE,
  };
}
