import sharp from 'sharp';
import { readdirSync, mkdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imgDir = path.join(root, 'src', 'assets', 'images');
const publicDir = path.join(root, 'public');
mkdirSync(publicDir, { recursive: true });

const LOGO_PATHS = `
<path d="M48 15 L21 34.5 H28 L48 20.5 L67 34.5 H74 L48 15Z" fill="#4A6275"/>
<g transform="translate(43,23)">
  <rect x="0" y="0" width="4" height="4" fill="#FFFFFF"/>
  <rect x="5.5" y="0" width="4" height="4" fill="#FFFFFF"/>
  <rect x="0" y="5.5" width="4" height="4" fill="#FFFFFF"/>
  <rect x="5.5" y="5.5" width="4" height="4" fill="#FFFFFF"/>
</g>
<path d="M89 6.5 L53 34.5 H62 L89 13.5 L117 34.5 H126 L89 6.5Z" fill="#F2A115"/>
<g transform="translate(83.5,17.5)">
  <rect x="0" y="0" width="4.5" height="4.5" fill="#FFFFFF"/>
  <rect x="6" y="0" width="4.5" height="4.5" fill="#FFFFFF"/>
  <rect x="0" y="6" width="4.5" height="4.5" fill="#FFFFFF"/>
  <rect x="6" y="6" width="4.5" height="4.5" fill="#FFFFFF"/>
</g>
<path d="M21 38 H69 V49 H36 V61 H64 V71 H36 V84 H69 V95 H21 V38Z" fill="#FFFFFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M74 38 H96 C110.5 38 120 46.5 120 66.5 C120 86.5 110.5 95 96 95 H74 V38ZM89 49 H95 C102.5 49 105.5 54.5 105.5 66.5 C105.5 78.5 102.5 84 95 84 H89 V49Z" fill="#FFFFFF"/>
<path d="M176 50.5 L164.5 56.5 C161.5 49 155 47.5 149 47.5 C139 47.5 133 55 133 66.5 C133 78 139 85.5 149 85.5 C155 85.5 161.5 84 164.5 76.5 L176 82.5 C171 92.5 161 97 149 97 C129 97 118 84.5 118 66.5 C118 48.5 129 36 149 36 C161 36 171 40.5 176 50.5Z" fill="#FFFFFF"/>`;

// ---------------------------------------------------------------------------
// 1. JPEG -> WebP (qualité 80, largeur max 1920)
// ---------------------------------------------------------------------------
const jpgs = readdirSync(imgDir).filter((f) => f.toLowerCase().endsWith('.jpg'));
for (const file of jpgs) {
  const input = path.join(imgDir, file);
  const output = path.join(imgDir, file.replace(/\.jpg$/i, '.webp'));
  const before = statSync(input).size;
  await sharp(input)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(output);
  const after = statSync(output).size;
  console.log(`${file}: ${(before / 1024 / 1024).toFixed(2)} Mo -> ${(after / 1024 / 1024).toFixed(2)} Mo (webp)`);
}

// ---------------------------------------------------------------------------
// 2. Open Graph image (1200x630)
// ---------------------------------------------------------------------------
const heroWebp = path.join(imgDir, 'hero_edc_construction_1791383474080.webp');
const gridLines = [
  ...Array.from({ length: 11 }, (_, i) => `<line x1="${i * 120}" y1="0" x2="${i * 120}" y2="630"/>`),
  ...Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${i * 126}" x2="1200" y2="${i * 126}"/>`),
].join('');

const ogOverlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1F1F1B" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#1F1F1B" stop-opacity="0.75"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#scrim)"/>
  <g stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1">${gridLines}</g>
  <g transform="translate(80,58) scale(0.85)">${LOGO_PATHS}</g>
  <rect x="80" y="286" width="72" height="4" fill="#D9A441"/>
  <text x="80" y="336" font-family="Arial, Helvetica, sans-serif" font-size="24" letter-spacing="7" fill="#D9A441" font-weight="bold">ENTREPRISE DIA CONSTRUCTION</text>
  <text x="80" y="424" font-family="Arial, Helvetica, sans-serif" font-size="62" fill="#F6F6F2" font-weight="bold">Construire avec précision.</text>
  <text x="80" y="498" font-family="Arial, Helvetica, sans-serif" font-size="62" fill="#D9A441" font-weight="bold">Bâtir pour durer.</text>
  <text x="80" y="572" font-family="Arial, Helvetica, sans-serif" font-size="23" fill="#A8A89E">Bâtiment • Génie civil • Travaux publics — Sénégal</text>
</svg>`;

await sharp(heroWebp)
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .composite([{ input: Buffer.from(ogOverlay), top: 0, left: 0 }])
  .jpeg({ quality: 85 })
  .toFile(path.join(publicDir, 'og-image.jpg'));
console.log('og-image.jpg généré');

// ---------------------------------------------------------------------------
// 3. Icons (apple-touch 180, icon 512) depuis le logo vectoriel
// ---------------------------------------------------------------------------
const makeIcon = (size, radius) => {
  const pad = size * 0.14;
  const logoW = size - pad * 2;
  const logoH = logoW / 2;
  const scale = logoW / 200;
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" rx="${radius}" fill="#1F1F1B"/>
    <g transform="translate(${pad},${(size - logoH) / 2}) scale(${scale})">${LOGO_PATHS}</g>
  </svg>`;
};

await sharp(Buffer.from(makeIcon(180, 40))).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(Buffer.from(makeIcon(512, 96))).png().toFile(path.join(publicDir, 'icon-512.png'));
console.log('apple-touch-icon.png + icon-512.png générés');
