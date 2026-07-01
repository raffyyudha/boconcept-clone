import Link from "next/link";

const customProducts = [
  {
    id: 1,
    image: "/motorised_curtain.png",
    material: "Belgium Linen",
    base: "Smart Motor Track",
    originalPrice: "$650.00",
    salePrice: "$450.00",
    name: "Motorised Curtains",
  },
  {
    id: 2,
    image: "/roller_blind.png",
    material: "Sunscreen Blackout",
    base: "Manual / Motorised",
    originalPrice: "$380.00",
    salePrice: "$240.00",
    name: "Premium Roller Blinds",
  },
  {
    id: 3,
    image: "/venetian_blind.png",
    material: "Timber / Basswood",
    base: "Shadow Slats",
    originalPrice: "$480.00",
    salePrice: "$320.00",
    name: "Venetian Blinds",
  },
  {
    id: 4,
    image: "/custom_upholstery.png",
    material: "Velvet / Cotton Fabric",
    base: "High-density Foam",
    originalPrice: "$290.00",
    salePrice: "$180.00",
    name: "Custom Upholstery & Cushion",
  },
];

export default function CustomizationSection() {
  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image and text */}
          <div>
            <img
              src="/custom_main.png"
              alt="Custom Window Treatments"
              className="w-full h-auto mb-8"
            />
            <h2 className="text-3xl md:text-4xl font-serif text-[#14100b] mb-6">
              Endless possibilities, tailored to you
            </h2>
            <p className="text-[#5f605f] mb-6">
              Our window coverings, soft furnishings, and upholstery are created with complete customisation in mind. Choose your configuration and premium fabrics to craft a design that is uniquely yours, or consult Alvin Lim to help refine your vision.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/services" className="text-sm text-[#14100b] border border-[#14100b] px-6 py-3 hover:bg-[#14100b] hover:text-[#f4f4f4] transition-all">
                Browse custom fabrics
              </Link>
              <Link href="/contact" className="text-sm text-[#14100b] underline hover:no-underline">
                Get customisation assistance
              </Link>
            </div>
          </div>

          {/* Right - Product grid */}
          <div>
            <h3 className="text-xl font-serif text-[#14100b] mb-6">Custom Home Furnishings</h3>
            <div className="grid grid-cols-2 gap-6">
              {customProducts.map((product) => (
                <a key={product.id} href="https://wa.me/6593449193" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="bg-[#e8e8e8] p-4 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="text-sm font-medium text-[#14100b]">{product.name}</h4>
                  <p className="text-xs text-[#5f605f]">{product.material} • {product.base}</p>
                  <p className="text-xs text-[#5f605f]">+ more fabric choices</p>
                  <div className="mt-2">
                    <span className="text-xs text-[#8b8c8b] line-through mr-2">Est. Retail {product.originalPrice}</span>
                    <span className="text-sm text-[#14100b]">From {product.salePrice}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Find store CTA */}
            <div className="mt-8 p-6 bg-[#14100b] text-[#f4f4f4]">
              <h4 className="text-lg font-serif mb-4">Visit our showroom &amp; workshop</h4>
              <a href="https://maps.google.com/?q=Blk+13+York+Hill,+#01-10,+Singapore+162013" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:underline">
                Blk 13 York Hill, #01-10, Singapore 162013
                <img src="https://ext.same-assets.com/2889591500/3803108088.svg" alt="" className="w-4 h-4 invert" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
