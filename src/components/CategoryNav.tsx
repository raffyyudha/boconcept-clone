"use client";

import { Shield, Layers, Sofa, Paintbrush, Lock, Cpu, LayoutGrid } from "lucide-react";

const categories = [
  { name: "Balcony Zip Blinds / Outdoor Blinds", icon: <Shield className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Curtain & Blinds", icon: <Layers className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Custom Cushions & Upholstery", icon: <Sofa className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Flooring & Wall Covering", icon: <Paintbrush className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Invisible Grill, Insects & Pets Netting", icon: <Lock className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Smart Home Automation", icon: <Cpu className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Vinyl & Carpet Flooring", icon: <LayoutGrid className="w-6 h-6 text-[#d4af37]" /> },
];

export default function CategoryNav() {
  return (
    <section id="services" className="bg-[#14100b] py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-serif text-center text-[#f4f4f4] mb-12">
        Our Core Solutions
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-10 gap-x-4 max-w-6xl mx-auto justify-items-center">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center gap-3 w-full max-w-[130px] text-center select-none cursor-default"
          >
            <div className="w-16 h-16 rounded-full bg-[#1e1913] border border-[#3e3d3a]/30 flex items-center justify-center hover:border-[#d4af37] transition-colors duration-300">
              {category.icon}
            </div>
            <span className="text-xs text-[#8b8c8b] leading-normal transition-colors">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
