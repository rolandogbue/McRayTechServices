import { Award, Rocket, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";
import Team from "@/config/team";

const About = () => {
	const { title, description, keywords } = SEO_CONFIG.about;

	const stats = [
		{ number: "100%", label: "Happy Clients" },
		{ number: "200+", label: "Projects Completed" },
		{ number: "10+", label: "Team Members" },
		{ number: "3+", label: "Years Experience" },
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

			{/* Vision  */}
			<section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
				{/* Decorative Rings */}
				<div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>

				<div className="container mx-auto px-6 relative z-10">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
							Our Vision for the Future
						</h2>
						<p className="text-lg md:text-xl text-blue-200 leading-relaxed">
							At McRay Tech Services, our vision is to redefine how small
							businesses leverage technology — transforming complex digital
							challenges into streamlined, automated, growth-driven solutions
							that feel effortless.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-12 mt-16">
						<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 text-center">
							<Rocket className="w-12 h-12 mx-auto text-cyan-300 mb-4" />
							<h3 className="text-2xl font-semibold mb-3">
								Innovation at the Core
							</h3>
							<p className="text-blue-200">
								We envision a world where every local business thrives with
								access to enterprise-level tools, automation, and creativity.
							</p>
						</div>

						<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 text-center">
							<Award className="w-12 h-12 mx-auto text-yellow-300 mb-4" />
							<h3 className="text-2xl font-semibold mb-3">Empowering Growth</h3>
							<p className="text-blue-200">
								We aim to become the go-to partner for business transformation —
								helping companies grow smarter, faster, and more efficiently.
							</p>
						</div>

						<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 text-center">
							<Heart className="w-12 h-12 mx-auto text-pink-300 mb-4" />
							<h3 className="text-2xl font-semibold mb-3">
								Human-Centered Impact
							</h3>
							<p className="text-blue-200">
								Our vision is built on connection — creating meaningful,
								supportive, long-term relationships with every business we
								serve.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Core values */}
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

			{/* Timeline  */}
			{/* <section className="py-24 bg-white">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Our Journey
						</h2>
						<p className="text-lg text-gray-600 leading-relaxed">
							From a small idea to a full digital transformation agency — here’s
							how we got here.
						</p>
					</div>

					<div className="relative border-l-4 border-blue-600 ml-6 space-y-10">
						{[
							{
								year: "2022",
								title: "The Beginning",
								text: "McRay Tech Services was founded with a simple mission: simplify technology for small businesses.",
							},
							{
								year: "2023",
								title: "Expanding Services",
								text: "We added automation, SEO, and integrated marketing services to provide unified solutions.",
							},
							{
								year: "2024",
								title: "Team Growth",
								text: "Our team expanded to include experts across development, marketing, and operations.",
							},
							{
								year: "2025",
								title: "Scaling Impact",
								text: "We achieved 200+ completed projects and supported businesses across multiple industries.",
							},
						].map((item, i) => (
							<div key={i} className="ml-6">
								<div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
								<h3 className="text-2xl font-semibold text-gray-900 mb-2">
									{item.year}
								</h3>
								<h4 className="text-xl font-medium text-blue-600 mb-1">
									{item.title}
								</h4>
								<p className="text-gray-600">{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section> */}

			{/* Team Showcase  */}
			{/* <section className="py-24 bg-gray-50">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Meet the Team
						</h2>
						<p className="text-lg text-gray-600 leading-relaxed">
							A group of creative strategists, developers, and innovators
							committed to your success.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-12">
						{Team.map((member, i) => (
							<div
								key={i}
								className="bg-white p-8 shadow-md rounded-2xl text-center hover:shadow-xl transition-shadow duration-300 relative"
							>
								<div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 bg-gray-200">
									{member.image ? (
										<img
											src={member.image}
											alt={member.name}
											className="w-full h-full object-cover"
										/>
									) : (
										<div className="flex items-center justify-center h-full text-gray-400 text-sm">
											No Photo
										</div>
									)}
								</div>

								<h3 className="text-xl font-semibold text-gray-900 mb-1">
									{member.name}
								</h3>
								<p className="text-blue-600 mb-2">{member.role}</p>
								<p className="text-gray-600">{member.bio}</p>
							</div>
						))}
					</div>
				</div>
			</section> */}

			<Footer />
		</div>
	);
};

export default About;
