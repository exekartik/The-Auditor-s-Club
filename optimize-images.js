import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

const imagesToOptimize = [
  {
    input: 'arjun_singh.png',
    output: 'arjun_singh.webp',
    width: 600,
  },
  {
    input: 'kaushal_singh.png',
    output: 'kaushal_singh.webp',
    width: 600,
  },
  {
    input: 'hero-illustration.png',
    output: 'hero-illustration.webp',
    width: 800,
  }
];

async function main() {
  console.log('Starting image optimization...');
  for (const img of imagesToOptimize) {
    const inputPath = path.join(assetsDir, img.input);
    const outputPath = path.join(assetsDir, img.output);
    
    try {
      console.log(`Optimizing ${img.input} -> ${img.output}...`);
      await sharp(inputPath)
        .resize({ width: img.width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Successfully created ${img.output}`);
    } catch (err) {
      console.error(`Error optimizing ${img.input}:`, err.message);
    }
  }
  console.log('Image optimization finished.');
}

main();
