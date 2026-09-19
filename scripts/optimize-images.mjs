// Turns the original trek photos into web-sized WebP, two widths each.
// Usage: node scripts/optimize-images.mjs <folder-with-originals>
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const src = process.argv[2];
if (!src) {
  console.error("usage: node scripts/optimize-images.mjs <folder>");
  process.exit(1);
}
const dest = path.resolve("public/images/peru");
await mkdir(dest, { recursive: true });

const widths = [900, 2000];
for (const file of await readdir(src)) {
  if (!/\.jpe?g$/i.test(file)) continue;
  const name = path.parse(file).name.toLowerCase().replace(/^_/, "");
  for (const w of widths) {
    const out = path.join(dest, `${name}-${w}.webp`);
    const info = await sharp(path.join(src, file))
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: w > 1000 ? 74 : 70 })
      .toFile(out);
    console.log(`${path.basename(out)}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}k`);
  }
}
