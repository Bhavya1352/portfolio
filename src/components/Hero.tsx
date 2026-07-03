import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const techStack = [
  "React", "TypeScript", "JavaScript", "Tailwind CSS",
  "Next.js", "Node.js", "Git", "HTML5", "CSS3", "Vercel",
];

const roles = ["Frontend Developer", "React Developer", "Open Source Contributor", "UI Enthusiast"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen overflow-x-hidden overflow-hidden hero-gradient-bg">

      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px] scale-105"
        style={{ backgroundImage: 'url(/hero-bg.avif)' }}
      />

      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-background/80 pointer-events-none" />

      {/* Subtle dot-grid texture */}
      <div className="absolute inset-0 hero-dot-grid opacity-20 pointer-events-none" />

      {/* Soft radial glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />

      {/* Main content */}
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-4 md:pt-28 min-h-screen flex flex-col w-full">

        {/* --- Top row: socials --- */}
        <div className="fade-up-stagger stagger-1 flex items-center justify-end mb-4 md:mb-0">
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/Bhavya1352", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/bhavya-mishra-7a3b09324", label: "LinkedIn" },
              { icon: Mail, href: "mailto:bhavyamishra698@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* --- Center: headline + photo --- */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-center">

            {/* Left — Headline */}
            <div className="space-y-2 sm:space-y-3 order-2 md:order-1 text-center md:text-left min-w-0">
              <p className="fade-up-stagger stagger-1 text-sm sm:text-base text-muted-foreground font-medium tracking-wide">
                Hi, I'm <span className="text-foreground font-semibold">Bhavya Mishra</span>
              </p>

              <h1 className="fade-up-stagger stagger-2 text-xl leading-tight sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight break-words">
                <span className="text-foreground">Crafting thoughtful </span>
                <span className="text-gradient">web experiences</span>
                <br className="hidden sm:block" />
                <span className="text-foreground">through code &amp; design.</span>
              </h1>

              <div className="fade-up-stagger stagger-3 flex items-center gap-3 justify-center md:justify-start min-w-0">
                <div className="w-8 h-px bg-primary/50 flex-shrink-0" />
                <p className="text-xs sm:text-base font-medium text-primary tracking-wide truncate">
                  {text}
                  <span className="animate-pulse ml-0.5 text-primary/60">|</span>
                </p>
              </div>

              <p className="fade-up-stagger stagger-4 text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed break-words px-2 sm:px-0 max-w-xl">
                I build fast, accessible, and intuitive web applications with React, TypeScript,
                and modern frontend technologies — focusing on performance, usability, and the
                details that make products feel polished.
              </p>

              {/* CTA + availability badge */}
              <div className="fade-up-stagger stagger-5 flex flex-col sm:flex-row items-center sm:items-center gap-3 pt-1 justify-center md:justify-start">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all shadow-lg shadow-foreground/10"
                >
                  Get in Touch
                  <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </button>

                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  <span className="text-[11px] font-medium text-accent">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Photo */}
            <div className="fade-up-stagger stagger-3 relative flex justify-center order-1 md:order-2 mb-4 md:mb-0">
              <div className="relative w-44 sm:w-56 md:w-64 lg:w-72 max-w-[75vw]">
                {/* Soft glow behind */}
                <div className="absolute -inset-6 bg-primary/10 rounded-full blur-3xl opacity-50" />

                {/* Photo with bottom fade */}
                <div className="relative hero-img-mask">
                  <img
                    src="/hero-image.jpg"
                    alt="Bhavya Mishra"
                    className="w-full rounded-2xl object-cover"
                    style={{ aspectRatio: '3/4' }}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom: tech stack marquee --- */}
        <div className="fade-up-stagger stagger-6 relative mt-4 md:mt-8 border-t border-border/30 pt-4 md:pt-6 overflow-hidden">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="mx-6 text-sm font-medium text-muted-foreground/60 whitespace-nowrap flex items-center gap-2 select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                {tech}
              </span>
            ))}
          </div>
          {/* Fade edges - gradient blend */}
          <div className="absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center pt-4 pb-2">
          <a
            href="#about"
            className="text-muted-foreground/40 hover:text-muted-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
