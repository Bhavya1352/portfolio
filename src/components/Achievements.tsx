import { useEffect, useRef } from "react";
import { Trophy, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "1st Place Winner",
    event: "IronLabs AI Hackathon 2026",
    track: "GTM Track",
    period: "2026",
    description:
      "Won 1st place for outstanding performance, innovative thinking, and exceptional contribution in the AI Hackathon. Recognized for creativity, dedication, and innovative spirit.",
    tags: ["AI", "Hackathon", "Innovation", "GTM"],
    badge: "1st Winner",
  },
];

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading anim
      gsap.fromTo(
        ".achievements-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".achievements-heading",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Card staggered anim
      gsap.fromTo(
        ".achievement-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".achievements-list",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={containerRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 relative overflow-hidden bg-card/25 dot-bg">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <div className="achievements-heading mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-foreground flex items-center gap-2 sm:gap-3">
            <span className="font-serif italic font-semibold text-primary">Achievements</span>
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
        </div>

        <div className="achievements-list grid grid-cols-1 gap-4 sm:gap-6">
          {achievements.map((item) => (
            <Card
              key={item.title}
              className="achievement-card group relative rounded-2xl bg-card border border-border/80 shadow-xl hover:border-primary/40 transition-colors duration-300 magnetic-item"
            >
              <CardContent className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4 sm:absolute sm:top-6 sm:right-6 sm:mb-0">
                  <div className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-primary tracking-wider">{item.badge}</span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="sm:pr-28">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-foreground leading-snug">{item.title}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-primary mt-1">{item.event}</p>
                  </div>

                  <p className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-muted-foreground">
                    {item.track} &middot; {item.period}
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1 rounded-lg bg-background border border-border/80 text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
