import Link from "next/link";

const guides = [
  {
    title: "Choosing between Manual vs Motorised Blinds",
    description: "Motorised window treatments offer ultimate luxury and convenience. Understand smart controls, motor integration, and wiring setups before you purchase.",
  },
  {
    title: "Balcony Protection: Europe Zip Blind vs Outdoor Blinds",
    description: "Balconies in Singapore face harsh sun and torrential rains. Learn why the Europe Zip System is considered the world's best zip blind for open yards.",
  },
  {
    title: "Selecting the Perfect Flooring & WallPanel Solutions",
    description: "Create a stunning backdrop for your furnishings. Our guide helps you compare high-durability vinyl flooring, wallpapers, and textured wall panels.",
  },
];

export default function InspirationSection() {
  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#14100b] mb-6">
            Style advice · Buying guides · Expert tips
          </h2>
          <p className="text-[#5f605f]">
            Everything you need to feel confident finding furniture that fits your style and space
          </p>
          <Link href="/gallery" className="inline-block mt-4 text-sm text-[#14100b] underline hover:no-underline">
            Be inspired
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-[#e8e8e8] h-48 mb-6 flex items-center justify-center">
                <span className="text-6xl text-[#c0c0c0]">{index + 1}</span>
              </div>
              <h3 className="text-lg font-serif text-[#14100b] mb-3 group-hover:underline">
                {guide.title}
              </h3>
              <p className="text-sm text-[#5f605f] mb-4 line-clamp-3">
                {guide.description}
              </p>
              <Link href="/services" className="text-sm text-[#14100b] underline hover:no-underline">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
