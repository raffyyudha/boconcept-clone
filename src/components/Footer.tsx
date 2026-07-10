interface FooterProps {
  addressLine1?: string;
  addressLine2?: string;
  mapsUrl?: string;
  companyName?: string;
  regNumber?: string;
  email?: string;
  facebookUrl?: string;
  whatsappNumber?: string;
  whatsappName?: string;
}

export default function Footer({
  addressLine1 = "Blk 13 York Hill, #01-10",
  addressLine2 = "Singapore 162013",
  mapsUrl = "https://maps.google.com/?q=Blk+13+York+Hill,+#01-10,+Singapore+162013",
  companyName = "OSCAR FURNISHING",
  regNumber = "53365360J",
  email = "oscarfurnishing9599@gmail.com",
  facebookUrl = "https://facebook.com/oscar.furnishing",
  whatsappNumber = "6591229599",
  whatsappName = "Alvin Lim",
}: FooterProps) {
  return (
    <footer className="bg-[#14100b] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Links Column 1 */}
          <div>
            <ul className="space-y-3">
              <li>
                <span className="text-sm font-semibold text-[#f4f4f4]">Showroom Studio Address</span>
              </li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8b8c8b] hover:text-[#f4f4f4] transition-colors">
                  {addressLine1}
                </a>
              </li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8b8c8b] hover:text-[#f4f4f4] transition-colors">
                  {addressLine2}
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <ul className="space-y-3">
              <li>
                <span className="text-sm font-semibold text-[#f4f4f4]">{companyName}</span>
              </li>
              <li>
                <span className="text-sm text-[#8b8c8b]">
                  Reg No: {regNumber}
                </span>
              </li>
              <li>
                <a href={`mailto:${email}`} className="text-sm text-[#8b8c8b] hover:text-[#f4f4f4] transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8b8c8b] hover:text-[#f4f4f4] transition-colors">
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="col-span-2">
            <p className="text-sm text-[#f4f4f4] mb-2">Ready to start your home project?</p>
            <p className="text-sm text-[#8b8c8b] mb-4">
              Get a front-row seat to custom window treatments, safety solutions, and soft furnishings tailored specifically to your home.
            </p>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[#f4f4f4] underline hover:no-underline font-semibold">
              WhatsApp {whatsappName}: +65 {whatsappNumber.replace('65', '').replace(/(\d{4})(\d{4})/, '$1 $2')}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#3e3d3a]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#8b8c8b]">
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-[#8b8c8b] hover:text-[#f4f4f4] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-[#8b8c8b] hover:text-[#f4f4f4] transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-xs text-[#8b8c8b] hover:text-[#f4f4f4] transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
