import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import BookingModal from "./BookingModal";
import { useState } from "react";

const Header = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/blog" },
    { label: "Faq", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Logo
                variant="header"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="link-underline text-muted-foreground hover:text-foreground font-medium text-sm py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <Button
                className="gradient-bg text-primary-foreground rounded-xl group btn-shine shadow-glow hover:shadow-glow-lg hover:scale-[1.02]"
                onClick={() => setBookingOpen(true)}
              >
                Free Strategy Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-background border-border">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors hover:translate-x-1 duration-300"
                      >
                        {link.label}
                      </a>
                    ))}
                    <div className="flex flex-col space-y-3 pt-6">
                      <Button
                        className="gradient-bg text-primary-foreground shadow-glow"
                        onClick={() => setBookingOpen(true)}
                      >
                        Free Strategy Call
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default Header;
