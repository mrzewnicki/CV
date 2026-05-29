import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import { CV_VERSION, BUILD_DATE } from '../src/version';

const app = express();
const PORT = process.env.PDF_SERVER_PORT ?? 3001;
const VITE_URL = process.env.VITE_URL ?? 'http://localhost:5173';

app.use(cors({ origin: VITE_URL }));

async function embedPdfMetadata(
  pdfBuffer: Buffer,
  lang: 'en' | 'pl',
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(pdfBuffer);

  pdfDoc.setTitle(`Mateusz Rzewnicki — CV (${lang.toUpperCase()})`);
  pdfDoc.setAuthor('Mateusz Rzewnicki');
  pdfDoc.setSubject(`Curriculum Vitae | Version: ${CV_VERSION} | Build: ${BUILD_DATE}`);
  pdfDoc.setKeywords(['CV', 'Resume', 'Software Engineer', 'Full-Stack Developer', `v${CV_VERSION}`]);
  pdfDoc.setProducer(`CV App v${CV_VERSION}`);
  pdfDoc.setCreator(`CV App v${CV_VERSION} (${BUILD_DATE})`);
  pdfDoc.setCreationDate(new Date());
  pdfDoc.setModificationDate(new Date());

  return pdfDoc.save();
}

app.get('/pdf', async (req, res) => {
  const lang = req.query.lang === 'pl' ? 'pl' : 'en';
  const targetUrl = `${VITE_URL}/${lang}?pdf=1`;

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

    // A4 at 96 DPI (210mm × 297mm ≈ 794.4 × 1123.2px)
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

    // Emulate print media to apply @media print styles
    await page.emulateMediaType('print');

    await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30_000 });

    await page.waitForSelector('[data-cv-layout="a4"]', { timeout: 15_000 });
    await page.evaluate(() => document.fonts.ready);

    // Inject styles to eliminate sub-pixel white slivers at the page edges.
    // Chrome's PDF rendering creates pages slightly larger than requested
    // (~210.23mm for 210mm). We tell CSS the page is larger via @page so
    // backgrounds extend past the actual PDF boundaries.
    await page.evaluate(() => {
      const style = document.createElement('style');
      style.textContent = `
        @page {
          size: 211mm 298mm !important;
          margin: 0 !important;
        }
        html, body {
          background: #1E293B !important;
          margin: 0 !important;
          padding: 0 !important;
          min-width: 211mm !important;
          min-height: 298mm !important;
        }
        #root {
          background: #1E293B !important;
          margin: 0 !important;
          padding: 0 !important;
          min-width: 211mm !important;
          min-height: 595mm !important;
        }
        #root > [data-cv-layout='a4'] {
          background: #1E293B !important;
          margin: 0 !important;
          padding: 0 !important;
          gap: 0 !important;
          min-width: 211mm !important;
          min-height: 595mm !important;
        }
        .cv-page {
          width: 212mm !important;
          min-height: 299.2mm !important;
          margin: 0 !important;
          outline: none !important;
          box-shadow: none !important;
          background: #111827 !important;
        }
        .cv-page-row {
          min-height: 298mm !important;
        }
        .cv-sidebar-col {
          background: #111827 !important;
          min-height: 298mm !important;
        }
        .cv-main-col {
          background: #1E293B !important;
          min-height: 298mm !important;
        }
        /* Ensure page 2 fills properly */
        [data-cv-page="2"] {
          background: #111827 !important;
        }
        [data-cv-page="2"] .cv-main-col {
          background: #1E293B !important;
        }
      `;
      document.head.appendChild(style);
    });

    // Allow reflow
    await new Promise((r) => setTimeout(r, 500));

    const pdfBuffer = await page.pdf({
      width: '210mm',
      height: '297mm',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      pageRanges: '1-2',
    });

    const pdfWithMetadata = await embedPdfMetadata(Buffer.from(pdfBuffer), lang);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="Mateusz_Rzewnicki_CV_${lang.toUpperCase()}.pdf"`,
      'Content-Length': pdfWithMetadata.length,
    });
    res.end(Buffer.from(pdfWithMetadata));
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
