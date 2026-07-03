import { GraduationCap, MapPin, Code2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const heading = useScrollReveal();
  const bio = useScrollReveal({ threshold: 0.1 });
  const facts = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section heading */}
        <div ref={heading.ref} className={`mb-8 md:mb-12 reveal-card ${heading.isVisible ? 'visible' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Left – bio */}
          <div ref={bio.ref} className={`md:col-span-3 min-w-0 reveal-left ${bio.isVisible ? 'visible' : ''}`}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a B.Tech student in Electronics & Communication at JSS Academy of
              Technical Education, Noida, with a deep passion for frontend web development.
              I enjoy turning ideas into clean, interactive interfaces and constantly push
              myself to learn new tools and techniques.
            </p>
            <p>
              Outside of coursework, I'm actively involved in open-source communities,
              having served as a Project Administrator for GirlScript Summer of Code and
              Social Summer of Code. I love collaborating with other developers and
              contributing to projects that make an impact.
            </p>
            <p>
              Currently interning as a Frontend Developer at Naya Growth, where I build
              reusable React components and improve UI consistency across products.
            </p>
            </div>
          </div>

          {/* Right – quick facts */}
          <div ref={facts.ref} className={`md:col-span-2 min-w-0 reveal-right ${facts.isVisible ? 'visible' : ''}`}>
            <div className="p-4 sm:p-5 rounded-xl bg-card border border-border/60 space-y-4">
              {[
                { icon: GraduationCap, label: "Studying", value: "ECE, JSSATE Noida" },
                { icon: MapPin, label: "Based in", value: "Noida, India" },
                { icon: Code2, label: "Focus", value: "Frontend / React" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
