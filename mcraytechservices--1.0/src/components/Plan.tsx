import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from "@/components/ScrollAnimations";

const Plan = () => {
  const pricingPlans = [
    {
      tier: "Tier 01",
      name: "Foundation",
      description:
        "For businesses establishing their digital presence and getting the fundamentals right.",
      features: [
        "Professional website design & development",
        "Brand identity & messaging",
        "Basic SEO & local visibility",
        "Google Business Profile setup",
        "Monthly performance reporting",
        "IT consulting (2 hrs/month)",
      ],
      cta: "Start with Foundation",
      highlighted: false,
    },
    {
      tier: "Tier 02",
      name: "Accelerator",
      description:
        "For growing businesses ready to generate consistent leads and automate their operations.",
      features: [
        "Everything in Foundation",
        "Digital marketing campaigns (SEO + Ads)",
        "Email & social media marketing",
        "AI-powered lead follow-up automation",
        "CRM setup & workflow automation",
        "Bi-weekly strategy reviews",
        "IT consulting (4 hrs/month)",
      ],
      cta: "Start with Accelerator",
      highlighted: true,
      badge: "MOST POPULAR",
    },
    {
      tier: "Tier 03",
      name: "Partner",
      description:
        "For established businesses that want a dedicated growth partner managing their entire digital operation.",
      features: [
        "Everything in Accelerator",
        "Custom software development",
        "Advanced automation & AI integrations",
        "Full-stack digital marketing management",
        "Dedicated account strategist",
        "Weekly check-ins & priority support",
        "Unlimited IT consulting",
      ],
      cta: "Start with Partner",
      highlighted: false,
    },
  ];

  return (
    <section className="py-32 section-primary" id="plans">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary"
          >
            PARTNERSHIP PLANS
          </Badge>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Simple, transparent pricing.
            <br />
            <span className="gradient-text">
              Built for businesses that are ready to grow.
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every plan is a retainer — not a one-off project. We're invested in
            your long-term growth.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {pricingPlans.map((plan, index) => (
            <StaggerItem key={index}>
              <Card
                className={`relative h-full transition-all duration-500 hover:-translate-y-2
                ${
                  plan.highlighted
                    ? "bg-[#0B1F3A] text-white border-none shadow-2xl scale-105"
                    : "bg-card border-border hover:border-primary/40"
                }`}
              >
                {/* MOST POPULAR BADGE */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs px-4 py-1 rounded-full font-semibold shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <CardContent className="p-8 flex flex-col h-full">
                  {/* Tier */}
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    {plan.tier}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold mb-3">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm mb-6 leading-relaxed opacity-80">
                    {plan.description}
                  </p>

                  <div className="border-t border-border/40 mb-6" />

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm opacity-90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className={`mt-auto w-full py-3 rounded-md text-sm font-semibold transition-all
                    ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "border border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Plan;
