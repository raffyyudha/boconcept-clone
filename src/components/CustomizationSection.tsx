"use client";

import { useState } from "react";
import { X, MessageSquare, Check } from "lucide-react";

interface CatalogueProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
}

interface CatalogueSectionData {
  subtitle: string;
  title: string;
  description: string;
  cta_text: string;
  showroom_title: string;
  showroom_description: string;
}

interface CustomizationSectionProps {
  sectionData?: CatalogueSectionData | null;
  products?: CatalogueProduct[];
  whatsappNumber?: string;
  showroomAddress?: string;
  mapsUrl?: string;
}

export default function CustomizationSection({
  sectionData,
  products = [],
  whatsappNumber = "6591229599",
  showroomAddress = "Blk 13 York Hill, #01-10, Singapore 162013",
  mapsUrl = "https://maps.google.com/?q=Blk+13+York+Hill,+#01-10,+Singapore+162013"
}: CustomizationSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<CatalogueProduct | null>(null);

  const subtitle = sectionData?.subtitle || "ENDLESS POSSIBILITIES, TAILORED TO YOU";
  const title = sectionData?.title || "Our Custom Home Catalogue";
  const description = sectionData?.description || "Our window coverings, soft furnishings, safety systems, and automated solutions are created with complete customisation in mind. Select any item below to view details and enquire directly with Alvin Lim.";
  const ctaText = sectionData?.cta_text || "Get Customisation Assistance";
  const showroomTitle = sectionData?.showroom_title || "Visit our Showroom Studio";
  const showroomDesc = sectionData?.showroom_description || "Browse physical fabric samples, feel zip blind systems, and consult our designers by appointment.";

  // Map products to ensure features is an array
  const displayProducts = products.map(p => ({
    ...p,
    features: Array.isArray(p.features) ? p.features : (typeof p.features === 'string' ? JSON.parse(p.features) : [])
  }));

  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro Section - Full Width Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-2">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#14100b] mb-6">
            {title}
          </h2>
          <p className="text-[#5f605f] text-sm leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-[#14100b] border border-[#14100b] px-6 py-3 hover:bg-[#14100b] hover:text-[#f4f4f4] transition-all font-semibold"
            >
              {ctaText}
            </a>
          </div>
        </div>

        {/* Product Catalogue Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer bg-white border border-neutral-200 hover:border-[#d4af37]/80 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Container */}
                <div className="w-full aspect-square overflow-hidden bg-neutral-50 border-b border-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content Container */}
                <div className="p-4">
                  <h4 className="text-sm font-serif font-medium text-[#14100b] mb-1 group-hover:text-[#d4af37] transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-[#5f605f] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Bottom Trigger Indicator */}
              <div className="mx-4 mb-4 text-[10px] uppercase tracking-widest text-[#d4af37] border-t border-neutral-100 pt-2 flex items-center justify-between font-semibold">
                <span>Enquire Details</span>
                <span className="font-bold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Showroom & Location Info */}
        <div className="mt-16 p-8 bg-[#14100b] text-[#f4f4f4] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3e3d3a]/30">
          <div>
            <h4 className="text-lg font-serif mb-2 text-[#d4af37]">{showroomTitle}</h4>
            <p className="text-xs text-[#8b8c8b] max-w-md">
              {showroomDesc}
            </p>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-[#d4af37] transition-colors font-medium border-b border-white hover:border-[#d4af37] pb-1"
          >
            {showroomAddress}
          </a>
        </div>

      </div>

      {/* Bubble Details Modal Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
          {/* Close trigger on backdrop */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedProduct(null)}
          />

          {/* Modal Container */}
          <div className="bg-[#1e1913] border border-[#3e3d3a]/60 w-full max-w-2xl relative overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-[101]">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-[#8b8c8b] hover:text-white transition-colors bg-[#14100b]/60 p-1.5 z-10"
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            {/* Left Column - Image */}
            <div className="w-full md:w-1/2 bg-[#14100b] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#3e3d3a]/30">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[300px] md:max-h-full max-w-full object-contain"
              />
            </div>

            {/* Right Column - Details */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between text-left">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
                  CATALOGUE ITEM DETAILS
                </span>
                <h3 className="text-xl font-serif text-white mb-3">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs text-[#8b8c8b] leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                {/* Features List */}
                <h5 className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                  Key Specifications
                </h5>
                <ul className="space-y-2 mb-6">
                  {selectedProduct.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-[10px] text-neutral-300">
                      <Check size={12} className="text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct WhatsApp CTA */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hi Alvin, I would like to enquire about the "${selectedProduct.name}" from your catalogue.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-semibold uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <MessageSquare size={16} /> Enquire on WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
