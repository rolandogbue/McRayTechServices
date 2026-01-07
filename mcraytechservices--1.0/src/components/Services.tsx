import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Palette,
  Search,
  TrendingUp,
  Zap,
  Share2,
  Code,
  Headphones,
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
      title: "Website Development",
      description:
        "Custom, conversion-focused websites that work 24/7 to attract customers and generate leads.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      features: [
        "Responsive Design",
        "Fast Loading",
        "Lead Capture",
        "Easy CMS",
      ],
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Branding & Identity",
      description:
        "Professional brand identity that builds trust and recognition with your target audience.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Assets",
        "Messaging",
      ],
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: "SEO & Web Performance",
      description:
        "Get found by customers actively searching for your services with optimized content and technical SEO.",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80",
      features: ["On-Page SEO", "Local SEO", "Technical Audit", "Rankings"],
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Digital Marketing",
      description:
        "Targeted campaigns that turn prospects into paying clients across all digital channels.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=400&q=80",
      features: ["Google Ads", "Social Ads", "Email Marketing", "Retargeting"],
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Automation",
      description:
        "Streamline operations and save hours every week with smart automation and workflow tools.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      features: [
        "CRM Setup",
        "Email Automation",
        "Workflow Tools",
        "Integrations",
      ],
    },
    {
      icon: <Share2 className="w-7 h-7" />,
      title: "Social Media Management",
      description:
        "Consistent, engaging presence that builds your audience and drives traffic to your business.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80",
      features: [
        "Content Creation",
        "Posting Schedule",
        "Community Mgmt",
        "Analytics",
      ],
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Custom Software Solutions",
      description:
        "Tailored applications and tools built specifically for your unique business needs.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      features: ["Web Apps", "Integrations", "Dashboards", "APIs"],
    },
    {
      icon: <Headphones className="w-7 h-7" />,
      title: "Free IT Consulting",
      description:
        "Expert technology guidance and strategic advice at no extra cost — we're your partner.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80",
      features: [
        "Tech Strategy",
        "Tool Selection",
        "Best Practices",
        "Support",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 section-muted">
      <div className="container mx-auto px-6 justify-center">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          >
            Our Services
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="gradient-text"> Grow Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop juggling multiple vendors. Get website, marketing, automation,
            and support from one trusted partner.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
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
