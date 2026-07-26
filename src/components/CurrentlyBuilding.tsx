import { useEffect, useRef } from "react";
import { Zap, Rocket, Wrench } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const currentProjects = [
  {
    title: "Portfolio V2",
    status: "In Progress",
    description: "Rebuilding my portfolio with better animations and personal touches",
    tech: ["React", "TypeScript", "GSAP"],
    icon: Rocket
  },
  {
    title: "Open Source Contributions",
    status: "Active", 
    description: "Contributing to various React and frontend libraries",
    tech: ["GitHub", "TypeScript", "React"],
    icon: Zap
  },
  {
    title: "Learning Advanced Patterns",
    status: "Ongoing",
    description: "Deep diving into advanced React patterns and performance optimization",
    tech: ["React", "TypeScript", "Web Performance"],
    icon: Wrench
  }
];

const CurrentlyBuilding = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".building-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".building-heading",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        ".building-card",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".building-grid",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="currently-building" ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 bg-card/25 dot-bg relative border-b border-border/40">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <div className="building-heading mb-8 sm:mb-10 md:mb-14">
          <div className="inline-block border-2 border-primary/30 bg-card/80 px-4 py-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground">
              Currently <span className="font-sans font-bold text-primary">Building</span>
            </h2>
          </div>
        </div>

        {/* Building Grid */}
        <div className="building-grid grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.title}
              className="building-card group relative p-5 sm:p-6 rounded-2xl bg-card border border-border/80 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/25 mb-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-primary">
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-background border border-border/60 text-muted-foreground"
                  >
                    {tech}
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

export default CurrentlyBuilding;
