import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import BookingModal from "./BookingModal";
import { CTAActionConfig } from "./ctaActions";
import { useCTAAction } from "@/config/useCTAAction";

const slides: Array<{
  badge: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  cta: CTAActionConfig;
  image: string;
  imageAlt: string;
}> = [
  {
    badge: "Your Growth Partner",
    headline: "Grow Your Business with",
    headlineHighlight: "One Trusted Partner",
    description:
      "We help small and medium businesses attract more customers, increase sales, and save time — all from a single trusted partner.",
    cta: {
      label: "Schedule Free Strategy Session",
      type: "BOOK_STRATEGY",
    },
    image: "./middle-aged-hispanic-business-people-web-optimized.jpg",
    imageAlt: "Professional team collaboration meeting",
  },
  {
    badge: "All-In-One Solution",
    headline: "Stop Managing",
    headlineHighlight: "Multiple Vendors",
    description:
      "Website, Branding, Marketing, and Automation — we handle everything while you focus on serving your clients.",
    cta: {
      label: "See Our Services",
      type: "SCROLL_SERVICES",
    },
    image: "./Multi-vendor-hassle.png",
    imageAlt: "Business owner overwhelmed with multiple vendors",
  },
  {
    badge: "Proven Results",
    headline: "More Customers. More Sales.",
    headlineHighlight: "Less Hassle.",
    description:
      "Our clients see measurable growth in leads, conversions, and revenue within 90 days. Let us do the same for you.",
    cta: {
      label: "View Success Stories",
      type: "SCROLL_TESTIMONIALS",
    },
    image: "./authentic-small-youthful-marketing-agency-web-optimized.jpg",
    imageAlt: "Happy team celebrating business success and growth",
  },
];

const stats = [
  { value: "100+", label: "SMBs Served" },
  { value: "4.9/5", label: "Client Rating" },
  { value: "3x", label: "Avg. Lead Growth" },
];

const Hero = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCTAAction = useCTAAction({
    openBookingModal: () => setBookingOpen(true),
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid opacity-50" />

        {/* Gradient orbs with enhanced animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />

        <div className="relative z-10 container mx-auto px-6 py-12 justify-center">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="text-left">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 hover:bg-primary/15 transition-colors duration-300">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {slide.badge}
                        </span>
                      </div>

                      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                        {slide.headline}
                        <span className="block gradient-text">
                          {slide.headlineHighlight}
                        </span>
                      </h1>

                      <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed max-w-xl">
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Button
                          size="lg"
                          className="gradient-bg text-primary-foreground px-8 py-6 text-lg rounded-xl hover:scale-105 hover:shadow-glow-lg animate-pulse-glow group btn-shine"
                          onClick={() => handleCTAAction(slide.cta.type)}
                        >
                          {slide.cta.label}
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                        {stats.map((stat, statIndex) => (
                          <div key={statIndex} className="group cursor-default">
                            <div className="font-display text-2xl md:text-3xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300 inline-block">
                              {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right image */}
                    <div className="relative hidden lg:block">
                      <div className="relative group">
                        <img
                          src={slide.image}
                          alt={slide.imageAlt}
                          className="rounded-3xl shadow-soft-xl border border-border/50 w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          lang="lazy"
                        />
                        {/* Floating card 1 */}
                        <div className="absolute -left-8 top-1/4 glass-premium p-4 rounded-2xl shadow-soft-lg animate-float hover:shadow-glow transition-shadow duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-glow">
                              <Check className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm">
                                Save Time
                              </div>
                              <div className="text-primary font-bold">
                                20+ hrs/week
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Floating card 2 */}
                        <div
                          className="absolute -right-4 bottom-1/4 glass-premium p-4 rounded-2xl shadow-soft-lg animate-float hover:shadow-glow-accent transition-shadow duration-300"
                          style={{ animationDelay: "-2s" }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-glow-accent">
                              <ArrowRight className="w-5 h-5 text-accent-foreground" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm">
                                Cost Reduction
                              </div>
                              <div className="text-accent font-bold">
                                Up to 40%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:border-primary hover:bg-primary/10 hover:scale-110"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === selectedIndex
                      ? "bg-primary w-8 shadow-glow"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:border-primary hover:bg-primary/10 hover:scale-110"
              onClick={scrollNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default Hero;
