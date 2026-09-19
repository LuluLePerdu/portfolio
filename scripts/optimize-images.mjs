// Builds web-sized WebP variants of a folder of photos and records them in
// src/content/photos.json, which the <Photo> component reads for srcset.
// Usage: node scripts/optimize-images.mjs <folder-with-originals> <collection>
//   e.g. node scripts/optimize-images.mjs ~/Photos/peru peru
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const [src, collection] = process.argv.slice(2);
if (!src || !collection) {
  console.error("usage: node scripts/optimize-images.mjs <folder> <collection>");
  process.exit(1);
}

const TARGETS = [960, 1600, 2800];
const dest = path.resolve("public/images", collection);
const manifestPath = path.resolve("src/content/photos.json");

await rm(dest, { recursive: true, force: true });
await mkdir(dest, { recursive: true });

let manifest = {};
try {
  manifest = JSON.parse(await readFile(manifestPath, "utf8"));
} catch {}
for (const key of Object.keys(manifest)) if (key.startsWith(`${collection}/`)) delete manifest[key];

for (const file of (await readdir(src)).sort()) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  const name = path.parse(file).name.toLowerCase().replace(/^_/, "");
  const input = sharp(path.join(src, file)).rotate();
  const { width, height } = await input.clone().toBuffer({ resolveWithObject: true }).then((r) => r.info);

  // Never upscale: keep the targets below the original, plus the original width itself.
  const widths = [...new Set([...TARGETS.filter((w) => w < width), Math.min(width, TARGETS.at(-1))])];
  for (const w of widths) {
    await input
      .clone()
      .resize({ width: w })
      .webp({ quality: 82, smartSubsample: true })
      .toFile(path.join(dest, `${name}-${w}.webp`));
  }
  manifest[`${collection}/${name}`] = { w: width, h: height, widths };
  console.log(`${collection}/${name}  ${width}x${height}  -> ${widths.join(", ")}`);
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(manifestPath, JSON.stringify(sorted, null, 2) + "\n");
