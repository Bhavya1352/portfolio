import { Mail, Linkedin, Github } from "lucide-react";

const socials = [
  { icon: Mail, href: "mailto:bhavyamishra698@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/bhavya-mishra-7a3b09324", label: "LinkedIn", external: true },
  { icon: Github, href: "https://github.com/Bhavya1352", label: "GitHub", external: true },
];

const Footer = () => {
  return (
    <footer className="py-4 xs:py-5 sm:py-6 md:py-8 px-3 xs:px-4 sm:px-6 border-t border-border/60">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-3 xs:gap-4">
        <p className="text-[10px] xs:text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bhavya Mishra
        </p>

        <div className="flex items-center gap-2 xs:gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              className="w-7 h-7 xs:w-8 xs:h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              aria-label={s.label}
            >
              <s.icon className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
