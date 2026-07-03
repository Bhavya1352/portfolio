import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const heading = useScrollReveal();
  const items = experiences.map(() => useScrollReveal({ threshold: 0.1 }));

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div ref={heading.ref} className={`mb-8 md:mb-12 reveal-card ${heading.isVisible ? 'visible' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border/60 ml-1 sm:ml-2 space-y-8 sm:space-y-10 pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <div key={i} ref={items[i].ref} className={`relative reveal-card ${items[i].isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 120}ms` }}>
              {/* Dot */}
              <div className="absolute -left-[calc(1.5rem+5px)] sm:-left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/80 ring-4 ring-background" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <span className="text-sm text-primary font-medium">{exp.organization}</span>
                </div>

                <p className="text-xs uppercase tracking-wider text-muted-foreground">{exp.period}</p>

                <p className="text-sm text-muted-foreground leading-relaxed break-words">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
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
