import { Badge } from "@/components/ui/badge";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";

import {
  Network,
  Clock,
  Activity,
  TrendingUp,
  Coins,
  Handshake,
  Sprout,
  User,
} from "lucide-react";

const TheProblem = () => {
  const problems = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Too Many Vendors",
      description:
        "Web agency here, marketing freelancer there, IT guy somewhere else. No one is accountable for the full picture.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Lost to Admin",
      description:
        "Manual follow-ups, disconnected tools, and repetitive tasks eat hours every week that should go toward serving clients.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Inconsistent Online Presence",
      description:
        "A dated website, low visibility, and no clear digital strategy means prospects go elsewhere — often to competitors.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Rising Cost, Unclear ROI",
      description:
        "Marketing and tech spending adds up fast with little visibility into what's actually driving results.",
    },
  ];

  return (
    <section
      id="problems"
      className="py-32 section-primary relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              THE CHALLENGE
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Running a business is complex.
              <span className="gradient-text">
                {" "}
                Your tech stack shouldn't cost the planet.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Most small and medium businesses are losing time, money, and
              momentum — juggling too many vendors, paying for tools that don't
              connect, and locked into systems that don't scale. <br /> There's
              a better way to grow.
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid sm:grid-cols-2 gap-6"
            staggerDelay={0.1}
          >
            {problems.map((problem, index) => (
              <StaggerItem key={index}>
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1 gradient-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow group-hover:rotate-3">
                    {problem.icon}
                  </div>

                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
