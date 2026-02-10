import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Sparkles } from "lucide-react";

const DISCOUNT_CONFIG = {
  enabled: true,
  delay: 3000,
  title: "Limited Time Offer!",
  discount: "20% OFF",
  description:
    "Get 20% off your first month of our growth services. Start scaling your business today!",
  ctaText: "Claim Your Discount",
  expiryHours: 24,
};

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!DISCOUNT_CONFIG.enabled) return;

    // Check if popup was dismissed recently
    const dismissedUntil = localStorage.getItem("discountPopupDismissed");
    if (dismissedUntil) {
      const dismissedTime = parseInt(dismissedUntil);
      if (Date.now() < dismissedTime) {
        return; // Don't show popup yet
      }
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, DISCOUNT_CONFIG.delay);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    const expiryTime =
      Date.now() + DISCOUNT_CONFIG.expiryHours * 60 * 60 * 1000;
    localStorage.setItem("discountPopupDismissed", expiryTime.toString());
  };

  const handleClaim = () => {
    // Handle discount claim logic here
    console.log("Discount claimed for email:", email);
    handleClose();
    // Navigate to contact form or show success message
    window.location.href = "/#contact";
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader className="text-center space-y-3 pt-6">
          <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>

          <DialogTitle className="text-2xl font-bold">
            {DISCOUNT_CONFIG.title}
          </DialogTitle>

          <div className="text-4xl font-bold text-foreground">
            {DISCOUNT_CONFIG.discount}
          </div>

          <DialogDescription className="text-base">
            {DISCOUNT_CONFIG.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>

          <Button
            onClick={handleClaim}
            className="w-full bg-primary hover:bg-muted-foreground text-primary-foreground font-semibold"
            size="lg"
          >
            {DISCOUNT_CONFIG.ctaText}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Limited time offer. No credit card required.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;
