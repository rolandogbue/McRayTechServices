import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Palette,
	Globe,
	Search,
	Zap,
	Share2,
	BarChart,
	Code,
} from "lucide-react";

const Services = () => {
	const services = [
		{
			icon: <Palette className="w-8 h-8" />,
			title: "Brand Identity",
			description:
				"Give your business a memorable identity that stands out from competitors and builds trust with customers.",
			features: [
				"Logo Design",
				"Brand Guidelines",
				"Visual Identity",
				"Brand Strategy",
			],
		},
		{
			icon: <Globe className="w-8 h-8" />,
			title: "Website Development",
			description:
				"High-converting websites that turn visitors into customers, optimized for performance and user experience.",
			features: [
				"Responsive Design",
				"Fast Loading",
				"Mobile Optimized",
				"Conversion Focused",
			],
		},
		{
			icon: <Search className="w-8 h-8" />,
			title: "SEO & Digital Marketing",
			description:
				"Get found by your ideal customers and generate qualified leads through strategic digital marketing.",
			features: [
				"Local SEO",
				"Content Marketing",
				"PPC Campaigns",
				"Lead Generation",
			],
		},
		{
			icon: <Zap className="w-8 h-8" />,
			title: "Business Automation",
			description:
				"Streamline your operations with smart automation workflows that save time and reduce manual work.",
			features: [
				"CRM Setup",
				"Email Automation",
				"Lead Nurturing",
				"Process Optimization",
			],
		},
		{
			icon: <Share2 className="w-8 h-8" />,
			title: "Social Media Management",
			description:
				"Professional social media presence that engages your audience and drives business growth.",
			features: [
				"Content Creation",
				"Community Management",
				"Social Strategy",
				"Brand Awareness",
			],
		},
		{
			icon: <Code className="w-8 h-8" />,
			title: "Custom Software Development",
			description:
				"Tailored software solutions built to streamline operations, improve efficiency, and support your business workflows.",
			features: [
				"Fully Custom Applications",
				"API & System Integrations",
				"Cloud-Based Solutions",
				"Scalable Architecture",
			],
		},
	];

	return (
		<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
						Our Services
					</Badge>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
						Everything Your Business Needs to
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							{" "}
							Scale & Succeed
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Stop managing multiple vendors. Our comprehensive suite of services
						works together seamlessly to accelerate your business growth.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<Card
							key={index}
							className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
						>
							<CardHeader className="text-center pb-4">
								<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
									{service.icon}
								</div>
								<CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0">
								<CardDescription className="text-gray-600 mb-6 leading-relaxed">
									{service.description}
								</CardDescription>
								<div className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<div key={featureIndex} className="flex items-center gap-2">
											<div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
											<span className="text-sm text-gray-700">{feature}</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
