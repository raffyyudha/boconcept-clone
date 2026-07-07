"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#14100b]/80 backdrop-blur-md border-b border-[#3e3d3a]/10">
      <div className="flex items-center justify-between px-4 sm:px-8 py-2.5 max-w-7xl mx-auto">
        {/* Left - Logo */}
        <div className="w-[80px] sm:w-[150px] flex items-center">
          <Link href="/">
            <img 
              src="/logonya.png" 
              alt="OSCAR FURNISHING" 
              className="h-10 sm:h-12 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity" 
              style={{
                filter: "drop-shadow(0 0 2px #facc15) drop-shadow(0 0 8px #facc15) brightness(1.6) contrast(1.3)"
              }}
            />
          </Link>
        </div>

        {/* Center - Navigation bar */}
        <nav className="flex-1 flex items-center justify-center gap-3 sm:gap-6 md:gap-8 text-[9px] sm:text-xs md:text-sm text-[#f4f4f4] tracking-wider uppercase font-light">
          <Link href="/services" className="hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap">SERVICES</Link>
          <Link href="/about" className="hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap">ABOUT US</Link>
          <Link href="/gallery" className="hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap">GALLERY</Link>
          <Link href="/contact" className="hover:text-[#d4af37] transition-colors duration-300 whitespace-nowrap">CONTACT US</Link>
        </nav>

        {/* Right - Contact / WhatsApp CTA */}
        <div className="w-[80px] sm:w-[150px] flex items-center justify-end">
          <a
            href="https://wa.me/6591229599"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-[#d4af37] border border-[#d4af37] px-4 py-2 hover:bg-[#d4af37] hover:text-[#14100b] transition-all font-medium whitespace-nowrap"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}


