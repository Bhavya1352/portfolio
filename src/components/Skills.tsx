import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Netlify", "VS Code"],
  },
  {
    title: "Concepts",
    items: ["Responsive Design", "REST APIs", "UI/UX", "Open Source"],
  },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading anim
      gsap.fromTo(
        ".skills-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-heading",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Card groups reveal
      gsap.fromTo(
        ".skill-group",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 bg-card/25 dot-bg relative border-b border-border/40">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <div className="skills-heading mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-foreground">
            Skills &amp; <span className="font-serif italic font-semibold text-primary">Tech Stack</span>
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group min-w-0">
              <h3 className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3 sm:mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl bg-background border border-border/80 text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default shadow-sm select-none hover-lift magnetic-item"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
