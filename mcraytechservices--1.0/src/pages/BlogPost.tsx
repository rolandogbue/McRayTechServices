import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { generateBlogSEO } from "@/config/seo";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  image_url: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams();

  if (!slug) return null;

  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .eq("published", true)
        .maybeSingle();

      if (error || !data) {
        navigate("/blog");
        return;
      }
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [slug, navigate]);

  if (loading || !post) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Loading article..."
          description="Loading blog content"
          robots="noindex,nofollow"
        />
        <Header />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const seo = generateBlogSEO({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    image_url: post.image_url,
    created_at: post.created_at,
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />

      <Header />
      <article className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="mb-6 text-muted-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Button>

          <Badge className="mb-4 bg-primary text-primary-foreground">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              {formatDate(post.created_at)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.read_time}
            </div>
          </div>

          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          )}

          <div
            className="blog-content max-w-none text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content || `<p>${post.excerpt}</p>`,
            }}
          />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
