import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { toast } from "sonner";
import BookingModal from "@/components/BookingModal";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";

const Contact = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { title, description, keywords, robots } = SEO_CONFIG.contact;
  const [state, handleSubmit] = useForm("contact-form");

  useEffect(() => {
    if (state.succeeded) {
      toast.success(
        "Thank you for your message! We'll get back to you within 24 hours.",
      );
    }
  }, [state.succeeded]);

  return (
    <div className="min-h-screen bg-background ">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        robots={robots}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-animated text-primary-foreground">
        <div className="container justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Grow Your
              <span className="gradient-text">
                {" "}
                Business With The Right Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
              We help small and medium businesses scale through high-performing
              websites, business automation, and digital marketing. <br />
              Start with a free strategy session or send us a message below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 section-muted">
        <div className="container justify-items-center justify-content-center">
          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Contact Form */}
            <Card className="floating-card ">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Start with a Free Strategy Session
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  We’ll review your business needs and respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6 ">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@company.com"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      id="service"
                      name="service"
                      className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="complete-package">
                        Complete Growth Package
                      </option>
                      <option value="branding">Branding & Design</option>
                      <option value="website">Website Development</option>
                      <option value="seo">SEO & Digital Marketing</option>
                      <option value="automation">Business Automation</option>
                      <option value="social-media">
                        Social Media Management
                      </option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={10}
                      placeholder="Briefly tell us about your business and what you’d like help with (website, SEO, automation, marketing, or systems)."
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full gradient-bg btn-shine text-primary-foreground text-lg py-3 hover:scale-105"
                  >
                    {state.submitting
                      ? "Sending..."
                      : "Request Free Strategy Session"}
                  </Button>

                  <ValidationError errors={state.errors} />
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Prefer to reach us directly? You can contact us using the
                  details below or book a free strategy session.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="card-premium p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary p-3 rounded-full icon-glow">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-muted-foreground">
                        solutions@mcraytechservices.com
                      </p>
                      <p className="text-muted-foreground">
                        support@mcraytechservices.com
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="card-premium p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary p-3 rounded-full icon-glow">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-muted-foreground">
                        +234 (805) 192-7074
                      </p>
                      <p className="text-muted-foreground">+1 (410) 929-1326</p>
                    </div>
                  </div>
                </Card>

                <Card className="card-premium p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary p-3 rounded-full icon-glow">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-muted-foreground">
                        BLK C40 NAHS KURUDU II, Und St, Gidan Mangoro,
                      </p>
                      <p className="text-muted-foreground">
                        Abuja 900109, Federal Capital Territory
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="card-premium p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary p-3 rounded-full icon-glow">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* CTA */}
              <Card className="gradient-bg text-primary-foreground p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Free Strategy Session
                </h3>
                <p className="mb-6">
                  Book a complimentary 30-minute consultation to discuss your
                  business goals and discover how we can help you scale with the
                  right technology and systems.
                </p>
                <Button
                  onClick={() => setBookingOpen(true)}
                  variant="secondary"
                  className="bg-background btn-shine text-primary hover:bg-muted hover:scale-105"
                >
                  Book Free Strategy Session
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 section-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
              <p className="text-muted-foreground text-lg">
                Visit our office during business hours — we’re happy to welcome
                you.
              </p>
            </div>
            <GoogleMap />
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Contact;
