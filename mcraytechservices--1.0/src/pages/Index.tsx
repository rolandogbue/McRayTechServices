import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";
// import About from "@/components/About";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import DiscountPopup from "@/components/DiscountPopup";

const Index = () => {
	const { title, description, keywords } = SEO_CONFIG.home;

	return (
		<div className="min-h-screen">
			<SEO title={title} description={description} keywords={keywords} />
			<Header />
			<Hero />
			<Partners />
			<Services />
			<Process />
			<Benefits />
			<Testimonials />
			{/* <div id="about">
				<About />
			</div> */}
			<CTA />
			<Footer />
			<DiscountPopup />
		</div>
	);
};

export default Index;
