import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "@/components/RichTextEditor";
import ImageUpload from "@/components/ImageUpload";
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
  Star,
  StarOff,
  ArrowLeft,
  Settings,
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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  image_url: string | null;
  featured: boolean;
  published: boolean;
  created_at: string;
}

const CATEGORIES = [
  "Branding",
  "SEO",
  "Digital Marketing",
  "Automation",
  "Web Development",
  "Social Media",
  "General",
];

const emptyPost = {
  title: "",
  excerpt: "",
  content: "",
  category: "General",
  read_time: "5 min read",
  image_url: "",
  featured: false,
  published: false,
};

const AdminBlog = () => {
  const {
    user,
    isAdmin,
    hasContentAccess,
    loading: authLoading,
    signOut,
  } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState(emptyPost);

  useEffect(() => {
    if (!authLoading && (!user || !hasContentAccess)) {
      navigate("/login", { replace: true });
    }
  }, [user, hasContentAccess, authLoading, navigate]);

  useEffect(() => {
    if (authLoading) return;

    if (!user || !hasContentAccess) {
      setLoading(false);
      return;
    }

    void fetchPosts();
  }, [authLoading, hasContentAccess, user?.id]);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error loading posts",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setPosts(data || []);
    }

    setLoading(false);
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.excerpt.trim()) {
      toast({
        title: "Title and excerpt are required",
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

    const postData = {
      title: form.title.trim(),
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      category: form.category,
      read_time: form.read_time,
      image_url: form.image_url?.trim() || null,
      featured: form.featured,
      published: form.published,
      author_id: user?.id,
      slug,
    };

    if (editing) {
      const { error } = await supabase
        .from("blog_posts")
        .update(postData)
        .eq("id", editing);
      if (error) {
        toast({
          title: "Error updating post",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
      toast({ title: "Post updated successfully" });
    } else {
      const { error } = await supabase.from("blog_posts").insert(postData);
      if (error) {
        toast({
          title: "Error creating post",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
      toast({ title: "Post created successfully" });
    }

    setEditing(null);
    setCreating(false);
    setForm(emptyPost);
    await fetchPosts();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast({
        title: "Error deleting post",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({ title: "Post deleted" });
    await fetchPosts();
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({ title: "Signed out successfully" });
      navigate("/login", { replace: true });
    } catch (error) {
      toast({
        title: "Sign out failed",
        description:
          error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    }
  };

  const startEdit = (post: BlogPost) => {
    setEditing(post.id);
    setCreating(true);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      read_time: post.read_time,
      image_url: post.image_url || "",
      featured: post.featured,
      published: post.published,
    });
  };

  const cancelEdit = () => {
    setEditing(null);
    setCreating(false);
    setForm(emptyPost);
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
                Blog Management
              </h1>
              <p className="text-muted-foreground mt-1">
                Create, edit, and manage your blog posts
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate("/blog")}>
                <ArrowLeft className="w-4 h-4 mr-2" /> View Blog
              </Button>
              {!creating && (
                <Button
                  onClick={() => {
                    setCreating(true);
                    setForm(emptyPost);
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" /> New Post
                </Button>
              )}
              {isAdmin && (
                <Button
                  variant="outline"
                  onClick={() => navigate("/admin/settings")}
                >
                  <Settings className="w-4 h-4 mr-2" /> Settings
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
                <CardTitle className="text-xl">
                  {editing ? "Edit Post" : "Create New Post"}
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
                      placeholder="Post title"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Category
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Excerpt *
                  </label>
                  <Textarea
                    value={form.excerpt}
                    onChange={(e) =>
                      setForm({ ...form, excerpt: e.target.value })
                    }
                    placeholder="Brief summary of the post"
                    rows={2}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Content
                  </label>
                  <RichTextEditor
                    content={form.content}
                    onChange={(html) => setForm({ ...form, content: html })}
                    placeholder="Start writing your blog post..."
                  />
                </div>

                <ImageUpload
                  value={form.image_url}
                  onChange={(url) => setForm({ ...form, image_url: url })}
                />

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Read Time
                  </label>
                  <Input
                    value={form.read_time}
                    onChange={(e) =>
                      setForm({ ...form, read_time: e.target.value })
                    }
                    placeholder="5 min read"
                  />
                </div>

                <div className="flex flex-wrap gap-6 items-center pt-2">
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
                    {editing ? "Update Post" : "Create Post"}
                  </Button>
                  <Button variant="outline" onClick={cancelEdit}>
                    <X className="w-4 h-4 mr-2" /> Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Posts List */}
          {posts.length === 0 && !creating ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground text-lg mb-4">
                No blog posts yet
              </p>
              <Button
                onClick={() => {
                  setCreating(true);
                  setForm(emptyPost);
                }}
              >
                <Plus className="w-4 h-4 mr-2" /> Create Your First Post
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-soft transition-shadow duration-200"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      {post.image_url && (
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full md:w-40 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold text-foreground truncate">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex gap-2 flex-shrink-0">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => startEdit(post)}
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
                                    Delete this post?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete "{post.title}".
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(post.id)}
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">{post.category}</Badge>
                          <Badge
                            variant={post.published ? "default" : "secondary"}
                          >
                            {post.published ? (
                              <>
                                <Eye className="w-3 h-3 mr-1" /> Published
                              </>
                            ) : (
                              <>
                                <EyeOff className="w-3 h-3 mr-1" /> Draft
                              </>
                            )}
                          </Badge>
                          {post.featured && (
                            <Badge className="bg-accent text-accent-foreground">
                              <Star className="w-3 h-3 mr-1" /> Featured
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground self-center">
                            {new Date(post.created_at).toLocaleDateString()}
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

export default AdminBlog;
