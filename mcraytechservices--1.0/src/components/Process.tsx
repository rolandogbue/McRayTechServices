import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, FileText, Rocket, TrendingUp } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";

const Process = () => {
  const steps = [
    {
      step: "01",
      icon: <Phone className="w-7 h-7" />,
      title: "Discovery Call",
      description:
        "Free consultation to understand your goals, challenges, and opportunities.",
      details: [
        "30-minute call",
        "No obligation",
        "Needs assessment",
        "Q&A session",
      ],
    },
    {
      step: "02",
      icon: <FileText className="w-7 h-7" />,
      title: "Strategy & Proposal",
      description: "Custom roadmap tailored to your business needs and budget.",
      details: [
        "Detailed plan",
        "Clear pricing",
        "Timeline",
        "Expected outcomes",
      ],
    },
    {
      step: "03",
      icon: <Rocket className="w-7 h-7" />,
      title: "Build & Launch",
      description:
        "We create your brand, website, and marketing systems with regular updates.",
      details: [
        "Weekly updates",
        "Your feedback",
        "Quality checks",
        "Smooth launch",
      ],
    },
    {
      step: "04",
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Grow & Optimize",
      description:
        "Ongoing management, automation, and performance optimization.",
      details: [
        "Monthly reports",
        "Continuous improvement",
        "Support",
        "Strategy calls",
      ],
    },
  ];

  return (
    <section
      id="process"
      className="py-24 section-accent relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container mx-auto px-6 relative z-10 justify-center">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          >
            How It Works
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Simple Process,
            <span className="gradient-text"> Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We make working together easy. Here's how we'll help your business
            grow.
          </p>
        </FadeIn>

        {/* Process timeline */}
        <div className="relative">
          {/* Connection line - desktop with gradient animation */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-shift" />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={0.15}
          >
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <Card className="group relative bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-soft-xl hover:-translate-y-2 gradient-border">
                  {/* Step number indicator with pulse */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm z-10 shadow-glow group-hover:animate-pulse-scale">
                    {index + 1}
                  </div>

                  <CardContent className="p-8 pt-10 text-center">
                    <div className="text-5xl font-display font-bold text-muted/50 mb-4 transition-all duration-300 group-hover:text-primary/20">
                      {step.step}
                    </div>
                    <div className="w-14 h-14 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-glow">
                      {step.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center gap-2 justify-center group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full gradient-bg transition-transform duration-300 group-hover/item:scale-150" />
                          <span className="text-xs text-muted-foreground transition-colors duration-300 group-hover/item:text-foreground">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Process;
