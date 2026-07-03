import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "bhavyamishra698@gmail.com",
    href: "mailto:bhavyamishra698@gmail.com",
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "bhavya-mishra-7a3b09324",
    href: "https://linkedin.com/in/bhavya-mishra-7a3b09324",
    accent: "text-accent",
    bg: "bg-accent/10",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, India",
    href: null,
    accent: "text-primary",
    bg: "bg-primary/10",
  },
];

const Contact = () => {
  const heading = useScrollReveal();
  const cards = contactItems.map(() => useScrollReveal({ threshold: 0.1 }));
  const cta = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div ref={heading.ref} className={`mb-8 md:mb-12 text-center reveal-card ${heading.isVisible ? 'visible' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary/60 mt-3 rounded-full mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Whether it's a project idea, collaboration, or just a quick chat — I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl mx-auto mb-10">
          {contactItems.map((item, i) => (
            <div
              key={item.label}
              ref={cards[i].ref}
              className={`flex flex-col items-center text-center p-4 sm:p-5 rounded-xl bg-card border border-border/60 hover:border-primary/30 transition-colors reveal-scale ${cards[i].isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-3`}>
                <item.icon className={`w-5 h-5 ${item.accent}`} />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all text-center"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-foreground break-all text-center">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div ref={cta.ref} className={`text-center reveal-card ${cta.isVisible ? 'visible' : ''}`}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="mailto:bhavyamishra698@gmail.com">
              <Send className="mr-2 h-4 w-4" />
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
