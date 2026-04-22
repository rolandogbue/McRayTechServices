import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Clock,
  Building2,
  Layers,
  Quote,
  CheckCircle2,
  Target,
  Lightbulb,
  BarChart3,
  X as XIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface CaseStudy {
  id: string;
  title: string;
  client: string | null;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  services: string;
  testimonial_quote: string;
  testimonial_author: string;
  industry: string;
  duration: string;
  image_url: string | null;
  slug: string;
  created_at: string;
}

interface GalleryImage {
  id: string;
  image_url: string;
  caption: string;
  sort_order: number;
}

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [study, setStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [nextStudy, setNextStudy] = useState<{
    slug: string;
    title: string;
  } | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchStudy = async () => {
      const { data } = await supabase
        .from("case_studies")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (data) {
        setStudy(data as CaseStudy);
        document.title = `${data.title} | Case Study`;

        // Fetch gallery images
        const { data: imgs } = await supabase
          .from("case_study_images")
          .select("*")
          .eq("case_study_id", data.id)
          .order("sort_order");
        setGalleryImages(imgs || []);

        // Fetch next study
        const { data: next } = await supabase
          .from("case_studies")
          .select("slug, title")
          .eq("published", true)
          .neq("id", data.id)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();
        setNextStudy(next);
      }
      setLoading(false);
    };
    fetchStudy();
    return () => {
      document.title = "";
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="h-[60vh] rounded-2xl bg-muted animate-pulse" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Case Study Not Found
          </h1>
          <Button onClick={() => navigate("/case-studies")}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const servicesList = study.services
    ? study.services
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];
  const resultsList = study.results
    ? study.results.split("\n").filter(Boolean)
    : [study.results].filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeIn>
            <Button
              variant="ghost"
              onClick={() => navigate("/case-studies")}
              className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> All Case Studies
            </Button>

            <div className="flex flex-wrap gap-3 mb-6">
              {study.industry && (
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  <Building2 className="w-3 h-3 mr-1" /> {study.industry}
                </Badge>
              )}
              {study.duration && (
                <Badge variant="outline">
                  <Clock className="w-3 h-3 mr-1" /> {study.duration}
                </Badge>
              )}
              {study.client && <Badge variant="outline">{study.client}</Badge>}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl leading-tight">
              {study.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {study.description}
            </p>

            {servicesList.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8">
                {servicesList.map((service, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-xs px-3 py-1"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Hero Image */}
      {study.image_url && (
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden shadow-soft-lg border border-border/30">
                <img
                  src={study.image_url}
                  alt={study.title}
                  className="w-full aspect-[16/8] object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Project Gallery */}
      {galleryImages.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                Project Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setLightboxIndex(i)}
                    className="group relative rounded-xl overflow-hidden border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-soft-lg"
                  >
                    <img
                      src={img.image_url}
                      alt={img.caption || `Project image ${i + 1}`}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {img.caption && (
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-xs">{img.caption}</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={() => setLightboxIndex(null)}
      >
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-none overflow-hidden">
          {lightboxIndex !== null && galleryImages[lightboxIndex] && (
            <div className="relative">
              <img
                src={galleryImages[lightboxIndex].image_url}
                alt={galleryImages[lightboxIndex].caption || ""}
                className="w-full max-h-[85vh] object-contain"
              />
              {galleryImages[lightboxIndex].caption && (
                <p className="absolute bottom-4 left-4 right-4 text-white/80 text-sm text-center">
                  {galleryImages[lightboxIndex].caption}
                </p>
              )}
              {lightboxIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(lightboxIndex - 1);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
              )}
              {lightboxIndex < galleryImages.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(lightboxIndex + 1);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              )}
              <p className="absolute top-3 right-12 text-white/50 text-xs">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Challenge / Solution / Results */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="space-y-20">
              {/* Challenge */}
              {study.challenge && (
                <StaggerItem>
                  <div className="grid md:grid-cols-[200px_1fr] gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                          <Target className="w-5 h-5 text-destructive" />
                        </div>
                      </div>
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        The Challenge
                      </h2>
                    </div>
                    <div>
                      <p className="text-foreground text-lg leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              )}

              {/* Solution */}
              {study.solution && (
                <StaggerItem>
                  <Separator className="mb-20 opacity-30" />
                  <div className="grid md:grid-cols-[200px_1fr] gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Lightbulb className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Our Solution
                      </h2>
                    </div>
                    <div>
                      <p className="text-foreground text-lg leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              )}

              {/* Results */}
              {study.results && (
                <StaggerItem>
                  <Separator className="mb-20 opacity-30" />
                  <div className="grid md:grid-cols-[200px_1fr] gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-accent-foreground" />
                        </div>
                      </div>
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        The Results
                      </h2>
                    </div>
                    <div className="space-y-3">
                      {resultsList.map((result, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-foreground text-lg">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              )}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial_quote && (
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6 italic">
                  "{study.testimonial_quote}"
                </blockquote>
                {study.testimonial_author && (
                  <p className="text-muted-foreground font-medium">
                    — {study.testimonial_author}
                  </p>
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Next Case Study / CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {nextStudy && (
                  <button
                    onClick={() => navigate(`/case-studies/${nextStudy.slug}`)}
                    className="group text-left p-8 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-soft-lg transition-all duration-300"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Next Case Study
                    </p>
                    <p className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {nextStudy.title}
                    </p>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-4" />
                  </button>
                )}
                <div className="p-8 rounded-2xl gradient-bg text-primary-foreground">
                  <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-2">
                    Ready to start?
                  </p>
                  <p className="text-xl font-bold mb-4">
                    Let's build your success story
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/book")}
                    className="bg-white/20 hover:bg-white/30 text-primary-foreground border-0"
                  >
                    Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
