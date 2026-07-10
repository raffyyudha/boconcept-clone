import { getServices, getProcessSteps, getSiteSettings } from "@/lib/data";
import ServicesPageClient from "./ServicesPageClient";

export default async function ServicesPage() {
  const [services, processSteps, settings] = await Promise.all([
    getServices(),
    getProcessSteps(),
    getSiteSettings(),
  ]);

  const whatsappNumber = settings.whatsapp_number?.value || "6591229599";

  return (
    <ServicesPageClient
      services={services}
      processSteps={processSteps}
      whatsappNumber={whatsappNumber}
    />
  );
}
