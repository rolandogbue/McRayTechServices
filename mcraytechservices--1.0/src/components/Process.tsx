import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Rocket, BarChart } from "lucide-react";
import Calendly from "@/components/Calendly";

const Process = () => {
	const steps = [
		{
			step: "01",
			icon: <Search className="w-8 h-8" />,
			title: "Analyze & Audit",
			description:
				"We conduct a comprehensive analysis of your current brand, website, and marketing efforts to identify opportunities.",
			details: [
				"Business analysis",
				"Competitor research",
				"Performance audit",
				"Growth opportunities",
			],
		},
		{
			step: "02",
			icon: <Lightbulb className="w-8 h-8" />,
			title: "Strategize & Plan",
			description:
				"Create a customized growth strategy that aligns with your business goals and target audience.",
			details: [
				"Custom strategy",
				"Timeline planning",
				"Resource allocation",
				"Success metrics",
			],
		},
		{
			step: "03",
			icon: <Rocket className="w-8 h-8" />,
			title: "Execute & Launch",
			description:
				"Implement all solutions with careful coordination across branding, web development, marketing, and automation.",
			details: [
				"Brand implementation",
				"Website development",
				"Marketing campaigns",
				"Automation setup",
			],
		},
		{
			step: "04",
			icon: <BarChart className="w-8 h-8" />,
			title: "Monitor & Optimize",
			description:
				"Continuously track performance and optimize all elements for maximum ROI and business growth.",
			details: [
				"Performance tracking",
				"A/B testing",
				"Continuous optimization",
				"Regular reporting",
			],
		},
	];

	return (
		<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
						Our Process
					</Badge>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
						How We Scale Your
						<span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
							{" "}
							Business Growth
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Our proven 4-step process ensures every aspect of your growth
						strategy works together seamlessly.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{steps.map((step, index) => (
						<Card
							key={index}
							className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden"
						>
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
							<CardContent className="p-8 text-center">
								<div className="text-6xl font-bold text-gray-100 mb-4 group-hover:text-gray-200 transition-colors">
									{step.step}
								</div>
								<div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
									{step.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
									{step.title}
								</h3>
								<p className="text-gray-600 mb-6 leading-relaxed">
									{step.description}
								</p>
								<div className="space-y-2">
									{step.details.map((detail, detailIndex) => (
										<div
											key={detailIndex}
											className="flex items-center gap-2 justify-center"
										>
											<div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
											<span className="text-sm text-gray-700">{detail}</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
			{/* <CTA /> */}
			<div className="mt-16 text-center">
				<div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
					<h3 className="text-2xl font-bold text-gray-900 mb-4">
						Ready to Get Started?
					</h3>
					<p className="text-gray-600 mb-6">
						Let's discuss your project and see how we can help you grow
					</p>
					<Calendly
						className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
						text="Schedule Free Consultation"
					/>
				</div>
			</div>
		</section>
	);
};

export default Process;
