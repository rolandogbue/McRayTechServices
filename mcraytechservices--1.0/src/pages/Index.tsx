import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import DiscountPopup from "@/components/DiscountPopup";
import ScrollToTop from "@/components/ScrollToTop";
import { AnimatedSection } from "@/components/ScrollAnimations";
import ConsentBanner from "../pages/ConsentBanner";

const Index = () => {
  const { title, description, keywords, robots } = SEO_CONFIG.home;

  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        robots={robots}
      />
      <Header />
      <Hero />
      <AnimatedSection>
        <Partners />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <Process />
      </AnimatedSection>
      <AnimatedSection>
        <Benefits />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
      <Footer />
      <DiscountPopup />
      <ScrollToTop />
      <ConsentBanner />
    </div>
  );
};

export default Index;
