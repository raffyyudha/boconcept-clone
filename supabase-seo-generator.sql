-- ========================================================
-- OSCAR FURNISHING - PL/pgSQL PROGRAMMATIC SEO GENERATOR
-- Menghasilkan 20,000+ kombinasi halaman unik berbasis lokasi & kondominium
-- Jalankan kode ini di Supabase SQL Editor
-- ========================================================

CREATE OR REPLACE FUNCTION generate_20k_seo_pages()
RETURNS integer AS $$
DECLARE
  -- 1. 120+ Lokasi & Kondominium Populer di Singapore
  locations TEXT[] := ARRAY[
    -- Distrik & Perumahan Utama
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
    
    -- Kondominium & Apartemen Populer di Singapore (Pencarian Sangat Tinggi)
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
  
  -- 2. 14 Layanan & Kata Kunci Inti
  services TEXT[][] := ARRAY[
    ARRAY['Europe Zip Blinds', 'Best Europe Zip Blinds', '/zip_blind.avif'],
    ARRAY['Motorised Curtains', 'Premium Motorised Curtains', '/catalogue/Day & Night curtain..avif'],
    ARRAY['Invisible Safety Grill', 'Grade 316 Invisible Safety Grills', '/catalogue/2, 3 & 4 inches gap Invisible grill.avif'],
    ARRAY['Cat Mesh Netting', 'Durable Mosquito & Cat Mesh Netting', '/catalogue/Mosquito cat mesh netting.avif'],
    ARRAY['Vinyl Flooring', 'Waterproof Vinyl Flooring Overlay', 'https://ext.same-assets.com/2889591500/2724563737.svg'],
    ARRAY['Window Blinds', 'Combi & Zebra Korean Blinds', '/catalogue/Combi or Zebra Korean blind.avif'],
    ARRAY['Venetian Blinds', 'Monocord Timber Venetian Blinds', '/catalogue/Monocord  One cord 50mm Venetian blinds.avif'],
    ARRAY['Roller Blinds', 'Commercial Office Roller Blinds', '/catalogue/Commerical Roller blinds.avif'],
    ARRAY['Honeycomb Blinds', 'Sliding Honeycomb Thermal Blinds', '/catalogue/Slidling Honeycomb blinds.avif'],
    ARRAY['Safety Grills', 'Balcony Child Safety Invisible Grills', '/catalogue/2, 3 & 4 inches gap Invisible grill.avif'],
    ARRAY['Insects Screen', 'Magnetic Pest & Mosquito Screen Netting', '/catalogue/Mosquito cat mesh netting.avif'],
    ARRAY['Laundry Rack', 'Motorised Smart Laundry System', '/catalogue/Motorized laundry system.avif'],
    ARRAY['Water Dispenser', 'Instant Hot & Cold Water Filtration', '/catalogue/light & Heavy Water depensar.avif'],
    ARRAY['Custom Cushions', 'Bespoke Sofa Cushions Upholstery', '/custom_upholstery.avif']
  ];
  
  -- 3. Variasi Tema Warna & Gaya Layout
  themes TEXT[] := ARRAY['blue', 'gold', 'emerald', 'slate'];
  
  -- Variables untuk Loop
  loc TEXT;
  srv TEXT[];
  theme TEXT;
  layout INT;
  
  slug TEXT;
  keyword TEXT;
  headline TEXT;
  intro TEXT;
  body1 TEXT;
  body2 TEXT;
  meta_t TEXT;
  meta_d TEXT;
  
  inserted_count INT := 0;
BEGIN
  -- Hapus data pSEO lama agar tidak terjadi duplikasi saat eksekusi ulang
  TRUNCATE seo_pages;

  -- Gunakan loop bertingkat untuk menghasilkan 20.000+ kombinasi unik
  -- Kombinasi = 120 lokasi * 14 layanan * 12 variasi layout/copywriting = 20,160 total data
  FOR v_idx IN 1..12 LOOP
    FOREACH loc IN ARRAY locations LOOP
      FOREACH srv IN ARRAY services LOOP
        theme := themes[((inserted_count % 4) + 1)];
        layout := (inserted_count % 2) + 1; -- Variasi Layout (Style 1 atau Style 2)
        
        -- VARIATOR SLUG, KEYWORD & HEADLINE (Untuk mencegah Google duplicate detection)
        IF v_idx = 1 THEN
          slug := lower(replace(replace(srv[1] || '-in-' || loc, ' ', '-'), '&', 'and'));
          keyword := srv[1] || ' in ' || loc;
          headline := 'Premium ' || srv[1] || ' Installations in ' || loc || ', SG';
        ELSIF v_idx = 2 THEN
          slug := lower(replace(replace('best-' || srv[1] || '-' || loc, ' ', '-'), '&', 'and'));
          keyword := 'Best ' || srv[1] || ' ' || loc;
          headline := 'Looking for the Best ' || srv[1] || ' at ' || loc || '?';
        ELSIF v_idx = 3 THEN
          slug := lower(replace(replace('affordable-' || srv[1] || '-' || loc, ' ', '-'), '&', 'and'));
          keyword := 'Affordable ' || srv[1] || ' ' || loc;
          headline := 'Affordable & Certified ' || srv[1] || ' Services in ' || loc;
        ELSIF v_idx = 4 THEN
          slug := lower(replace(replace('top-rated-' || srv[1] || '-' || loc, ' ', '-'), '&', 'and'));
          keyword := 'Top Rated ' || srv[1] || ' ' || loc;
          headline := 'Top-Rated ' || srv[1] || ' Services Available at ' || loc;
        ELSIF v_idx = 5 THEN
          slug := lower(replace(replace('local-' || srv[1] || '-installer-' || loc, ' ', '-'), '&', 'and'));
          keyword := 'Local ' || srv[1] || ' Installer ' || loc;
          headline := 'Trusted Local ' || srv[1] || ' Installer near ' || loc;
        ELSIF v_idx = 6 THEN
          slug := lower(replace(replace('custom-' || srv[1] || '-fitting-' || loc, ' ', '-'), '&', 'and'));
          keyword := 'Custom ' || srv[1] || ' Fitting ' || loc;
          headline := 'Custom ' || srv[1] || ' Fitting & Fabrication in ' || loc;
        ELSIF v_idx = 7 THEN
          slug := lower(replace(replace(srv[1] || '-price-quote-' || loc, ' ', '-'), '&', 'and'));
          keyword := srv[1] || ' Price Quote ' || loc;
          headline := 'Request ' || srv[1] || ' Price Quote for ' || loc || ' Resident';
        ELSIF v_idx = 8 THEN
          slug := lower(replace(replace('cheap-' || srv[1] || '-deal-' || loc, ' ', '-'), '&', 'and'));
          keyword := 'Cheap ' || srv[1] || ' Deal ' || loc;
          headline := 'Lowest Pricing for ' || srv[1] || ' at ' || loc;
        ELSIF v_idx = 9 THEN
          slug := lower(replace(replace('professional-' || srv[1] || '-' || loc, ' ', '-'), '&', 'and'));
          keyword := 'Professional ' || srv[1] || ' ' || loc;
          headline := 'Professional Fitting Services of ' || srv[1] || ' in ' || loc;
        ELSIF v_idx = 10 THEN
          slug := lower(replace(replace('certified-' || srv[1] || '-contractor-' || loc, ' ', '-'), '&', 'and'));
          keyword := 'Certified ' || srv[1] || ' Contractor ' || loc;
          headline := 'Certified ' || srv[1] || ' Contractor in ' || loc || ' Singapore';
        ELSIF v_idx = 11 THEN
          slug := lower(replace(replace('modern-' || srv[1] || '-trend-' || loc, ' ', '-'), '&', 'and'));
          keyword := 'Modern ' || srv[1] || ' Trend ' || loc;
          headline := 'Modern Home Concepts for ' || srv[1] || ' at ' || loc;
        ELSE
          slug := lower(replace(replace('quality-' || srv[1] || '-shop-' || loc, ' ', '-'), '&', 'and'));
          keyword := 'Quality ' || srv[1] || ' Shop ' || loc;
          headline := 'High-Quality ' || srv[1] || ' Specialty Shop near ' || loc;
        END IF;

        -- Bersihkan slug agar tidak memiliki karakter ganda '--' akibat spasi ganda
        slug := replace(slug, '--', '-');

        -- VARIATOR KONTEN COPYWRITING (Semakin dinamis untuk mencegah penalti Google)
        IF (inserted_count % 3) = 0 THEN
          intro := 'Transform your living spaces in ' || loc || ' with Oscar Furnishing. We are Singapore''s leading specialists for ' || srv[1] || ', providing accurate measurements and tailored designs for all layouts.';
          body1 := 'Our premium ' || srv[2] || ' options are fully customized to meet the weather and aesthetic demands of ' || loc || ' estates. Protect your balconies, windows, and floors with commercial-grade materials.';
          body2 := 'Oscar Furnishing is ACRA registered (53365360J). Alvin Lim and our sales experts visit your home directly in ' || loc || ' with physical color swatches and samples for a free on-site laser assessment.';
        ELSIF (inserted_count % 3) = 1 THEN
          intro := 'Looking for high-quality ' || srv[1] || ' around ' || loc || '? Oscar Furnishing offers local fabrication and professional fitting to ensure a gap-free and durable installation.';
          body1 := 'Each ' || srv[1] || ' is crafted with wind-resistant mechanisms and premium fabrics suited for high-rise condos and flats at ' || loc || '. Enjoy direct workshop pricing and official registry security.';
          body2 := 'Get a free quote today! Call +65 9122 9599 to coordinate a time. Alvin Lim will meet you at ' || loc || ' with samples, guides, and zero obligation consultation.';
        ELSE
          intro := 'Elevate the safety, comfort, and luxury of your home in ' || loc || ' with custom-tailored ' || srv[1] || ' solutions built directly by local craft workshops.';
          body1 := 'We customize every component of your ' || srv[1] || '. Our installations around ' || loc || ' are known for clean alignments, heavy-duty tracking, and seamless smart automation integration.';
          body2 := 'Visit our Showroom Studio at York Hill, Singapore, or schedule a free site measurement appointment directly in ' || loc || ' by contacting Alvin Lim at +65 9122 9599.';
        END IF;

        meta_t := keyword || ' | Oscar Furnishing Singapore';
        meta_d := 'Premium customized ' || srv[1] || ' solutions for homes in ' || loc || ' Singapore. Get UEN-registered quality and a free quote from Alvin Lim.';

        -- Masukkan data dengan mengabaikan slug duplikat
        INSERT INTO seo_pages (slug, keyword, service_type, location, meta_title, meta_description, headline, intro_text, body_text_1, body_text_2, layout_style, color_theme, hero_image)
        VALUES (slug, keyword, srv[1], loc, meta_t, meta_d, headline, intro, body1, body2, layout, theme, srv[3])
        ON CONFLICT (slug) DO NOTHING;

        inserted_count := inserted_count + 1;
      END LOOP;
    END LOOP;
  END LOOP;

  RETURN inserted_count;
END;
$$ LANGUAGE plpgsql;

-- Jalankan fungsi ini untuk langsung menghasilkan 20.000+ halaman data di database
SELECT generate_20k_seo_pages();

