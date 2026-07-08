import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    title: "Frontend Intern",
    organization: "Naya Growth",
    period: "May 2026 – Present",
    description:
      "Improved page layout, responsiveness, and UI consistency. Built reusable React components and collaborated with the team on new frontend features.",
    tags: ["React", "UI/UX", "Frontend"],
  },
  {
    title: "Frontend Intern",
    organization: "Varak Welfare Society",
    period: "Nov 2025 – Mar 2026",
    description:
      "Developed and maintained web applications, built responsive UI components, and enhanced the overall user experience.",
    tags: ["React", "Frontend Development"],
  },
  {
    title: "Project Administrator",
    organization: "GirlScript Summer of Code",
    period: "Jul – Sep 2025",
    description:
      "Led project coordination and community engagement for one of India's largest open-source programs.",
    tags: ["Open Source", "Leadership"],
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading anim
      gsap.fromTo(
        ".experience-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".experience-heading",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // List item staggered reveal
      gsap.fromTo(
        ".experience-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".experience-list",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <div className="experience-heading mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-foreground">
            Professional <span className="font-serif italic font-semibold text-primary">Experience</span>
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="experience-list relative border-l border-border/60 ml-1 sm:ml-2 space-y-8 sm:space-y-10 pl-5 sm:pl-6 md:pl-10">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-item relative group">
              {/* Dot decoration */}
              <div className="absolute -left-[calc(1.25rem+5px)] sm:-left-[calc(1.5rem+6px)] md:-left-[calc(2.5rem+6px)] top-2 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-primary/80 ring-4 ring-background transition-transform duration-300 group-hover:scale-125" />

              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 gap-y-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold text-foreground transition-colors group-hover:text-primary">{exp.title}</h3>
                  <span className="text-xs sm:text-sm font-semibold text-primary/80">{exp.organization}</span>
                </div>

                <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground">{exp.period}</p>

                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider bg-secondary text-secondary-foreground">
                      {tag}
                    </Badge>
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

export default Experience;
