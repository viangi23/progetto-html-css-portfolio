// Controlla che ogni link e risorsa locale (href/src) delle pagine HTML esista davvero, e che le ancore (#id) ci siano.
//   npm run check
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const pages = readdirSync('.').filter((f) => f.endsWith('.html'));
let problems = 0;

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

  for (const [, attr, value] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(value)) continue;
    const [file, hash] = value.split('#');
    const target = file ? join(dirname(page), file) : page;
    if (file && !existsSync(target)) {
      console.log(`✗ ${page}: ${attr}="${value}" → file inesistente`);
      problems++;
    } else if (hash && target.endsWith('.html')) {
      const targetIds = target === page ? ids : new Set([...readFileSync(target, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
      if (!targetIds.has(hash)) {
        console.log(`✗ ${page}: ancora #${hash} non trovata in ${target}`);
        problems++;
      }
    }
  }

  const imgsWithoutAlt = [...html.matchAll(/<img\b[^>]*>/g)].filter((m) => !/\salt=/.test(m[0]));
  if (imgsWithoutAlt.length) {
    console.log(`✗ ${page}: ${imgsWithoutAlt.length} immagini senza attributo alt`);
    problems++;
  }
}

console.log(problems ? `\n${problems} problemi trovati` : `✓ ${pages.length} pagine controllate: link, risorse locali, ancore e alt a posto`);
process.exit(problems ? 1 : 0);
