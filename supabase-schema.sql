-- ============================================
-- OSCAR FURNISHING - Supabase Schema + Seed
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================

-- 1. SITE SETTINGS (global config)
CREATE TABLE IF NOT EXISTS site_settings (
  id SERIAL PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT DEFAULT '',
  image_url TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO site_settings (key, value, image_url) VALUES
  ('company_name', 'OSCAR FURNISHING', ''),
  ('logo', '', '/logonya.png'),
  ('whatsapp_number', '6591229599', ''),
  ('whatsapp_name', 'Alvin Lim', ''),
  ('meta_title', 'OSCAR FURNISHING | Your Ideal Choice for Home Furnishings', ''),
  ('meta_description', 'Premium window treatments, Europe zip blinds, invisible grills, mosquito netting, flooring, smart home integration, and custom upholstery by OSCAR FURNISHING.', ''),
  ('email', 'oscarfurnishing9599@gmail.com', ''),
  ('facebook_url', 'https://facebook.com/oscar.furnishing', ''),
  ('registration_number', '53365360J', ''),
  ('address_line1', 'Blk 13 York Hill, #01-10', ''),
  ('address_line2', 'Singapore 162013', ''),
  ('google_maps_url', 'https://maps.google.com/?q=Blk+13+York+Hill,+#01-10,+Singapore+162013', ''),
  ('website_url', 'https://oscarfurnishing.com/', ''),
  ('website_qr', '', '/website_qr.png'),
  ('get_quote_text', 'Get Quote', '')
ON CONFLICT (key) DO NOTHING;

-- 2. HERO SECTION
CREATE TABLE IF NOT EXISTS hero_section (
  id SERIAL PRIMARY KEY,
  subtitle TEXT DEFAULT '',
  title TEXT DEFAULT '',
  background_image TEXT DEFAULT '',
  whatsapp_text TEXT DEFAULT '',
  cta_link_text TEXT DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO hero_section (subtitle, title, background_image, whatsapp_text, cta_link_text) VALUES
  ('YOUR IDEAL CHOICE FOR HOME FURNISHINGS', 'Bespoke home solutions that elevate your space', 'https://ext.same-assets.com/2889591500/1674530610.jpeg', 'WhatsApp Alvin Lim: +65 9122 9599', 'Get a free quote and consultation');

-- 3. CATEGORIES (Core Solutions)
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  icon_name TEXT DEFAULT 'Shield',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO categories (name, icon_name, sort_order) VALUES
  ('Balcony Zip Blinds / Outdoor Blinds', 'Shield', 1),
  ('Curtain & Blinds', 'Layers', 2),
  ('Custom Cushions & Upholstery', 'Sofa', 3),
  ('Flooring & Wall Covering', 'Paintbrush', 4),
  ('Invisible Grill, Insects & Pets Netting', 'Lock', 5),
  ('Smart Home Automation', 'Cpu', 6),
  ('Vinyl & Carpet Flooring', 'LayoutGrid', 7);

-- 4. OUTDOOR SECTION
CREATE TABLE IF NOT EXISTS outdoor_section (
  id SERIAL PRIMARY KEY,
  subtitle TEXT DEFAULT '',
  title TEXT DEFAULT '',
  description TEXT DEFAULT '',
  image TEXT DEFAULT '',
  cta_text TEXT DEFAULT '',
  cta_link_text TEXT DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO outdoor_section (subtitle, title, description, image, cta_text, cta_link_text) VALUES
  ('INDOOR & OUTDOOR BALCONY PROTECTION', 'Europe Zip Blind System', 'Marketed directly as the "World BEST ZIP SYSTEM for your Balcony, Yard or Indoor Area." Seamless protection against heavy rain, sun glare, strong winds, and pests.', '/zip_blind.avif', 'Get a Zip Blind Quote', 'Explore custom options');

-- 5. TRENDS SECTION HEADER
CREATE TABLE IF NOT EXISTS trends_section (
  id SERIAL PRIMARY KEY,
  title TEXT DEFAULT '',
  description TEXT DEFAULT '',
  cta_text TEXT DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO trends_section (title, description, cta_text) VALUES
  ('Modern Home Solutions', 'Protect, automate, and beautify your living spaces with our premium home improvement treatments designed for Singapore homes.', 'Consult Alvin Lim');

-- 6. TRENDS ITEMS
CREATE TABLE IF NOT EXISTS trends_items (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  image TEXT DEFAULT '',
  cta_text TEXT DEFAULT '',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO trends_items (title, description, image, cta_text, sort_order) VALUES
  ('Safety & Environmental Protection', 'Ensure complete peace of mind with our high-tensile Invisible Grills, solar-blocking Solar Films, and durable Magnetic Mosquito or Cat Netting. Clean visibility, zero compromise on safety.', 'https://ext.same-assets.com/2889591500/3069089582.jpeg', 'Enquire about safety netting', 1),
  ('Smart Home & Security', 'Experience next-level luxury by integrating Motorised Curtains and Blinds with smart home systems, and monitor your space securely with advanced indoor and outdoor IPcam setups.', 'https://ext.same-assets.com/2889591500/2822851509.jpeg', 'Explore smart automation options', 2);

-- 7. CATALOGUE PRODUCTS
CREATE TABLE IF NOT EXISTS catalogue_products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT DEFAULT '',
  description TEXT DEFAULT '',
  features JSONB DEFAULT '[]'::jsonb,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO catalogue_products (name, image, description, features, sort_order) VALUES
  ('Day & Night Curtain', '/catalogue/Day & Night curtain..avif', 'A premium dual-layer drapery system that offers the best of both worlds. The sheer day layer filters soft natural light while maintaining daytime privacy, whereas the heavy night curtain layer provides complete thermal insulation, noise reduction, and 100% blackout capability for restful sleep.', '["Double track design", "Premium sheer & blackout fabric options", "Excellent thermal insulation", "Custom pleats & tracks"]', 1),
  ('Night Curtain', '/catalogue/Night Curtain.avif', 'Elegant and luxurious single-layer curtains designed specifically for light-sensitive areas. Tailored from high-density, commercial-grade fabrics that drape beautifully, block out harsh streetlights and UV rays, and help reduce incoming room temperature.', '["Acoustic dampening", "99% to 100% Light blockout", "Available in linen, velvet, & silk", "Hand-tailored finishes"]', 2),
  ('Single Layer Night Curtain', '/catalogue/Single layer night curtain.avif', 'A modern, sleek curtain treatment that offers clean folds and a minimalist profile. Designed to provide full night-time blockout coverage while maintaining a lightweight look, making it ideal for contemporary apartments and BTOs.', '["Space-saving profile", "High-density weave", "Smooth runner glide", "Low-maintenance fabric"]', 3),
  ('Uni-Slat Smart Curtain Blind', '/catalogue/Uni slat Smart curtain blind.avif', 'The ultimate hybrid between vertical blinds and curtains. Individual fabric slats hang independently, allowing you to walk right through them at any point. Perfect for wide balconies, patio doors, and floor-to-ceiling glass screens.', '["Walk-through design", "180-degree rotating slats", "Washable individual fabric panels", "Sleek wand control"]', 4),
  ('Combi & Zebra Korean Blind', '/catalogue/Combi or Zebra Korean blind.avif', 'A highly popular dual-phase roller treatment featuring alternating bands of sheer mesh and solid privacy fabric. By adjusting the overlap, you can easily shift between full visibility, filtered ambient light, and complete privacy.', '["Precise light alignment", "Dust-resistant premium weave", "Minimalist header cassette", "Manual or smart motorized option"]', 5),
  ('Monocord 50mm Venetian Blinds', '/catalogue/Monocord  One cord 50mm Venetian blinds.avif', 'Classic timber and basswood venetian blinds engineered with a high-end monocord control loop. A single cord operates both the tilting and raising mechanism smoothly, eliminating messy hanging cords and enhancing child safety.', '["Genuine premium timber/basswood", "Sleek monocord mechanism", "Precise privacy slat angling", "Durable moisture-treated slats"]', 6),
  ('Commercial Roller Blinds', '/catalogue/Commerical Roller blinds.avif', 'Heavy-duty, functional window shades built to withstand the demands of workspaces, storefronts, and commercial offices. Fabricated using flame-retardant materials that reflect glare while maintaining work visibility.', '["Fire-retardant certified", "Anti-glare screen meshes", "Easy chain-pulley lock system", "Ultra-durable hardware"]', 7),
  ('Sliding Honeycomb Blinds', '/catalogue/Slidling Honeycomb blinds.avif', 'A modern cellular blind system on a horizontal sliding track, ideal for sliding doors and room dividers. The unique honeycomb pockets trap air to create an active thermal barrier, keeping your indoor space cool.', '["Horizontal sliding track", "Cellular thermal insulation", "Sound-absorbing structure", "Neat, fold-away profile"]', 8),
  ('Day & Night Blackout Honeycomb Sliding Blind', '/catalogue/Day & Night blackout Honeycomb slidling blind.avif', 'An advanced dual-action sliding cellular blind. Features a sheer honeycomb side for daytime light filtering and a fully lined blackout honeycomb side for total night privacy and maximum insulation.', '["Dual-phase day/night glide", "Maximum energy efficiency", "Complete blockout lining", "Sleek aluminum frame tracks"]', 9),
  ('Motorised & Manual Zip Blinds', '/catalogue/Motorised Manual Zip blinds..avif', 'Weatherproof track-guided outdoor blinds designed for Singapore balconies. Effectively locks out heavy driving rain, blocks direct sun heat, resists high-altitude winds, and keeps insects completely out.', '["Heavy rain & wind proof", "Zip-lock side channel tracks", "Durable outdoor screen fabric", "Manual crank or remote control"]', 10),
  ('Motorised Zip Blinds', '/catalogue/motorisedzipblinds.avif', 'Smart motorized outdoor screens. Fully automated with quiet European tubular motors, allowing you to raise or lower your balcony shielding using a remote control, smartphone app, or smart assistants.', '["Somfy/Dooya smart tubular motors", "Seamless smart home pairing", "Obstacle detection sensors", "Tensioned wind-resistant fabric"]', 11),
  ('4m-8m Wide Zip Blind', '/catalogue/4m-8mwidthsizezipblind.avif', 'Extra-wide custom-engineered zip blind systems designed to bridge wide spans (from 4 meters up to 8 meters) without needing center support posts. Enjoy an uninterrupted, panoramic view of the outdoors.', '["Seamless wide-span coverage", "Reinforced top cassettes", "High-tensile wind resistance", "Uninterrupted scenic views"]', 12),
  ('Roof & Pergola Zip Blind', '/catalogue/Roof with zip blind.avif', 'Specialized skylight and overhead conservatory shading systems. Tensioned zip blinds operate horizontally or at angles along tracks to shield glass roofs, trellises, and open pergolas from overhead heat.', '["Tensioned horizontal tracking", "UV protection blockout", "Waterproof fabric coating", "Protects outdoor furniture"]', 13),
  ('Invisible Grill (2, 3 & 4 Inches)', '/catalogue/2, 3 & 4 inches gap Invisible grill.avif', 'Premium grade-316 structural stainless steel safety wires. Keeps children and pets completely safe on balconies and windows without obstructing views. Available in 2, 3, or 4-inch gap options to suit your safety requirements.', '["Grade 316 marine stainless steel", "High-tensile cable structure", "Anti-rust protective coating", "Invisible aesthetic safety"]', 14),
  ('Mosquito & Cat Mesh Netting', '/catalogue/Mosquito cat mesh netting.avif', 'Custom-made magnetic screen netting designed to keep out mosquitoes, pests, and lizards. Features highly durable, scratch-resistant cat mesh, keeping your curious pets safely inside while allowing clean airflow.', '["Strong magnetic self-close frame", "Scratch-resistant cat-grade mesh", "Ultra-fine weave mosquito barrier", "Washable & easy to clean"]', 15),
  ('Motorised Laundry System', '/catalogue/Motorized laundry system.avif', 'An intelligent, space-saving automated ceiling laundry rack. Features dynamic motorized lifting, built-in dual fans, hot-air drying, UV sanitization rays, and bright LED illumination to dry clothes quickly in any weather.', '["Automated remote lift (35kg limit)", "Dual fan hot air drying", "UV sanitation cycle", "Sleek space-saving ceiling fit"]', 16),
  ('Instant Hot & Cold Water Dispenser', '/catalogue/light & Heavy Water depensar.avif', 'Premium tankless instant water filtration dispensers. Offers instant selection of ice cold, warm, or piping hot water. Perfect for modern home kitchens and office pantries.', '["Multi-stage carbon filtration", "Piping hot & ice cold on demand", "Tankless hygiene system", "Eco-friendly energy saver"]', 17);

-- 8. PROJECTS (Interior Design Showcase)
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  image TEXT DEFAULT '',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO projects (title, image, sort_order) VALUES
  ('York Hill: Modern Showroom', 'https://ext.same-assets.com/2889591500/3978944732.jpeg', 1),
  ('Bukit Timah: Balcony Zip Blinds', 'https://ext.same-assets.com/2889591500/872304397.jpeg', 2),
  ('Orchard Road: Luxury Upholstery', 'https://ext.same-assets.com/2889591500/2556263261.jpeg', 3),
  ('Tampines: Smart Curtains', 'https://ext.same-assets.com/2889591500/2928909681.jpeg', 4);

-- 9. GALLERY IMAGES
CREATE TABLE IF NOT EXISTS gallery_images (
  id SERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  alt_text TEXT DEFAULT '',
  category TEXT DEFAULT 'General',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO gallery_images (image_url, alt_text, category, sort_order) VALUES
  ('/gallery/gallery-1.avif', 'Installation 1', 'Curtain & Blinds', 1),
  ('/gallery/gallery-2.avif', 'Installation 2', 'Curtain & Blinds', 2),
  ('/gallery/gallery-3.avif', 'Installation 3', 'Balcony Zip Blinds', 3),
  ('/gallery/gallery-4.avif', 'Installation 4', 'Balcony Zip Blinds', 4),
  ('/gallery/gallery-5.avif', 'Installation 5', 'Balcony Zip Blinds', 5),
  ('/gallery/gallery-6.avif', 'Installation 6', 'Balcony Zip Blinds', 6),
  ('/gallery/gallery-7.avif', 'Installation 7', 'Invisible Grills', 7),
  ('/gallery/gallery-8.avif', 'Installation 8', 'Invisible Grills', 8),
  ('/gallery/gallery-9.avif', 'Installation 9', 'Mosquito Netting', 9),
  ('/gallery/gallery-10.avif', 'Installation 10', 'Mosquito Netting', 10),
  ('/gallery/gallery-11.avif', 'Installation 11', 'Custom Cushions & Upholstery', 11),
  ('/gallery/gallery-12.avif', 'Installation 12', 'Custom Cushions & Upholstery', 12),
  ('/gallery/gallery-13.avif', 'Installation 13', 'Solar Film', 13),
  ('/gallery/gallery-14.avif', 'Installation 14', 'Solar Film', 14),
  ('/gallery/gallery-15.avif', 'Installation 15', 'Repairs & Servicing', 15),
  ('/gallery/gallery-16.avif', 'Installation 16', 'Repairs & Servicing', 16);

-- 10. INTERIOR DESIGN SECTION (header text)
CREATE TABLE IF NOT EXISTS interior_section (
  id SERIAL PRIMARY KEY,
  title TEXT DEFAULT '',
  description TEXT DEFAULT '',
  cta_text TEXT DEFAULT '',
  subtitle TEXT DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO interior_section (title, description, cta_text, subtitle) VALUES
  ('Let us help you - no obligations', 'We have helped thousands of happy customers in Singapore. Our expertise in window treatments, space planning, flooring, and material selection helps you transform your house. Together we turn spaces into extraordinary homes.', 'Get in touch', 'Discover real homes styled by our design experts');

-- 11. HISTORY SECTION
CREATE TABLE IF NOT EXISTS history_section (
  id SERIAL PRIMARY KEY,
  title TEXT DEFAULT '',
  description TEXT DEFAULT '',
  cta_text TEXT DEFAULT '',
  image1 TEXT DEFAULT '',
  image2 TEXT DEFAULT '',
  specs JSONB DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO history_section (title, description, cta_text, image1, image2, specs) VALUES
  ('Oscar Furnishing - Dedicated to Quality Home Improvement',
   'Registered under Registration Number 53365360J, Oscar Furnishing is led by Alvin & The group of salesperson. We specialize in high-quality window coverings, safety invisible grills, mosquito netting, vinyl flooring, wallpaper, custom cushions, upholstery, and soft furnishings. We operate our York Hill studio as a showroom, and all our products are local fabrication.',
   'Consult Alvin Lim',
   'https://cdn.media.amplience.net/i/boconcept/f29efa76-9bf4-465f-aca9-ad44012ce2f0?locale=*&w=600&fmt=auto&upscale=false&sm=c&qlt=75',
   'https://cdn.media.amplience.net/i/boconcept/affd5764-1508-4c27-9feb-b2f8008fff0a?locale=*&w=600&fmt=auto&upscale=false&sm=c&qlt=75',
   '{"printing_category": "OFFSET", "material": "260gsm Artcard, Matte Lamination", "dimensions": "90mm x 54mm (Business Card)", "quantity": "5 boxes ordered", "production_lead_time": "10–14 working days", "fulfillment": "Self Collection"}'
  );

-- 12. TESTIMONIALS
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  quote TEXT NOT NULL,
  author TEXT NOT NULL,
  role TEXT DEFAULT '',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO testimonials (quote, author, role, sort_order) VALUES
  ('Alvin personally came down for the measurement of our Bukit Timah balcony. His explanation about zip blind wind-load profiles was so thorough. Excellent service!', 'Grace & Marcus Yeo', 'Condominium Owner', 1),
  ('Excellent tailoring on our living room curtains. The motorized smart track runs so smoothly. Thank you Oscar Furnishing for making our BTO look like a 5-star hotel.', 'Danish Syazwan', 'Tampines BTO Resident', 2),
  ('Very reliable and honest pricing. Alvin and his team installed child safety invisible grills in our apartment. Punctual, clean, and highly professional work.', 'Mrs. Lim S.H.', 'Mother of Two, Orchard', 3);

-- 13. SERVICES
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT DEFAULT '',
  image TEXT DEFAULT '',
  description TEXT DEFAULT '',
  features JSONB DEFAULT '[]'::jsonb,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO services (title, category, image, description, features, sort_order) VALUES
  ('Europe Zip Blind System', 'Balcony & Outdoor Protection', '/zip_blind.avif', 'The world''s premium zip system designed for Singapore balconies and yards. Provides ultimate protection against heavy rains, strong winds, intense solar heat, and pests. Instantly extends your indoor living space outwards.', '["Heavy rain & wind proof", "Motorised remote controls", "Insect & pest protection", "Europe technology warranty"]', 1),
  ('Bespoke Window Treatments', 'Curtains & Blinds', '/custom_main.avif', 'Elegant curtains and custom blinds tailored specifically to your windows. Choose from premium Belgium linen, blackout roller blinds, and timber venetian blinds. Integrated with manual or smart motorized tracks.', '["Belgium import fabrics", "100% Blackout options", "Sleek smart home motorized tracks", "Basswood & timber venetian slates"]', 2),
  ('Safety & Insect Netting', 'Home Security & Protection', 'https://ext.same-assets.com/2889591500/3069089582.jpeg', 'High-tensile invisible grills for structural child and pet safety without sacrificing views. Complete with magnetic screen mosquito netting and heavy-duty cat mesh designed to stay sleek and clean.', '["High-tensile 316 stainless steel wire", "Magnetic self-closing insect screens", "Strong scratch-resistant cat netting", "Minimalist structural design"]', 3),
  ('Premium Flooring & WallPanel', 'Interior Surfaces', 'https://ext.same-assets.com/2889591500/2724563737.svg', 'Ultra-durable, water-resistant vinyl flooring and modern fluted wall panels. Give your home a luxury backdrop with low maintenance and heavy-duty wear resistance built to last for decades.', '["Waterproof & termite-free vinyl", "Textured fluted wall panels", "Quick overlays and installation", "Eco-friendly, zero formaldehyde"]', 4),
  ('Custom Upholstery & Cushioning', 'Soft Furnishings', '/custom_upholstery.avif', 'Refresh or custom-create your indoor and outdoor lounge upholstery. Tailor-made cushion covers, sofa foam replacements, bay window seats, and dining chair cushion repairs with commercial-grade fabrics.', '["High-resilience premium foam densities", "Outdoor water-repellent fabrics", "Tailored sewing & double piping finish", "Wide array of velvet, linen, and leather options"]', 5),
  ('Solar film, curtain, zip & blinds repair and servicing.', 'Repairs & Servicing', 'https://mqqbtxdvmsuzfhzxgojb.supabase.co/storage/v1/object/public/images/catalogue/1783837658363-7373.jpg', 'Professional repair, maintenance, and servicing for solar films, indoor curtains, and outdoor zip blinds. Our experienced team diagnoses track issues, recalibrates motorized systems, and restores solar film protection.', '["Zip blind recalibration & repair", "Curtain track & motorized parts service", "Solar film replacement & installation", "On-site diagnostic & fixing"]', 6);

-- 14. PROCESS STEPS
CREATE TABLE IF NOT EXISTS process_steps (
  id SERIAL PRIMARY KEY,
  step_number TEXT DEFAULT '01',
  title TEXT NOT NULL,
  icon_name TEXT DEFAULT 'Ruler',
  description TEXT DEFAULT '',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO process_steps (step_number, title, icon_name, description, sort_order) VALUES
  ('01', 'On-Site Laser Measurement', 'Ruler', 'Alvin Lim visits your home to record millimeter-accurate laser dimensions. This ensures a flawless, gap-free installation for blinds, grills, or flooring.', 1),
  ('02', 'Bespoke Consultation', 'Compass', 'Touch physical fabric samples, choose track mechanics, decide between manual vs motorized control, and custom select colors that complement your home aesthetic.', 2),
  ('03', 'Precision Workshop Crafting', 'Hammer', 'Your custom treatments are fabricated by our production division, ensuring all our products are local fabrication using strictly certified premium materials.', 3),
  ('04', 'Professional Fitting & Handover', 'ShieldCheck', 'Our dedicated installation team installs, tests, and calibrates your treatments, ensuring smooth smart-home pairing and neat, sturdy finishes.', 4);

-- 15. FAQS
CREATE TABLE IF NOT EXISTS faqs (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO faqs (question, answer, sort_order) VALUES
  ('How do I book a free on-site measurement?', 'Simply click our WhatsApp link to message Alvin Lim directly, or fill out the contact form below. Alvin will coordinate a convenient date and time to measure your windows, balcony, or walls with our precision laser equipment.', 1),
  ('Are site measurements and consultations completely free?', 'Yes! We provide on-site balcony measurements, window assessments, and fabric selection consultations completely free of charge with zero obligation.', 2),
  ('What is the standard production lead time?', 'For custom curtains, roller blinds, and invisible grills, the lead time is typically 7 to 10 working days. For custom furniture upholstery, it ranges between 10 to 14 working days depending on fabric availability.', 3),
  ('Can I view fabric samples before placing an order?', 'Absolutely. Alvin Lim carries physical sample books (linens, velvet, blackout materials, and zip blind fabrics) directly to your home during the site visit, or you can browse them at our York Hill showroom.', 4);

-- 16. ABOUT PAGE CONTENT
CREATE TABLE IF NOT EXISTS about_page (
  id SERIAL PRIMARY KEY,
  section TEXT UNIQUE NOT NULL,
  title TEXT DEFAULT '',
  description TEXT DEFAULT '',
  extra_data JSONB DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO about_page (section, title, description, extra_data) VALUES
  ('hero', 'Dedicated to Quality Home Improvement', 'Oscar Furnishing, officially registered under ACRA Business Registration UEN **53365360J**, has established a standard of luxury home improvement and soft furnishings across Singapore. We believe that a home is more than just a place to live—it is a space of comfort, protection, and refined personal expression.', '{"subtitle": "OUR BRAND STORY", "paragraph2": "We specialize in custom indoor and outdoor installations, covering everything from Europe-engineered balcony zip blinds to hand-tailored linen curtains, heavy-duty safety invisible grills, and customized furniture upholstery.", "image1": "https://cdn.media.amplience.net/i/boconcept/f29efa76-9bf4-465f-aca9-ad44012ce2f0?locale=*&w=600&fmt=auto&upscale=false&sm=c&qlt=75", "image2": "https://cdn.media.amplience.net/i/boconcept/affd5764-1508-4c27-9feb-b2f8008fff0a?locale=*&w=600&fmt=auto&upscale=false&sm=c&qlt=75"}'),
  ('consultant', 'Alvin Lim & The group of salesperson', 'Unlike traditional sales-driven operations, our lead expert, Alvin Lim, alongside our group of salespersons, personally oversees critical consultations. By managing the site measurements and custom material selections directly, we ensure that there is zero translation error between your home plan and the workshop fabrication.', '{"role": "Lead Consultants & On-Site Experts", "tagline": "Serving customers with personalized measurements, material suggestions, and direct quotes.", "paragraph2": "Whether you are evaluating wind resistance coefficients for your high-floor zip blinds or choosing the ideal fabric wear rating for a custom pet-friendly sofa cushion, you will receive expert, honest, and direct advice."}'),
  ('workshop', 'Our York Hill Showroom Studio', 'Oscar Furnishing welcomes you to visit our Showroom Studio at York Hill, Singapore. Our production division oversees our manufacturing processes, ensuring all our products are local fabrication of premium quality.', '{"subtitle": "LOCAL PRODUCTION", "image": "https://ext.same-assets.com/2889591500/3978944732.jpeg", "features": ["In-House Tailoring: Custom seams, pleats, and lining attachments.", "Custom Carpenter Track Fits: Seamlessly shaped curtain runners and boxes.", "Rigorous Zip Test: Custom outdoor zip blinds pre-tested for friction checks."]}')
ON CONFLICT (section) DO NOTHING;

-- 17. MILESTONES
CREATE TABLE IF NOT EXISTS milestones (
  id SERIAL PRIMARY KEY,
  value TEXT NOT NULL,
  label TEXT NOT NULL,
  description TEXT DEFAULT '',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO milestones (value, label, description, sort_order) VALUES
  ('20+', 'Years of Craftsmanship', 'Serving Singapore homeowners with premium custom fittings.', 1),
  ('10,000+', 'Homes Transformed', 'Balconies, BTO flats, condos, and landed properties.', 2),
  ('100%', 'Bespoke & Tailored', 'No pre-made templates. Hand-crafted to your specific space.', 3),
  ('Local UEN', 'Registered Entity', 'UEN 53365360J ensuring total legal compliance and trust.', 4);

-- 18. CORE VALUES
CREATE TABLE IF NOT EXISTS core_values (
  id SERIAL PRIMARY KEY,
  icon_name TEXT DEFAULT 'Award',
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO core_values (icon_name, title, description, sort_order) VALUES
  ('Award', 'Uncompromised Quality', 'We select only commercial-grade materials tested to withstand high humidity, harsh tropical sun glare, and regular wear.', 1),
  ('UserCheck', 'Personal Consultation', 'From initial measurement to the final calibration, you receive end-to-end guidance from our dedicated lead expert.', 2),
  ('ShieldAlert', 'Official Registry Support', 'Oscar Furnishing is fully registered with ACRA Singapore (UEN 53365360J), securing your deposits and warranty terms.', 3),
  ('Heart', 'Tailored Customization', 'Choose from select Belgium imported linens, structural invisible grills, and European zip blinds styled for you.', 4);

-- 19. CATALOGUE SECTION HEADER
CREATE TABLE IF NOT EXISTS catalogue_section (
  id SERIAL PRIMARY KEY,
  subtitle TEXT DEFAULT '',
  title TEXT DEFAULT '',
  description TEXT DEFAULT '',
  cta_text TEXT DEFAULT '',
  showroom_title TEXT DEFAULT '',
  showroom_description TEXT DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO catalogue_section (subtitle, title, description, cta_text, showroom_title, showroom_description) VALUES
  ('ENDLESS POSSIBILITIES, TAILORED TO YOU', 'Our Custom Home Catalogue', 'Our window coverings, soft furnishings, safety systems, and automated solutions are created with complete customisation in mind. Select any item below to view details and enquire directly with Alvin Lim.', 'Get Customisation Assistance', 'Visit our Showroom Studio', 'Browse physical fabric samples, feel zip blind systems, and consult our designers by appointment.');

-- 20. INSPIRATION SECTION HEADER
CREATE TABLE IF NOT EXISTS inspiration_section (
  id SERIAL PRIMARY KEY,
  subtitle TEXT DEFAULT '',
  title TEXT DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO inspiration_section (subtitle, title) VALUES
  ('OUR COMPLETED PROJECTS', 'Inspiration Gallery');

-- Enable Row Level Security on all tables (allow public read)
DO $$
DECLARE
  t TEXT;
BEGIN
  FOR t IN
    SELECT tablename FROM pg_tables
    WHERE schemaname = 'public'
    AND tablename IN (
      'site_settings', 'hero_section', 'categories', 'outdoor_section',
      'trends_section', 'trends_items', 'catalogue_products', 'projects',
      'gallery_images', 'interior_section', 'history_section', 'testimonials',
      'services', 'process_steps', 'faqs', 'about_page', 'milestones',
      'core_values', 'catalogue_section', 'inspiration_section'
    )
  LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t);
    EXECUTE format('CREATE POLICY "Allow public read" ON %I FOR SELECT USING (true)', t);
    EXECUTE format('CREATE POLICY "Allow authenticated write" ON %I FOR ALL USING (auth.role() = ''authenticated'')', t);
  END LOOP;
END $$;

-- ============================================
-- STORAGE BUCKET CREATION & POLICIES
-- ============================================

-- Create the public bucket 'images'
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Clean up existing policies if any
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Auth Upload" ON storage.objects;
DROP POLICY IF EXISTS "Auth Update" ON storage.objects;
DROP POLICY IF EXISTS "Auth Delete" ON storage.objects;

-- Create policies for storage.objects
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'images');

CREATE POLICY "Auth Upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');

CREATE POLICY "Auth Update" ON storage.objects
  FOR UPDATE WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');

CREATE POLICY "Auth Delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'images' AND auth.role() = 'authenticated');
