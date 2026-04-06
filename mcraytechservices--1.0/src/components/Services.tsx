import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Search,
  Megaphone,
  Bot,
  Share2,
  Code,
  Headphones,
  RefreshCw,
} from "lucide-react";

import {
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from "@/components/ScrollAnimations";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Website Development & Branding",
      description:
        "Lean, fast, high-converting websites built on reliable cloud infrastructure. A brand identity that earns trust, and reflects your values.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Megaphone className="w-7 h-7" />,
      title: "Digital Marketing",
      description:
        "Targeted SEO, ethical ad campaigns, and content strategies that attract the right customers without wasteful spend or spray-and-pray tactics.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Bot className="w-7 h-7" />,
      title: "AI-powered Automation",
      description:
        "Cloud-based, low-energy automations that eliminate manual work across follow-ups, scheduling, and reporting — saving time and reducing your operational footprint.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Custom Software Solutions",
      description:
        "Modular, purpose-built software designed to fit your operations exactly — scalable as you grow, without the bloat of tools you'll never use.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <Headphones className="w-7 h-7" />,
      title: "IT Consulting",
      description:
        "Strategic guidance on tools, cloud migration, and infrastructure — with an eye on efficiency, resilience, and long-term cost reduction.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: "Ongoing Partnership",
      description:
        "We grow with you. As your business evolves — through market shifts, recessions, or technology changes — your systems adapt without starting over.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFydG5lcnNoaXB8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <section
      id="services"
      className="py-32 section-primary relative overflow-hidden"
    >
      <div className="container mx-auto px-6 justify-center">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          >
            WHAT WE DO
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Modular by design.
            <span className="gradient-text"> Sustainable by default.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every capability we offer is cloud-based, energy-efficient, and
            built to scale with you — not against you. Start with what you need
            today. Add more as you grow. Nothing wasted, nothing redundant.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-soft-xl hover:-translate-y-2 bg-card gradient-border h-full">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-lg group-hover:rotate-3">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;
