export type CvLang = 'en' | 'pl';

export function parseLangFromPath(pathname = window.location.pathname): CvLang {
  const base = import.meta.env.BASE_URL;
  const basePath = base === '/' ? '' : base.replace(/\/$/, '');
  let path = pathname;
  if (basePath && path.startsWith(basePath)) {
    path = path.slice(basePath.length) || '/';
  }
  const segment = path.replace(/^\//, '').split('/').filter(Boolean)[0];
  return segment === 'pl' ? 'pl' : 'en';
}
