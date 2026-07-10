import { getFaqs, getSiteSettings } from "@/lib/data";
import ContactPageClient from "./ContactPageClient";

export default async function ContactPage() {
  const [faqs, settings] = await Promise.all([
    getFaqs(),
    getSiteSettings(),
  ]);

  const whatsappNumber = settings.whatsapp_number?.value || "6591229599";
  const email = settings.email?.value || "oscarfurnishing9599@gmail.com";
  const addressLine1 = settings.address_line1?.value || "Blk 13 York Hill, #01-10";
  const addressLine2 = settings.address_line2?.value || "Singapore 162013";
  const mapsUrl = settings.google_maps_url?.value || "https://maps.google.com/?q=Blk+13+York+Hill,+#01-10,+Singapore+162013";
  const websiteQr = settings.website_qr?.image_url || "/website_qr.png";
  const websiteUrl = settings.website_url?.value || "https://oscarfurnishing.com/";

  return (
    <ContactPageClient
      faqs={faqs}
      whatsappNumber={whatsappNumber}
      email={email}
      addressLine1={addressLine1}
      addressLine2={addressLine2}
      mapsUrl={mapsUrl}
      websiteQr={websiteQr}
      websiteUrl={websiteUrl}
    />
  );
}
