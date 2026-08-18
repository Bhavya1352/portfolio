import { useEffect, useRef } from "react";
import { Trophy, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const achievements = [
  {
    title: "First Place Winner",
    event: "IronLabs AI Hackathon 2026",
    track: "GTM Track",
    period: "2026",
    description:
      "Won First Place for outstanding performance, innovative thinking, and exceptional contribution in the AI Hackathon. Recognized for creativity, dedication, and innovative spirit.",
    tags: ["AI", "Hackathon", "Innovation", "GTM"],
    badge: "First Place",
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
            toggleActions: "play none none none",
          },
        }
      );

      // Card anim
      gsap.fromTo(
        ".achievement-card",
        { y: 50, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".achievements-list",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Trophy watermark float
      gsap.to(".trophy-watermark", {
        y: -12,
        rotation: 3,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });



      // Floating orbs
      gsap.utils.toArray<HTMLElement>(".ach-orb").forEach((orb, i) => {
        gsap.to(orb, {
          y: `random(-20, 20)`,
          x: `random(-15, 15)`,
          duration: 4 + i,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="py-8 xs:py-10 sm:py-14 md:py-20 lg:py-28 xl:py-32 px-2 xs:px-3 sm:px-4 md:px-6 relative overflow-hidden bg-card/25 dot-bg"
    >
      {/* Decorative background orbs */}
      <div className="ach-orb absolute top-12 xs:top-14 sm:top-16 right-[5%] xs:right-[8%] sm:right-[10%] w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #E6381A, transparent 70%)" }}
      />
      <div className="ach-orb absolute bottom-8 xs:bottom-10 sm:bottom-10 left-[3%] xs:left-[4%] sm:left-[5%] w-24 h-24 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #F3A495, transparent 70%)" }}
      />

      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="achievements-heading mb-6 xs:mb-8 sm:mb-10 md:mb-14 lg:mb-16">
          <div className="inline-block border-2 border-primary/30 bg-card/80 px-3 xs:px-4 sm:px-4 py-1.5 xs:py-2">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-light tracking-tight text-foreground flex items-center gap-2 xs:gap-2 sm:gap-3">
              <span className="font-serif italic font-semibold text-primary">Achievements</span>
              <Trophy className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary animate-pulse" />
            </h2>
          </div>
        </div>

        <div className="achievements-list">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="achievement-card group relative rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            >
              {/* Gradient left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 xs:w-1.5 sm:w-1.5 md:w-2 z-10"
                style={{ background: "linear-gradient(180deg, #E6381A 0%, #F3A495 50%, #A32812 100%)" }}
              />

              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[1]"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(230,56,26,0.04) 45%, rgba(230,56,26,0.08) 50%, rgba(230,56,26,0.04) 55%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s ease-in-out infinite",
                }}
              />

              <div className="relative bg-card border border-border/70 rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                {/* Trophy watermark */}
                <div className="trophy-watermark absolute -right-3 xs:-right-3 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] xs:opacity-[0.04] sm:opacity-[0.04] md:opacity-[0.06]">
                  <Trophy className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 text-primary" strokeWidth={1} />
                </div>

                <div className="relative z-[2] space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
                  {/* Badge row */}
                  <div className="flex flex-wrap items-center gap-2 xs:gap-2.5 sm:gap-3">
                    <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full border border-primary/30"
                      style={{ background: "linear-gradient(135deg, rgba(230,56,26,0.12), rgba(243,164,149,0.08))" }}
                    >
                      <Sparkles className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-primary" />
                      <span className="text-[9px] xs:text-[10px] sm:text-xs uppercase font-extrabold text-primary tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                    <span className="text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground/70">
                      {item.track} &middot; {item.period}
                    </span>
                  </div>

                  {/* Title & event */}
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 max-w-2xl">
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-primary/80">
                      {item.event}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-2.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 rounded-lg bg-background border border-border/80 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
