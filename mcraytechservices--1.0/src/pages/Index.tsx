import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
	return (
		<div className="min-h-screen">
			<Header />
			<Hero />
			<div id="services">
				<Services />
			</div>
			<div id="benefits">
				<Benefits />
			</div>
			<div id="process">
				<Process />
			</div>
			<div id="faq">
				<FAQ />
			</div>
			<CTA />
			<Footer />
		</div>
	);
};

export default Index;
