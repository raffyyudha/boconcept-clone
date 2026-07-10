const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/gallery');

const renameMap = {
  'WhatsApp Image 2026-07-06 at 9.19.06 PM.avif': 'gallery-1.avif',
  'WhatsApp Image 2026-07-06 at 9.19.07 PM.avif': 'gallery-2.avif',
  'WhatsApp Image 2026-07-06 at 9.19.19 PM.avif': 'gallery-3.avif',
  'WhatsApp Image 2026-07-06 at 9.19.20 PM.avif': 'gallery-4.avif',
  'WhatsApp Image 2026-07-06 at 9.19.20 PM (1).avif': 'gallery-5.avif',
  'WhatsApp Image 2026-07-06 at 9.19.20 PM (2).avif': 'gallery-6.avif',
  'WhatsApp Image 2026-07-06 at 9.19.20 PM (3).avif': 'gallery-7.avif',
  'WhatsApp Image 2026-07-06 at 9.19.21 PM.avif': 'gallery-8.avif',
  'WhatsApp Image 2026-07-06 at 9.19.21 PM (1).avif': 'gallery-9.avif',
  'WhatsApp Image 2026-07-06 at 9.19.21 PM (2).avif': 'gallery-10.avif',
  'WhatsApp Image 2026-07-06 at 9.19.21 PM (3).avif': 'gallery-11.avif',
  'WhatsApp Image 2026-07-06 at 9.19.22 PM.avif': 'gallery-12.avif',
  'WhatsApp Image 2026-07-06 at 9.19.22 PM (1).avif': 'gallery-13.avif',
  'WhatsApp Image 2026-07-06 at 9.19.22 PM (2).avif': 'gallery-14.avif',
  'WhatsApp Image 2026-07-06 at 9.19.22 PM (3).avif': 'gallery-15.avif',
  'WhatsApp Image 2026-07-06 at 9.19.23 PM.avif': 'gallery-16.avif'
};

function renameFiles() {
  console.log('Renaming gallery files to URL-safe names...');
  let count = 0;
  for (const [oldName, newName] of Object.entries(renameMap)) {
    const oldPath = path.join(galleryDir, oldName);
    const newPath = path.join(galleryDir, newName);

    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: "${oldName}" -> "${newName}"`);
      count++;
    } else {
      console.log(`File not found (already renamed?): "${oldName}"`);
    }
  }
  console.log(`Completed renaming of ${count} files.`);
}

renameFiles();
