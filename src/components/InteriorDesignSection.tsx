import Link from "next/link";

interface InteriorSectionData {
  title: string;
  description: string;
  cta_text: string;
  subtitle: string;
}

interface Project {
  id: number;
  title: string;
  image: string;
}

interface InteriorDesignSectionProps {
  sectionData?: InteriorSectionData | null;
  projects?: Project[];
}

export default function InteriorDesignSection({ sectionData, projects = [] }: InteriorDesignSectionProps) {
  const title = sectionData?.title || "Let us help you - no obligations";
  const description = sectionData?.description || "We have helped thousands of happy customers in Singapore. Our expertise in window treatments, space planning, flooring, and material selection helps you transform your house. Together we turn spaces into extraordinary homes.";
  const ctaText = sectionData?.cta_text || "Get in touch";
  const subtitle = sectionData?.subtitle || "Discover real homes styled by our design experts";

  const defaultProjects: Project[] = [
    { id: 1, title: "York Hill: Modern Showroom", image: "https://ext.same-assets.com/2889591500/3978944732.jpeg" },
    { id: 2, title: "Bukit Timah: Balcony Zip Blinds", image: "https://ext.same-assets.com/2889591500/872304397.jpeg" },
    { id: 3, title: "Orchard Road: Luxury Upholstery", image: "https://ext.same-assets.com/2889591500/2556263261.jpeg" },
    { id: 4, title: "Tampines: Smart Curtains", image: "https://ext.same-assets.com/2889591500/2928909681.jpeg" },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <section id="gallery" className="bg-[#14100b] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#f4f4f4] mb-6">
            {title}
          </h2>
          <p className="text-[#8b8c8b] max-w-2xl mx-auto mb-8">
            {description}
          </p>
          <Link href="/contact" className="inline-block text-sm text-[#f4f4f4] border border-[#f4f4f4] px-8 py-3 hover:bg-[#f4f4f4] hover:text-[#14100b] transition-all">
            {ctaText}
          </Link>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-serif text-[#f4f4f4] mb-8">
            {subtitle}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayProjects.map((project) => (
              <Link key={project.id} href="/gallery" className="group relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-[#f4f4f4]">{project.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
