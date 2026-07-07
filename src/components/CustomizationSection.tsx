"use client";

import { useState } from "react";
import { X, MessageSquare, Check } from "lucide-react";

interface CatalogueProduct {
  id: number;
  name: string;
  image: string;
  desc: string;
  features: string[];
}

const catalogueProducts: CatalogueProduct[] = [
  {
    id: 1,
    name: "Day & Night Curtain",
    image: "/catalogue/Day & Night curtain..avif",
    desc: "A premium dual-layer drapery system that offers the best of both worlds. The sheer day layer filters soft natural light while maintaining daytime privacy, whereas the heavy night curtain layer provides complete thermal insulation, noise reduction, and 100% blackout capability for restful sleep.",
    features: ["Double track design", "Premium sheer & blackout fabric options", "Excellent thermal insulation", "Custom pleats & tracks"]
  },
  {
    id: 2,
    name: "Night Curtain",
    image: "/catalogue/Night Curtain.avif",
    desc: "Elegant and luxurious single-layer curtains designed specifically for light-sensitive areas. Tailored from high-density, commercial-grade fabrics that drape beautifully, block out harsh streetlights and UV rays, and help reduce incoming room temperature.",
    features: ["Acoustic dampening", "99% to 100% Light blockout", "Available in linen, velvet, & silk", "Hand-tailored finishes"]
  },
  {
    id: 3,
    name: "Single Layer Night Curtain",
    image: "/catalogue/Single layer night curtain.avif",
    desc: "A modern, sleek curtain treatment that offers clean folds and a minimalist profile. Designed to provide full night-time blockout coverage while maintaining a lightweight look, making it ideal for contemporary apartments and BTOs.",
    features: ["Space-saving profile", "High-density weave", "Smooth runner glide", "Low-maintenance fabric"]
  },
  {
    id: 4,
    name: "Uni-Slat Smart Curtain Blind",
    image: "/catalogue/Uni slat Smart curtain blind.avif",
    desc: "The ultimate hybrid between vertical blinds and curtains. Individual fabric slats hang independently, allowing you to walk right through them at any point. Perfect for wide balconies, patio doors, and floor-to-ceiling glass screens.",
    features: ["Walk-through design", "180-degree rotating slats", "Washable individual fabric panels", "Sleek wand control"]
  },
  {
    id: 5,
    name: "Combi & Zebra Korean Blind",
    image: "/catalogue/Combi or Zebra Korean blind.avif",
    desc: "A highly popular dual-phase roller treatment featuring alternating bands of sheer mesh and solid privacy fabric. By adjusting the overlap, you can easily shift between full visibility, filtered ambient light, and complete privacy.",
    features: ["Precise light alignment", "Dust-resistant premium weave", "Minimalist header cassette", "Manual or smart motorized option"]
  },
  {
    id: 6,
    name: "Monocord 50mm Venetian Blinds",
    image: "/catalogue/Monocord  One cord 50mm Venetian blinds.avif",
    desc: "Classic timber and basswood venetian blinds engineered with a high-end monocord control loop. A single cord operates both the tilting and raising mechanism smoothly, eliminating messy hanging cords and enhancing child safety.",
    features: ["Genuine premium timber/basswood", "Sleek monocord mechanism", "Precise privacy slat angling", "Durable moisture-treated slats"]
  },
  {
    id: 7,
    name: "Commercial Roller Blinds",
    image: "/catalogue/Commerical Roller blinds.avif",
    desc: "Heavy-duty, functional window shades built to withstand the demands of workspaces, storefronts, and commercial offices. Fabricated using flame-retardant materials that reflect glare while maintaining work visibility.",
    features: ["Fire-retardant certified", "Anti-glare screen meshes", "Easy chain-pulley lock system", "Ultra-durable hardware"]
  },
  {
    id: 8,
    name: "Sliding Honeycomb Blinds",
    image: "/catalogue/Slidling Honeycomb blinds.avif",
    desc: "A modern cellular blind system on a horizontal sliding track, ideal for sliding doors and room dividers. The unique honeycomb pockets trap air to create an active thermal barrier, keeping your indoor space cool.",
    features: ["Horizontal sliding track", "Cellular thermal insulation", "Sound-absorbing structure", "Neat, fold-away profile"]
  },
  {
    id: 9,
    name: "Day & Night Blackout Honeycomb Sliding Blind",
    image: "/catalogue/Day & Night blackout Honeycomb slidling blind.avif",
    desc: "An advanced dual-action sliding cellular blind. Features a sheer honeycomb side for daytime light filtering and a fully lined blackout honeycomb side for total night privacy and maximum insulation.",
    features: ["Dual-phase day/night glide", "Maximum energy efficiency", "Complete blockout lining", "Sleek aluminum frame tracks"]
  },
  {
    id: 10,
    name: "Motorised & Manual Zip Blinds",
    image: "/catalogue/Motorised Manual Zip blinds..avif",
    desc: "Weatherproof track-guided outdoor blinds designed for Singapore balconies. Effectively locks out heavy driving rain, blocks direct sun heat, resists high-altitude winds, and keeps insects completely out.",
    features: ["Heavy rain & wind proof", "Zip-lock side channel tracks", "Durable outdoor screen fabric", "Manual crank or remote control"]
  },
  {
    id: 11,
    name: "Motorised Zip Blinds",
    image: "/catalogue/motorisedzipblinds.avif",
    desc: "Smart motorized outdoor screens. Fully automated with quiet European tubular motors, allowing you to raise or lower your balcony shielding using a remote control, smartphone app, or smart assistants.",
    features: ["Somfy/Dooya smart tubular motors", "Seamless smart home pairing", "Obstacle detection sensors", "Tensioned wind-resistant fabric"]
  },
  {
    id: 12,
    name: "4m-8m Wide Zip Blind",
    image: "/catalogue/4m-8mwidthsizezipblind.avif",
    desc: "Extra-wide custom-engineered zip blind systems designed to bridge wide spans (from 4 meters up to 8 meters) without needing center support posts. Enjoy an uninterrupted, panoramic view of the outdoors.",
    features: ["Seamless wide-span coverage", "Reinforced top cassettes", "High-tensile wind resistance", "Uninterrupted scenic views"]
  },
  {
    id: 13,
    name: "Roof & Pergola Zip Blind",
    image: "/catalogue/Roof with zip blind.avif",
    desc: "Specialized skylight and overhead conservatory shading systems. Tensioned zip blinds operate horizontally or at angles along tracks to shield glass roofs, trellises, and open pergolas from overhead heat.",
    features: ["Tensioned horizontal tracking", "UV protection blockout", "Waterproof fabric coating", "Protects outdoor furniture"]
  },
  {
    id: 14,
    name: "Invisible Grill (2, 3 & 4 Inches)",
    image: "/catalogue/2, 3 & 4 inches gap Invisible grill.avif",
    desc: "Premium grade-316 structural stainless steel safety wires. Keeps children and pets completely safe on balconies and windows without obstructing views. Available in 2, 3, or 4-inch gap options to suit your safety requirements.",
    features: ["Grade 316 marine stainless steel", "High-tensile cable structure", "Anti-rust protective coating", "Invisible aesthetic safety"]
  },
  {
    id: 15,
    name: "Mosquito & Cat Mesh Netting",
    image: "/catalogue/Mosquito cat mesh netting.avif",
    desc: "Custom-made magnetic screen netting designed to keep out mosquitoes, pests, and lizards. Features highly durable, scratch-resistant cat mesh, keeping your curious pets safely inside while allowing clean airflow.",
    features: ["Strong magnetic self-close frame", "Scratch-resistant cat-grade mesh", "Ultra-fine weave mosquito barrier", "Washable & easy to clean"]
  },
  {
    id: 16,
    name: "Motorised Laundry System",
    image: "/catalogue/Motorized laundry system.avif",
    desc: "An intelligent, space-saving automated ceiling laundry rack. Features dynamic motorized lifting, built-in dual fans, hot-air drying, UV sanitization rays, and bright LED illumination to dry clothes quickly in any weather.",
    features: ["Automated remote lift (35kg limit)", "Dual fan hot air drying", "UV sanitation cycle", "Sleek space-saving ceiling fit"]
  },
  {
    id: 17,
    name: "Instant Hot & Cold Water Dispenser",
    image: "/catalogue/light & Heavy Water depensar.avif",
    desc: "Premium tankless instant water filtration dispensers. Offers instant selection of ice cold, warm, or piping hot water. Perfect for modern home kitchens and office pantries.",
    features: ["Multi-stage carbon filtration", "Piping hot & ice cold on demand", "Tankless hygiene system", "Eco-friendly energy saver"]
  }
];

export default function CustomizationSection() {
  const [selectedProduct, setSelectedProduct] = useState<CatalogueProduct | null>(null);

  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro Section - Full Width Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-2">
            ENDLESS POSSIBILITIES, TAILORED TO YOU
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#14100b] mb-6">
            Our Custom Home Catalogue
          </h2>
          <p className="text-[#5f605f] text-sm leading-relaxed mb-8">
            Our window coverings, soft furnishings, safety systems, and automated solutions are created with complete customisation in mind. Select any item below to view details and enquire directly with Alvin Lim.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://wa.me/6591229599" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs uppercase tracking-widest text-[#14100b] border border-[#14100b] px-6 py-3 hover:bg-[#14100b] hover:text-[#f4f4f4] transition-all font-semibold"
            >
              Get Customisation Assistance
            </a>
          </div>
        </div>

        {/* Product Catalogue Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {catalogueProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer bg-white border border-neutral-200 hover:border-[#d4af37]/80 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Container */}
                <div className="w-full aspect-square overflow-hidden bg-neutral-50 border-b border-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content Container */}
                <div className="p-4">
                  <h4 className="text-sm font-serif font-medium text-[#14100b] mb-1 group-hover:text-[#d4af37] transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-[#5f605f] line-clamp-2 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Trigger Indicator */}
              <div className="mx-4 mb-4 text-[10px] uppercase tracking-widest text-[#d4af37] border-t border-neutral-100 pt-2 flex items-center justify-between font-semibold">
                <span>Enquire Details</span>
                <span className="font-bold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Showroom & Location Info */}
        <div className="mt-16 p-8 bg-[#14100b] text-[#f4f4f4] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3e3d3a]/30">
          <div>
            <h4 className="text-lg font-serif mb-2 text-[#d4af37]">Visit our Showroom Studio</h4>
            <p className="text-xs text-[#8b8c8b] max-w-md">
              Browse physical fabric samples, feel zip blind systems, and consult our designers by appointment.
            </p>
          </div>
          <a 
            href="https://maps.google.com/?q=Blk+13+York+Hill,+#01-10,+Singapore+162013" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-sm text-white hover:text-[#d4af37] transition-colors font-medium border-b border-white hover:border-[#d4af37] pb-1"
          >
            Blk 13 York Hill, #01-10, Singapore 162013
          </a>
        </div>

      </div>

      {/* Bubble Details Modal Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
          {/* Close trigger on backdrop */}
          <div 
            className="absolute inset-0" 
            onClick={() => setSelectedProduct(null)} 
          />
          
          {/* Modal Container */}
          <div className="bg-[#1e1913] border border-[#3e3d3a]/60 w-full max-w-2xl relative overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-[101]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-[#8b8c8b] hover:text-white transition-colors bg-[#14100b]/60 p-1.5 z-10"
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            {/* Left Column - Image */}
            <div className="w-full md:w-1/2 bg-[#14100b] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#3e3d3a]/30">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[300px] md:max-h-full max-w-full object-contain"
              />
            </div>

            {/* Right Column - Details */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between text-left">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
                  CATALOGUE ITEM DETAILS
                </span>
                <h3 className="text-xl font-serif text-white mb-3">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs text-[#8b8c8b] leading-relaxed mb-6">
                  {selectedProduct.desc}
                </p>

                {/* Features List */}
                <h5 className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                  Key Specifications
                </h5>
                <ul className="space-y-2 mb-6">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[10px] text-neutral-300">
                      <Check size={12} className="text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct WhatsApp CTA */}
              <a
                href={`https://wa.me/6591229599?text=${encodeURIComponent(
                  `Hi Alvin, I would like to enquire about the "${selectedProduct.name}" from your catalogue.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-semibold uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <MessageSquare size={16} /> Enquire on WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
