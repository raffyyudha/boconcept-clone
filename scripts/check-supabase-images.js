const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://mqqbtxdvmsuzfhzxgojb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcWJ0eGR2bXN1emZoenhnb2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2ODE0MjIsImV4cCI6MjA5OTI1NzQyMn0.wGBqYNFxe61XpWTSmw-dQ33k2DtVqq_KgbXV1oPyh7k';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkImages() {
  console.log('--- SITE SETTINGS ---');
  const { data: settings } = await supabase.from('site_settings').select('*');
  console.log(settings);

  console.log('\n--- CATALOGUE PRODUCTS ---');
  const { data: products } = await supabase.from('catalogue_products').select('id, name, image');
  console.log(products);

  console.log('\n--- SERVICES ---');
  const { data: services } = await supabase.from('services').select('id, title, image');
  console.log(services);
}

checkImages();
