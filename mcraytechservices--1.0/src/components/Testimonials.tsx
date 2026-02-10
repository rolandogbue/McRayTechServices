import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  source: "google" | "trustpilot" | "yelp" | "facebook";
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    image: "/placeholder.svg",
    rating: 5,
    text: "Outstanding service! They transformed our business operations and helped us achieve 300% growth in just 6 months. Highly professional team.",
    source: "google",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Digital Wave",
    image: "/placeholder.svg",
    rating: 5,
    text: "The best investment we've made for our company. Their strategic approach and attention to detail is unmatched. Results speak for themselves!",
    source: "trustpilot",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "GrowthLab",
    image: "/placeholder.svg",
    rating: 5,
    text: "Exceptional expertise and incredible results. They understood our vision and executed perfectly. Our revenue doubled within the first quarter!",
    source: "google",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Operations Manager",
    company: "Innovate Co",
    image: "/placeholder.svg",
    rating: 5,
    text: "Professional, responsive, and results-driven. They exceeded all our expectations and delivered beyond what we thought possible.",
    source: "yelp",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Business Owner",
    company: "Elite Solutions",
    image: "/placeholder.svg",
    rating: 5,
    text: "A game-changer for our business! Their innovative strategies and hands-on approach made all the difference. Couldn't be happier!",
    source: "facebook",
    date: "2 months ago",
  },
];

const sourceLogos = {
  google: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  ),
  trustpilot: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="#00B67A"
      />
    </svg>
  ),
  yelp: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="#FF1A1A"
      />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        fill="#1877F2"
      />
    </svg>
  ),
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6 justify-center overflow-hidden">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge
              variant="outline"
              className="text-sm px-4 py-1 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              Client Success Stories
            </Badge>
          </div>
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with us.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Source Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          {sourceLogos[review.source]}
                          <span className="text-xs text-muted-foreground capitalize">
                            {review.source}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <div className="flex-grow mb-6 relative">
                        <Quote className="w-8 h-8 text-muted-foreground/20 absolute -top-2 -left-2" />
                        <p className="text-muted-foreground relative z-10 pl-6">
                          {review.text}
                        </p>
                      </div>

                      {/* Reviewer Info */}
                      <div className="flex items-center gap-3 pt-4 border-t">
                        <Avatar>
                          <AvatarImage src={review.image} alt={review.name} />
                          <AvatarFallback>
                            {review.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm">{review.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {review.role}, {review.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            {sourceLogos.google}
            <span className="text-sm font-medium">4.9/5 on Google</span>
          </div>
          <div className="flex items-center gap-2">
            {sourceLogos.trustpilot}
            <span className="text-sm font-medium">Excellent on Trustpilot</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">500+ 5-Star Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
