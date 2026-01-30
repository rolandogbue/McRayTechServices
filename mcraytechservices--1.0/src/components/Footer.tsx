import { Separator } from "@/components/ui/separator";
import SocialButton from "@/components/SocialButton";
import Logo from "@/components/Logo";

const Footer = () => {
  const services = [
    "Website Development",
    "Branding & Identity",
    // "SEO & Web Performance",
    "Digital Marketing",
    "Automation",
    // "Social Media Management",
    "Custom Software",
    "IT Consulting",
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "#process" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const resources = [
    "Free Strategy Session",
    "Growth Guides",
    "Marketing Tips",
    "Privacy Policy",
    "Terms of Service",
  ];

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient bg-clip-text text-transparent mb-4">
              <div className="flex items-center">
                <Logo
                  variant="footer"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
              We help small and medium businesses attract more customers and
              grow sales by handling websites, marketing, automation, and IT —
              all in one place.
            </p>
            <div className="flex space-x-4">
              <div className="flex gap-3">
                <SocialButton
                  platform="instagram"
                  href="https://instagram.com/mcraytechservices"
                />
                <SocialButton
                  platform="linkedin"
                  href="https://linkedin.com/company/mcraytechservices"
                />
                <SocialButton
                  platform="twitter"
                  href="https://twitter.com/mcraytechservcs"
                />
                <SocialButton
                  platform="facebook"
                  href="https://facebook.com/mcraytechservices"
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-medium mb-6 text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-medium mb-6 text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-medium mb-6 text-foreground">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 McRay Tech Services Ltd. All rights reserved
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="/privacy"
              target="_blank"
              rel="privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              target="_blank"
              rel="terms"
              className="hover:text-primary transition-colors"
            >
              Terms
            </a>
            <a
              href="/cookies"
              target="_blank"
              rel="cookies"
              className="hover:text-primary transition-colors"
            >
              Cookies
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            <a href="http://jetmotorsauto.com" target="_blank" rel="jetmotors">
              ⚙️ Parent company of JetMotors
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
