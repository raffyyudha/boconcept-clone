"use client";

import { useState } from "react";
import { MessageSquare, Mail, MapPin, ChevronDown, Check, Send } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Europe Zip Blinds",
    message: "",
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do I book a free on-site measurement?",
      a: "Simply click our WhatsApp link to message Alvin Lim directly, or fill out the contact form below. Alvin will coordinate a convenient date and time to measure your windows, balcony, or walls with our precision laser equipment."
    },
    {
      q: "Are site measurements and consultations completely free?",
      a: "Yes! We provide on-site balcony measurements, window assessments, and fabric selection consultations completely free of charge with zero obligation."
    },
    {
      q: "What is the standard production lead time?",
      a: "For custom curtains, roller blinds, and invisible grills, the lead time is typically 7 to 10 working days. For custom furniture upholstery, it ranges between 10 to 14 working days depending on fabric availability."
    },
    {
      q: "Can I view fabric samples before placing an order?",
      a: "Absolutely. Alvin Lim carries physical sample books (linens, velvet, blackout materials, and zip blind fabrics) directly to your home during the site visit, or you can browse them at our York Hill showroom."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a luxury submission
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#14100b] text-[#f4f4f4] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contact Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#8b8c8b] mb-4">CONNECT WITH US</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#d4af37] mb-6">Contact Us</h1>
          <p className="text-sm md:text-base text-[#8b8c8b] leading-relaxed">
            Have a project in mind? Reach out to schedule a site measurement, enquire about fabric options, or receive a quick estimate.
          </p>
        </div>

        {/* Contact Section Grid */}
        <div className="grid lg:grid-cols-5 gap-12 mb-24">
          
          {/* Left - Contact Info (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-serif text-white mb-6">Direct Channels</h2>
            
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/6593449193"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-[#1e1913] border border-[#3e3d3a]/30 hover:border-[#d4af37] transition-all group"
            >
              <div className="w-12 h-12 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <span className="text-xs text-[#8b8c8b] uppercase tracking-wider block mb-1">Instant WhatsApp Consultation</span>
                <span className="text-lg font-serif text-white group-hover:text-[#d4af37] transition-colors">Alvin Lim: +65 9344 9193</span>
                <span className="text-xs text-[#8b8c8b] block mt-1">Free estimation &amp; laser measurement appointments.</span>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:oscarfurnishing9599@gmail.com"
              className="flex items-start gap-4 p-6 bg-[#1e1913] border border-[#3e3d3a]/30 hover:border-[#d4af37] transition-all group"
            >
              <div className="w-12 h-12 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <span className="text-xs text-[#8b8c8b] uppercase tracking-wider block mb-1">Corporate &amp; Sales Enquiries</span>
                <span className="text-base font-serif text-white group-hover:text-[#d4af37] transition-colors">oscarfurnishing9599@gmail.com</span>
                <span className="text-xs text-[#8b8c8b] block mt-1">For tenders, commercial fits, and business partnerships.</span>
              </div>
            </a>

            {/* Location Card */}
            <a 
              href="https://maps.google.com/?q=Blk+13+York+Hill,+#01-10,+Singapore+162013"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-[#1e1913] border border-[#3e3d3a]/30 hover:border-[#d4af37] transition-all group"
            >
              <div className="w-12 h-12 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <span className="text-xs text-[#8b8c8b] uppercase tracking-wider block mb-1">Showroom &amp; Workshop</span>
                <span className="text-base font-serif text-white group-hover:text-[#d4af37] transition-colors">Blk 13 York Hill, #01-10</span>
                <span className="text-xs text-[#8b8c8b] block mt-1">Singapore 162013 (By Appointment Only)</span>
              </div>
            </a>
          </div>

          {/* Right - Interactive Form (3 cols) */}
          <div className="lg:col-span-3 bg-[#1e1913] border border-[#3e3d3a]/30 p-8 md:p-10">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-6 animate-scale-in">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">Enquiry Received</h3>
                <p className="text-sm text-[#8b8c8b] max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out to Oscar Furnishing. Alvin Lim or one of our design experts will contact you within the next 24 hours.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs uppercase tracking-widest text-[#d4af37] underline hover:no-underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-serif text-white mb-6">Send an Inquiry</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-[#8b8c8b] uppercase tracking-widest block mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#14100b] border border-[#3e3d3a]/60 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors rounded-none placeholder:text-neutral-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8b8c8b] uppercase tracking-widest block mb-2 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. +65 9123 4567"
                      className="w-full bg-[#14100b] border border-[#3e3d3a]/60 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors rounded-none placeholder:text-neutral-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#8b8c8b] uppercase tracking-widest block mb-2 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="e.g. john@example.com"
                    className="w-full bg-[#14100b] border border-[#3e3d3a]/60 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors rounded-none placeholder:text-neutral-700"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#8b8c8b] uppercase tracking-widest block mb-2 font-medium">Service Requested</label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-[#14100b] border border-[#3e3d3a]/60 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors appearance-none rounded-none cursor-pointer"
                    >
                      <option value="Europe Zip Blinds">Europe Zip Blinds</option>
                      <option value="Window Curtains/Blinds">Window Curtains &amp; Blinds</option>
                      <option value="Invisible Grills & Netting">Invisible Grills &amp; Netting</option>
                      <option value="Custom Upholstery">Custom Upholstery</option>
                      <option value="Flooring & Wallpaper">Flooring &amp; Wallpaper</option>
                      <option value="Others">Others</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8b8c8b] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#8b8c8b] uppercase tracking-widest block mb-2 font-medium">Project details / Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Briefly describe your room, balcony layout, or custom fabric requirements..."
                    className="w-full bg-[#14100b] border border-[#3e3d3a]/60 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors resize-none rounded-none placeholder:text-neutral-700"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#d4af37] text-[#14100b] font-semibold text-xs uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 rounded-none"
                >
                  Send Inquiry <Send size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-[#3e3d3a]/30">
          <p className="text-xs uppercase tracking-widest text-[#8b8c8b] text-center mb-4">FAQ</p>
          <h2 className="text-3xl font-serif text-[#d4af37] text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#1e1913] border border-[#3e3d3a]/30 hover:border-[#3e3d3a]/60 transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-sm font-serif text-white">{faq.q}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-[#d4af37] transition-transform duration-300 ${
                      activeFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFaq === index ? "max-h-40 opacity-100 border-t border-[#3e3d3a]/20" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-6 text-xs text-[#8b8c8b] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
