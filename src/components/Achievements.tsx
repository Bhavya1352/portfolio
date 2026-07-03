import { Trophy, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const heading = useScrollReveal();
  const cards = achievements.map(() => useScrollReveal({ threshold: 0.1 }));

  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div ref={heading.ref} className={`mb-8 md:mb-12 reveal-card ${heading.isVisible ? 'visible' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-gradient">Achievements</span> <span className="text-2xl sm:text-3xl">🏆</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              ref={cards[i].ref}
              className={`group relative p-5 sm:p-8 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-all reveal-card ${cards[i].isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Winner badge */}
              <div className="flex items-center gap-2 mb-4 sm:absolute sm:top-6 sm:right-6 sm:mb-0">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30">
                  <Trophy className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-bold text-primary">{item.badge}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{item.title}</h3>
                  <span className="text-sm text-primary font-medium">{item.event}</span>
                </div>

                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {item.track} &middot; {item.period}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed break-words">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
