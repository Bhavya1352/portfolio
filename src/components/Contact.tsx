import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg px-2">
            I'm always excited to connect with fellow developers, explore new opportunities, 
            and collaborate on innovative projects. Whether you're looking for a passionate web 
            developer or want to discuss tech, let's grow together!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          <Card className="p-5 md:p-8 bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 animate-slide-up">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Email</h3>
                <a 
                  href="mailto:bhavyamishra698@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  bhavyamishra698@gmail.com
                </a>
              </div>
            </div>
          </Card>
          
          <Card className="p-5 md:p-8 bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/30 animate-slide-up">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/bhavya-mishra-7a3b09324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors break-all"
                >
                  linkedin.com/in/bhavya-mishra-7a3b09324
                </a>
              </div>
            </div>
          </Card>
          
          <Card className="p-5 md:p-8 bg-card hover:shadow-xl transition-all duration-300 border-border/50 md:col-span-2 animate-slide-up">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Location</h3>
                <p className="text-muted-foreground">Noida, Uttar Pradesh, India</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Open to remote opportunities and local collaborations
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-8 md:mt-12 text-center animate-slide-up">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 glow-primary"
            asChild
          >
            <a href="mailto:bhavyamishra698@gmail.com">
              <Send className="mr-2 h-5 w-5" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
