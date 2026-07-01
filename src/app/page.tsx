import HeroSection from "@/components/HeroSection";
import CategoryNav from "@/components/CategoryNav";
import OutdoorSection from "@/components/OutdoorSection";
import TrendsSection from "@/components/TrendsSection";
import CustomizationSection from "@/components/CustomizationSection";
import InteriorDesignSection from "@/components/InteriorDesignSection";
import HistorySection from "@/components/HistorySection";
import InspirationSection from "@/components/InspirationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#14100b]">
      <HeroSection />
      <CategoryNav />
      <OutdoorSection />
      <TrendsSection />
      <CustomizationSection />
      <InteriorDesignSection />
      <HistorySection />
      <InspirationSection />
      <ContactSection />
    </main>
  );
}
