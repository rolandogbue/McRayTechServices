import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Handshake, Sprout } from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from "@/components/ScrollAnimations";

const FrameWork = () => {
  const trippleBottomLine = [
    {
      icon: <Coins className="w-7 h-7" />,
      title: "Profit",
      description:
        "More leads, more revenue, less wasted spend. Every system we build is designed to generate a measurable return — not just activity. Your growth is how we measure our own success.",
    },
    {
      icon: <Handshake className="w-7 h-7" />,
      title: "People",
      description:
        "Automation that frees your team from drudge work. Clearer systems that reduce stress. Technology that empowers your staff rather than replacing them. We build for humans first.",
    },
    {
      icon: <Sprout className="w-7 h-7" />,
      title: "Planet",
      description:
        "Cloud-based infrastructure that eliminates on-premise energy waste. Low-footprint automations. Lean digital systems built to do more with less — and scale without unnecessary overhead.",
    },
  ];

  return (
    <section id="framework" className="py-32 section-muted">
      <div className="container mx-auto px-6 justify-center">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          >
            OUR FRAMEWORK
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Growth that's good for your business, <br />
            <span className="gradient-text"> your people, and the planet.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We build every engagement around the Triple Bottom Line — because
            businesses that think beyond profit are the ones that outlast market
            shifts, attract loyal customers, and build something worth keeping.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trippleBottomLine.map((tbl, index) => (
            <StaggerItem key={index}>
              <Card className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1 gradient-border h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow group-hover:rotate-3">
                  {tbl.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {tbl.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tbl.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12 border-solid border-2 border-primary/20 rounded-2xl p-8 bg-background">
            {/* Text Content */}
            <div className="flex flex-col justify-center w-full md:w-2/3 text-left">
              <h3 className="font-bold text-xl mb-4">Built for resilience</h3>
              <p className="text-lg text-muted-foreground">
                Our modular system means you're never locked in, never
                over-committed, and never caught off guard by a market shift or
                technology change. Start with what you need. Scale when you're
                ready.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex items-center justify-center w-full md:w-auto">
              <a
                href="#plans"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                See Our Plans
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FrameWork;
