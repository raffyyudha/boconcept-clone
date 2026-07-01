"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#14100b]/80 backdrop-blur-md border-b border-[#3e3d3a]/10">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left - Find store */}
        <div className="flex items-center gap-2 text-[#8b8c8b] text-sm">
          <MapPin size={16} />
          <span className="hidden md:inline">York Hill Showroom</span>
        </div>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <Link href="/">
            <span className="text-base md:text-lg font-light tracking-[0.2em] text-[#d4af37] cursor-pointer hover:opacity-90 transition-opacity" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
              OSCAR FURNISHING
            </span>
          </Link>
        </div>

        {/* Right - Empty for balance */}
        <div className="w-10"></div>
      </div>

      {/* Navigation bar */}
      <div className="flex items-center justify-center px-2 sm:px-6 py-3 border-t border-[#3e3d3a]/30">
        <nav className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 text-[10px] sm:text-xs md:text-sm text-[#f4f4f4] tracking-wider sm:tracking-widest uppercase font-light w-full max-w-full overflow-hidden">
          <Link href="/services" className="hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap">SERVICES</Link>
          <Link href="/about" className="hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap">ABOUT US</Link>
          <Link href="/gallery" className="hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap">GALLERY</Link>
          <Link href="/contact" className="hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap">CONTACT US</Link>
        </nav>
      </div>
    </header>
  );
}

