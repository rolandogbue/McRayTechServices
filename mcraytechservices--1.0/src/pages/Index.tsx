import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
// import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";
import About from "@/components/About";

const Index = () => {
	const { title, description, keywords } = SEO_CONFIG.home;

	return (
		<div className="min-h-screen">
			<SEO title={title} description={description} keywords={keywords} />
			<Header />
			<Hero />
			<div id="services">
				<Services />
			</div>
			<div id="process">
				<Process />
			</div>
			<div id="benefits">
				<Benefits />
			</div>
			<div id="about">
				<About />
			</div>
			<CTA />
			<Footer />
		</div>
	);
};

export default Index;
