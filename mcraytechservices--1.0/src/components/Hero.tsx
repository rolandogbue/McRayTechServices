import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import BookingModal from "@/components/BookingModal";
import { CTAActionConfig } from "@/config/ctaActions";
import { useCTAAction } from "@/config/useCTAAction";
import { useNavigate } from "react-router-dom";

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
    badge: "THE GROWTH PARTNER BUILT FOR BUSINESSES THAT BUILD TO LAST",
    headline: "Your business. Built to grow.",
    headlineHighlight: "Built to last.",
    description:
      "McRay Tech Services is the AI-powered growth partner for forward-thinking SMBs — combining digital marketing, automation, and cloud technology into one modular system. One trusted partner. Measurable results.",
    cta: {
      label: "Book a Free Strategy Call",
      type: "BOOK_STRATEGY",
    },
    image: "./middle-aged-hispanic-business-people-web-optimized.jpg",
    imageAlt: "Professional team collaboration meeting",
    stats: [
      { value: "1", label: "PARTNER FOR EVERYTHING" },
      { value: "3x", label: "FASTER THAN HIRING" },
      { value: "∞", label: "SCALABLE WITH YOU" },
    ],
  },
  {
    badge: "THE PROBLEM WITH MULTIPLE VENDORS.",
    headline: "One system. One team",
    headlineHighlight: "One result.",
    description:
      "Most businesses waste time and money juggling a web agency here, a marketing freelancer there, and an IT person somewhere else — with nobody accountable for the full picture. McRay replaces all of it.",
    cta: {
      label: "See How It Works",
      type: "SCROLL_PROCESS",
    },
    image: "./Multi-vendor-hassle.png",
    imageAlt: "Business owner overwhelmed with multiple vendors",
    stats: [
      { value: "5+", label: "TOOLS REPLACED" },
      { value: "0", label: "VENDOR CHAOS" },
      { value: "100%", label: "ACCOUNTABILITY" },
    ],
  },
  {
    badge: "WHAT OUR CLIENTS EXPERIENCE",
    headline: "More customers. More revenue.",
    headlineHighlight: "Less friction.",
    description:
      "Our partners see measurable growth in leads, conversions, and revenue within 90 days — without overhead of hiring, the confusion of multiple vendors, or the risk of starting over.",
    cta: {
      label: "View Success Stories",
      type: "SCROLL_TESTIMONIALS",
    },
    image: "./authentic-small-youthful-marketing-agency-web-optimized.jpg",
    imageAlt: "Happy team celebrating business success and growth",
    stats: [
      { value: "90 Days", label: "TO SEE RESULTS" },
      { value: "2–5x", label: "LEAD GROWTH" },
      { value: "+ROI", label: "MEASURABLE IMPACT" },
    ],
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCTAAction = useCTAAction({
    openBookingModal: () => navigate("/book"),
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

  // Auto-advance every 15 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 15000);
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
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="text-left">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 hover:bg-primary/15 transition-colors duration-300">
                        <span className="text-primary"> &mdash;</span>
                        <span className="text-sm font-medium text-primary">
                          {slide.badge}
                        </span>
                      </div>

                      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                        {slide.headline}
                        <span className="block gradient-text mt-5">
                          {slide.headlineHighlight}
                        </span>
                      </h1>

                      <p
                        className={`text-lg md:text-xl ${index === 1 ? "mb-4" : "mb-8"} text-muted-foreground leading-relaxed max-w-xl`}
                      >
                        {slide.description}
                      </p>

                      {/* Supporting detail for slide 2 */}
                      {index === 1 && (
                        <div className="mb-8 space-y-2 max-w-xl">
                          <div className="flex items-center gap-2 text-destructive/80">
                            <span className="font-bold text-lg"> ✗</span>
                            <span className="text-sm text-muted-foreground">
                              Web agency + marketing freelancer + IT person
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-primary">
                            <span className="font-bold text-lg"> ✓</span>
                            <span className="text-sm font-medium">
                              McRay — one modular, AI-powered system for
                              everything
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Proof badge for slide 3 */}
                      {index === 2 && (
                        <div className="mb-6 max-w-xl">
                          <div className="inline-flex items-start gap-3 px-4 py-3 rounded-xl bg-primary/5 border border-primary/15">
                            <span className="text-lg mt-0.5">💬</span>
                            <div>
                              <p className="text-sm text-foreground font-medium italic">
                                "₦6M in sales from one Google contact — without
                                a single meeting."
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                — Building Materials Client, Abuja
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

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
                        {slide.stats.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className="group cursor-default text-center"
                          >
                            <div className="font-display text-3xl md:text-3xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300 inline-block">
                              {slide.stats[statIndex].value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {slide.stats[statIndex].label}
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
    </>
  );
};

export default Hero;
