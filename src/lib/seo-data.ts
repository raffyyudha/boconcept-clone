// Data lokasi & kondominium di Singapore
export const locations = [
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

// 14 Layanan Inti
export const services = [
  { name: 'Europe Zip Blinds', key: 'Best Europe Zip Blinds', image: '/zip_blind.avif' },
  { name: 'Motorised Curtains', key: 'Premium Motorised Curtains', image: '/catalogue/Day & Night curtain..avif' },
  { name: 'Invisible Safety Grill', key: 'Grade 316 Invisible Safety Grills', image: '/catalogue/2, 3 & 4 inches gap Invisible grill.avif' },
  { name: 'Cat Mesh Netting', key: 'Durable Mosquito & Cat Mesh Netting', image: '/catalogue/Mosquito cat mesh netting.avif' },
  { name: 'Vinyl Flooring', key: 'Waterproof Vinyl Flooring Overlay', image: 'https://ext.same-assets.com/2889591500/2724563737.svg' },
  { name: 'Window Blinds', key: 'Combi & Zebra Korean Blinds', image: '/catalogue/Combi or Zebra Korean blind.avif' },
  { name: 'Venetian Blinds', key: 'Monocord Timber Venetian Blinds', image: '/catalogue/Monocord  One cord 50mm Venetian blinds.avif' },
  { name: 'Roller Blinds', key: 'Commercial Office Roller Blinds', image: '/catalogue/Commerical Roller blinds.avif' },
  { name: 'Honeycomb Blinds', key: 'Sliding Honeycomb Thermal Blinds', image: '/catalogue/Slidling Honeycomb blinds.avif' },
  { name: 'Safety Grills', key: 'Balcony Child Safety Invisible Grills', image: '/catalogue/2, 3 & 4 inches gap Invisible grill.avif' },
  { name: 'Insects Screen', key: 'Magnetic Pest & Mosquito Screen Netting', image: '/catalogue/Mosquito cat mesh netting.avif' },
  { name: 'Laundry Rack', key: 'Motorised Smart Laundry System', image: '/catalogue/Motorized laundry system.avif' },
  { name: 'Water Dispenser', key: 'Instant Hot & Cold Water Filtration', image: '/catalogue/light & Heavy Water depensar.avif' },
  { name: 'Custom Cushions', key: 'Bespoke Sofa Cushions Upholstery', image: '/custom_upholstery.avif' }
];

export const themes = ['blue', 'gold', 'emerald', 'slate'];

export interface SeoPageData {
  slug: string;
  keyword: string;
  service_type: string;
  location: string;
  meta_title: string;
  meta_description: string;
  headline: string;
  intro_text: string;
  body_text_1: string;
  body_text_2: string;
  layout_style: number;
  color_theme: string;
  hero_image: string;
}

// Generate only slugs programmatically to avoid memory bloat
export function getAllSeoSlugs(): string[] {
  const slugs: string[] = [];
  for (let v_idx = 1; v_idx <= 12; v_idx++) {
    for (const loc of locations) {
      for (const srv of services) {
        let slug = '';
        if (v_idx === 1) slug = `${srv.name}-in-${loc}`;
        else if (v_idx === 2) slug = `best-${srv.name}-${loc}`;
        else if (v_idx === 3) slug = `affordable-${srv.name}-${loc}`;
        else if (v_idx === 4) slug = `top-rated-${srv.name}-${loc}`;
        else if (v_idx === 5) slug = `local-${srv.name}-installer-${loc}`;
        else if (v_idx === 6) slug = `custom-${srv.name}-fitting-${loc}`;
        else if (v_idx === 7) slug = `${srv.name}-price-quote-${loc}`;
        else if (v_idx === 8) slug = `cheap-${srv.name}-deal-${loc}`;
        else if (v_idx === 9) slug = `professional-${srv.name}-${loc}`;
        else if (v_idx === 10) slug = `certified-${srv.name}-contractor-${loc}`;
        else if (v_idx === 11) slug = `modern-${srv.name}-trend-${loc}`;
        else slug = `quality-${srv.name}-shop-${loc}`;

        slug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        slugs.push(slug);
      }
    }
  }
  return slugs;
}

// Resolve page content on the fly without heavy nested loops (O(N+M) complexity)
export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  // 1. Find matched location
  let matchedLoc: string | undefined;
  for (const loc of locations) {
    const locSlug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (slug.endsWith(locSlug)) {
      matchedLoc = loc;
      break;
    }
  }

  if (!matchedLoc) return undefined;

  const locSlug = matchedLoc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  // 2. Find matched service
  let matchedSrv: typeof services[0] | undefined;
  for (const srv of services) {
    const srvSlug = srv.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (slug.includes(srvSlug)) {
      matchedSrv = srv;
      break;
    }
  }

  if (!matchedSrv) return undefined;

  // 3. Determine index values to keep themes and copywriting fully deterministic
  const srvIdx = services.indexOf(matchedSrv);
  const locIdx = locations.indexOf(matchedLoc);
  
  let v_idx = 12;
  if (slug.startsWith('best-')) v_idx = 2;
  else if (slug.startsWith('affordable-')) v_idx = 3;
  else if (slug.startsWith('top-rated-')) v_idx = 4;
  else if (slug.startsWith('local-')) v_idx = 5;
  else if (slug.startsWith('custom-')) v_idx = 6;
  else if (slug.includes('-price-quote-')) v_idx = 7;
  else if (slug.startsWith('cheap-')) v_idx = 8;
  else if (slug.startsWith('professional-')) v_idx = 9;
  else if (slug.startsWith('certified-')) v_idx = 10;
  else if (slug.startsWith('modern-')) v_idx = 11;
  else if (slug.startsWith(`${matchedSrv.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-in`)) v_idx = 1;

  const counter = v_idx * srvIdx * locIdx;
  const theme = themes[counter % 4];
  const layout_style = (counter % 2) + 1;

  const keyword = v_idx === 1 ? `${matchedSrv.name} in ${matchedLoc}` :
                  v_idx === 2 ? `Best ${matchedSrv.name} ${matchedLoc}` :
                  v_idx === 3 ? `Affordable ${matchedSrv.name} ${matchedLoc}` :
                  v_idx === 4 ? `Top Rated ${matchedSrv.name} ${matchedLoc}` :
                  v_idx === 5 ? `Local ${matchedSrv.name} Installer ${matchedLoc}` :
                  v_idx === 6 ? `Custom ${matchedSrv.name} Fitting ${matchedLoc}` :
                  v_idx === 7 ? `${matchedSrv.name} Price Quote ${matchedLoc}` :
                  v_idx === 8 ? `Cheap ${matchedSrv.name} Deal ${matchedLoc}` :
                  v_idx === 9 ? `Professional ${matchedSrv.name} ${matchedLoc}` :
                  v_idx === 10 ? `Certified ${matchedSrv.name} Contractor ${matchedLoc}` :
                  v_idx === 11 ? `Modern ${matchedSrv.name} Trend ${matchedLoc}` :
                  `Quality ${matchedSrv.name} Shop ${matchedLoc}`;

  const headline = v_idx === 1 ? `Premium ${matchedSrv.name} Installations in ${matchedLoc}, SG` :
                   v_idx === 2 ? `Looking for the Best ${matchedSrv.name} at ${matchedLoc}?` :
                   v_idx === 3 ? `Affordable & Certified ${matchedSrv.name} Services in ${matchedLoc}` :
                   v_idx === 4 ? `Top-Rated ${matchedSrv.name} Services Available at ${matchedLoc}` :
                   v_idx === 5 ? `Trusted Local ${matchedSrv.name} Installer near ${matchedLoc}` :
                   v_idx === 6 ? `Custom ${matchedSrv.name} Fitting & Fabrication in ${matchedLoc}` :
                   v_idx === 7 ? `Request ${matchedSrv.name} Price Quote for ${matchedLoc} Resident` :
                   v_idx === 8 ? `Lowest Pricing for ${matchedSrv.name} at ${matchedLoc}` :
                   v_idx === 9 ? `Professional Fitting Services of ${matchedSrv.name} in ${matchedLoc}` :
                   v_idx === 10 ? `Certified ${matchedSrv.name} Contractor in ${matchedLoc} Singapore` :
                   v_idx === 11 ? `Modern Home Concepts for ${matchedSrv.name} at ${matchedLoc}` :
                   `High-Quality ${matchedSrv.name} Specialty Shop near ${matchedLoc}`;

  let intro = '';
  let body_text_1 = '';
  let body_text_2 = '';

  if (counter % 3 === 0) {
    intro = `Transform your living spaces in ${matchedLoc} with Oscar Furnishing. We are Singapore's leading specialists for ${matchedSrv.name}, providing accurate measurements and tailored designs for all layouts.`;
    body_text_1 = `Our premium ${matchedSrv.key} options are fully customized to meet the weather and aesthetic demands of ${matchedLoc} estates. Protect your balconies, windows, and floors with commercial-grade materials.`;
    body_text_2 = `Oscar Furnishing is ACRA registered (53365360J). Alvin Lim and our sales experts visit your home directly in ${matchedLoc} with physical color swatches and samples for a free on-site laser assessment.`;
  } else if (counter % 3 === 1) {
    intro = `Looking for high-quality ${matchedSrv.name} around ${matchedLoc}? Oscar Furnishing offers local fabrication and professional fitting to ensure a gap-free and durable installation.`;
    body_text_1 = `Each ${matchedSrv.name} is crafted with wind-resistant mechanisms and premium fabrics suited for high-rise condos and flats at ${matchedLoc}. Enjoy direct workshop pricing and official registry security.`;
    body_text_2 = `Get a free quote today! Call +65 9122 9599 to coordinate a time. Alvin Lim will meet you at ${matchedLoc} with samples, guides, and zero obligation consultation.`;
  } else {
    intro = `Elevate the safety, comfort, and luxury of your home in ${matchedLoc} with custom-tailored ${matchedSrv.name} solutions built directly by local craft workshops.`;
    body_text_1 = `We customize every component of your ${matchedSrv.name}. Our installations around ${matchedLoc} are known for clean alignments, heavy-duty tracking, and seamless smart automation integration.`;
    body_text_2 = `Visit our Showroom Studio at York Hill, Singapore, or schedule a free site measurement appointment directly in ${matchedLoc} by contacting Alvin Lim at +65 9122 9599.`;
  }

  return {
    slug,
    keyword,
    service_type: matchedSrv.name,
    location: matchedLoc,
    meta_title: `${keyword} | Oscar Furnishing Singapore`,
    meta_description: `Premium customized ${matchedSrv.name} solutions for homes in ${matchedLoc} Singapore. Get UEN-registered quality and a free quote from Alvin Lim.`,
    headline,
    intro_text: intro,
    body_text_1,
    body_text_2,
    layout_style,
    color_theme: theme,
    hero_image: matchedSrv.image
  };
}
