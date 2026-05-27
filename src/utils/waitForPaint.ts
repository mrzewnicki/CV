/** Wait for React commit + layout before Puppeteer capture or export. */
export function waitForPaint(ms = 150): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(resolve, ms);
      });
    });
  });
}
