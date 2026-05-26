---
name: add-project-experience
description: Adds a project experience entry to this CV app. Updates src/data/cv.ts and i18n en/pl. Use when the user asks to add a project, portfolio item, or project experience section entry.
---

# Add project experience

## Inputs to collect

If missing, ask for:

- Project name (EN / PL)
- Short description (EN / PL)
- Period
- Tech stack (plain strings, shown as tags)
- Optional URL (`link`)

## Workflow

1. Read [cv-reference.md](../cv-reference.md) for types and key patterns.
2. Pick slug `project.{slug}` → keys `project.{slug}.name`, `project.{slug}.desc`.
3. **`src/data/cv.ts`**: add to `projects` array (newest first):

```ts
{
  nameKey: 'project.{slug}.name',
  period: 'MM.YYYY – MM.YYYY',
  techStack: ['React', 'TypeScript'],
  descriptionKey: 'project.{slug}.desc',
  link: 'https://...', // optional
},
```

4. **`src/i18n/en.ts`** and **`src/i18n/pl.ts`**: add `name` and `desc` keys with a `// Projects` comment.
5. Run `npm run build`.
6. Summarize keys and stack.

## Rules

- `nameKey` must be unique (`key={p.nameKey}` in UI).
- Tech stack labels are not translated (literal strings in `cv.ts`).
- Omit `link` if there is no public URL.

## Example

```ts
// cv.ts
{
  nameKey: 'project.inventory.name',
  period: '06.2023 – 03.2024',
  techStack: ['Blazor', 'PostgreSQL'],
  descriptionKey: 'project.inventory.desc',
},
```

```ts
// en.ts
'project.inventory.name': 'Warehouse Inventory Portal',
'project.inventory.desc': 'Internal tool for stock tracking and reporting.',
```
