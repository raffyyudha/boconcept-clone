"use client";

import { Award, UserCheck, ShieldAlert, Heart, Landmark, Check } from "lucide-react";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Award: <Award className="text-[#d4af37] w-6 h-6 shrink-0" />,
  UserCheck: <UserCheck className="text-[#d4af37] w-6 h-6 shrink-0" />,
  ShieldAlert: <ShieldAlert className="text-[#d4af37] w-6 h-6 shrink-0" />,
  Heart: <Heart className="text-[#d4af37] w-6 h-6 shrink-0" />,
};

interface AboutPageClientProps {
  aboutSections: Record<string, any>;
  milestones: any[];
  coreValues: any[];
  testimonials: any[];
  whatsappNumber: string;
}

export default function AboutPageClient({ aboutSections, milestones, coreValues, testimonials, whatsappNumber }: AboutPageClientProps) {
  const hero = aboutSections.hero;
  const consultant = aboutSections.consultant;
  const workshop = aboutSections.workshop;

  return (
    <main className="min-h-screen bg-[#14100b] text-[#f4f4f4] pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-2">
              {hero?.extra_data?.subtitle || "OUR BRAND STORY"}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6 leading-tight">
              {hero?.title || "Dedicated to Quality Home Improvement"}
            </h1>
            <p className="text-xs sm:text-sm text-[#8b8c8b] leading-relaxed mb-4 sm:mb-6">
              {hero?.description || ""}
            </p>
            <p className="text-xs sm:text-sm text-[#8b8c8b] leading-relaxed">
              {hero?.extra_data?.paragraph2 || ""}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            <img
              src={hero?.extra_data?.image1 || "https://cdn.media.amplience.net/i/boconcept/f29efa76-9bf4-465f-aca9-ad44012ce2f0?locale=*&w=600&fmt=auto&upscale=false&sm=c&qlt=75"}
              alt="Artisanal upholstery sewing"
              className="w-full h-56 sm:h-80 object-cover border border-[#3e3d3a]/20"
            />
            <img
              src={hero?.extra_data?.image2 || "https://cdn.media.amplience.net/i/boconcept/affd5764-1508-4c27-9feb-b2f8008fff0a?locale=*&w=600&fmt=auto&upscale=false&sm=c&qlt=75"}
              alt="Timber workshop crafting"
              className="w-full h-56 sm:h-80 object-cover border border-[#3e3d3a]/20 pt-6 sm:pt-8"
            />
          </div>
        </div>

        {/* Milestones Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 sm:mb-28">
          {milestones.map((m: any) => (
            <div key={m.id} className="bg-[#1e1913] border border-[#3e3d3a]/30 p-6 text-center">
              <span className="text-3xl sm:text-4xl font-serif text-[#d4af37] block font-bold mb-1">{m.value}</span>
              <span className="text-xs sm:text-sm font-serif text-white block mb-2">{m.label}</span>
              <p className="text-[10px] sm:text-xs text-[#8b8c8b] leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>

        {/* Lead Consultant Spotlight */}
        <div className="bg-[#1e1913] border border-[#3e3d3a]/30 p-6 sm:p-10 lg:p-12 mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 flex flex-col items-center text-center lg:text-left lg:items-start">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-4 text-[#d4af37]">
                <UserCheck size={36} className="sm:size-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-white mb-1">{consultant?.title || "Alvin Lim & The group of salesperson"}</h3>
              <p className="text-[10px] sm:text-xs text-[#d4af37] uppercase tracking-widest font-semibold mb-4">{consultant?.extra_data?.role || "Lead Consultants & On-Site Experts"}</p>
              <p className="text-[10px] sm:text-xs text-[#8b8c8b] leading-relaxed">
                {consultant?.extra_data?.tagline || "Serving customers with personalized measurements, material suggestions, and direct quotes."}
              </p>
            </div>

            <div className="lg:col-span-2 space-y-4 text-left">
              <h4 className="text-base sm:text-lg font-serif text-[#d4af37]">The Alvin &amp; Salesperson Group Difference</h4>
              <p className="text-xs sm:text-sm text-[#8b8c8b] leading-relaxed">
                {consultant?.description || ""}
              </p>
              <p className="text-xs sm:text-sm text-[#8b8c8b] leading-relaxed">
                {consultant?.extra_data?.paragraph2 || ""}
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs uppercase tracking-widest text-[#d4af37] border-b border-[#d4af37] pb-1 hover:text-white hover:border-white transition-colors mt-2"
              >
                Connect with Alvin on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Local Workshop & Tailoring details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 sm:mb-28">
          <div className="order-2 lg:order-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-2">
              {workshop?.extra_data?.subtitle || "LOCAL PRODUCTION"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4 sm:mb-6">
              {workshop?.title || "Our York Hill Showroom Studio"}
            </h2>
            <p className="text-xs sm:text-sm text-[#8b8c8b] leading-relaxed mb-6">
              {workshop?.description || ""}
            </p>
            <div className="space-y-3">
              {(workshop?.extra_data?.features || [
                "In-House Tailoring: Custom seams, pleats, and lining attachments.",
                "Custom Carpenter Track Fits: Seamlessly shaped curtain runners and boxes.",
                "Rigorous Zip Test: Custom outdoor zip blinds pre-tested for friction checks.",
              ]).map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-[#d4af37]/15 p-1 text-[#d4af37] shrink-0 mt-0.5"><Check size={12} /></div>
                  <p className="text-xs text-white/90 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={workshop?.extra_data?.image || "https://ext.same-assets.com/2889591500/3978944732.jpeg"}
              alt="York Hill Workshop & Showroom"
              className="w-full h-64 sm:h-96 object-cover border border-[#3e3d3a]/30"
            />
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-3">OUR CORE VALUES</p>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#d4af37]">Built on Integrity &amp; Quality</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {coreValues.map((val: any) => (
              <div key={val.id} className="flex gap-4 p-6 bg-[#1e1913] border border-[#3e3d3a]/30">
                <div className="bg-[#d4af37]/10 w-12 h-12 flex items-center justify-center text-[#d4af37] shrink-0">
                  {iconMap[val.icon_name] || <Award className="text-[#d4af37] w-6 h-6 shrink-0" />}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-serif text-white mb-2">{val.title}</h4>
                  <p className="text-xs text-[#8b8c8b] leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-20 sm:mb-28 bg-[#1e1913] border border-[#3e3d3a]/30 p-6 sm:p-10 text-center">
          <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-3">TESTIMONIALS</p>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#d4af37] mb-8">What Our Clients Say</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
            {testimonials.map((t: any) => (
              <div key={t.id} className="bg-[#14100b] border border-[#3e3d3a]/30 p-6 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#8b8c8b] italic leading-relaxed mb-6">
                  &quot;{t.quote}&quot;
                </p>
                <div>
                  <span className="text-xs font-semibold text-white block">{t.author}</span>
                  <span className="text-[10px] text-[#d4af37] uppercase tracking-wider block">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Registry Credentials */}
        <div className="bg-[#1e1913] p-8 sm:p-10 border border-[#3e3d3a]/30 text-center max-w-2xl mx-auto">
          <Landmark className="text-[#d4af37] w-8 h-8 mx-auto mb-4" />
          <h3 className="text-lg font-serif text-[#d4af37] mb-2">Singapore ACRA Registered Entity</h3>
          <p className="text-xs text-[#8b8c8b] leading-relaxed mb-6">
            Oscar Furnishing is fully registered with the Accounting and Corporate Regulatory Authority (ACRA) of Singapore.
          </p>
          <div className="grid grid-cols-2 gap-4 text-left border-t border-[#3e3d3a]/30 pt-6 max-w-md mx-auto">
            <div>
              <span className="text-[10px] sm:text-xs text-[#8b8c8b] block">Registered Name:</span>
              <span className="text-xs sm:text-sm font-medium text-white">OSCAR FURNISHING</span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-[#8b8c8b] block">Registration Number:</span>
              <span className="text-xs sm:text-sm font-medium text-white">53365360J</span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-[#8b8c8b] block">Showroom Studio:</span>
              <span className="text-xs sm:text-sm font-medium text-white">Blk 13 York Hill, #01-10</span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-[#8b8c8b] block">Registration Country:</span>
              <span className="text-xs sm:text-sm font-medium text-white">Singapore</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
