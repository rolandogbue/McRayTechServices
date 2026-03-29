import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, EyeOff, LogIn, LogOut } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    user,
    hasContentAccess,
    loading: authLoading,
    signIn,
    signOut,
  } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && user && hasContentAccess) {
      navigate("/admin/blog", { replace: true });
    }
  }, [user, hasContentAccess, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(email, password);
    setLoading(false);

    if (error) {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({ title: "Welcome back!" });
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setEmail("");
      setPassword("");
      toast({ title: "Signed out successfully" });
    } catch (error) {
      toast({
        title: "Sign out failed",
        description:
          error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 flex items-center justify-center px-6">
        {authLoading ? (
          <Card className="w-full max-w-md shadow-soft-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                Checking session
              </CardTitle>
              <CardDescription>
                Please wait while we load your account access.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : user ? (
          <Card className="w-full max-w-md shadow-soft-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                {hasContentAccess
                  ? "Already Signed In"
                  : "Signed In With a Different Account"}
              </CardTitle>
              <CardDescription>
                {hasContentAccess
                  ? `You are logged in as ${user.email}`
                  : `${user.email} does not have blog admin access. Sign out to switch accounts.`}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {hasContentAccess ? (
                <Button
                  className="w-full"
                  onClick={() => navigate("/admin/blog", { replace: true })}
                >
                  Go to Dashboard
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate("/blog")}
                >
                  View Blog
                </Button>
              )}
              <Button
                variant="outline"
                className="w-full"
                onClick={handleSignOut}
              >
                <LogOut className="w-4 h-4 mr-2" /> Sign Out
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="w-full max-w-md shadow-soft-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                Team Login
              </CardTitle>
              <CardDescription>
                Sign in to manage your blog content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  <LogIn className="w-4 h-4 mr-2" />
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
