import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/ImageUpload";
import CaseStudyGallery from "@/components/CaseStudyGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  LogOut,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CaseStudy {
  id: string;
  title: string;
  client: string | null;
  description: string;
  results: string;
  image_url: string | null;
  published: boolean;
  slug: string;
  created_at: string;
}

const emptyForm = {
  title: "",
  client: "",
  description: "",
  results: "",
  image_url: "",
  published: false,
  challenge: "",
  solution: "",
  services: "",
  testimonial_quote: "",
  testimonial_author: "",
  industry: "",
  duration: "",
  featured: false,
};

const AdminCaseStudies = () => {
  const { user, hasContentAccess, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [galleryImages, setGalleryImages] = useState<
    Array<{
      id: string;
      image_url: string;
      caption: string;
      sort_order: number;
    }>
  >([]);

  useEffect(() => {
    if (!authLoading && (!user || !hasContentAccess)) {
      navigate("/login", { replace: true });
    }
  }, [user, hasContentAccess, authLoading, navigate]);

  useEffect(() => {
    if (authLoading || !user || !hasContentAccess) {
      setLoading(false);
      return;
    }
    void fetchStudies();
  }, [authLoading, hasContentAccess, user?.id]);

  const fetchStudies = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({
        title: "Error loading case studies",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setStudies(data || []);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.description.trim()) {
      toast({
        title: "Title and description are required",
        variant: "destructive",
      });
      return;
    }

    const slug = form.title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const payload = {
      title: form.title.trim(),
      client: form.client.trim() || null,
      description: form.description.trim(),
      results: form.results.trim(),
      image_url: form.image_url?.trim() || null,
      published: form.published,
      challenge: form.challenge.trim(),
      solution: form.solution.trim(),
      services: form.services.trim(),
      testimonial_quote: form.testimonial_quote.trim(),
      testimonial_author: form.testimonial_author.trim(),
      industry: form.industry.trim(),
      duration: form.duration.trim(),
      featured: form.featured,
      slug,
    };

    let studyId = editing;

    if (editing) {
      const { error } = await supabase
        .from("case_studies")
        .update(payload)
        .eq("id", editing);
      if (error) {
        toast({
          title: "Error updating",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
      toast({ title: "Case study updated" });
    } else {
      const { data: inserted, error } = await supabase
        .from("case_studies")
        .insert(payload)
        .select("id")
        .single();
      if (error || !inserted) {
        toast({
          title: "Error creating",
          description: error?.message,
          variant: "destructive",
        });
        return;
      }
      studyId = inserted.id;
      toast({ title: "Case study created" });
    }

    // Save gallery images
    if (studyId) {
      await supabase
        .from("case_study_images")
        .delete()
        .eq("case_study_id", studyId);
      if (galleryImages.length > 0) {
        const rows = galleryImages.map((img, i) => ({
          case_study_id: studyId!,
          image_url: img.image_url,
          caption: img.caption || "",
          sort_order: i,
        }));
        await supabase.from("case_study_images").insert(rows);
      }
    }

    setEditing(null);
    setCreating(false);
    setForm(emptyForm);
    setGalleryImages([]);
    await fetchStudies();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("case_studies").delete().eq("id", id);
    if (error) {
      toast({
        title: "Error deleting",
        description: error.message,
        variant: "destructive",
      });
      return;
    }
    toast({ title: "Case study deleted" });
    await fetchStudies();
  };

  const handleSignOut = async () => {
    await signOut();
    toast({ title: "Signed out" });
    navigate("/login", { replace: true });
  };

  const startEdit = async (s: CaseStudy & Record<string, any>) => {
    setEditing(s.id);
    setCreating(true);
    setForm({
      title: s.title,
      client: s.client || "",
      description: s.description,
      results: s.results,
      image_url: s.image_url || "",
      published: s.published,
      challenge: s.challenge || "",
      solution: s.solution || "",
      services: s.services || "",
      testimonial_quote: s.testimonial_quote || "",
      testimonial_author: s.testimonial_author || "",
      industry: s.industry || "",
      duration: s.duration || "",
      featured: s.featured || false,
    });
    // Fetch gallery images
    const { data: imgs } = await supabase
      .from("case_study_images")
      .select("*")
      .eq("case_study_id", s.id)
      .order("sort_order");
    setGalleryImages(imgs || []);
  };

  const cancelEdit = () => {
    setEditing(null);
    setCreating(false);
    setForm(emptyForm);
    setGalleryImages([]);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Case Studies
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your portfolio & case studies
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Button
                variant="outline"
                onClick={() => navigate("/case-studies")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> View Public Page
              </Button>
              <Button variant="outline" onClick={() => navigate("/admin/blog")}>
                Blog Posts
              </Button>
              {!creating && (
                <Button
                  onClick={() => {
                    setCreating(true);
                    setForm(emptyForm);
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" /> New Case Study
                </Button>
              )}
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" /> Sign Out
              </Button>
            </div>
          </div>

          {/* Editor */}
          {creating && (
            <Card className="mb-8 shadow-soft-lg border-accent/20">
              <CardHeader>
                <CardTitle>
                  {editing ? "Edit Case Study" : "New Case Study"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Title *
                    </label>
                    <Input
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                      placeholder="Project title"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Client (optional)
                    </label>
                    <Input
                      value={form.client}
                      onChange={(e) =>
                        setForm({ ...form, client: e.target.value })
                      }
                      placeholder="Client name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Description / Overview *
                  </label>
                  <Textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    placeholder="Brief overview of the project"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    The Challenge
                  </label>
                  <Textarea
                    value={form.challenge}
                    onChange={(e) =>
                      setForm({ ...form, challenge: e.target.value })
                    }
                    placeholder="What problem did the client face?"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Our Solution
                  </label>
                  <Textarea
                    value={form.solution}
                    onChange={(e) =>
                      setForm({ ...form, solution: e.target.value })
                    }
                    placeholder="How did we solve it?"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Results / Impact (one per line for bullet points)
                  </label>
                  <Textarea
                    value={form.results}
                    onChange={(e) =>
                      setForm({ ...form, results: e.target.value })
                    }
                    placeholder="e.g. 150% increase in organic traffic&#10;₦6M in sales from Google"
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Industry
                    </label>
                    <Input
                      value={form.industry}
                      onChange={(e) =>
                        setForm({ ...form, industry: e.target.value })
                      }
                      placeholder="e.g. Real Estate"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Duration
                    </label>
                    <Input
                      value={form.duration}
                      onChange={(e) =>
                        setForm({ ...form, duration: e.target.value })
                      }
                      placeholder="e.g. 3 months"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Services (comma-separated)
                    </label>
                    <Input
                      value={form.services}
                      onChange={(e) =>
                        setForm({ ...form, services: e.target.value })
                      }
                      placeholder="Web Design, SEO, Branding"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Client Testimonial Quote
                  </label>
                  <Textarea
                    value={form.testimonial_quote}
                    onChange={(e) =>
                      setForm({ ...form, testimonial_quote: e.target.value })
                    }
                    placeholder="What did the client say about working with you?"
                    rows={2}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Testimonial Author
                  </label>
                  <Input
                    value={form.testimonial_author}
                    onChange={(e) =>
                      setForm({ ...form, testimonial_author: e.target.value })
                    }
                    placeholder="e.g. Jane Doe, CEO of Company"
                  />
                </div>

                <ImageUpload
                  value={form.image_url}
                  onChange={(url) => setForm({ ...form, image_url: url })}
                />

                <CaseStudyGallery
                  caseStudyId={editing}
                  images={galleryImages}
                  onChange={setGalleryImages}
                />

                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={form.published}
                      onCheckedChange={(v) =>
                        setForm({ ...form, published: v })
                      }
                    />
                    <label className="text-sm font-medium text-foreground">
                      Published
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={form.featured}
                      onCheckedChange={(v) => setForm({ ...form, featured: v })}
                    />
                    <label className="text-sm font-medium text-foreground">
                      Featured
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />{" "}
                    {editing ? "Update" : "Create"}
                  </Button>
                  <Button variant="outline" onClick={cancelEdit}>
                    <X className="w-4 h-4 mr-2" /> Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* List */}
          {studies.length === 0 && !creating ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground text-lg mb-4">
                No case studies yet
              </p>
              <Button
                onClick={() => {
                  setCreating(true);
                  setForm(emptyForm);
                }}
              >
                <Plus className="w-4 h-4 mr-2" /> Add Your First Case Study
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {studies.map((s) => (
                <Card
                  key={s.id}
                  className="hover:shadow-soft transition-shadow duration-200"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      {s.image_url && (
                        <img
                          src={s.image_url}
                          alt={s.title}
                          className="w-full md:w-40 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold text-foreground truncate">
                              {s.title}
                            </h3>
                            {s.client && (
                              <p className="text-xs text-muted-foreground">
                                Client: {s.client}
                              </p>
                            )}
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {s.description}
                            </p>
                          </div>
                          <div className="flex gap-2 flex-shrink-0">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => startEdit(s)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-destructive hover:bg-destructive/10"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Delete this case study?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(s.id)}
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge
                            variant={s.published ? "default" : "secondary"}
                          >
                            {s.published ? (
                              <>
                                <Eye className="w-3 h-3 mr-1" /> Published
                              </>
                            ) : (
                              <>
                                <EyeOff className="w-3 h-3 mr-1" /> Draft
                              </>
                            )}
                          </Badge>
                          <span className="text-xs text-muted-foreground self-center">
                            {new Date(s.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminCaseStudies;
