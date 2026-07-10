import { getGalleryImages, getSiteSettings } from "@/lib/data";
import GalleryPageClient from "./GalleryPageClient";

export default async function GalleryPage() {
  const [galleryImages, settings] = await Promise.all([
    getGalleryImages(),
    getSiteSettings(),
  ]);

  const whatsappNumber = settings.whatsapp_number?.value || "6591229599";

  return (
    <GalleryPageClient
      galleryImages={galleryImages}
      whatsappNumber={whatsappNumber}
    />
  );
}
