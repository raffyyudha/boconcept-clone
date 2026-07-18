const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://mqqbtxdvmsuzfhzxgojb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcWJ0eGR2bXN1emZoenhnb2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2ODE0MjIsImV4cCI6MjA5OTI1NzQyMn0.wGBqYNFxe61XpWTSmw-dQ33k2DtVqq_KgbXV1oPyh7k';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const renameMap = {
  'COMBI/ZEBRA/Dual shade blind': 'Combi blind',
  'Invisible grill / Safety net': 'Invisible grill',
  'Night curtain': 'Night curtain',
  'Honeycomb blind': 'Roller blind'
};

async function updateDb() {
  console.log('Migrating Supabase gallery_images categories...');
  let updatedCount = 0;
  for (const [oldCat, newCat] of Object.entries(renameMap)) {
    const { data, error } = await supabase
      .from('gallery_images')
      .update({ category: newCat })
      .eq('category', oldCat)
      .select();
    
    if (error) {
      console.error(`Error updating category "${oldCat}" to "${newCat}":`, error.message);
    } else {
      console.log(`Updated ${data?.length || 0} entries for category: "${oldCat}" -> "${newCat}"`);
      updatedCount += (data?.length || 0);
    }
  }
  console.log(`Finished migrating gallery categories. Total modified: ${updatedCount}`);
}

updateDb();
