import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import './i18n/index';
import { initTheme } from './theme';

initTheme();
import App from './App';
import LocaleRoute from './LocaleRoute';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/en" element={<LocaleRoute lang="en" />} />
        <Route path="/pl" element={<LocaleRoute lang="pl" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
