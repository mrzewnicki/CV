---
name: add-work-experience
description: Adds a work experience entry (company and role with bullets) to this CV app. Updates src/data/cv.ts and i18n en/pl. Use when the user asks to add employment, job, position, company, or work history.
---

# Add work experience

## Inputs to collect

If the user did not provide them, ask for:

- Company name (display string)
- Role title (EN and PL, or one language + ask for translation)
- Period (e.g. `01.2024 – present`)
- Bullet points (EN and PL), or empty array
- **Placement**: new company vs new role under existing company

## Workflow

1. Read [cv-reference.md](../cv-reference.md) if unsure about types or key patterns.
2. Choose slugs: `job.{companySlug}.{roleSlug}` for `titleKey`; bullets `...bullet1`, `...bullet2`, …
3. **`src/data/cv.ts`**
   - New company: add `{ company, roles: [{ titleKey, period, bullets: [...] }] }` to `workExperience` (newest first).
   - Existing company: prepend or append role in that entry’s `roles` (newest role first, same as KPMG).
4. **`src/i18n/en.ts`** and **`src/i18n/pl.ts`**: add every `titleKey` and bullet key under `translation`, grouped with a comment `// {Company} — {Role}`.
5. Run `npm run build`. Fix any TypeScript errors.
6. Summarize: company, role keys added, files touched.

## Rules

- Do not add unused `title` on `WorkRole` (only `titleKey` is used).
- Every bullet in `cv.ts` must have matching EN and PL keys.
- `titleKey` must be unique per role (`key={role.titleKey}` in UI).
- Do not change React components unless the data model changes.

## Example (structure only)

**cv.ts** — new company:

```ts
{
  company: 'Acme Corp',
  roles: [
    {
      titleKey: 'job.acme.senior',
      period: '01.2024 – 12.2025',
      bullets: ['job.acme.senior.bullet1'],
    },
  ],
},
```

**en.ts**:

```ts
'job.acme.senior': 'Senior Developer',
'job.acme.senior.bullet1': 'Led migration of legacy services to .NET 8.',
```

**pl.ts**: same keys, Polish text.
