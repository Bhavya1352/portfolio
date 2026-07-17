import { useEffect, useRef, useState } from "react";
import { ExternalLink, BookOpen, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "AI Collaborative Code Editor",
    description:
      "Real-time collaborative code editor with AI-powered suggestions, syntax highlighting, and seamless team collaboration features.",
    link: "#",
    tech: ["React", "TypeScript", "AI/ML"],
    image: "/ai-code-editor.png",
    caseStudy: {
      problem: "Development teams often struggle with real-time collaboration and code consistency across different environments, leading to merge conflicts and reduced productivity.",
      solution: "I built an AI-powered collaborative code editor that enables real-time editing, intelligent code suggestions, and seamless team integration.",
      features: [
        "Real-time collaborative editing with live cursor tracking.",
        "AI-powered code suggestions and auto-completion.",
        "Syntax highlighting for multiple programming languages.",
        "Integrated chat and code review features."
      ]
    }
  },
  {
    title: "AI Travel Planner",
    description:
      "Intelligent travel planning application that uses AI to create personalized itineraries, suggest destinations, and optimize travel routes.",
    link: "#",
    tech: ["React", "Node.js", "AI/ML"],
    image: "/ai-travel-planner.png",
    caseStudy: {
      problem: "Travel planning is often time-consuming and overwhelming, with users struggling to find optimal routes, accommodations, and activities that match their preferences.",
      solution: "I developed an AI-powered travel planner that analyzes user preferences and generates personalized, optimized travel itineraries automatically.",
      features: [
        "AI-powered destination recommendations based on preferences.",
        "Automated itinerary generation with time optimization.",
        "Real-time flight and accommodation integration.",
        "Budget tracking and expense estimation."
      ]
    }
  },
  {
    title: "Event Maker",
    description:
      "Platform for creating and managing events with customizable pages, attendee tracking, and payment integration.",
    link: "https://event-site-beta.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/event-maker.webp",
    caseStudy: {
      problem: "Event organizers often struggle to find simple systems to create custom landing pages and register guests without high platform fees.",
      solution: "I built Event Maker to serve as a self-hosted alternative. It provides clean templates, simple guest registration, and dashboard overview metrics.",
      features: [
        "Custom event generation with landing page templates.",
        "Guest list management and database attendee registration.",
        "Comprehensive dashboard displaying RSVPs and event metrics.",
        "Secure backend REST API with structured MongoDB collections."
      ]
    }
  },
  {
    title: "EventMappr",
    description:
      "Open-source platform to discover local events on the map. Find and share community events happening around you, connect with people who share your interests, and never miss out on what's happening nearby.",
    link: "https://eventmappr.vercel.app/",
    tech: ["React", "JavaScript", "Maps API"],
    image: "/eventmappr.webp",
    caseStudy: {
      problem: "People often miss local events because standard directory listings are presented in textual feeds rather than geographic clusters that show proximity.",
      solution: "I created EventMappr to overlay local community meetups on interactive maps, letting users discover gatherings visually by neighborhood.",
      features: [
        "Interactive map interfaces featuring pinned event markers.",
        "Geographic filtering to locate meetups within specific radius scales.",
        "Community posting capabilities to allow local users to add pin events.",
        "Responsive routing and map synchronization using modern APIs."
      ]
    }
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className="project-card flex flex-col rounded-xl bg-card border border-border/60 hover:border-primary/40 overflow-hidden shadow-lg select-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      >
        {/* Image container */}
        <div className="relative w-full aspect-video bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content wrapper */}
        <CardContent className="flex flex-col p-4 sm:p-6 flex-grow">
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

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow mb-4 sm:mb-6 font-normal">
            {project.description}
          </p>

          <div className="flex items-center justify-between gap-3 mt-auto w-full">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Case Study
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              Live Site
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Case Study Dialog Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl w-[92vw] max-h-[85vh] overflow-y-auto rounded-2xl bg-card border border-border/80 p-5 sm:p-7 shadow-2xl">
          <DialogHeader className="text-left border-b border-border/50 pb-4 mb-4">
            <div className="flex flex-wrap gap-1 mb-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-primary/10 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <DialogTitle className="text-2xl font-serif font-bold text-foreground">
              {project.title} <span className="italic font-normal text-primary">Case Study</span>
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
              Deep dive into the problem, solution, and features of the project.
            </DialogDescription>
          </DialogHeader>

          {/* Details layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Visual Preview column */}
            <div className="md:col-span-5 space-y-4">
              <div className="rounded-xl overflow-hidden border border-border/60 aspect-video bg-muted shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:bg-primary/80 transition-colors shadow-md"
              >
                Launch Application
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Description columns */}
            <div className="md:col-span-7 space-y-4 text-left">
              {/* Problem Section */}
              <div className="space-y-1.5">
                <h4 className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-primary/80">The Challenge</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* Solution Section */}
              <div className="space-y-1.5">
                <h4 className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-primary/80">The Solution</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                  {project.caseStudy.solution}
                </p>
              </div>

              {/* Key Features Section */}
              <div className="space-y-2">
                <h4 className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-primary/80">Key Features</h4>
                <ul className="space-y-1.5">
                  {project.caseStudy.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground font-normal">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-foreground">
            Featured <span className="font-serif italic font-bold text-primary">Projects</span>
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
