"use client";

import { Shield, Layers, Sofa, Paintbrush, Lock, Cpu, LayoutGrid } from "lucide-react";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Shield: <Shield className="w-6 h-6 text-[#d4af37]" />,
  Layers: <Layers className="w-6 h-6 text-[#d4af37]" />,
  Sofa: <Sofa className="w-6 h-6 text-[#d4af37]" />,
  Paintbrush: <Paintbrush className="w-6 h-6 text-[#d4af37]" />,
  Lock: <Lock className="w-6 h-6 text-[#d4af37]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#d4af37]" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6 text-[#d4af37]" />,
};

interface Category {
  id: number;
  name: string;
  icon_name: string;
}

interface CategoryNavProps {
  categories?: Category[];
}

export default function CategoryNav({ categories = [] }: CategoryNavProps) {
  const items = categories.length > 0 ? categories : [
    { id: 1, name: "Balcony Zip Blinds / Outdoor Blinds", icon_name: "Shield" },
    { id: 2, name: "Curtain & Blinds", icon_name: "Layers" },
    { id: 3, name: "Custom Cushions & Upholstery", icon_name: "Sofa" },
    { id: 4, name: "Flooring & Wall Covering", icon_name: "Paintbrush" },
    { id: 5, name: "Invisible Grill, Insects & Pets Netting", icon_name: "Lock" },
    { id: 6, name: "Smart Home Automation", icon_name: "Cpu" },
    { id: 7, name: "Vinyl & Carpet Flooring", icon_name: "LayoutGrid" },
  ];

  return (
    <section id="services" className="bg-[#14100b] py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-serif text-center text-[#f4f4f4] mb-12">
        Our Core Solutions
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-10 gap-x-4 max-w-6xl mx-auto justify-items-center">
        {items.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-3 w-full max-w-[130px] text-center select-none cursor-default"
          >
            <div className="w-16 h-16 rounded-full bg-[#1e1913] border border-[#3e3d3a]/30 flex items-center justify-center hover:border-[#d4af37] transition-colors duration-300">
              {iconMap[category.icon_name] || <Shield className="w-6 h-6 text-[#d4af37]" />}
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
