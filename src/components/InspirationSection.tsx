"use client";

import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
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

export default function InspirationSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="bg-[#f4f4f4] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-2">
            OUR COMPLETED PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#14100b] mb-4">
            Inspiration Gallery
          </h2>
          <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mt-2"></div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(src)}
              className="relative overflow-hidden cursor-pointer group aspect-square bg-[#e8e8e8] border border-neutral-200"
            >
              <img
                src={src}
                alt={`Gallery installation ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-[#14100b]/80 border border-[#d4af37] text-[#d4af37] text-[10px] uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Zoom Image
                </div>
              </div>
            </div>
          ))}
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
          <div className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center z-[101] animate-in fade-in zoom-in-95 duration-200">
            <img
              src={activeImage}
              alt="Installation view large"
              className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-[#3e3d3a]/30"
            />
          </div>
        </div>
      )}
    </section>
  );
}
