import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ScrollAnimations";

const CTA = () => {
  const navigate = useNavigate();

  const features = [
    "Free 30-Minute Strategy Call",
    "Custom Growth Roadmap",
    "No Obligation, No Pressure",
  ];

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        {/* Background with gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent bg-[length:200%_200%] animate-gradient-shift" />
        <div className="absolute inset-0 tech-grid opacity-10" />

        {/* Decorative elements with enhanced animation */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-5s" }}
        />

        <FadeIn className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              GET STARTED
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground">
              Ready to build a business that grows and lasts?
            </h2>
            <p className="text-xl mb-10 text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Book a free 30-minute strategy call. We'll map your current
              position, identify your biggest growth opportunities, and
              recommend the right modular plan — no pressure, no obligation.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-primary-foreground/90 group transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg rounded-xl hover:scale-105 hover:shadow-soft-xl group btn-shine"
                onClick={() => navigate("/book")}
              >
                Book Your Free Strategy Call
              </Button>
              <Button
                size="lg"
                className="bg-primary/10 text-primary-foreground hover:bg-primary/20 px-8 py-6 text-lg rounded-xl hover:scale-105 hover:shadow-soft-xl group btn-shine"
                onClick={() => navigate("services")}
                variant="outline"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default CTA;
