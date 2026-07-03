import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: 3, suffix: "+", label: "Projects Built" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 1, suffix: "st", label: "Hackathon Win" },
  { value: 500, suffix: "+", label: "GitHub Contributions" },
];

const AnimatedCounter = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible, target]);

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tabular-nums">
      {count}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

const Stats = () => {
  const heading = useScrollReveal();
  const items = stats.map(() => useScrollReveal({ threshold: 0.2 }));

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div ref={heading.ref} className={`mb-10 md:mb-14 text-center reveal-card ${heading.isVisible ? 'visible' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Quick <span className="text-gradient">Stats</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary/60 mt-3 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={items[i].ref}
              className={`text-center p-6 sm:p-8 rounded-xl bg-card/50 border border-border/40 hover:border-primary/30 transition-all reveal-card ${items[i].isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={items[i].isVisible} />
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
