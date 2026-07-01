export default function HistorySection() {
  return (
    <section id="about" className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#14100b] mb-6">
              Oscar Furnishing - Dedicated to Quality Home Improvement
            </h2>
            <p className="text-[#5f605f] mb-6">
              Registered under Registration Number 53365360J, Oscar Furnishing is your ideal choice for home furnishings. We specialize in high-quality window coverings, safety invisible grills, mosquito netting, vinyl flooring, wallpaper, custom cushions, upholstery, and comprehensive interior design styling.
            </p>
            <a href="https://wa.me/6593449193" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-[#14100b] border border-[#14100b] px-8 py-3 hover:bg-[#14100b] hover:text-[#f4f4f4] transition-all mb-8">
              Consult Alvin Lim
            </a>

            {/* Technical Specifications Block */}
            <div className="pt-6 border-t border-[#3e3d3a]/20">
              <h4 className="text-xs uppercase tracking-widest text-[#14100b] font-semibold mb-3">
                Technical Print Specifications (Inventory Archive)
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-[#5f605f]">
                <div><span className="font-semibold text-[#14100b]">Printing Category:</span> OFFSET</div>
                <div><span className="font-semibold text-[#14100b]">Material:</span> 260gsm Artcard, Matte Lamination</div>
                <div><span className="font-semibold text-[#14100b]">Dimensions:</span> 90mm x 54mm (Business Card)</div>
                <div><span className="font-semibold text-[#14100b]">Quantity:</span> 5 boxes ordered</div>
                <div><span className="font-semibold text-[#14100b]">Production Lead Time:</span> 10–14 working days</div>
                <div><span className="font-semibold text-[#14100b]">Fulfillment:</span> Self Collection</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://cdn.media.amplience.net/i/boconcept/f29efa76-9bf4-465f-aca9-ad44012ce2f0?locale=*&w=600&fmt=auto&upscale=false&sm=c&qlt=75"
              alt="Leather craftsmanship"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://cdn.media.amplience.net/i/boconcept/affd5764-1508-4c27-9feb-b2f8008fff0a?locale=*&w=600&fmt=auto&upscale=false&sm=c&qlt=75"
              alt="Wood workshop"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
