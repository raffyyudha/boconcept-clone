import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import Script from "next/script";
import { getSiteSettings } from "@/lib/data";

export const runtime = "edge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSCAR FURNISHING | Your Ideal Choice for Home Furnishings",
  description: "Premium window treatments, Europe zip blinds, invisible grills, mosquito netting, flooring, smart home integration, and custom upholstery by OSCAR FURNISHING.",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  const logoUrl = settings.logo?.image_url || "/logonya.png";
  const whatsappNumber = settings.whatsapp_number?.value || "6591229599";
  const whatsappName = settings.whatsapp_name?.value || "Alvin Lim";
  const getQuoteText = settings.get_quote_text?.value || "Get Quote";
  const email = settings.email?.value || "oscarfurnishing9599@gmail.com";
  const facebookUrl = settings.facebook_url?.value || "https://facebook.com/oscar.furnishing";
  const companyName = settings.company_name?.value || "OSCAR FURNISHING";
  const regNumber = settings.registration_number?.value || "53365360J";
  const addressLine1 = settings.address_line1?.value || "Blk 13 York Hill, #01-10";
  const addressLine2 = settings.address_line2?.value || "Singapore 162013";
  const mapsUrl = settings.google_maps_url?.value || "https://maps.google.com/?q=Blk+13+York+Hill,+#01-10,+Singapore+162013";

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-grab/dist/index.global.js"
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <MainLayoutWrapper
            logoUrl={logoUrl}
            whatsappNumber={whatsappNumber}
            whatsappName={whatsappName}
            getQuoteText={getQuoteText}
            email={email}
            facebookUrl={facebookUrl}
            companyName={companyName}
            regNumber={regNumber}
            addressLine1={addressLine1}
            addressLine2={addressLine2}
            mapsUrl={mapsUrl}
          >
            {children}
          </MainLayoutWrapper>
        </ClientBody>
      </body>
    </html>
  );
}
