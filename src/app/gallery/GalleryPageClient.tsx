"use client";

import { useState } from "react";
import { X, Camera, ArrowRight } from "lucide-react";

interface GalleryPageClientProps {
  galleryImages: any[];
  whatsappNumber: string;
}

export default function GalleryPageClient({ galleryImages, whatsappNumber }: GalleryPageClientProps) {
  const [activeImage, setActiveImage] = useState<any | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Dynamically extract unique categories and sort them in a preferred order
  const uniqueCategories = Array.from(
    new Set(galleryImages.map((img: any) => img.category || "General").filter(Boolean))
  ) as string[];

  const preferredOrder = [
    "Balcony Zip Blinds",
    "Curtains & Blinds",
    "Invisible Grills",
    "Mosquito Netting",
    "Custom Cushions & Upholstery",
    "Solar Film",
    "Repairs & Servicing",
  ];

  const sortedCategories = [
    "All",
    ...preferredOrder.filter((cat) => uniqueCategories.includes(cat)),
    ...uniqueCategories.filter((cat) => !preferredOrder.includes(cat) && cat !== "General"),
  ];

  if (uniqueCategories.includes("General") && !sortedCategories.includes("General")) {
    sortedCategories.push("General");
  }

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img: any) => (img.category || "General") === selectedCategory);

  return (
    <main className="min-h-screen bg-[#14100b] text-[#f4f4f4] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Gallery Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-4">OUR SHOWCASE</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#d4af37] mb-6">Bespoke Portfolio</h1>
          <p className="text-sm md:text-base text-[#8b8c8b] leading-relaxed">
            Browse through our real-life window coverings, safety grills, and soft furnishing installations completed across Singapore.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12 max-w-4xl mx-auto">
          {sortedCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 font-semibold border ${
                selectedCategory === cat
                  ? "bg-[#d4af37] border-[#d4af37] text-[#14100b] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  : "bg-[#1e1913]/60 border-[#3e3d3a]/40 text-[#8b8c8b] hover:text-white hover:border-[#d4af37]/40 hover:bg-[#1e1913]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div 
          key={selectedCategory} 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in duration-500"
        >
          {filteredImages.map((img: any, index: number) => (
            <div
              key={img.id || index}
              onClick={() => setActiveImage(img)}
              className="flex flex-col cursor-pointer group bg-[#1e1913] border border-[#3e3d3a]/30 hover:border-[#d4af37]/50 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] overflow-hidden"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#14100b]">
                <img
                  src={img.image_url}
                  alt={img.alt_text || `Installation showcase ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-[9px] sm:text-[10px] text-[#d4af37] font-semibold tracking-widest uppercase mb-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {img.category || "General"}
                  </span>
                  <div className="bg-[#14100b]/95 border border-[#d4af37] text-[#d4af37] text-[10px] uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Zoom Image
                  </div>
                </div>
              </div>
              <div className="p-3 flex flex-col justify-between flex-1 min-h-[70px] bg-[#1e1913] border-t border-[#3e3d3a]/20">
                <div>
                  {img.subtitle && (
                    <span className="text-[9px] text-[#d4af37] font-semibold tracking-wider uppercase block mb-1">
                      {img.subtitle}
                    </span>
                  )}
                  {img.description && (
                    <p className="text-[10px] sm:text-xs text-[#8b8c8b] line-clamp-2 leading-relaxed">
                      {img.description}
                    </p>
                  )}
                  {!img.subtitle && !img.description && (
                    <span className="text-[9px] text-[#8b8c8b]/60 italic font-normal tracking-wide block">
                      Oscar Furnishing Installation
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 text-center bg-[#1e1913] p-10 border border-[#3e3d3a]/30 max-w-4xl mx-auto">
          <Camera className="text-[#d4af37] w-10 h-10 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-serif text-white mb-2">Have a similar concept for your home?</h3>
          <p className="text-xs text-[#8b8c8b] max-w-md mx-auto mb-6">
            Share your layouts or design references with Alvin Lim on WhatsApp to receive a comprehensive quote.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d4af37] text-[#14100b] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors"
          >
            Start Project Consultation <ArrowRight size={14} />
          </a>
        </div>

      </div>

      {/* Lightbox / Popup */}
      {activeImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all duration-300">
          <div className="absolute inset-0" onClick={() => setActiveImage(null)} />
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 text-[#8b8c8b] hover:text-white transition-colors bg-[#1e1913]/60 p-2 z-[102]"
            aria-label="Close gallery lightbox"
          >
            <X size={20} />
          </button>
          <div className="relative max-w-4xl w-full flex flex-col items-center justify-center z-[101] animate-in fade-in zoom-in-95 duration-200">
            <img
              src={activeImage.image_url}
              alt={activeImage.alt_text || "Installation view large"}
              className="max-w-full max-h-[75vh] object-contain shadow-2xl border border-[#3e3d3a]/30"
            />
            {(activeImage.subtitle || activeImage.description) && (
              <div className="w-full mt-4 bg-[#1e1913]/90 border border-[#3e3d3a]/40 p-4 text-center max-w-2xl">
                {activeImage.subtitle && (
                  <span className="text-[10px] text-[#d4af37] font-semibold tracking-widest uppercase block mb-1">
                    {activeImage.subtitle}
                  </span>
                )}
                {activeImage.description && (
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {activeImage.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
