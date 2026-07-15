import HeroSection from "@/components/HeroSection";
import CategoryNav from "@/components/CategoryNav";
import OutdoorSection from "@/components/OutdoorSection";
import TrendsSection from "@/components/TrendsSection";
import CustomizationSection from "@/components/CustomizationSection";
import InteriorDesignSection from "@/components/InteriorDesignSection";
import HistorySection from "@/components/HistorySection";
import InspirationSection from "@/components/InspirationSection";
import ContactSection from "@/components/ContactSection";
import {
  getHeroSection,
  getCategories,
  getOutdoorSection,
  getTrendsSection,
  getTrendsItems,
  getCatalogueSection,
  getCatalogueProducts,
  getInteriorSection,
  getProjects,
  getHistorySection,
  getInspirationSection,
  getGalleryImages,
  getSiteSettings,
} from "@/lib/data";

export default async function Home() {
  const [
    heroData,
    categories,
    outdoorData,
    trendsSectionData,
    trendsItems,
    catalogueSectionData,
    catalogueProducts,
    interiorSectionData,
    projects,
    historyData,
    inspirationData,
    galleryImages,
    settings,
  ] = await Promise.all([
    getHeroSection(),
    getCategories(),
    getOutdoorSection(),
    getTrendsSection(),
    getTrendsItems(),
    getCatalogueSection(),
    getCatalogueProducts(),
    getInteriorSection(),
    getProjects(),
    getHistorySection(),
    getInspirationSection(),
    getGalleryImages(),
    getSiteSettings(),
  ]);

  const whatsappNumber = settings.whatsapp_number?.value || "6591229599";
  const email = settings.email?.value || "oscarfurnishing9599@gmail.com";
  const websiteUrl = settings.website_url?.value || "https://oscarfurnishing.com/";
  const websiteQr = settings.website_qr?.image_url || "/website_qr.avif";
  const facebookUrl = settings.facebook_url?.value || "facebook.com/oscar.furnishing";
  const whatsappName = settings.whatsapp_name?.value || "Alvin Lim";
  const mapsUrl = settings.google_maps_url?.value || "https://maps.google.com/?q=Blk+13+York+Hill,+#01-10,+Singapore+162013";
  const addressLine1 = settings.address_line1?.value || "Blk 13 York Hill, #01-10";
  const showroomAddress = `${addressLine1}, ${settings.address_line2?.value || "Singapore 162013"}`;

  return (
    <main className="min-h-screen bg-[#14100b]">
      <HeroSection data={heroData} whatsappNumber={whatsappNumber} />
      <CategoryNav categories={categories} />
      <OutdoorSection data={outdoorData} whatsappNumber={whatsappNumber} />
      <TrendsSection sectionData={trendsSectionData} items={trendsItems} whatsappNumber={whatsappNumber} />
      <CustomizationSection
        sectionData={catalogueSectionData}
        products={catalogueProducts}
        whatsappNumber={whatsappNumber}
        showroomAddress={showroomAddress}
        mapsUrl={mapsUrl}
      />
      <InteriorDesignSection sectionData={interiorSectionData} projects={projects} />
      <HistorySection data={historyData} whatsappNumber={whatsappNumber} />
      <InspirationSection sectionData={inspirationData} images={galleryImages} />
      <ContactSection
        whatsappNumber={whatsappNumber}
        whatsappName={whatsappName}
        email={email}
        websiteUrl={websiteUrl}
        websiteQr={websiteQr}
        facebookUrl={facebookUrl}
      />
    </main>
  );
}
