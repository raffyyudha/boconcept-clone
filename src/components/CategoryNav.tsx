"use client";

import { Grid, Layers, Shield, LayoutGrid, Paintbrush, Lock, ShieldCheck, Cpu, Sofa, Compass } from "lucide-react";

const categories = [
  { name: "Window Blinds", icon: <Grid className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Curtains", icon: <Layers className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Europe Zip Blinds", icon: <Shield className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Vinyl Flooring", icon: <LayoutGrid className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Wallpaper & Panels", icon: <Paintbrush className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Invisible Grills", icon: <Lock className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Mosquito & Cat Netting", icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Smart Home Systems", icon: <Cpu className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Custom Upholstery", icon: <Sofa className="w-6 h-6 text-[#d4af37]" /> },
  { name: "Interior Design", icon: <Compass className="w-6 h-6 text-[#d4af37]" /> },
];

export default function CategoryNav() {
  return (
    <section id="services" className="bg-[#14100b] py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-serif text-center text-[#f4f4f4] mb-12">
        Our Core Solutions
      </h2>

      <div className="category-scroll flex gap-6 overflow-x-auto pb-4 max-w-6xl mx-auto justify-center flex-wrap">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center gap-3 min-w-[100px] text-center select-none cursor-default"
          >
            <div className="w-16 h-16 rounded-full bg-[#1e1913] border border-[#3e3d3a]/30 flex items-center justify-center transition-colors duration-300">
              {category.icon}
            </div>
            <span className="text-xs text-[#8b8c8b] transition-colors whitespace-nowrap">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
