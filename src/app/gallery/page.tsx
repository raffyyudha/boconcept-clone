"use client";

import { useState } from "react";
import { X, Camera, ArrowRight } from "lucide-react";

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

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

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

        {/* Gallery Grid - Only Photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div 
              key={index}
              onClick={() => setActiveImage(src)}
              className="relative overflow-hidden cursor-pointer group aspect-square bg-[#1e1913] border border-[#3e3d3a]/30 hover:border-[#d4af37]/50 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Installation showcase ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-[#14100b]/95 border border-[#d4af37] text-[#d4af37] text-[10px] uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Zoom Image
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
            href="https://wa.me/6591229599"
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
    </main>
  );
}
