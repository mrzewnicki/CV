# CV content reference

All résumé content lives in three places. Edit all of them for translatable sections.

| File | Purpose |
|------|---------|
| `src/data/cv.ts` | Structured data (companies, roles, projects, skill items) |
| `src/i18n/en.ts` | English strings for `*Key` fields |
| `src/i18n/pl.ts` | Polish strings for `*Key` fields |

Skill group **titles** use `titleKey` (translated). Skill **items** are plain strings in `cv.ts` (not i18n).

## Key naming

Use lowercase dot-separated keys. Prefix by domain:

| Domain | Prefix | Example |
|--------|--------|---------|
| Work role title | `job.{companySlug}.{roleSlug}` | `job.acme.senior` |
| Work bullet | `job.{companySlug}.{roleSlug}.bullet{N}` | `job.acme.senior.bullet1` |
| Project | `project.{slug}.name` / `.desc` | `project.portal.name` |
| Skill group title | `skills.{group}` | `skills.frameworks` (existing groups only) |

`companySlug` / `project.slug`: short ASCII, no spaces (e.g. `acme`, `motorola`).

## Types (`src/data/cv.ts`)

```ts
WorkExperience: { company: string; roles: WorkRole[] }
WorkRole: { titleKey: string; period: string; bullets: string[] }

Project: { nameKey: string; period: string; techStack: string[]; link?: string; descriptionKey: string }

SkillGroup: { titleKey: string; items: string[] }
```

## Period format

Match existing entries: `MM.YYYY – MM.YYYY` or `YYYY – YYYY` (en dash `–`).

## Ordering

- **Work**: newest company/role first (top of `workExperience` / first in `roles`).
- **Projects**: newest first in `projects`.
- **Skills**: append to `items`; avoid duplicates in the same group.

## Verification

After edits: `npm run build`

UI reads `cvData` only; no component changes needed for new entries.
