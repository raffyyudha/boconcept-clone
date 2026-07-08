"use client";

import { Shield, Sparkles, Sliders, CheckCircle, ArrowRight, Ruler, Compass, Hammer, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Europe Zip Blind System",
    category: "Balcony & Outdoor Protection",
    image: "/zip_blind.avif",
    description: "The world's premium zip system designed for Singapore balconies and yards. Provides ultimate protection against heavy rains, strong winds, intense solar heat, and pests. Instantly extends your indoor living space outwards.",
    features: ["Heavy rain & wind proof", "Motorised remote controls", "Insect & pest protection", "Europe technology warranty"]
  },
  {
    title: "Bespoke Window Treatments",
    category: "Curtains & Blinds",
    image: "/custom_main.avif",
    description: "Elegant curtains and custom blinds tailored specifically to your windows. Choose from premium Belgium linen, blackout roller blinds, and timber venetian blinds. Integrated with manual or smart motorized tracks.",
    features: ["Belgium import fabrics", "100% Blackout options", "Sleek smart home motorized tracks", "Basswood & timber venetian slates"]
  },
  {
    title: "Safety & Insect Netting",
    category: "Home Security & Protection",
    image: "https://ext.same-assets.com/2889591500/3069089582.jpeg",
    description: "High-tensile invisible grills for structural child and pet safety without sacrificing views. Complete with magnetic screen mosquito netting and heavy-duty cat mesh designed to stay sleek and clean.",
    features: ["High-tensile 316 stainless steel wire", "Magnetic self-closing insect screens", "Strong scratch-resistant cat netting", "Minimalist structural design"]
  },
  {
    title: "Premium Flooring & WallPanel",
    category: "Interior Surfaces",
    image: "https://ext.same-assets.com/2889591500/2724563737.svg",
    description: "Ultra-durable, water-resistant vinyl flooring and modern fluted wall panels. Give your home a luxury backdrop with low maintenance and heavy-duty wear resistance built to last for decades.",
    features: ["Waterproof & termite-free vinyl", "Textured fluted wall panels", "Quick overlays and installation", "Eco-friendly, zero formaldehyde"]
  },
  {
    title: "Custom Upholstery & Cushioning",
    category: "Soft Furnishings",
    image: "/custom_upholstery.avif",
    description: "Refresh or custom-create your indoor and outdoor lounge upholstery. Tailor-made cushion covers, sofa foam replacements, bay window seats, and dining chair cushion repairs with commercial-grade fabrics.",
    features: ["High-resilience premium foam densities", "Outdoor water-repellent fabrics", "Tailored sewing & double piping finish", "Wide array of velvet, linen, and leather options"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "On-Site Laser Measurement",
    icon: <Ruler className="w-6 h-6 text-[#d4af37]" />,
    description: "Alvin Lim visits your home to record millimeter-accurate laser dimensions. This ensures a flawless, gap-free installation for blinds, grills, or flooring."
  },
  {
    number: "02",
    title: "Bespoke Consultation",
    icon: <Compass className="w-6 h-6 text-[#d4af37]" />,
    description: "Touch physical fabric samples, choose track mechanics, decide between manual vs motorized control, and custom select colors that complement your home aesthetic."
  },
  {
    number: "03",
    title: "Precision Workshop Crafting",
    icon: <Hammer className="w-6 h-6 text-[#d4af37]" />,
    description: "Your custom treatments are fabricated by our production division, ensuring all our products are local fabrication using strictly certified premium materials."
  },
  {
    number: "04",
    title: "Professional Fitting & Handover",
    icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />,
    description: "Our dedicated installation team installs, tests, and calibrates your treatments, ensuring smooth smart-home pairing and neat, sturdy finishes."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#14100b] text-[#f4f4f4] pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-3 sm:mb-4">Crafting Perfection</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#d4af37] mb-4 sm:mb-6">Our Premium Services</h1>
          <p className="text-xs sm:text-sm md:text-base text-[#8b8c8b] leading-relaxed">
            From smart balcony enclosures to bespoke window treatments and custom upholstery, we provide comprehensive home-improvement craftsmanship for Singapore's finest spaces.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-28">
          <div className="bg-[#1e1913] p-6 sm:p-8 border border-[#3e3d3a]/30 hover:border-[#d4af37]/50 transition-colors">
            <Sparkles className="text-[#d4af37] w-7 h-7 sm:w-8 sm:h-8 mb-4" />
            <h3 className="text-base sm:text-lg font-serif mb-2 text-white">Bespoke Customization</h3>
            <p className="text-xs text-[#8b8c8b] leading-relaxed">
              Every detail—from fabrics to motorized smart tracks—is crafted to fit the precise architectural dimensions of your home.
            </p>
          </div>
          <div className="bg-[#1e1913] p-6 sm:p-8 border border-[#3e3d3a]/30 hover:border-[#d4af37]/50 transition-colors">
            <Shield className="text-[#d4af37] w-7 h-7 sm:w-8 sm:h-8 mb-4" />
            <h3 className="text-base sm:text-lg font-serif mb-2 text-white">Premium Materials</h3>
            <p className="text-xs text-[#8b8c8b] leading-relaxed">
              We source commercial-grade materials, high-tensile steels, water-repellent outdoor canvas, and premium imported linens.
            </p>
          </div>
          <div className="bg-[#1e1913] p-6 sm:p-8 border border-[#3e3d3a]/30 hover:border-[#d4af37]/50 transition-colors">
            <Sliders className="text-[#d4af37] w-7 h-7 sm:w-8 sm:h-8 mb-4" />
            <h3 className="text-base sm:text-lg font-serif mb-2 text-white">Smart Integration</h3>
            <p className="text-xs text-[#8b8c8b] leading-relaxed">
              Integrate window coverings, zip blinds, and track systems with your preferred smart home assistants for seamless control.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-16 sm:space-y-28">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
            >
              {/* Image side */}
              <div className={`relative overflow-hidden group h-64 sm:h-[380px] lg:h-[450px] bg-[#1e1913] border border-[#3e3d3a]/20 w-full ${
                index % 2 === 1 ? "lg:order-2" : "lg:order-1"
              }`}>
                {service.image.endsWith('.svg') || service.image.includes('svg') ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#1e1913]">
                    <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-[#d4af37]/40 mb-4" />
                    <span className="text-xs sm:text-sm text-[#8b8c8b] uppercase tracking-wider">{service.title} Portfolio</span>
                  </div>
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Text side */}
              <div className={`w-full ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-2">
                  {service.category}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-4 sm:mb-6 text-white leading-tight">
                  {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#8b8c8b] leading-relaxed mb-6 sm:mb-8">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-[#d4af37] shrink-0" />
                      <span className="text-xs text-white/80">{feat}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://wa.me/6591229599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#d4af37] text-[#14100b] font-medium px-6 sm:px-8 py-3 sm:py-3.5 hover:bg-white hover:text-black transition-all text-xs sm:text-sm rounded-none w-full sm:w-auto justify-center"
                >
                  Consult Alvin Lim <ArrowRight size={14} className="sm:size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline Section */}
        <div className="mt-24 sm:mt-36">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-3">OUR METHODOLOGY</p>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#d4af37]">Crafting Your Custom Spaces</h2>
            <p className="text-xs sm:text-sm text-[#8b8c8b] mt-3">
              We guide you smoothly from precision laser blueprints to direct handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#1e1913] border border-[#3e3d3a]/30 p-6 relative overflow-hidden group">
                <span className="absolute right-4 top-2 text-4xl sm:text-5xl font-bold font-serif text-[#3e3d3a]/20 group-hover:text-[#d4af37]/15 transition-colors">
                  {step.number}
                </span>
                <div className="mb-4">
                  {step.icon}
                </div>
                <h4 className="text-sm sm:text-base font-serif text-white mb-2">{step.title}</h4>
                <p className="text-xs text-[#8b8c8b] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-24 sm:mt-36 text-center bg-[#1e1913] p-8 sm:p-12 border border-[#3e3d3a]/30 max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-serif text-[#d4af37] mb-3">Ready to elevate your home?</h3>
          <p className="text-xs sm:text-sm text-[#8b8c8b] mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book a complimentary, no-obligation site measurement and fabric consultation with our expert Alvin Lim today.
          </p>
          <a
            href="https://wa.me/6591229599"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white hover:bg-white hover:text-black font-semibold text-xs sm:text-sm px-8 sm:px-10 py-3.5 sm:py-4 transition-all w-full sm:w-auto"
          >
            WhatsApp Alvin Lim: +65 9122 9599
          </a>
        </div>
      </div>
    </main>
  );
}
