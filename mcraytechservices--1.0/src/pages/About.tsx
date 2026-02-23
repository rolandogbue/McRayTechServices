import { Award, Rocket, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";
import Team from "@/config/team";
import { FadeIn, StaggerItem } from "@/components/ScrollAnimations";

const About = () => {
  const { title, description, keywords, robots } = SEO_CONFIG.about;

  const stats = [
    { number: "100%", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
    { number: "10+", label: "Team Members" },
    { number: "3+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        robots={robots}
      />
      <Header />

      {/* About Hero */}
      <section className="pt-24 pb-16 gradient-animated text-primary-foreground">
        <div className="container justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 leading-tight tracking-tight">
              About
              <span className="gradient-text"> McRay Tech Services</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Learn about our mission, values, and how our team delivers
              technology solutions to help small businesses grow efficiently and
              achieve measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 section-muted">
        <FadeIn className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-display">
                About Our Agency
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We started with a simple mission: to empower small and medium
                businesses in Nigeria with integrated, efficient, and scalable digital
                solutions — eliminating the frustration of managing multiple
                vendors. Too many capable businesses struggle to grow because
                their websites, marketing, and automation are handled by
                separate providers with disconnected systems and no single point
                of accountability.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At McRay Tech Services, we bring everything together. We design
                and manage unified websites, automation, and business growth
                systems that work seamlessly as one. Our integrated approach
                removes operational friction, improves efficiency, and delivers
                better results faster.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our work acts as business immunity—strengthening operations,
                protecting momentum, and enabling SMBs to compete effectively
                and grow sustainably.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="group cursor-default text-center">
                    <div className="font-display text-3xl md:text-3xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300 inline-block">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-secondary icon-glow">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Certified professionals in development, marketing, and
                    automation working as one cohesive unit.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-secondary icon-glow">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                  <p className="text-muted-foreground">
                    We focus on metrics that matter - lead generation,
                    conversions, and business growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-secondary icon-glow">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
                  <p className="text-muted-foreground">
                    Your success is our success. We become an extension of your
                    team, not just another vendor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Vision */}
      <section className="py-24 gradient-animated text-primary-foreground relative overflow-hidden">
        <FadeIn className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Our Vision for the Future
            </h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              At McRay Tech Services, our vision is to redefine how small
              businesses in Nigeria leverage technology — transforming complex digital
              challenges into streamlined, automated, growth-driven solutions
              that feel effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-16 ">
            {[Rocket, Award, Heart].map((Icon, i) => (
              <StaggerItem
                key={i}
                className="group glass-premium rounded-2xl p-8 text-center hover-lift transition-all duration-500 hover:shadow-soft-xl hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 mx-auto text-accent mb-4 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110" />
                <h3 className="text-2xl font-semibold mb-3 text-primary/100 group-hover:text-primary-foreground transition-colors duration-300">
                  {i === 0
                    ? "Innovation at the Core"
                    : i === 1
                      ? "Empowering Growth"
                      : "Human-Centered Impact"}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-primary-foreground transition-colors duration-300">
                  {i === 0
                    ? "We envision a world where every local business in Nigeria thrives with access to enterprise-level tools, automation, and creativity."
                    : i === 1
                      ? "We aim to become the go-to partner for business transformation — helping companies grow smarter, faster, and more efficiently."
                      : "Our vision is built on connection — creating meaningful, supportive, long-term relationships with every business we serve."}
                </p>
              </StaggerItem>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Core Values */}
      <section className="py-20 section-muted">
        <FadeIn className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These are the principles that guide every project we take on and
              every client relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              "Excellence",
              "Integrity",
              "Innovation",
              "Customer-Centric",
              "Efficiency",
              "Collaboration",
            ].map((value, i) => (
              <div
                key={i}
                className="floating-card rounded-2xl p-6 text-center hover-lift"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value}
                </h3>
                <p className="text-muted-foreground">
                  {
                    [
                      "We deliver top-quality services tailored to each client's unique needs.",
                      "We operate with transparency and honesty, building trust with every client.",
                      "We stay ahead of industry trends to offer cutting-edge solutions.",
                      "We prioritize our clients' success, focusing on long-term partnerships and measurable results.",
                      "We simplify business operations, helping clients save time and resources.",
                      "We work closely with clients and partners to create solutions that drive mutual success.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
      {/* Timeline  */}
      <section
        id="benefits"
        className="py-24 section-primary relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full z-0">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
            alt="Professional business consultation"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background to-background" />
        </div>
        <FadeIn className="container mx-auto px-6 z-10 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From a small idea to a full digital transformation agency — here’s
              how we got here.
            </p>
          </div>

          <div className="relative border-l-4 border-primary ml-6 space-y-10">
            {[
              {
                year: "2022",
                title: "The Beginning",
                text: "McRay Tech Services was founded with a simple mission: simplify technology for small and medium businesses.",
              },
              {
                year: "2023",
                title: "Expanding Services",
                text: "We added branding, automation, and integrated marketing services to provide unified solutions.",
              },
              {
                year: "2024",
                title: "Team Growth",
                text: "Our team expanded to include experts across design, development, marketing, and operations.",
              },
              {
                year: "2025",
                title: "Scaling Impact",
                text: "We achieved 100+ completed projects and supported businesses across multiple industries.",
              },
            ].map((item, i) => (
              <div key={i} className="ml-6 group">
                <div className="absolute -left-4 w-8 h-8 bg-primary rounded-full border-4 border-primary"></div>
                <h3 className="font-display text-2xl md:text-2xl font-bold gradient-text inline-block group-hover:scale-105 transition-transform duration-300 mb-2">
                  {item.year}
                </h3>
                <h4 className="text-xl font-medium text-primary group-hover:scale-95 transition-transform duration-300 mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground group-hover:scale-95 transition-transform duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <FadeIn className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A group of creative strategists, developers, and innovators
              committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {Team.map((member, i) => (
              <div
                key={i}
                className="floating-card p-8 rounded-2xl text-center hover-lift"
              >
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 bg-muted">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                      No Photo
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
};

export default About;
