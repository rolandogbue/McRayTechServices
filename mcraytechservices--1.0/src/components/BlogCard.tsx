import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: any;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animation = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";

  if (featured) {
    return (
      <Card
        ref={ref}
        className={`overflow-hidden transition-all duration-700 ${animation}`}
      >
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-full object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-primary">
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

            <Button>
              Read Article <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card
      ref={ref}
      className={`overflow-hidden transition-all duration-700 hover:-translate-y-2 ${animation}`}
    >
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-4 left-4 bg-primary">
          {post.category}
        </Badge>
      </div>

      <CardContent className="p-6">
        <CardTitle className="text-xl mb-3 leading-tight">
          {post.title}
        </CardTitle>

        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

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

        <Button variant="outline">
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
