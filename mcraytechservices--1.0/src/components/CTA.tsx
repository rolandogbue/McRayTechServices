import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import BookingModal from "./BookingModal";
import { useCTAAction } from "@/config/useCTAAction";

const CTA = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const features = [
    "Free 30-Minute Strategy Session",
    "Custom Growth Roadmap",
    "No Long-Term Commitment",
  ];

  const primaryCTA = {
    label: "Schedule Free Strategy Session",
    type: "BOOK_STRATEGY",
  };

  const handleCTAAction = useCTAAction({
    openBookingModal: () => setBookingOpen(true),
  });

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

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground">
              Ready to Grow Your
              <span className="block text-primary-foreground/90">
                Business?
              </span>
            </h2>
            <p className="text-xl mb-10 text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how we can help you attract more customers, save
              time, and grow your revenue — all from one trusted partner.
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
                onClick={() => handleCTAAction(primaryCTA.type)}
              >
                {primaryCTA.label}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/60 mt-8 transition-opacity duration-300 hover:text-primary-foreground/80">
              Trusted by 100+ small and medium businesses • Free IT Consulting
              included
            </p>
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default CTA;
