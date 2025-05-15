const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PLACEHOLDERS = [
  {
    name: 'profile-placeholder.png',
    width: 800,
    height: 800,
    text: 'Profile\nPhoto',
    color: '#0A192F',
    textColor: '#00F5D4'
  },
  {
    name: 'projects/research-rover-placeholder.png',
    width: 1200,
    height: 800,
    text: 'Research\nRover',
    color: '#0D0D0D',
    textColor: '#00F5D4'
  },
  {
    name: 'projects/newsrec-placeholder.png',
    width: 1200,
    height: 800,
    text: 'News\nRecommender',
    color: '#0D0D0D',
    textColor: '#00F5D4'
  }
];

async function generatePlaceholders() {
  const publicDir = path.join(__dirname, '..', 'public', 'images');
  
  // Ensure directories exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  if (!fs.existsSync(path.join(publicDir, 'projects'))) {
    fs.mkdirSync(path.join(publicDir, 'projects'), { recursive: true });
  }

  for (const placeholder of PLACEHOLDERS) {
    const outputPath = path.join(publicDir, placeholder.name);
    
    await sharp({
      create: {
        width: placeholder.width,
        height: placeholder.height,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
    .composite([
      {
        input: {
          create: {
            width: placeholder.width,
            height: placeholder.height,
            channels: 4,
            background: placeholder.color
          }
        },
        gravity: 'center'
      },
      {
        input: {
          text: {
            text: placeholder.text,
            font: 'sans',
            fontSize: Math.min(placeholder.width, placeholder.height) / 10,
            rgba: true
          }
        },
        gravity: 'center',
        top: 0,
        left: 0
      }
    ])
    .png()
    .toFile(outputPath);

    console.log(`Generated ${placeholder.name}`);
  }
}

generatePlaceholders().catch(console.error); 