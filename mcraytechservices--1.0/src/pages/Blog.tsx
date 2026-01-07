import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";

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

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title={title} description={description} keywords={keywords} />
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 gradient-animated text-primary-foreground">
        <div className="container text-center justify-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 leading-tight">
            Business Growth
            <span className="gradient-text"> Insights</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-4xl mx-auto">
            Expert advice, strategies, and insights to help your business scale
            faster and more efficiently.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 section-muted">
        <div className="container flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-display">
              Featured Article
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          {filteredPosts
            .filter((post) => post.featured)
            .map((post) => (
              <BlogCard key={post.id} post={post} featured />
            ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 section-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-display">
              Latest Articles
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 gradient-animated text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Stay Updated with Growth Tips
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly insights, strategies, and actionable tips delivered
            straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background focus-ring"
            />
            <Button className="btn-shine gradient-bg px-8">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
