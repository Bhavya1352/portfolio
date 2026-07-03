import { useScrollReveal } from "@/hooks/useScrollReveal";

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
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    title: "Concepts",
    items: ["Responsive Design", "REST APIs", "UI/UX", "Open Source"],
  },
];

const Skills = () => {
  const heading = useScrollReveal();
  const cards = skillGroups.map(() => useScrollReveal({ threshold: 0.1 }));

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-card/40">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div ref={heading.ref} className={`mb-8 md:mb-12 reveal-card ${heading.isVisible ? 'visible' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <div key={group.title} ref={cards[i].ref} className={`min-w-0 reveal-card ${cards[i].isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-background border border-border/60 text-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
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
