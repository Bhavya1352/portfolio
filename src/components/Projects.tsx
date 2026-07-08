import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Quiz App",
    description:
      "Interactive quiz application with topic-based questions, score tracking, and a clean responsive interface.",
    link: "https://quiz-app-delta-pearl-16.vercel.app/",
    tech: ["React", "JavaScript", "CSS3"],
    image: "/quiz-app.png",
  },
  {
    title: "Mini Paint",
    description:
      "Browser-based drawing tool with adjustable brush sizes, color picker, and the ability to save artwork as images.",
    link: "https://paint-app-coral.vercel.app/",
    tech: ["Canvas API", "JavaScript", "HTML5"],
    image: "/mini-paint.png",
  },
  {
    title: "Event Maker",
    description:
      "Platform for creating and managing events with customizable pages, attendee tracking, and payment integration.",
    link: "https://event-site-beta.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/event-maker.png",
  },
  {
    title: "EventMappr",
    description:
      "Open-source platform to discover local events on the map. Find and share community events happening around you, connect with people who share your interests, and never miss out on what's happening nearby.",
    link: "https://eventmappr.vercel.app/",
    tech: ["React", "JavaScript", "Maps API"],
    image: "/eventmappr.png",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Rotate card up to 8 degrees based on mouse offset
      const rotateY = (x / (rect.width / 2)) * 8;
      const rotateX = -(y / (rect.height / 2)) * 8;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card flex flex-col rounded-xl bg-card border border-border/60 hover:border-primary/40 overflow-hidden shadow-lg select-none magnetic-item transition-colors duration-300"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Image container */}
      <div className="relative w-full aspect-video bg-muted overflow-hidden" style={{ transform: "translateZ(20px)" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col p-4 sm:p-6 flex-grow" style={{ transform: "translateZ(10px)" }}>
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-1.5 sm:px-2 py-0.5 rounded bg-primary/10 text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-base sm:text-lg font-serif font-bold text-foreground mb-1.5 sm:mb-2 hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow mb-3 sm:mb-5">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline group-hover:gap-2.5 transition-all mt-auto"
        >
          View Project
          <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading slide up
      gsap.fromTo(
        ".projects-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-heading",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Cards staggered reveal
      gsap.fromTo(
        ".project-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".project-grid",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 bg-card/25 dot-bg relative">
      <div className="container mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="projects-heading mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-foreground">
            Featured <span className="font-serif italic font-semibold text-primary">Projects</span>
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="project-grid grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
