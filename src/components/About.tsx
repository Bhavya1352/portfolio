import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="bg-primary/10 p-6 rounded-3xl rounded-tl-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing a Bachelor's in Electronics and Communication at JSS Noida, 
                discovering a strong passion for web development. From designing simple layouts to 
                building interactive web pages, I truly enjoy the creative and problem-solving process.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Excited to connect, collaborate, and grow together in the world of tech!
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Currently Studying</p>
                  <p className="text-sm text-muted-foreground">Electronics & Communication Engineering</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6 animate-slide-up">
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 border-border/50">
              <h3 className="text-xl font-semibold mb-3 text-primary">Creative Problem-Solving</h3>
              <p className="text-muted-foreground">
                Approaching challenges with innovative thinking and finding elegant solutions through code
              </p>
            </Card>
            
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 border-border/50">
              <h3 className="text-xl font-semibold mb-3 text-accent">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Constantly expanding skills and staying current with emerging web development technologies
              </p>
            </Card>
            
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 border-border/50">
              <h3 className="text-xl font-semibold mb-3 text-primary">Collaborative Spirit</h3>
              <p className="text-muted-foreground">
                Building meaningful connections and working together to create impactful digital experiences
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
