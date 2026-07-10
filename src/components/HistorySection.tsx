interface HistoryData {
  title: string;
  description: string;
  cta_text: string;
  image1: string;
  image2: string;
  specs: Record<string, string>;
}

interface HistorySectionProps {
  data?: HistoryData | null;
  whatsappNumber?: string;
}

export default function HistorySection({ data, whatsappNumber = "6591229599" }: HistorySectionProps) {
  const title = data?.title || "Oscar Furnishing - Dedicated to Quality Home Improvement";
  const description = data?.description || "Registered under Registration Number 53365360J, Oscar Furnishing is led by Alvin & The group of salesperson. We specialize in high-quality window coverings, safety invisible grills, mosquito netting, vinyl flooring, wallpaper, custom cushions, upholstery, and soft furnishings. We operate our York Hill studio as a showroom, and all our products are local fabrication.";
  const ctaText = data?.cta_text || "Consult Alvin Lim";
  const image1 = data?.image1 || "https://cdn.media.amplience.net/i/boconcept/f29efa76-9bf4-465f-aca9-ad44012ce2f0?locale=*&w=600&fmt=auto&upscale=false&sm=c&qlt=75";
  const image2 = data?.image2 || "https://cdn.media.amplience.net/i/boconcept/affd5764-1508-4c27-9feb-b2f8008fff0a?locale=*&w=600&fmt=auto&upscale=false&sm=c&qlt=75";

  const specs = data?.specs || {
    printing_category: "OFFSET",
    material: "260gsm Artcard, Matte Lamination",
    dimensions: "90mm x 54mm (Business Card)",
    quantity: "5 boxes ordered",
    production_lead_time: "10–14 working days",
    fulfillment: "Self Collection"
  };

  const specLabels: Record<string, string> = {
    printing_category: "Printing Category:",
    material: "Material:",
    dimensions: "Dimensions:",
    quantity: "Quantity:",
    production_lead_time: "Production Lead Time:",
    fulfillment: "Fulfillment:"
  };

  return (
    <section id="about" className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#14100b] mb-6">
              {title}
            </h2>
            <p className="text-[#5f605f] mb-6">
              {description}
            </p>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-[#14100b] border border-[#14100b] px-8 py-3 hover:bg-[#14100b] hover:text-[#f4f4f4] transition-all mb-8">
              {ctaText}
            </a>

            {/* Technical Specifications Block */}
            <div className="pt-6 border-t border-[#3e3d3a]/20">
              <h4 className="text-xs uppercase tracking-widest text-[#14100b] font-semibold mb-3">
                Technical Print Specifications (Inventory Archive)
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-[#5f605f]">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-semibold text-[#14100b]">{specLabels[key] || key}:</span> {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={image1}
              alt="Leather craftsmanship"
              className="w-full h-64 object-cover"
            />
            <img
              src={image2}
              alt="Wood workshop"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
