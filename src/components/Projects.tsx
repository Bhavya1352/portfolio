import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap } from "lucide-react";

const projects = [
  {
    title: "Quiz App",
    description: "A fun and interactive quiz application built with React. Test your knowledge on a variety of topics with this engaging and responsive web app.",
    link: "https://quiz-app-delta-pearl-16.vercel.app/",
    tech: ["React", "JavaScript", "CSS3"],
  },
  {
    title: "Event Maker Site",
    description: "A comprehensive web platform designed to streamline event creation and management. It offers organizers tools for customizable event pages, attendee tracking, and secure payment processing, ensuring a seamless experience from setup to execution.",
    link: "https://event-maker-site.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Mini Paint",
    description: "Vivid Sketchpad is a web-based drawing application enabling users to create freehand digital art. It offers a customizable canvas with adjustable brush sizes and colors, and the functionality to save creations as image files.",
    link: "https://vivid-sketchpad.vercel.app/",
    tech: ["Canvas API", "JavaScript", "HTML5"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-0 neural-grid opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary font-extrabold">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full pulse-glow" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group p-6 neural-border card-3d flex flex-col relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/20 to-transparent" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 w-fit">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex gap-1">
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-primary group-hover:neon-text transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mt-4 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="w-full neural-border hover:neural-glow group-hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </a>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;