import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Calendly from "./Calendly";

const CTA = () => {
	return (
		<section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
			<div className="container mx-auto px-6">
				<Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl pt-4">
					<CardContent className="p-12 text-center text-white">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Ready to Scale Your Business with
							<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
								{" "}
								One Powerful Partner?
							</span>
						</h2>
						<p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
							Let us handle everything for you, and start growing faster. Get a
							free business growth audit and discover how much time and money
							you could save with our all-in-one solution.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
							<div className="flex items-center gap-3 justify-center">
								<CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
								<span className="text-lg">Free Growth Audit ($500 Value)</span>
							</div>
							<div className="flex items-center gap-3 justify-center">
								<CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
								<span className="text-lg">Custom Growth Strategy</span>
							</div>
							<div className="flex items-center gap-3 justify-center">
								<CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
								<span className="text-lg">No Long-Term Contracts</span>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
							>
								Get Your Free Growth Audit
								<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Button>
							<Calendly
								size="lg"
								// variant="ghost"
								className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full transition-all duration-300"
								text="Schedule a Call"
							/>
						</div>

						<p className="text-sm text-blue-200 mt-6">
							Join 500+ businesses that chose growth over hassle • No spam,
							unsubscribe anytime
						</p>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default CTA;
