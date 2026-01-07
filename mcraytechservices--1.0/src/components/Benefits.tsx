import { Badge } from "@/components/ui/badge";
import {
  Clock,
  DollarSign,
  User,
  Rocket,
  Headphones,
  BarChart3,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Time",
      description:
        "Stop juggling multiple vendors and tools. We handle everything in one place so you can focus on your clients.",
      stat: "20+ hrs",
      statLabel: "Saved Weekly",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Reduce Costs",
      description:
        "Get agency-quality work without the agency price tag. One partner means fewer overhead costs.",
      stat: "Up to 40%",
      statLabel: "Cost Savings",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Single Partner",
      description:
        "No more coordination headaches. One team, one vision, one solution for all your digital needs.",
      stat: "1",
      statLabel: "Point of Contact",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Faster Results",
      description:
        "See measurable growth in leads and sales within your first quarter working with us.",
      stat: "90 Days",
      statLabel: "To See Results",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Expert Support",
      description:
        "Get IT consulting and strategic guidance at no extra cost. We're invested in your success.",
      stat: "Free",
      statLabel: "Consulting",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Full Transparency",
      description:
        "Know exactly how your marketing and systems are performing with regular reports and updates.",
      stat: "Weekly",
      statLabel: "Reports",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-24 section-primary relative overflow-hidden"
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
              Why Choose Us
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Your Business Deserves
              <span className="gradient-text"> Better Support</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Instead of working with multiple vendors, get a single trusted
              partner who ensures your business runs smoothly while you focus on
              serving your clients.
            </p>

            {/* Feature image */}
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Team working together on business growth"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
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
                      Join 100+ Growing Businesses
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Who trust us with their growth
                    </div>
                  </div>
                </div>
              </div>
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
