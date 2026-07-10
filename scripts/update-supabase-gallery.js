const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://mqqbtxdvmsuzfhzxgojb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcWJ0eGR2bXN1emZoenhnb2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2ODE0MjIsImV4cCI6MjA5OTI1NzQyMn0.wGBqYNFxe61XpWTSmw-dQ33k2DtVqq_KgbXV1oPyh7k';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const renameMap = {
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.06 PM.avif': '/gallery/gallery-1.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.07 PM.avif': '/gallery/gallery-2.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.19 PM.avif': '/gallery/gallery-3.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.20 PM.avif': '/gallery/gallery-4.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.20 PM (1).avif': '/gallery/gallery-5.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.20 PM (2).avif': '/gallery/gallery-6.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.20 PM (3).avif': '/gallery/gallery-7.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.21 PM.avif': '/gallery/gallery-8.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.21 PM (1).avif': '/gallery/gallery-9.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.21 PM (2).avif': '/gallery/gallery-10.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.21 PM (3).avif': '/gallery/gallery-11.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.22 PM.avif': '/gallery/gallery-12.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.22 PM (1).avif': '/gallery/gallery-13.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.22 PM (2).avif': '/gallery/gallery-14.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.22 PM (3).avif': '/gallery/gallery-15.avif',
  '/gallery/WhatsApp Image 2026-07-06 at 9.19.23 PM.avif': '/gallery/gallery-16.avif'
};

async function updateDb() {
  console.log('Updating Supabase gallery_images entries...');
  let updatedCount = 0;
  for (const [oldUrl, newUrl] of Object.entries(renameMap)) {
    const { error } = await supabase
      .from('gallery_images')
      .update({ image_url: newUrl })
      .eq('image_url', oldUrl);
    
    if (error) {
      console.error(`Error updating "${oldUrl}":`, error.message);
    } else {
      console.log(`Updated DB: "${oldUrl}" -> "${newUrl}"`);
      updatedCount++;
    }
  }
  console.log(`Finished updating ${updatedCount} entries in Supabase.`);
}

updateDb();
