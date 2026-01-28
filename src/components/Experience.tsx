import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    organization: "Varak Welfare Society",
    period: "November 2025 - Present",
    description: "Developing and maintaining web applications, building responsive UI components and enhancing user experience.",
    tags: ["React", "Frontend Development", "Web Development"],
  },
  {
    title: "Project Administrator",
    organization: "GirlScript Summer of Code",
    period: "July - September 2025",
    description: "Leading project coordination and community engagement for one of India's largest open-source programs.",
    tags: ["Leadership", "Open Source", "Community"],
  },
  {
    title: "Project Administrator",
    organization: "Social Summer of Code",
    period: "June - July 2025",
    description: "Managing projects and fostering collaboration within the Script Foundation community.",
    tags: ["Project Management", "Collaboration", "Technical"],
  },
  {
    title: "Executive Member",
    organization: "Lingua Franca JSSATE",
    period: "January 2025 - Present",
    description: "Contributing to technical initiatives and student engagement activities.",
    tags: ["Technical Events", "Student Development", "Engagement"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Building leadership and technical expertise through active involvement in open-source communities 
            and student organizations
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.organization}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
