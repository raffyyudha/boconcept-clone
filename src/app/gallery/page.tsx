"use client";

import { useState } from "react";
import { Camera, ExternalLink } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "All Projects" },
  { id: "zip-blinds", name: "Balcony Zip Blinds" },
  { id: "curtains-blinds", name: "Curtains & Blinds" },
  { id: "upholstery", name: "Custom Upholstery" },
  { id: "flooring-panels", name: "Flooring & Wall Panels" },
];

const galleryItems = [
  {
    id: 1,
    title: "Bukit Timah Penthouse",
    category: "zip-blinds",
    categoryName: "Balcony Zip Blinds",
    image: "https://ext.same-assets.com/2889591500/872304397.jpeg",
    description: "Europe Zip Blind System installed in a high-floor balcony to provide full heavy rain protection.",
  },
  {
    id: 2,
    title: "Orchard Road Condominium",
    category: "upholstery",
    categoryName: "Custom Upholstery",
    image: "https://ext.same-assets.com/2889591500/2556263261.jpeg",
    description: "Tailored sofa cushions and velvet bay-window seating customized for a luxury penthouse.",
  },
  {
    id: 3,
    title: "Tampines BTO Apartment",
    category: "curtains-blinds",
    categoryName: "Curtains & Blinds",
    image: "https://ext.same-assets.com/2889591500/2928909681.jpeg",
    description: "Motorized smart tracks with Belgium linen sheer curtains integrated with Google Home.",
  },
  {
    id: 4,
    title: "York Hill Modern Showroom",
    category: "flooring-panels",
    categoryName: "Flooring & Wall Panels",
    image: "https://ext.same-assets.com/2889591500/3978944732.jpeg",
    description: "Waterproof luxury vinyl flooring overlay matched with elegant fluted wall panels.",
  },
  {
    id: 5,
    title: "Sentosa Cove Seafront Villa",
    category: "zip-blinds",
    categoryName: "Balcony Zip Blinds",
    image: "/zip_blind.png",
    description: "Europe Zip Blinds providing complete weather protection for sea-facing balcony seating.",
  },
  {
    id: 6,
    title: "River Valley Apartment",
    category: "curtains-blinds",
    categoryName: "Curtains & Blinds",
    image: "/custom_main.png",
    description: "Timber venetian blinds and blackout roller blinds crafted for minimalist workspace windows.",
  },
  {
    id: 7,
    title: "Marina Bay Residence",
    category: "upholstery",
    categoryName: "Custom Upholstery",
    image: "/custom_upholstery.png",
    description: "Bespoke velvet dining chair upholstery and high-density foam refurbishment.",
  },
  {
    id: 8,
    title: "Bishan Smart Home BTO",
    category: "curtains-blinds",
    categoryName: "Curtains & Blinds",
    image: "https://ext.same-assets.com/2889591500/2822851509.jpeg",
    description: "Smart motorized roller blinds configured for seamless day/night ambient adjustment.",
  }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#14100b] text-[#f4f4f4] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Gallery Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-4">OUR SHOWCASE</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#d4af37] mb-6">Bespoke Portfolio</h1>
          <p className="text-sm md:text-base text-[#8b8c8b] leading-relaxed">
            Discover real-life installations styled and installed by Oscar Furnishing. From smart motorized window tracks to robust outdoor balcony protection across Singapore.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`text-xs md:text-sm px-6 py-2.5 transition-all uppercase tracking-wider rounded-none font-medium border ${
                activeFilter === category.id 
                  ? "bg-[#d4af37] text-[#14100b] border-[#d4af37]"
                  : "bg-transparent text-[#8b8c8b] border-[#3e3d3a]/30 hover:border-white hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <a 
              key={item.id}
              href="https://wa.me/6593449193"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-[#1e1913] border border-[#3e3d3a]/20 hover:border-[#d4af37]/50 transition-all duration-300"
            >
              {/* Image box */}
              <div className="relative overflow-hidden h-64 md:h-72 bg-[#14100b]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#14100b]/90 text-[#d4af37] px-4 py-2 text-xs uppercase tracking-widest flex items-center gap-2 border border-[#d4af37]">
                    Enquire Project <ExternalLink size={12} />
                  </div>
                </div>
              </div>

              {/* Detail box */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-2">
                  {item.categoryName}
                </span>
                <h3 className="text-lg font-serif text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8b8c8b] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 text-center bg-[#1e1913] p-10 border border-[#3e3d3a]/30">
          <Camera className="text-[#d4af37] w-10 h-10 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-serif text-white mb-2">Have a similar concept for your home?</h3>
          <p className="text-xs text-[#8b8c8b] max-w-md mx-auto mb-6">
            Share your layouts or design references with Alvin Lim on WhatsApp to receive a comprehensive budget estimate.
          </p>
          <a
            href="https://wa.me/6593449193"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#d4af37] text-[#14100b] text-xs font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-white hover:text-black transition-colors"
          >
            Start Project Consultation
          </a>
        </div>

      </div>
    </main>
  );
}
