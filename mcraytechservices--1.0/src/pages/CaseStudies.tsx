import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";
import { ArrowRight, TrendingUp, Building2, Clock, Layers } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string | null;
  description: string;
  results: string;
  services: string;
  industry: string;
  duration: string;
  image_url: string | null;
  slug: string;
  featured: boolean;
  created_at: string;
}

const CaseStudies = () => {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudies = async () => {
      const { data } = await supabase
        .from("case_studies")
        .select("*")
        .eq("published", true)
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false });
      setStudies((data as CaseStudy[]) || []);
      setLoading(false);
    };
    fetchStudies();
  }, []);

  useEffect(() => {
    document.title = "Case Studies | Our Work & Impact";
    return () => {
      document.title = "";
    };
  }, []);

  const industries = [
    "All",
    ...Array.from(new Set(studies.map((s) => s.industry).filter(Boolean))),
  ];
  const filtered =
    activeFilter === "All"
      ? studies
      : studies.filter((s) => s.industry === activeFilter);
  const featuredStudy = filtered.find((s) => s.featured);
  const regularStudies = filtered.filter(
    (s) => !s.featured || s !== featuredStudy,
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Work Speaks
              <span className="block gradient-text">For Itself</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real partnerships. Explore how we've helped
              businesses achieve measurable growth with tailored digital
              solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      {industries.length > 2 && (
        <section className="pb-8">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="flex flex-wrap gap-2 justify-center">
                {industries.map((ind) => (
                  <Button
                    key={ind}
                    variant={activeFilter === ind ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(ind)}
                    className="rounded-full"
                  >
                    {ind}
                  </Button>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-80 rounded-2xl bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-20">
                <TrendingUp className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-xl text-muted-foreground">
                  No case studies found.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="space-y-12">
              {/* Featured */}
              {featuredStudy && (
                <FadeIn>
                  <Card
                    className="overflow-hidden group cursor-pointer hover:shadow-soft-lg transition-all duration-500 border-border/50"
                    onClick={() =>
                      navigate(`/case-studies/${featuredStudy.slug}`)
                    }
                  >
                    <div className="grid md:grid-cols-2">
                      {featuredStudy.image_url && (
                        <div className="aspect-video md:aspect-auto overflow-hidden">
                          <img
                            src={featuredStudy.image_url}
                            alt={featuredStudy.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      )}
                      <CardContent className="p-8 md:p-10 flex flex-col justify-center space-y-5">
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            Featured
                          </Badge>
                          {featuredStudy.industry && (
                            <Badge variant="outline" className="text-xs">
                              <Building2 className="w-3 h-3 mr-1" />{" "}
                              {featuredStudy.industry}
                            </Badge>
                          )}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {featuredStudy.title}
                        </h2>
                        {featuredStudy.client && (
                          <p className="text-sm text-muted-foreground">
                            Client: {featuredStudy.client}
                          </p>
                        )}
                        <p className="text-muted-foreground leading-relaxed">
                          {featuredStudy.description}
                        </p>
                        {featuredStudy.results && (
                          <div className="flex items-start gap-2 pt-2 border-t border-border/50">
                            <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm font-medium text-foreground">
                              {featuredStudy.results.split("\n")[0]}
                            </p>
                          </div>
                        )}
                        <div className="pt-2">
                          <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-3 gap-2 transition-all">
                            Read Case Study <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </FadeIn>
              )}

              {/* Grid */}
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularStudies.map((study) => (
                  <StaggerItem key={study.id}>
                    <Card
                      className="overflow-hidden group cursor-pointer hover:shadow-soft-lg transition-all duration-500 border-border/50 h-full flex flex-col"
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
                      <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2">
                          {study.industry && (
                            <Badge variant="outline" className="text-xs">
                              <Building2 className="w-3 h-3 mr-1" />{" "}
                              {study.industry}
                            </Badge>
                          )}
                          {study.duration && (
                            <Badge variant="outline" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />{" "}
                              {study.duration}
                            </Badge>
                          )}
                        </div>
                        <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {study.title}
                        </h2>
                        {study.client && (
                          <p className="text-xs text-muted-foreground">
                            Client: {study.client}
                          </p>
                        )}
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                          {study.description}
                        </p>
                        {study.results && (
                          <div className="pt-3 border-t border-border/50">
                            <div className="flex items-start gap-2">
                              <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <p className="text-sm font-medium text-foreground line-clamp-1">
                                {study.results.split("\n")[0]}
                              </p>
                            </div>
                          </div>
                        )}
                        <div className="pt-2">
                          <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-3 gap-2 transition-all">
                            View Details <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can help your business achieve measurable
              results.
            </p>
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl gradient-bg text-primary-foreground font-semibold shadow-glow hover:shadow-glow-lg hover:scale-[1.02] transition-all"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
