import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	TrendingUp,
	Clock,
	DollarSign,
	Users,
	Target,
	Shield,
} from "lucide-react";

const Benefits = () => {
	const benefits = [
		{
			icon: <DollarSign className="w-10 h-10" />,
			title: "Save 60% on Marketing Costs",
			description:
				"Eliminate the need for multiple agencies and reduce your marketing spend while getting better results.",
			metric: "Average savings: $5,000/month",
		},
		{
			icon: <Clock className="w-10 h-10" />,
			title: "Save 20+ Hours Per Week",
			description:
				"Focus on your core business while we handle all your marketing, branding, and growth activities.",
			metric: "Time saved: 80+ hours/month",
		},
		{
			icon: <TrendingUp className="w-10 h-10" />,
			title: "3x Faster Growth",
			description:
				"Our integrated approach delivers faster results than managing multiple disconnected services.",
			metric: "Average lead increase: 250%",
		},
		{
			icon: <Users className="w-10 h-10" />,
			title: "Dedicated Growth Team",
			description:
				"Get access to specialists in branding, development, marketing, and automation - all coordinated.",
			metric: "Your personal growth squad",
		},
		{
			icon: <Target className="w-10 h-10" />,
			title: "Conversion-Focused Strategy",
			description:
				"Every element is designed to turn prospects into paying customers, not just increase vanity metrics.",
			metric: "Average conversion lift: 180%",
		},
		{
			icon: <Shield className="w-10 h-10" />,
			title: "Risk-Free Partnership",
			description:
				"Transparent reporting, clear ROI tracking, and the peace of mind that comes with proven results.",
			metric: "100% transparency guarantee",
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
						Why Choose Us
					</Badge>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
						The Benefits of Our
						<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
							{" "}
							All-In-One Approach
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						When everything works together seamlessly, your business grows
						faster with less effort and lower costs.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => (
						<Card
							key={index}
							className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 overflow-hidden"
						>
							<CardContent className="p-8">
								<div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
									{benefit.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
									{benefit.title}
								</h3>
								<p className="text-gray-600 mb-4 leading-relaxed">
									{benefit.description}
								</p>
								<div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full">
									<span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
										{benefit.metric}
									</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="mt-28 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
					<div className="grid lg:grid-cols-2 gap-10 items-center justify-center">
						<div>
							<h3 className="text-3xl font-bold text-gray-900 mb-4">
								The Multi-Vendor Problem
							</h3>
							<div className="space-y-4 text-gray-600">
								<p>• Managing 5+ different vendors and contracts</p>
								<p>• Miscommunication between teams</p>
								<p>• Conflicting strategies and goals</p>
								<p>• Higher total costs and overhead</p>
								<p>• Slower project delivery</p>
							</div>
						</div>
						<div>
							<h3 className="text-3xl font-bold text-gray-900 mb-4">
								Our Solution
							</h3>
							<div className="space-y-4 text-gray-600">
								<p>• Single contract, single point of contact</p>
								<p>• Seamless team collaboration</p>
								<p>• Unified strategy across all channels</p>
								<p>• Cost-effective bundled pricing</p>
								<p>• Faster results with coordinated efforts</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
