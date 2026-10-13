import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const source = 'public/icon-512.png';
const sizes = [16, 32, 48];

const png = (size) =>
  sharp(source)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

const buffers = await Promise.all(sizes.map(png));

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(buffers.length, 4);

let offset = 6 + buffers.length * 16;
const entries = buffers.map((buf, i) => {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(sizes[i] >= 256 ? 0 : sizes[i], 0);
  entry.writeUInt8(sizes[i] >= 256 ? 0 : sizes[i], 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(buf.length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += buf.length;
  return entry;
});

writeFileSync('public/favicon.ico', Buffer.concat([header, ...entries, ...buffers]));

await sharp(source).resize(48, 48).png().toFile('public/favicon-48x48.png');
await sharp(source).resize(96, 96).png().toFile('public/favicon-96x96.png');

console.log('favicon.ico (16/32/48) + favicon-48x48.png + favicon-96x96.png générés.');
