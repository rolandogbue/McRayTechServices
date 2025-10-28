import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle } from "lucide-react";

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden pt-4">
			<div className="absolute inset-0 bg-black/20"></div>
			<div className="relative z-10 container mx-auto px-6 text-center">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
						Scale Your Business with Our
						<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
							{" "}
							All-In-One
						</span>{" "}
						Growth Solution
					</h1>
					<p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed animate-fade-in">
						Stop juggling multiple vendors. We handle Branding, Web Development,
						SEO, Digital Marketing, Automation & Social Media - so you can focus
						on what matters most: converting leads to paid clients.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
						<Button
							size="lg"
							className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
						>
							Get Your Free Growth Audit
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full transition-all duration-300"
						>
							See How It Works
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
						<div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
							<CheckCircle className="text-green-400 w-6 h-6" />
							<span className="text-lg">Save 60% on Marketing Costs</span>
						</div>
						<div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
							<CheckCircle className="text-green-400 w-6 h-6" />
							<span className="text-lg">One Partner, All Solutions</span>
						</div>
						<div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
							<CheckCircle className="text-green-400 w-6 h-6" />
							<span className="text-lg">Weekly Performance Reports</span>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<ArrowDown className="w-8 h-8 text-white/70" />
			</div>
		</section>
	);
};

export default Hero;
