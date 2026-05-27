import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';

const app = express();
const PORT = process.env.PDF_SERVER_PORT ?? 3001;
const VITE_URL = process.env.VITE_URL ?? 'http://localhost:5173';

app.use(cors({ origin: VITE_URL }));

app.get('/pdf', async (req, res) => {
  const lang = req.query.lang === 'pl' ? 'pl' : 'en';
  const targetUrl = `${VITE_URL}/${lang}`;

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--font-render-hinting=none',
      ],
    });

    const page = await browser.newPage();

    // A4 at 96 DPI — matches the fixed 794px document width
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

    await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30_000 });

    // Wait for fonts and images to be fully rendered
    await page.evaluate(() => document.fonts.ready);

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="Mateusz_Rzewnicki_CV_${lang.toUpperCase()}.pdf"`,
      'Content-Length': pdfBuffer.length,
    });
    res.end(pdfBuffer);
  } catch (err) {
    console.error('[pdf-server] Error:', err);
    res.status(500).json({ error: 'PDF generation failed', detail: String(err) });
  } finally {
    await browser?.close();
  }
});

app.get('/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`PDF server ready → http://localhost:${PORT}`);
  console.log(`  Rendering from: ${VITE_URL}`);
});
