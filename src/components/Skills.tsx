import { Card } from "@/components/ui/card";
import { Code2, GitBranch, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Front-End Development",
    description: "Building responsive and interactive user interfaces with modern web technologies",
    color: "text-primary",
    bgColor: "bg-primary/10",
    nodes: 85,
  },
  {
    icon: GitBranch,
    title: "Git Version Control",
    description: "Managing code repositories and collaborating effectively with development teams",
    color: "text-accent",
    bgColor: "bg-accent/10",
    nodes: 92,
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Leading projects and coordinating teams to achieve collaborative goals",
    color: "text-primary",
    bgColor: "bg-primary/10",
    nodes: 78,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-card/30 relative">
      <div className="absolute inset-0 neural-grid opacity-10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="text-primary font-extrabold">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full pulse-glow" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Passionate about front-end development with hands-on experience in modern web technologies 
            and version control systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="group p-8 neural-border card-3d relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>
                
                <div className={`w-16 h-16 ${skill.bgColor} neural-border rounded-xl flex items-center justify-center mb-6 group-hover:neural-glow transition-all duration-300 relative`}>
                  <Icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/10 rounded-xl" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:neon-text transition-all duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {skill.description}
                </p>
                

                
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
                
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${index * 0.5}s` }} />
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: `${index * 0.7}s` }} />
              </Card>
            );
          })}
        </div>
        
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Skills;