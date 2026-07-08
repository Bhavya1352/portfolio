import { useEffect, useRef } from "react";
import { GraduationCap, MapPin, Code2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading slide up
      gsap.fromTo(
        ".about-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-heading",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Bio left slide
      gsap.fromTo(
        ".about-bio",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-bio",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Facts right slide
      gsap.fromTo(
        ".about-facts",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-facts",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="about-heading mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-foreground">
            Beyond the <span className="font-serif italic font-semibold text-primary">Resume</span>
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-primary/60 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Left – bio */}
          <div className="about-bio md:col-span-3 min-w-0 order-2 md:order-1">
            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base font-medium">
              <p className="text-foreground font-serif italic text-base sm:text-lg md:text-xl">
                Behind every clean UI is a commit history I'd rather not show you.
              </p>
              <p>
                Hi, I'm Bhavya. What started as curiosity about how websites work
                slowly turned into something I genuinely enjoy doing every day.
                I'm the kind of person who keeps tweaking a design until it feels
                right, even if nobody notices the tiny details.
              </p>
              <p>
                I'm currently pursuing a B.Tech in Electronics &amp; Communication
                at JSS Academy of Technical Education, Noida. Most of my time goes
                into building projects with React, Next.js, and modern frontend
                technologies, exploring new ideas, and constantly improving the
                way I write code.
              </p>
              <p>
                Beyond personal projects, I've been actively involved in open source,
                serving as a Project Administrator for GirlScript Summer of Code and
                Social Summer of Code. Those experiences taught me that great software
                isn't just about writing code — it's about collaborating, learning from
                others, and building things that people genuinely find useful.
              </p>
            </div>
          </div>

          {/* Right – quick facts */}
          <div className="about-facts md:col-span-2 min-w-0 order-1 md:order-2">
            <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border/85 shadow-xl space-y-4 sm:space-y-5">
              {[
                { icon: GraduationCap, label: "Studying", value: "ECE, JSSATE Noida" },
                { icon: MapPin, label: "Based in", value: "Noida, India" },
                { icon: Code2, label: "Focus", value: "Frontend / React" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 sm:gap-4 hover-lift magnetic-item">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/25">
                    <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{item.label}</p>
                    <p className="text-xs sm:text-sm md:text-base font-bold text-foreground mt-0.5">{item.value}</p>
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
