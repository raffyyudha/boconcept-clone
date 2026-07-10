const fs = require('fs');
const path = require('path');

const locations = [
  'Tampines', 'Orchard', 'Bukit Timah', 'Bedok', 'Jurong East', 'Jurong West', 'Woodlands', 'Yishun', 
  'Sengkang', 'Punggol', 'Pasir Ris', 'Ang Mo Kio', 'Bishan', 'Toa Payoh', 'Novena', 'Queenstown', 
  'Bukit Merah', 'Clementi', 'Bukit Panjang', 'Choa Chu Kang', 'Marine Parade', 'Geylang', 'Serangoon', 
  'River Valley', 'Sentosa Cove', 'Keppel Bay', 'Tanjong Pagar', 'Tiong Bahru', 'Changi', 'Hougang', 
  'Kovan', 'Potong Pasir', 'Katong', 'Siglap', 'Newton', 'Balestier', 'Kallang', 'Whampoa', 'Eunos', 
  'Chinatown', 'Bugis', 'Rochor', 'Jalan Besar', 'Lavender', 'Mountbatten', 'Tanjong Rhu', 'Joo Chiat', 
  'Kembangan', 'Ubi', 'Aljunied', 'MacPherson', 'Tai Seng', 'Bartley', 'Woodleigh', 'Braddell', 
  'Caldecott', 'Marymount', 'Upper Thomson', 'Bright Hill', 'Lentor', 'Springleaf', 'Khatib', 
  'Canberra', 'Admiralty', 'Marsiling', 'Kranji', 'Yew Tee', 'Hillview', 'Cashew', 'Beauty World', 
  'King Albert Park', 'Sixth Avenue', 'Stevens', 'One-North', 'Kent Ridge', 'Pasir Panjang', 
  'Telok Blangah', 'HarbourFront', 'Marina Bay', 'Downtown', 'Raffles Place', 'Shenton Way', 
  'Outram Park', 'Clarke Quay', 'Robertson Quay', 'Dhoby Ghaut', 'Somerset', 'Orchard Boulevard',
  
  // Popular Condominiums
  'Reflections at Keppel Bay', 'The Interlace', 'DLeedon', 'Corals at Keppel Bay', 'Marina One Residences', 
  'Wallich Residence', 'South Beach Residences', 'Duo Residences', 'OUE Twin Peaks', 'Nouvel 18', 
  'Ardmore Park', 'Gramercy Park', 'The Sail at Marina Bay', 'Costa Del Sol', 'The Bayshore', 
  'Bayshore Park', 'Mandarin Gardens', 'Meyer Mansion', 'Amber Park', 'One Meyer', 
  'Coastline Residences', 'Seaside Residences', 'High Park Residences', 'Parc Botannia', 'Riverfront Residences', 
  'Treasure at Tampines', 'Parc Greenwich', 'Ola EC', 'Piermont Grand EC', 'Rivercove Residences', 
  'Sol Acres', 'Wandervale', 'Kingsford Waterbay', 'Midtown Modern', 'Midtown Bay', 'CanningHill Piers', 
  'Irwell Hill Residences', 'One Bernam', 'Riviere', 'Kopar at Newton', 'The M', 'Parc Clematis', 
  'Whistler Grand', 'Twin Vew', 'Kent Ridge Hill Residences', 'Verdale', 'Forett at Bukit Timah', 
  'Daintree Residence', 'Mayfair Gardens', 'Royalgreen', 'Fourth Avenue Residences', 'Juniper Hill'
];

const services = [
  'Europe Zip Blinds', 'Motorised Curtains', 'Invisible Safety Grill', 'Cat Mesh Netting', 
  'Vinyl Flooring', 'Window Blinds', 'Venetian Blinds', 'Roller Blinds', 'Honeycomb Blinds', 
  'Safety Grills', 'Insects Screen', 'Laundry Rack', 'Water Dispenser', 'Custom Cushions'
];

const baseUrl = 'https://oscarfurnishing.com';

function generateSitemap() {
  console.log('Generating sitemap.xml...');
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // 1. Halaman Utama Statis
  const staticRoutes = ['', '/about', '/services', '/gallery', '/contact'];
  const today = new Date().toISOString().split('T')[0];

  for (const route of staticRoutes) {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>daily</changefreq>\n';
    xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += '  </url>\n';
  }

  // 2. 20.160 Halaman pSEO
  let counter = 0;
  for (let v_idx = 1; v_idx <= 12; v_idx++) {
    for (const loc of locations) {
      for (const srv of services) {
        let slug = '';
        if (v_idx === 1) slug = `${srv}-in-${loc}`;
        else if (v_idx === 2) slug = `best-${srv}-${loc}`;
        else if (v_idx === 3) slug = `affordable-${srv}-${loc}`;
        else if (v_idx === 4) slug = `top-rated-${srv}-${loc}`;
        else if (v_idx === 5) slug = `local-${srv}-installer-${loc}`;
        else if (v_idx === 6) slug = `custom-${srv}-fitting-${loc}`;
        else if (v_idx === 7) slug = `${srv}-price-quote-${loc}`;
        else if (v_idx === 8) slug = `cheap-${srv}-deal-${loc}`;
        else if (v_idx === 9) slug = `professional-${srv}-${loc}`;
        else if (v_idx === 10) slug = `certified-${srv}-contractor-${loc}`;
        else if (v_idx === 11) slug = `modern-${srv}-trend-${loc}`;
        else slug = `quality-${srv}-shop-${loc}`;

        slug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}/${slug}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += '    <changefreq>weekly</changefreq>\n';
        xml += '    <priority>0.6</priority>\n';
        xml += '  </url>\n';

        counter++;
      }
    }
  }

  xml += '</urlset>';

  const targetPath = path.join(__dirname, '../public/sitemap.xml');
  
  // Buat folder public jika belum ada
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)){
      fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(targetPath, xml);
  console.log(`Successfully generated public/sitemap.xml with ${counter + staticRoutes.length} pages.`);
}

generateSitemap();
