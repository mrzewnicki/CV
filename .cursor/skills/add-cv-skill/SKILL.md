---
name: add-cv-skill
description: Adds a skill tag to a skills group in this CV app (src/data/cv.ts). Use when the user asks to add a technology, tool, or skill to the skills section—not Cursor Agent Skills.
---

# Add skill to CV skills section

## Inputs to collect

If missing, ask for:

- Skill label (exact display text, e.g. `Vitest`, `Kubernetes`)
- Target group (map user intent to `titleKey`):

| User says | `titleKey` in `cv.ts` |
|-----------|------------------------|
| language, programming | `skills.languages` |
| framework, library | `skills.frameworks` |
| database, SQL | `skills.databases` |
| Azure, cloud | `skills.cloud` |
| OS, Linux, system | `skills.systems` |
| SCRUM, Agile, process | `skills.methods` |
| pattern, architecture style | `skills.patterns` |
| IDE, editor | `skills.ide` |
| AI, Copilot | `skills.ai` |

## Workflow

1. Read [cv-reference.md](../cv-reference.md).
2. Open `src/data/cv.ts` → `skillGroups` → find group by `titleKey`.
3. Append the label to `items` if not already present (case-sensitive check).
4. **Do not** edit `en.ts` / `pl.ts` for skill items (only group titles use i18n).
5. Run `npm run build`.
6. Report group name (translated title key) and item added.

## New skill group (rare)

Only if the user explicitly wants a new category:

1. Add `{ titleKey: 'skills.{newGroup}', items: [] }` to `skillGroups`.
2. Add `'skills.{newGroup}': '...'` to **both** `en.ts` and `pl.ts` under `// Skills`.

## Rules

- Keep consistent spelling with existing tags (e.g. `React JS/TS` vs `React`).
- Prefer existing groups; do not create duplicate groups for one-off items.
