import { Badge } from "@/components/ui/badge";
import {
  Target,
  Cpu,
  Layers,
  ShieldCheck,
  Headphones,
  LineChart,
  User,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";

const Benefits = () => {
  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Outcome-Focused, Not Task-Focused",
      description:
        "We measure our success by your results — leads generated, revenue growth, time saved — not by deliverables checked off a list.",
      stat: "3× Faster",
      statLabel: "Time to Results",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered & Cloud-Efficient",
      description:
        "We embed intelligent, cloud-based automation into everything we build — so your business runs leaner, faster, and with less operational overhead.",
      stat: "40% Lower",
      statLabel: "Operating Costs",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modular & Recession-Resilient",
      description:
        "Our plans flex with your business. Scale up in good times, right-size in tough ones — without losing momentum or starting over.",
      stat: "100%",
      statLabel: "Flexible Systems",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "One Partner, Full Accountability",
      description:
        "No vendor fragmentation. No finger-pointing. One team owns your strategy, execution, and results — from day one through every stage of growth.",
      stat: "1",
      statLabel: "Accountable Partner",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Embedded Expertise",
      description:
        "Strategic guidance and technical execution are built into your system — ensuring every decision, campaign, and workflow is aligned with growth, not guesswork.",
      stat: "Always-On",
      statLabel: "Expert Oversight",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Operational Clarity",
      description:
        "Every system, campaign, and performance metric is visible and measurable — giving you full confidence in what’s working, what’s not, and where to scale.",
      stat: "End-to-End",
      statLabel: "Visibility",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-32 section-primary relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
          alt="Professional business consultation"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              WHY MCRAY TECH SERVICES
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              One partner. Total accountability.
              <span className="gradient-text"> Real results.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Most agencies are great at one thing. We're built to make all the
              pieces work together — because growth requires your marketing,
              technology, and operations to move in sync.
            </p>

            {/* Feature image */}
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl group">
              <img
                src="./business-meeting-cafe-web-optimized.jpg"
                alt="Team working together on business growth"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:z-10"
                      >
                        <User className="w-5 h-5 text-primary" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Join Nigerian Growing Businesses
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Who trust us with their growth
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 flex justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-primary text-primary-foreground rounded-xl shadow-soft-md hover:shadow-glow hover:scale-105 transition-all duration-300 min-w-[250px]"
              >
                Talk To Our Team
              </a>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid sm:grid-cols-2 gap-6"
            staggerDelay={0.1}
          >
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1 gradient-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow group-hover:rotate-3">
                    {benefit.icon}
                  </div>
                  <div className="font-display text-2xl font-bold gradient-text mb-1 transition-transform duration-300 group-hover:scale-105 inline-block">
                    {benefit.stat}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    {benefit.statLabel}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
