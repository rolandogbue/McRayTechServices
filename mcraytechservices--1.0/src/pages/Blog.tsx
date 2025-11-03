import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";

const blogPosts = [
	{
		id: 1,
		title: "5 Signs Your Business Needs Professional Branding",
		excerpt:
			"Discover the key indicators that show when it's time to invest in professional branding services to elevate your business presence.",
		category: "Branding",
		readTime: "5 min read",
		date: "Dec 15, 2024",
		image:
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
		featured: true,
	},
	{
		id: 2,
		title: "The ROI of Marketing Automation for SMBs",
		excerpt:
			"Learn how small and medium businesses can achieve 451% ROI through strategic marketing automation implementation.",
		category: "Automation",
		readTime: "7 min read",
		date: "Dec 12, 2024",
		image:
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
	},
	{
		id: 3,
		title: "SEO Strategies That Actually Work in 2024",
		excerpt:
			"Cut through the noise with proven SEO tactics that drive real traffic and conversions for growing businesses.",
		category: "SEO",
		readTime: "6 min read",
		date: "Dec 10, 2024",
		image:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
	},
	{
		id: 4,
		title: "Social Media Management: Quality vs Quantity",
		excerpt:
			"Why posting less but with higher quality content delivers better results for business social media accounts.",
		category: "Social Media",
		readTime: "4 min read",
		date: "Dec 8, 2024",
		image:
			"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
	},
	{
		id: 5,
		title: "Website Performance: Speed Equals Sales",
		excerpt:
			"How website optimization can increase your conversion rates by up to 74% and boost your bottom line.",
		category: "Web Development",
		readTime: "5 min read",
		date: "Dec 5, 2024",
		image:
			"https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
	},
	{
		id: 6,
		title: "Digital Marketing Trends for 2024",
		excerpt:
			"Stay ahead of the curve with these emerging digital marketing trends that are shaping the business landscape.",
		category: "Digital Marketing",
		readTime: "8 min read",
		date: "Dec 3, 2024",
		image:
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
	},
];

const categories = [
	"All",
	"Branding",
	"SEO",
	"Digital Marketing",
	"Automation",
	"Web Development",
	"Social Media Management",
];

const Blog = () => {
	const { title, description, keywords } = SEO_CONFIG.blog;

	return (
		<div className="min-h-screen">
			<SEO title={title} description={description} keywords={keywords} />
			<Header />

			{/* Hero Section */}
			<section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
							Business Growth
							<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
								{" "}
								Insights
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
							Expert advice, strategies, and insights to help your business
							scale faster and more efficiently.
						</p>
					</div>
				</div>
			</section>

			{/* Categories Filter */}
			<section className="py-8 bg-gray-50">
				<div className="container mx-auto px-6">
					<div className="flex flex-wrap justify-center gap-3">
						{categories.map((category) => (
							<Button
								key={category}
								variant={category === "All" ? "default" : "outline"}
								className={
									category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""
								}
							>
								{category}
							</Button>
						))}
					</div>
				</div>
			</section>

			{/* Featured Post */}
			<section className="py-16">
				<div className="container mx-auto px-6">
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-center mb-4">
							Featured Article
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
					</div>

					{blogPosts
						.filter((post) => post.featured)
						.map((post) => (
							<Card
								key={post.id}
								className="overflow-hidden hover:shadow-xl transition-all duration-300"
							>
								<div className="grid md:grid-cols-2 gap-0">
									<div className="relative">
										<img
											src={post.image}
											alt={post.title}
											className="w-full h-64 md:h-full object-cover"
										/>
										<Badge className="absolute top-4 left-4 bg-blue-600">
											{post.category}
										</Badge>
									</div>
									<CardContent className="p-8 flex flex-col justify-center">
										<CardTitle className="text-2xl md:text-3xl mb-4 leading-tight">
											{post.title}
										</CardTitle>
										<p className="text-gray-600 mb-6 text-lg leading-relaxed">
											{post.excerpt}
										</p>
										<div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
											<div className="flex items-center gap-2">
												<CalendarDays className="w-4 h-4" />
												{post.date}
											</div>
											<div className="flex items-center gap-2">
												<Clock className="w-4 h-4" />
												{post.readTime}
											</div>
										</div>
										<Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-fit">
											Read Article <ArrowRight className="ml-2 w-4 h-4" />
										</Button>
									</CardContent>
								</div>
							</Card>
						))}
				</div>
			</section>

			{/* Blog Posts Grid */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-6">
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-center mb-4">
							Latest Articles
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts
							.filter((post) => !post.featured)
							.map((post) => (
								<Card
									key={post.id}
									className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
								>
									<div className="relative">
										<img
											src={post.image}
											alt={post.title}
											className="w-full h-48 object-cover"
										/>
										<Badge className="absolute top-4 left-4 bg-blue-600">
											{post.category}
										</Badge>
									</div>
									<CardContent className="p-6">
										<CardTitle className="text-xl mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
											{post.title}
										</CardTitle>
										<p className="text-gray-600 mb-4 leading-relaxed">
											{post.excerpt}
										</p>
										<div className="flex items-center justify-between text-sm text-gray-500 mb-4">
											<div className="flex items-center gap-2">
												<CalendarDays className="w-4 h-4" />
												{post.date}
											</div>
											<div className="flex items-center gap-2">
												<Clock className="w-4 h-4" />
												{post.readTime}
											</div>
										</div>
										<Button
											variant="outline"
											className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
										>
											Read More <ArrowRight className="ml-2 w-4 h-4" />
										</Button>
									</CardContent>
								</Card>
							))}
					</div>
				</div>
			</section>

			{/* Newsletter CTA */}
			<section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Stay Updated with Growth Tips
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Get weekly insights, strategies, and actionable tips delivered
						straight to your inbox.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-4 py-3 rounded-lg text-gray-900"
						/>
						<Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8">
							Subscribe
						</Button>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Blog;
