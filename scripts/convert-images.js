import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');

const imagesToConvert = [
  'LOGO.jpg',
  'PROFILE.jpg.jpeg',
  'ai-code-editor.png',
  'ai-travel-planner.png',
  'hero-image.jpg',
  'hero-right.jpeg',
  'hero-screenshot-bg.png',
  'mini-paint.png',
  'quiz-app.png'
];

async function convertImages() {
  for (const image of imagesToConvert) {
    const inputPath = path.join(publicDir, image);
    const webpPath = path.join(publicDir, image.replace(/\.(jpg|jpeg|png)$/, '.webp'));
    const avifPath = path.join(publicDir, image.replace(/\.(jpg|jpeg|png)$/, '.avif'));

    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${image} - file not found`);
      continue;
    }

    try {
      // Convert to WebP
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(webpPath);
      console.log(`✓ Converted ${image} to WebP`);

      // Convert to AVIF
      await sharp(inputPath)
        .avif({ quality: 80 })
        .toFile(avifPath);
      console.log(`✓ Converted ${image} to AVIF`);
    } catch (error) {
      console.error(`✗ Error converting ${image}:`, error.message);
    }
  }

  console.log('\n✅ Image conversion complete!');
}

convertImages();
