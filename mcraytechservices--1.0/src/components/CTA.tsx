// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { CheckCircle, ArrowRight } from "lucide-react";
// import Calendly from "./Calendly";

// const CTA = () => {
// 	return (
// 		<section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
// 			<div className="container mx-auto px-6">
// 				<Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl pt-4">
// 					<CardContent className="p-12 text-center text-white">
// 						<h2 className="text-4xl md:text-5xl font-bold mb-6">
// 							Ready to Scale Your Business with
// 							<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
// 								{" "}
// 								One Powerful Partner?
// 							</span>
// 						</h2>
// 						<p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
// 							Let us handle everything for you, and start growing faster. Get a
// 							free business growth audit and discover how much time and money
// 							you could save with our all-in-one solution.
// 						</p>

// 						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
// 							<div className="flex items-center gap-3 justify-center">
// 								<CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
// 								<span className="text-lg">Free Growth Audit ($500 Value)</span>
// 							</div>
// 							<div className="flex items-center gap-3 justify-center">
// 								<CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
// 								<span className="text-lg">Custom Growth Strategy</span>
// 							</div>
// 							<div className="flex items-center gap-3 justify-center">
// 								<CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
// 								<span className="text-lg">No Long-Term Contracts</span>
// 							</div>
// 						</div>

// 						<div className="flex flex-col sm:flex-row gap-4 justify-center">
// 							<Button
// 								size="lg"
// 								className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
// 							>
// 								Get Your Free Growth Audit
// 								<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
// 							</Button>
// 							<Calendly
// 								size="lg"
// 								variant="primary"
// 								className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full transition-all duration-300"
// 								text="Schedule a Call"
// 							/>
// 						</div>

// 						<p className="text-sm text-blue-200 mt-6">
// 							Join 500+ businesses that chose growth over hassle • No spam,
// 							unsubscribe anytime
// 						</p>
// 					</CardContent>
// 				</Card>
// 			</div>
// 		</section>
// 	);
// };

// export default CTA;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import BookingModal from "./BookingModal";

const CTA = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const features = [
    "Free 30-Minute Strategy Session",
    "Custom Growth Roadmap",
    "No Long-Term Commitment",
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
                onClick={() => setBookingOpen(true)}
              >
                Schedule Your Free Strategy Call
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
