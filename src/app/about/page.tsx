import { getAboutPage, getMilestones, getCoreValues, getTestimonials, getSiteSettings } from "@/lib/data";
import AboutPageClient from "./AboutPageClient";

export default async function AboutPage() {
  const [aboutSections, milestones, coreValues, testimonials, settings] = await Promise.all([
    getAboutPage(),
    getMilestones(),
    getCoreValues(),
    getTestimonials(),
    getSiteSettings(),
  ]);

  const whatsappNumber = settings.whatsapp_number?.value || "6591229599";

  return (
    <AboutPageClient
      aboutSections={aboutSections}
      milestones={milestones}
      coreValues={coreValues}
      testimonials={testimonials}
      whatsappNumber={whatsappNumber}
    />
  );
}
