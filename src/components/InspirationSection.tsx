"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface InspirationSectionData {
  subtitle: string;
  title: string;
}

interface GalleryImage {
  id: number;
  image_url: string;
  alt_text: string;
  subtitle?: string;
  description?: string;
  category?: string;
}

interface InspirationSectionProps {
  sectionData?: InspirationSectionData | null;
  images?: GalleryImage[];
}

export default function InspirationSection({ sectionData, images = [] }: InspirationSectionProps) {
  const [activeImage, setActiveImage] = useState<any | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const subtitle = sectionData?.subtitle || "OUR COMPLETED PROJECTS";
  const title = sectionData?.title || "Inspiration Gallery";

  const defaultImages = [
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.06 PM.avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.07 PM.avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.19 PM.avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.20 PM.avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.20 PM (1).avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.20 PM (2).avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.20 PM (3).avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.21 PM.avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.21 PM (1).avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.21 PM (2).avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.21 PM (3).avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.22 PM.avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.22 PM (1).avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.22 PM (2).avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.22 PM (3).avif",
    "/gallery/WhatsApp Image 2026-07-06 at 9.19.23 PM.avif"
  ];

  const preferredOrder = [
    "Zip blind",
    "Night curtain",
    "Day curtain",
    "Day & night curtain",
    "Roller blind",
    "Roman blind",
    "Combi blind",
    "Timber blind",
    "Uni slat blind",
    "Invisible grill",
    "Wall covering",
    "Vinyl flooring",
  ];

  const uniqueCategories = Array.from(
    new Set(images.map((img: any) => img.category || "General").filter(Boolean))
  ) as string[];

  const sortedCategories = [
    "All",
    ...preferredOrder.filter((cat) => uniqueCategories.includes(cat)),
    ...uniqueCategories.filter((cat) => !preferredOrder.includes(cat) && cat !== "General"),
  ];

  if (uniqueCategories.includes("General") && !sortedCategories.includes("General")) {
    sortedCategories.push("General");
  }

  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter((img: any) => (img.category || "General") === selectedCategory);

  const displayLimit = selectedCategory === "All" ? 12 : 24;
  const limitedImages = filteredImages.slice(0, displayLimit);

  const displayImages = limitedImages.length > 0
    ? limitedImages.map(img => ({
        src: img.image_url,
        alt: img.alt_text || `Gallery ${img.id}`,
        subtitle: img.subtitle,
        description: img.description,
        category: img.category || "General"
      }))
    : defaultImages.map((src, i) => ({
        src,
        alt: `Gallery installation ${i + 1}`,
        subtitle: "",
        description: "",
        category: "General"
      }));

  return (
    <section className="bg-[#f4f4f4] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-2">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#14100b] mb-4">
            {title}
          </h2>
          <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mt-2"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12 max-w-4xl mx-auto">
          {sortedCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 font-semibold border ${
                selectedCategory === cat
                  ? "bg-[#d4af37] border-[#d4af37] text-[#14100b] shadow-[0_4px_12px_rgba(212,175,55,0.15)]"
                  : "bg-white border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-[#d4af37]/50 hover:bg-neutral-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div 
          key={selectedCategory} 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in duration-500"
        >
          {displayImages.map((img, index) => (
            <div
              key={index}
              className="flex flex-col cursor-pointer group bg-white border border-neutral-200 hover:border-[#d4af37]/50 hover:shadow-md transition-all duration-300 overflow-hidden"
              onClick={() => setActiveImage(img)}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-50">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-[9px] sm:text-[10px] text-[#d4af37] font-semibold tracking-widest uppercase mb-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {img.category}
                  </span>
                  <div className="bg-[#14100b]/90 border border-[#d4af37] text-[#d4af37] text-[10px] uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Zoom Image
                  </div>
                </div>
              </div>
              <div className="p-3 flex flex-col justify-between flex-1 min-h-[60px] bg-white border-t border-neutral-100">
                <div className="text-left">
                  {img.subtitle && (
                    <span className="text-[9px] text-[#d4af37] font-semibold tracking-wider uppercase block mb-1">
                      {img.subtitle}
                    </span>
                  )}
                  {img.description && (
                    <p className="text-[10px] sm:text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                      {img.description}
                    </p>
                  )}
                  {!img.subtitle && !img.description && (
                    <span className="text-[9px] text-neutral-400 italic block">
                      Oscar Furnishing Installation
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border border-[#d4af37] text-[#14100b] hover:bg-[#d4af37] hover:text-[#14100b] px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm font-sans"
          >
            Explore Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox / Popup */}
      {activeImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all duration-300 animate-fade-in">
          {/* Backdrop click close */}
          <div className="absolute inset-0" onClick={() => setActiveImage(null)} />

          {/* Close button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 text-[#8b8c8b] hover:text-white transition-colors bg-[#1e1913]/60 p-2 z-[102]"
            aria-label="Close gallery lightbox"
          >
            <X size={20} />
          </button>

          {/* Large Image container */}
          <div className="relative max-w-4xl w-full flex flex-col items-center justify-center z-[101] animate-in fade-in zoom-in-95 duration-200">
            <img
              src={activeImage.src}
              alt={activeImage.alt || "Installation view large"}
              className="max-w-full max-h-[75vh] object-contain shadow-2xl border border-neutral-800"
            />
            {(activeImage.subtitle || activeImage.description) && (
              <div className="w-full mt-4 bg-[#14100b]/95 border border-[#d4af37]/30 p-4 text-center max-w-2xl">
                {activeImage.subtitle && (
                  <span className="text-[10px] text-[#d4af37] font-semibold tracking-widest uppercase block mb-1">
                    {activeImage.subtitle}
                  </span>
                )}
                {activeImage.description && (
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed text-left sm:text-center">
                    {activeImage.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
