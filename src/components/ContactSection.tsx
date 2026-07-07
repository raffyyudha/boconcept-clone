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

        <div className="grid md:grid-cols-2 gap-8">
          {/* WhatsApp / QR Code */}
          <a href="https://wa.me/6591229599" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex items-center justify-between p-8 bg-[#14100b] text-[#f4f4f4] h-64 border border-[#3e3d3a]/30 hover:border-[#d4af37] transition-all">
            <div className="max-w-[60%] flex flex-col justify-between h-full">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-2">Instant Consultation</p>
                <p className="text-xl md:text-2xl font-serif text-[#d4af37]">Scan to chat on WhatsApp</p>
                <p className="text-xs text-[#8b8c8b] mt-2">Alvin Lim (林祥龙)<br/>+65 9122 9599</p>
              </div>
              <p className="text-sm underline hover:no-underline text-white mt-4">Open Chat Directly</p>
            </div>
            {/* Minimalist modern QR Code SVG */}
            <div className="w-32 h-32 bg-white p-2 rounded-lg flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                <path d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z M40,0 h10 v10 h-10 z M50,15 h10 v15 h-10 z M45,45 h10 v10 h-10 z M60,40 h15 v15 h-15 z M35,60 h10 v20 h-10 z M55,65 h20 v10 h-20 z M80,80 h20 v20 h-20 z M85,45 h15 v15 h-15 z M0,40 h15 v10 h-15 z M20,50 h10 v10 h-10 z M65,75 h10 v10 h-10 z M90,65 h10 v10 h-10 z" />
              </svg>
            </div>
          </a>

          {/* Email / Social */}
          <a href="mailto:oscarfurnishing9599@gmail.com" className="group relative overflow-hidden flex flex-col justify-between p-8 bg-[#14100b] text-[#f4f4f4] h-64 border border-[#3e3d3a]/30 hover:border-[#d4af37] transition-all">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-2">Corporate &amp; Sales Enquiries</p>
              <p className="text-xl md:text-2xl font-serif text-[#d4af37]">Email &amp; Social Media</p>
            </div>
            <div className="space-y-2 mt-4 text-sm text-[#8b8c8b]">
              <p>Email: <span className="text-white font-medium hover:underline">oscarfurnishing9599@gmail.com</span></p>
              <p>Facebook: <span className="text-white font-medium hover:underline">facebook.com/oscar.furnishing</span></p>
            </div>
            <p className="text-sm underline hover:no-underline text-white mt-4">Send an email enquiry</p>
          </a>
        </div>
      </div>
    </section>
  );
}
