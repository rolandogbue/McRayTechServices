import { Award, Users, Rocket, Heart } from "lucide-react";

const About = () => {
	const stats = [
		{ number: "100+", label: "Happy Clients" },
		{ number: "200+", label: "Projects Completed" },
		{ number: "10+", label: "Team Members" },
		{ number: "3", label: "Years Experience" },
	];

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							About Our Agency
						</h2>
						<p className="text-lg text-gray-600 mb-6 leading-relaxed">
							We started with a simple mission: empower businesses with
							integrated, efficient, and scalable solutions that eliminate the
							frustration businesses face when managing multiple vendors for
							their digital needs. Too many great businesses struggle with
							coordinating between developers, marketers, SEO specialists, and
							social media managers.
						</p>
						<p className="text-lg text-gray-600 mb-8 leading-relaxed">
							Our integrated approach means your website, marketing campaigns,
							SEO strategy, and automation tools all work together seamlessly.
							This isn't just about convenience - it's about getting better
							results faster.
						</p>

						<div className="grid grid-cols-2 gap-6">
							{stats.map((stat, index) => (
								<div key={index} className="text-center">
									<div className="text-3xl font-bold text-blue-600">
										{stat.number}
									</div>
									<div className="text-gray-600">{stat.label}</div>
								</div>
							))}
						</div>
					</div>

					<div className="space-y-6">
						<div className="flex items-start space-x-4">
							<div className="p-3 bg-blue-100 rounded-lg">
								<Award className="h-6 w-6 text-blue-600" />
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Expert Team
								</h3>
								<p className="text-gray-600">
									Certified professionals in development, marketing, and
									automation working as one cohesive unit.
								</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="p-3 bg-green-100 rounded-lg">
								<Rocket className="h-6 w-6 text-green-600" />
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Results-Driven
								</h3>
								<p className="text-gray-600">
									We focus on metrics that matter - lead generation,
									conversions, and business growth.
								</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="p-3 bg-purple-100 rounded-lg">
								<Heart className="h-6 w-6 text-purple-600" />
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Client-Focused
								</h3>
								<p className="text-gray-600">
									Your success is our success. We become an extension of your
									team, not just another vendor.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
