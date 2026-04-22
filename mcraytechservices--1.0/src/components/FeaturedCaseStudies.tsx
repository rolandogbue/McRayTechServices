import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Building2 } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";
import { useNavigate } from "react-router-dom";

interface CaseStudy {
  id: string;
  title: string;
  client: string | null;
  description: string;
  results: string;
  industry: string;
  image_url: string | null;
  slug: string;
}

const FeaturedCaseStudies = () => {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudies = async () => {
      const { data } = await supabase
        .from("case_studies")
        .select(
          "id, title, client, description, results, industry, image_url, slug",
        )
        .eq("published", true)
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(3);
      setStudies((data as CaseStudy[]) || []);
      setLoading(false);
    };
    fetchStudies();
  }, []);

  if (loading || studies.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proven Results That Speak
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses like yours achieve measurable
              growth.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-10">
          {studies.map((study) => (
            <StaggerItem key={study.id}>
              <Card
                className="overflow-hidden group hover:shadow-soft-lg transition-all duration-500 border-border/50 h-full cursor-pointer"
                onClick={() => navigate(`/case-studies/${study.slug}`)}
              >
                {study.image_url && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={study.image_url}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <CardContent className="p-5 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {study.industry && (
                      <Badge variant="outline" className="text-xs">
                        <Building2 className="w-3 h-3 mr-1" /> {study.industry}
                      </Badge>
                    )}
                    {study.client && (
                      <Badge variant="outline" className="text-xs">
                        {study.client}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {study.description}
                  </p>
                  {study.results && (
                    <div className="pt-2 border-t border-border/50">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm font-medium text-foreground line-clamp-1">
                          {study.results.split("\n")[0]}
                        </p>
                      </div>
                    </div>
                  )}
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-3 gap-2 transition-all pt-1">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/case-studies")}
              className="group"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
