import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Quiz App",
    description:
      "Interactive quiz application with topic-based questions, score tracking, and a clean responsive interface.",
    link: "https://quiz-app-delta-pearl-16.vercel.app/",
    tech: ["React", "JavaScript", "CSS3"],
  },
  {
    title: "Event Maker",
    description:
      "Platform for creating and managing events with customizable pages, attendee tracking, and payment integration.",
    link: "https://event-site-beta.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Mini Paint",
    description:
      "Browser-based drawing tool with adjustable brush sizes, color picker, and the ability to save artwork as images.",
    link: "https://paint-app-coral.vercel.app/",
    tech: ["Canvas API", "JavaScript", "HTML5"],
  },
];

const Projects = () => {
  const heading = useScrollReveal();
  const cards = projects.map(() => useScrollReveal({ threshold: 0.1 }));

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-card/40">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div ref={heading.ref} className={`mb-8 md:mb-12 reveal-card ${heading.isVisible ? 'visible' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={cards[i].ref}
              className={`group flex flex-col p-6 rounded-xl bg-background border border-border/60 hover:border-primary/40 hover-lift reveal-scale ${cards[i].isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-5">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                View Project
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
