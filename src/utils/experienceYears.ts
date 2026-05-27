const MONTH_YEAR = /^(\d{2})\.(\d{4})$/;
const YEAR_ONLY = /^(\d{4})$/;

function parseDateToken(token: string): Date | null {
  const t = token.trim();
  const monthYear = t.match(MONTH_YEAR);
  if (monthYear) {
    return new Date(Number(monthYear[2]), Number(monthYear[1]) - 1, 1);
  }
  const yearOnly = t.match(YEAR_ONLY);
  if (yearOnly) {
    return new Date(Number(yearOnly[1]), 0, 1);
  }
  return null;
}

function parsePeriodBounds(period: string): { start: Date; end: Date } | null {
  const parts = period.split(/[–-]/).map((p) => p.trim());
  if (parts.length < 2) return null;

  const start = parseDateToken(parts[0]);
  const endStart = parseDateToken(parts[parts.length - 1]);
  if (!start || !endStart) return null;

  const end = new Date(endStart.getFullYear(), endStart.getMonth() + 1, 0);
  return { start, end };
}

/** Whole years from earliest role start through latest role end (or today). */
export function yearsOfExperience(
  roles: { period: string }[],
  asOf: Date = new Date(),
): number {
  let earliest: Date | null = null;
  let latest: Date | null = null;

  for (const { period } of roles) {
    const bounds = parsePeriodBounds(period);
    if (!bounds) continue;
    if (!earliest || bounds.start < earliest) earliest = bounds.start;
    if (!latest || bounds.end > latest) latest = bounds.end;
  }

  if (!earliest) return 0;

  const end = latest && latest > asOf ? latest : asOf;
  const months =
    (end.getFullYear() - earliest.getFullYear()) * 12 +
    (end.getMonth() - earliest.getMonth());

  return Math.max(1, Math.floor(months / 12));
}
