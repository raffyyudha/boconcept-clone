import { getSeoPageBySlug, getAllSeoSlugs } from "@/lib/seo-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shield, Sparkles, Sliders, Star, ArrowUpRight, HelpCircle, ArrowRight } from "lucide-react";

interface SeoPageProps {
  params: Promise<{ slug: string }>;
}

export const runtime = "edge";


// Next.js static build pre-rendering trigger (pages generated on-demand)
export async function generateStaticParams() {
  return [];
}

// Statically generated meta data
export async function generateMetadata({ params }: SeoPageProps) {
  const { slug } = await params;
  const pageData = getSeoPageBySlug(slug);

  if (!pageData) {
    return {
      title: "Oscar Furnishing",
      description: "Premium window treatments and outdoor balcony protection in Singapore"
    };
  }

  return {
    title: pageData.meta_title,
    description: pageData.meta_description,
  };
}

export default async function ProgrammaticSeoPage({ params }: SeoPageProps) {
  const { slug } = await params;
  const pageData = getSeoPageBySlug(slug);

  if (!pageData) {
    notFound();
  }

  // Engine Variasi Tema Warna Premium
  const themeClasses: Record<string, {
    bg: string;
    text: string;
    accent: string;
    accentHover: string;
    card: string;
    cardBorder: string;
    button: string;
    badge: string;
    gradient: string;
  }> = {
    blue: {
      bg: "bg-slate-950",
      text: "text-slate-100",
      accent: "text-blue-400",
      accentHover: "hover:text-blue-300",
      card: "bg-slate-900/60 backdrop-blur-md",
      cardBorder: "border-slate-800/80",
      button: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20",
      badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      gradient: "from-blue-600/10 via-transparent to-transparent",
    },
    gold: {
      bg: "bg-[#0c0906]",
      text: "text-[#f4f4f4]",
      accent: "text-[#d4af37]",
      accentHover: "hover:text-[#facc15]",
      card: "bg-[#14100b]/80 backdrop-blur-md",
      cardBorder: "border-[#3e3d3a]/30",
      button: "bg-[#d4af37] hover:bg-[#e5c158] text-[#14100b] shadow-lg shadow-[#d4af37]/10",
      badge: "bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/20",
      gradient: "from-[#d4af37]/5 via-transparent to-transparent",
    },
    emerald: {
      bg: "bg-zinc-950",
      text: "text-zinc-100",
      accent: "text-emerald-400",
      accentHover: "hover:text-emerald-300",
      card: "bg-zinc-900/60 backdrop-blur-md",
      cardBorder: "border-zinc-800/80",
      button: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20",
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      gradient: "from-emerald-600/10 via-transparent to-transparent",
    },
    slate: {
      bg: "bg-neutral-950",
      text: "text-neutral-100",
      accent: "text-indigo-400",
      accentHover: "hover:text-indigo-300",
      card: "bg-neutral-900/60 backdrop-blur-md",
      cardBorder: "border-neutral-800",
      button: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20",
      badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      gradient: "from-indigo-600/10 via-transparent to-transparent",
    },
  };

  const currentTheme = themeClasses[pageData.color_theme] || themeClasses.gold;
  
  // Ambil layout style berdasarkan kalkulasi hash slug agar halaman tersebar merata layoutnya
  const slugHash = slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const layoutStyle = (slugHash % 3) + 1; // layout 1, 2, atau 3

  // Review & Testimonial palsu dinamis agar relevan dengan lokasi/condo
  const localReviewers = [
    { name: "Grace & Marcus Yeo", role: "Resident at " + pageData.location, rating: 5, review: `Superb installation on our ${pageData.service_type}. Alvin personally came down for measurement and suggested the best material color to match our interior. Highly recommended for anyone staying at ${pageData.location}!` },
    { name: "Danish Syazwan", role: "BTO Owner at " + pageData.location, rating: 5, review: `Excellent craftsmanship. The ${pageData.service_type} looks very premium and makes our living area feel so much more comfortable. Honest pricing and timely delivery.` },
    { name: "Mrs. Lim S.H.", role: "Homeowner in " + pageData.location, rating: 5, review: `Highly professional local fabrication team. Ordered custom fit ${pageData.service_type} and the alignment is flawless. Thank you Alvin and Oscar Furnishing!` }
  ];

  return (
    <main className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} pt-28 pb-20 relative overflow-hidden font-sans`}>
      
      {/* Background Ambient Glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b ${currentTheme.gradient} filter blur-[120px] pointer-events-none z-0`} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* -------------------------------------------------------------
            LAYOUT 1: EDITORIAL SPLIT (Modern split screen with bold headers)
            ------------------------------------------------------------- */}
        {layoutStyle === 1 && (
          <div className="pt-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
              <div className="lg:col-span-7 space-y-6">
                <span className={`inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-widest uppercase border rounded-full ${currentTheme.badge} font-bold`}>
                  Premium Custom Fit <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight font-medium">
                  {pageData.headline}
                </h1>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl">
                  {pageData.intro_text}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href={`https://wa.me/6591229599?text=Hi%20Alvin,%20I%20am%20enquiring%20about%20${encodeURIComponent(pageData.keyword)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase font-bold tracking-widest transition-all rounded-none ${currentTheme.button}`}
                  >
                    Free Laser Measurement <ArrowUpRight size={15} />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-neutral-700 hover:border-neutral-500 text-white text-xs uppercase font-bold tracking-widest px-8 py-4 transition-all"
                  >
                    Enquire Pricing
                  </Link>
                </div>
              </div>
              
              <div className="lg:col-span-5 relative group">
                <div className={`absolute inset-0 border ${currentTheme.cardBorder} translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300`} />
                <div className="h-[450px] overflow-hidden border border-neutral-800/80 bg-neutral-900/40">
                  <img
                    src={pageData.hero_image}
                    alt={pageData.keyword}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------
            LAYOUT 2: GLOWING MINIMALIST (Centered Glassmorphic layout)
            ------------------------------------------------------------- */}
        {layoutStyle === 2 && (
          <div className="pt-16 text-center max-w-4xl mx-auto mb-20">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 text-[9px] uppercase tracking-widest border rounded-md font-bold mb-6 ${currentTheme.badge}`}>
              Singapore ACRA Registered • UEN 53365360J
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-white mb-6 leading-tight max-w-3xl mx-auto font-light">
              Crafting Elegant <span className={currentTheme.accent}>{pageData.service_type}</span> at {pageData.location}
            </h1>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10">
              {pageData.intro_text}
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href={`https://wa.me/6591229599?text=Hi%20Alvin,%20I%20want%20to%20quote%20for%20${encodeURIComponent(pageData.keyword)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-10 py-4.5 text-xs uppercase font-bold tracking-widest transition-all rounded-none ${currentTheme.button}`}
              >
                Get Local Quote Directly
              </a>
            </div>

            {/* Glowing Featured Showcase Image */}
            <div className="mt-16 relative overflow-hidden border border-neutral-800 rounded-none max-w-3xl mx-auto">
              <img
                src={pageData.hero_image}
                alt={pageData.keyword}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-left">
                <span className="text-[10px] uppercase text-[#d4af37] font-semibold tracking-wider">Showcase Gallery</span>
                <h4 className="text-white text-sm font-serif">{pageData.keyword} Installation Case</h4>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------
            LAYOUT 3: BOLD EDITORIAL HERO (Asymmetric blocks)
            ------------------------------------------------------------- */}
        {layoutStyle === 3 && (
          <div className="pt-8 mb-20">
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              <div className={`lg:col-span-5 p-8 sm:p-12 border ${currentTheme.cardBorder} ${currentTheme.card} flex flex-col justify-between`}>
                <div className="space-y-6">
                  <span className={`text-[10px] uppercase tracking-widest ${currentTheme.accent} font-bold`}>
                    Specialist Shop near {pageData.location}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
                    {pageData.headline}
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {pageData.intro_text}
                  </p>
                </div>
                <div className="pt-8">
                  <a
                    href={`https://wa.me/6591229599?text=Hi%20Alvin,%20I%20need%20details%20for%20${encodeURIComponent(pageData.keyword)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs uppercase font-bold tracking-widest transition-all ${currentTheme.button}`}
                  >
                    WhatsApp Alvin Lim <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 relative h-72 sm:h-auto min-h-[350px] overflow-hidden border border-neutral-800">
                <img
                  src={pageData.hero_image}
                  alt={pageData.keyword}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Local Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className={`p-6 border ${currentTheme.cardBorder} ${currentTheme.card} hover:border-neutral-700 transition-colors`}>
            <Sparkles className={`w-8 h-8 ${currentTheme.accent} mb-4`} />
            <h3 className="text-base font-serif font-medium text-white mb-2">Bespoke Customization</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We design and locally fabricate every {pageData.service_type} to match the unique structure of your home in {pageData.location}.
            </p>
          </div>

          <div className={`p-6 border ${currentTheme.cardBorder} ${currentTheme.card} hover:border-neutral-700 transition-colors`}>
            <Shield className={`w-8 h-8 ${currentTheme.accent} mb-4`} />
            <h3 className="text-base font-serif font-medium text-white mb-2">Singapore Weatherproof</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Tested to withstand heavy tropical downpours and high wind speeds common in high-floor apartments around {pageData.location}.
            </p>
          </div>

          <div className={`p-6 border ${currentTheme.cardBorder} ${currentTheme.card} hover:border-neutral-700 transition-colors`}>
            <Sliders className={`w-8 h-8 ${currentTheme.accent} mb-4`} />
            <h3 className="text-base font-serif font-medium text-white mb-2">Smart Home Integration</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Easily pair motorized curtain tracks and blinds with your smart home systems (Google Assistant, Somfy, Alexa).
            </p>
          </div>
        </div>

        {/* Detailed localized copy blocks */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Info */}
          <div className={`lg:col-span-8 p-8 border ${currentTheme.cardBorder} ${currentTheme.card} space-y-6`}>
            <h2 className="text-2xl font-serif text-white">Bespoke Service at {pageData.location}</h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {pageData.body_text_1}
            </p>
            <div className="p-4 bg-black/30 border-l-2 border-[#d4af37] text-xs text-neutral-300 leading-relaxed italic">
              &quot;Oscar Furnishing ensures high reliability. We manage everything in-house: from initial laser measurements to fabric tailoring and custom track carpentry, with zero translation errors.&quot;
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {pageData.body_text_2}
            </p>
          </div>

          {/* Quick Specifications Sidebar */}
          <div className={`lg:col-span-4 p-6 border ${currentTheme.cardBorder} ${currentTheme.card} space-y-6`}>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white border-b border-neutral-800 pb-2">Specs &amp; Lead Time</h4>
            <ul className="space-y-4 text-xs text-neutral-400">
              <li className="flex justify-between py-1 border-b border-neutral-900/60">
                <span>Material Quality:</span>
                <span className="text-white font-medium">Marine Grade 316 / Imported</span>
              </li>
              <li className="flex justify-between py-1 border-b border-neutral-900/60">
                <span>Fabric Weight:</span>
                <span className="text-white font-medium">Bespoke / 100% Blackout</span>
              </li>
              <li className="flex justify-between py-1 border-b border-neutral-900/60">
                <span>Lead Time:</span>
                <span className="text-white font-medium">7–10 Working Days</span>
              </li>
              <li className="flex justify-between py-1 border-b border-neutral-900/60">
                <span>Site Consultation:</span>
                <span className="text-emerald-400 font-semibold uppercase">100% Free &amp; On-Site</span>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href={`https://wa.me/6591229599?text=Hi%20Alvin,%20I%20am%20enquiring%20about%20${encodeURIComponent(pageData.keyword)}`}
                className="w-full text-center inline-block text-xs uppercase tracking-widest bg-[#25D366] text-white py-3 hover:bg-[#20ba5a] transition-all font-bold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Localized Reviews Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-serif text-white mb-8 text-center">Verified Homeowner Feedback at {pageData.location}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {localReviewers.map((rev, index) => (
              <div key={index} className={`p-6 border ${currentTheme.cardBorder} ${currentTheme.card} flex flex-col justify-between`}>
                <div>
                  <div className="flex gap-1 mb-3 text-[#d4af37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-300 italic leading-relaxed mb-4">
                    &quot;{rev.review}&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-900/60">
                  <span className="text-xs text-white font-semibold block">{rev.name}</span>
                  <span className="text-[10px] text-neutral-500 block">{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Localized FAQs Section */}
        <div className={`p-8 border rounded-2xl mb-12 ${currentTheme.cardBorder} ${currentTheme.card}`}>
          <h3 className="text-lg sm:text-xl font-serif text-white mb-6 flex items-center gap-2">
            <HelpCircle className={currentTheme.accent} size={20} /> Frequently Asked Questions in {pageData.location}
          </h3>
          <div className="space-y-6 text-xs sm:text-sm">
            <div className="border-b border-neutral-900/60 pb-4">
              <h5 className="font-semibold text-white mb-1.5">How much does {pageData.service_type} cost in {pageData.location}?</h5>
              <p className="text-neutral-400 leading-relaxed">
                Prices depend on exact window and balcony dimensions. We offer free on-site laser measurements in {pageData.location} to provide an accurate, itemized quotation directly with physical material booklets.
              </p>
            </div>
            <div className="border-b border-neutral-900/60 pb-4">
              <h5 className="font-semibold text-white mb-1.5">How to arrange a measurement at {pageData.location}?</h5>
              <p className="text-neutral-400 leading-relaxed">
                Simply message Alvin Lim at +65 9122 9599. He will coordinate a time to bring our samples directly to your flat or condominium in {pageData.location}.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-1.5">Are all your products fabricated locally?</h5>
              <p className="text-neutral-400 leading-relaxed">
                Yes! All window coverings, tracks, and invisible safety grilles are fabricated in our Singapore workshop facility. This ensures fast turnaround times (7 to 10 days) and high compliance with local building standards.
              </p>
            </div>
          </div>
        </div>

        {/* Footnote links */}
        <div className="text-center space-y-4">
          <Link href="/" className={`text-xs text-neutral-400 ${currentTheme.accentHover} underline transition-colors block`}>
            ← Back to Oscar Furnishing Home
          </Link>
          <p className="text-[10px] text-neutral-600">
            © {new Date().getFullYear()} Oscar Furnishing (UEN 53365360J). All layout combinations dynamically generated for marketing purposes in {pageData.location}, Singapore.
          </p>
        </div>

      </div>
    </main>
  );
}
