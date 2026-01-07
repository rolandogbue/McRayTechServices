import { partners } from "@/config/partners";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const Partners = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      if (w < 640) return setVisibleCount(2);
      if (w < 1024) return setVisibleCount(4);
      setVisibleCount(6);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const seamlessPartners = [...partners, ...partners.slice(0, visibleCount)];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <Badge
              variant="outline"
              className="text-sm px-4 py-1 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              Trusted Partners
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join hundreds of successful businesses that trust us to accelerate
            their growth
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10" />

          <div
            className="flex animate-scroll p-6"
            style={{
              ["--item-count" as any]: partners.length,
              ["--duration" as any]:
                visibleCount === 2 ? "10s" : visibleCount === 4 ? "15s" : "20s",
            }}
          >
            {seamlessPartners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0">
                <div className="w-44 h-28 flex items-center justify-center p-4 bg-background hover:scale-110 transition">
                  <img
                    src={partner.logoSrc}
                    alt={`${partner.name} logo`}
                    className="h-full w-full object-cover opacity-90 hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .animate-scroll {
            --item-width: 11rem;
            --gap: 0rem;
            animation: scroll var(--duration) linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(
                calc(-1 * (var(--item-width) + var(--gap)) * var(--item-count))
              );
            }
          }

          @media (hover: hover) and (pointer: fine) {
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
