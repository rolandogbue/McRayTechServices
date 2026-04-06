import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "@/pages/Index";
import About from "@/pages/About";
import CaseStudy from "@/pages/CaseStudy";
// import Plan from "@/pages/Plan";
import Blog from "@/pages/Blog";
import Faq from "@/pages/Faq";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Book from "@/pages/Book";
import Login from "@/pages/Login";
import AdminBlog from "@/pages/AdminBlog";
import AdminSettings from "@/pages/AdminSettings";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import ConsentBanner from "@/pages/ConsentBanner";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-study" element={<CaseStudy />} />
              {/* <Route path="/plans" element={<Plan />} /> */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Book />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/consent-banner" element={<ConsentBanner />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
