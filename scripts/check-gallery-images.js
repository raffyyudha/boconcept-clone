const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://mqqbtxdvmsuzfhzxgojb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcWJ0eGR2bXN1emZoenhnb2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2ODE0MjIsImV4cCI6MjA5OTI1NzQyMn0.wGBqYNFxe61XpWTSmw-dQ33k2DtVqq_KgbXV1oPyh7k';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkGallery() {
  const { data, error } = await supabase.from('gallery_images').select('*').order('sort_order');
  if (error) {
    console.error('Error fetching gallery images:', error);
    return;
  }
  
  const categoryCounts = {};
  for (const img of data) {
    const cat = img.category || 'General';
    categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  }
  
  console.log('--- UNIQUE CATEGORIES & COUNTS ---');
  console.log(categoryCounts);
  
  console.log('\n--- ALL IMAGES ---');
  data.forEach(img => {
    console.log(`ID: ${img.id} | Cat: ${img.category} | URL: ${img.image_url} | Alt: ${img.alt_text}`);
  });
}

checkGallery();
