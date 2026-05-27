# Mateusz Rzewnicki — CV

Interactive CV built with React, TypeScript, Vite, and Tailwind CSS.

- English: [mrzewnicki.github.io/CV/](https://mrzewnicki.github.io/CV/) (also `/en`)
- Polish: [mrzewnicki.github.io/CV/pl](https://mrzewnicki.github.io/CV/pl)

## Development

```bash
npm install
npm run dev
```

### PDF export

- **Local (`npm run dev`)**: The page uses a full-width web layout. On Export, it briefly switches to A4 sizing, Puppeteer captures `/{lang}?pdf=1`, then the web layout returns. Start the server in a second terminal: `npm run server`.
- **Production (GitHub Pages)**: Full-width web layout; download serves pre-built files from `public/pdf/` based on the current language.

After you change the CV layout or content, regenerate PDFs locally (with the server running), then replace the files in `public/pdf/` before deploying.

## GitHub Pages

The site deploys automatically on every push to `master` via [GitHub Actions](.github/workflows/deploy.yml).

**One-time setup in the repository settings:**

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

To preview a production build locally:

```bash
npm run build:pages
npm run preview -- --base /CV/
```

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
