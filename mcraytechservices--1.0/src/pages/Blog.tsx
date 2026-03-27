import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";
import BlogCard from "@/components/BlogCard";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  image_url: string | null;
  featured: boolean;
  created_at: string;
  slug: string;
}

const CATEGORIES = [
  "All",
  "Branding",
  "SEO",
  "Digital Marketing",
  "Automation",
  "Web Development",
  "Social Media",
];

const Blog = () => {
  const { title, description, keywords, robots } = SEO_CONFIG.blog;

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select(
            "id, title, excerpt, category, read_time, image_url, featured, created_at, slug",
          )
          .eq("published", true)
          .order("created_at", { ascending: false });
        if (error) console.error("Blog fetch error:", error);
        setPosts(data || []);
      } catch (err) {
        console.error("Blog fetch exception:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPost = filtered.find((p) => p.featured);
  const regularPosts = filtered.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        robots={robots}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Business Growth
                <span className="text-accent"> Insights</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
                Expert advice, strategies, and insights to help your business
                scale faster and more efficiently.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {loading ? (
        <div className="py-20 text-center text-muted-foreground">
          Loading posts...
        </div>
      ) : posts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-muted-foreground text-lg">
            No articles published yet. Check back soon!
          </p>
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <section className="py-16">
              <div className="container mx-auto px-6">
                <FadeIn>
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
                      Featured Article
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                  </div>

                  <Card
                    className="overflow-hidden hover:shadow-soft-lg transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(`/blog/${featuredPost.slug}`)}
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative">
                        <img
                          src={
                            featuredPost.image_url ||
                            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                          }
                          alt={featuredPost.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          {featuredPost.category}
                        </Badge>
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <CardTitle className="text-2xl md:text-3xl mb-4 leading-tight text-foreground">
                          {featuredPost.title}
                        </CardTitle>
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            {formatDate(featuredPost.created_at)}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {featuredPost.read_time}
                          </div>
                        </div>
                        <Button className="w-fit">
                          Read Article <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </FadeIn>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          {regularPosts.length > 0 && (
            <section className="py-16 section-muted">
              <div className="container mx-auto px-6">
                <FadeIn>
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
                      Latest Articles
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                  </div>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => (
                    <StaggerItem key={post.id}>
                      <Card
                        className="overflow-hidden hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full"
                        onClick={() => navigate(`/blog/${post.slug}`)}
                      >
                        <div className="relative">
                          <img
                            src={
                              post.image_url ||
                              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                            }
                            alt={post.title}
                            className="w-full h-48 object-cover"
                          />
                          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                            {post.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <CardTitle className="text-xl mb-3 leading-tight text-foreground hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                          <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <CalendarDays className="w-4 h-4" />
                              {formatDate(post.created_at)}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {post.read_time}
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">
                            Read More <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </section>
          )}
        </>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Growth Tips
            </h2>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Get weekly insights, strategies, and actionable tips delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border border-border"
              />
              <Button variant="premium" className="px-8">
                Subscribe
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
