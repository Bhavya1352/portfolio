import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Bhavya Mishra. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:bhavyamishra698@gmail.com"
            className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-primary" />
          </a>
          <a
            href="https://linkedin.com/in/bhavya-mishra-7a3b09324"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-accent" />
          </a>
          <a
            href="https://github.com/Bhavya1352"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
