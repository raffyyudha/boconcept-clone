export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-xl font-serif text-[#14100b] mb-4">
            Get in touch with Oscar Furnishing
          </h3>
          <p className="text-[#5f605f] max-w-2xl mx-auto">
            Contact Alvin Lim (林祥龙) to receive a free quote, order fabric samples, or book an on-site balcony measurement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* WhatsApp Card */}
          <a href="https://wa.me/6591229599" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex flex-col justify-between p-8 bg-[#14100b] text-[#f4f4f4] h-64 border border-[#3e3d3a]/30 hover:border-[#d4af37] transition-all">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-2">Instant Consultation</p>
              <p className="text-xl md:text-2xl font-serif text-[#d4af37]">Chat on WhatsApp</p>
              <p className="text-xs text-[#8b8c8b] mt-2">Alvin Lim (林祥龙)<br/>+65 9122 9599</p>
            </div>
            <p className="text-sm underline hover:no-underline text-white mt-4">Open Chat Directly</p>
          </a>

          {/* Website QR Card */}
          <a href="https://oscarfurnishing.com/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex items-center justify-between p-8 bg-[#14100b] text-[#f4f4f4] h-64 border border-[#3e3d3a]/30 hover:border-[#d4af37] transition-all">
            <div className="max-w-[55%] flex flex-col justify-between h-full">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-2">Website QR</p>
                <p className="text-xl md:text-2xl font-serif text-[#d4af37]">Scan to Visit</p>
                <p className="text-xs text-[#8b8c8b] mt-2">oscarfurnishing.com</p>
              </div>
              <p className="text-sm underline hover:no-underline text-white mt-4">Visit Website</p>
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white p-1.5 rounded-none flex items-center justify-center shrink-0 border border-neutral-800">
              <img src="/website_qr.png" alt="Oscar Furnishing Website QR Code" className="w-full h-full object-contain" />
            </div>
          </a>

          {/* Email / Social */}
          <a href="mailto:oscarfurnishing9599@gmail.com" className="group relative overflow-hidden flex flex-col justify-between p-8 bg-[#14100b] text-[#f4f4f4] h-64 border border-[#3e3d3a]/30 hover:border-[#d4af37] transition-all">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-2">Corporate &amp; Sales Enquiries</p>
              <p className="text-xl md:text-2xl font-serif text-[#d4af37]">Email &amp; Social</p>
              <div className="space-y-1 mt-3 text-xs text-[#8b8c8b]">
                <p>Email: <span className="text-white hover:underline">oscarfurnishing9599@gmail.com</span></p>
                <p>Facebook: <span className="text-white hover:underline">facebook.com/oscar.furnishing</span></p>
              </div>
            </div>
            <p className="text-sm underline hover:no-underline text-white mt-4">Send an email enquiry</p>
          </a>
        </div>
      </div>
    </section>
  );
}
