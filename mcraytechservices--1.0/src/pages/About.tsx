import { Award, Rocket, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";

const About = () => {
	const { title, description, keywords } = SEO_CONFIG.about;

	const stats = [
		{ number: "100+", label: "Happy Clients" },
		{ number: "200+", label: "Projects Completed" },
		{ number: "10+", label: "Team Members" },
		{ number: "3", label: "Years Experience" },
	];

	return (
		<div className="min-h-screen">
			<SEO title={title} description={description} keywords={keywords} />
			<Header />

			{/* About Section */}
			<section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
							About
							<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
								{" "}
								McRay Tech Services
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
							Learn about our mission, values, and how our team delivers
							technology solutions to help small businesses grow efficiently and
							achieve measurable results.
						</p>
					</div>
				</div>
			</section>

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

			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Our Core Values
						</h2>
						<p className="text-lg text-gray-600 leading-relaxed">
							These are the principles that guide every project we take on and
							every client relationship we build.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-12">
						<div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-xl font-semibold text-blue-600 mb-3">
								Excellence
							</h3>
							<p className="text-gray-600">
								We deliver top-quality services tailored to each client's unique
								needs.
							</p>
						</div>

						<div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-xl font-semibold text-green-600 mb-3">
								Integrity
							</h3>
							<p className="text-gray-600">
								We operate with transparency and honesty, building trust with
								every client.
							</p>
						</div>

						<div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-xl font-semibold text-purple-600 mb-3">
								Innovation
							</h3>
							<p className="text-gray-600">
								We stay ahead of industry trends to offer cutting-edge
								solutions.
							</p>
						</div>

						<div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-xl font-semibold text-pink-600 mb-3">
								Customer-Centric
							</h3>
							<p className="text-gray-600">
								We prioritize our clients' success, focusing on long-term
								partnerships and measurable results.
							</p>
						</div>

						<div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-xl font-semibold text-yellow-600 mb-3">
								Efficiency
							</h3>
							<p className="text-gray-600">
								We simplify business operations, helping clients save time and
								resources.
							</p>
						</div>
						<div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-xl font-semibold text-teal-600 mb-3">
								Collaboration
							</h3>
							<p className="text-gray-600">
								We work closely with clients and partners to create solutions
								that drive mutual success.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default About;
