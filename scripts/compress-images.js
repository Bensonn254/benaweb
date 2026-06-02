import sharp from 'sharp';
import path from 'path';

const images = [
  {
    input: 'public/images/resource/profile_img.png',
    output: 'public/images/resource/profile_img.webp',
    width: 600,
  },
  {
    input: 'public/images/resource/profile_img.png',
    output: 'public/images/resource/profile_img.jpg',
    width: 600,
  },
]

async function compress() {
  for (const img of images) {
    const inputPath = path.resolve(img.input)
    const outputPath = path.resolve(img.output)

    if (img.output.endsWith('.webp')) {
      await sharp(inputPath)
        .resize({ width: img.width,
          withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outputPath)
      console.log(`✓ Created ${img.output}`)
    } else {
      await sharp(inputPath)
        .resize({ width: img.width,
          withoutEnlargement: true })
        .jpeg({ quality: 85, progressive: true })
        .toFile(outputPath)
      console.log(`✓ Created ${img.output}`)
    }
  }
  console.log('Done.')
}

compress().catch(console.error)
