import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Pin, Sparkles, FolderGit2 } from "lucide-react";
import gsap from "gsap";

const techStack = [
  "React", "TypeScript", "JavaScript", "Tailwind CSS",
  "Next.js", "Node.js", "Git", "HTML5", "CSS3", "Vercel",
];

// Helper component for syntax highlighted typing code editor
const TypewrittenCode = () => {
  const [typedText, setTypedText] = useState<string>("");
  const fullText = `const developer = {
  name: "Bhavya Mishra",
  role: "Web Developer",
  skills: {
    react: true,
    typescript: true,
    tailwindcss: true
  },
  lovesCoding: true
};`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTypedText(fullText); // ensure complete code is set at end
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <pre className="font-mono text-xs sm:text-sm leading-relaxed text-zinc-600 p-4 select-none whitespace-pre-wrap overflow-hidden text-left">
      <code>
        {/* We format the typing string dynamically with colors */}
        {typedText.split("\n").map((line, idx) => {
          // Color formatting logic for visual syntax highlighting
          if (line.includes("const")) {
            return (
              <div key={idx}>
                <span className="text-[#E26D8A] font-medium">const</span>{" "}
                <span className="text-zinc-800 font-medium">developer</span> ={" "}
                <span className="text-zinc-500">{"{"}</span>
              </div>
            );
          }
          if (line.includes("name:")) {
            return (
              <div key={idx}>
                {"  "}
                <span className="text-[#E26D8A]/80 font-medium">name</span>:{" "}
                <span className="text-[#A63A50] font-medium">"Bhavya Mishra"</span>,
              </div>
            );
          }
          if (line.includes("role:")) {
            return (
              <div key={idx}>
                {"  "}
                <span className="text-[#E26D8A]/80 font-medium">role</span>:{" "}
                <span className="text-[#A63A50] font-medium">"Web Developer"</span>,
              </div>
            );
          }
          if (line.includes("skills:")) {
            return (
              <div key={idx}>
                {"  "}
                <span className="text-[#E26D8A]/80 font-medium">skills</span>:{" "}
                <span className="text-zinc-500">{"{"}</span>
              </div>
            );
          }
          if (line.includes("react:")) {
            return (
              <div key={idx}>
                {"    "}
                <span className="text-[#E26D8A]/80 font-medium">react</span>:{" "}
                <span className="text-primary font-semibold">true</span>,
              </div>
            );
          }
          if (line.includes("typescript:")) {
            return (
              <div key={idx}>
                {"    "}
                <span className="text-[#E26D8A]/80 font-medium">typescript</span>:{" "}
                <span className="text-primary font-semibold">true</span>,
              </div>
            );
          }
          if (line.includes("tailwindcss:")) {
            return (
              <div key={idx}>
                {"    "}
                <span className="text-[#E26D8A]/80 font-medium">tailwindcss</span>:{" "}
                <span className="text-primary font-semibold">true</span>
              </div>
            );
          }
          if (line.includes("  },") || (line.trim() === "}," && idx === 8)) {
            return (
              <div key={idx}>
                {"  "}
                <span className="text-zinc-500">{"},"}</span>
              </div>
            );
          }
          if (line.includes("lovesCoding:")) {
            return (
              <div key={idx}>
                {"  "}
                <span className="text-[#E26D8A]/80 font-medium">lovesCoding</span>:{" "}
                <span className="text-primary font-semibold">true</span>
              </div>
            );
          }
          if (line.includes("};")) {
            return (
              <div key={idx}>
                <span className="text-zinc-500">{"};"}</span>
              </div>
            );
          }
          // Default fall-back rendering during active typing lines
          return <div key={idx}>{line}</div>;
        })}
        <span className="inline-block w-1.5 h-4 ml-0.5 bg-primary animate-pulse" />
      </code>
    </pre>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);
  const rightWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered load entrance timeline
      const tl = gsap.timeline();

      // Initial fade in of the entire section
      tl.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Animate aurora blobs with a floating effect
      tl.fromTo(
        ".hero-aurora-blob",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out", stagger: 0.3 },
        "-=0.4"
      );

      // Dramatic entrance for hero elements
      tl.fromTo(
        ".hero-entrance-reveal",
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: "power4.out", stagger: 0.15 },
        "-=1.5"
      );

      // Left card with 3D rotation entrance
      tl.fromTo(
        leftCardRef.current,
        { scale: 0.5, opacity: 0, rotateY: -45, rotateX: 20, y: 100 },
        { scale: 1, opacity: 1, rotateY: 0, rotateX: 0, y: 0, duration: 1.8, ease: "elastic.out(1, 0.8)" },
        "-=1.2"
      );

      // Right wrap with 3D rotation entrance
      tl.fromTo(
        rightWrapRef.current,
        { scale: 0.5, opacity: 0, rotateY: 45, rotateX: -20, y: 100 },
        { scale: 1, opacity: 1, rotateY: 0, rotateX: 0, y: 0, duration: 1.8, ease: "elastic.out(1, 0.8)" },
        "-=1.6"
      );

      // Animate tech stack marquee
      tl.fromTo(
        ".marquee-track",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=1.0"
      );

      // Continuous floating animation for aurora blobs
      gsap.to(".hero-aurora-blob", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        scale: "random(0.95, 1.05)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });

      // 2. Interactive Mouse Parallax (Multi-layered offsets)
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xOffset = (clientX / window.innerWidth - 0.5);
        const yOffset = (clientY / window.innerHeight - 0.5);

        // Left column shifts opposite / distinct weight
        gsap.to(leftCardRef.current, {
          x: -xOffset * 40,
          y: -yOffset * 40,
          rotateY: -xOffset * 10,
          rotateX: yOffset * 10,
          duration: 0.8,
          ease: "power2.out"
        });

        // Center column text shifts lightly
        gsap.to(centerTextRef.current, {
          x: xOffset * 15,
          y: yOffset * 15,
          duration: 0.8,
          ease: "power2.out"
        });

        // Right column shifts with normal weight
        gsap.to(rightWrapRef.current, {
          x: xOffset * 35,
          y: yOffset * 35,
          rotateY: xOffset * 12,
          rotateX: -yOffset * 12,
          duration: 0.8,
          ease: "power2.out"
        });

        // Background glowing blobs shift with lag
        gsap.to(".hero-aurora-blob", {
          x: xOffset * 60,
          y: yOffset * 60,
          duration: 1.5,
          ease: "power1.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-fit md:min-h-screen aurora-bg grid-lines stars-overlay flex flex-col justify-between overflow-visible md:overflow-hidden py-8 sm:py-12 md:py-20"
    >
      {/* Cinematic glow blobs */}
      <div className="hero-aurora-blob absolute top-1/4 left-4 sm:left-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-primary/20 blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="hero-aurora-blob absolute bottom-10 right-4 sm:right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-accent/15 blur-[120px] sm:blur-[150px] pointer-events-none" />

      {/* Decorative center spotlight overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/40 to-background/80 pointer-events-none" />

      {/* Main Grid Wrapper */}
      <div className="container relative z-10 mx-auto max-w-7xl px-3 sm:px-4 md:px-6 flex-grow flex items-center pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center w-full">

          {/* LEFT: Floating VS Code Card */}
          <div className="md:col-span-3 flex justify-center order-2 md:order-1 pb-8 md:pb-0">
            <div
              ref={leftCardRef}
              className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] rounded-xl border border-primary/20 bg-card/80 backdrop-blur-xl shadow-2xl p-0.5 overflow-hidden group hover:border-primary/40 transition-colors duration-500"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card glossy lighting highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-primary/10 bg-card/50">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">developer.js</span>
                <div className="w-8" />
              </div>

              {/* Typed code body */}
              <TypewrittenCode />
            </div>
          </div>

          {/* CENTER: Typography, Description & Buttons */}
          <div
            ref={centerTextRef}
            className="md:col-span-6 text-center flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6 order-1 md:order-2 px-2 pb-8 md:pb-0"
          >
            {/* Pill Badge */}
            <div className="hero-entrance-reveal inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary">
                Open for new opportunities
              </span>
            </div>

            {/* Sub-heading label */}
            <p className="hero-entrance-reveal text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold text-primary/80">
              Designing Front-End Architectures
            </p>

            {/* Huge Serif Name */}
            <h1 className="hero-entrance-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-serif font-light tracking-tight text-foreground leading-[0.95]">
              Bhavya Mishra
            </h1>


            {/* Personal philosophy */}
            <p className="hero-entrance-reveal text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed max-w-md font-semibold px-2">
              I build fast, accessible, and intuitive web applications with React, TypeScript, and modern frontend technologies — focusing on performance, usability, and the details that make products feel polished.
            </p>

            {/* Buttons Row */}
            <div className="hero-entrance-reveal flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:bg-primary/80 transition-colors shadow-lg shadow-primary/20 magnetic-item w-full sm:w-auto"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-primary/20 hover:border-primary/50 text-foreground font-bold text-xs sm:text-sm transition-colors bg-card/50 backdrop-blur-sm magnetic-item w-full sm:w-auto"
              >
                Explore My Work
              </button>
            </div>

            {/* Social icons */}
            <div className="hero-entrance-reveal flex items-center gap-3 sm:gap-4 pt-4">
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
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-primary/20 bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all magnetic-item"
                  aria-label={s.label}
                >
                  <s.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Polaroid Image & Floating Experience Card */}
          <div className="md:col-span-3 flex flex-col items-center gap-4 sm:gap-6 order-3 pb-12 md:pb-0">
            <div ref={rightWrapRef} className="relative flex flex-col items-center w-full max-w-[240px] sm:max-w-[280px]">

              {/* Polaroid Frame */}
              <div className="relative w-full p-3 sm:p-4 pb-6 sm:pb-8 bg-card border border-primary/15 rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-2 left-2 text-zinc-700 opacity-60">
                  <Pin className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-12" />
                </div>

                {/* Photo container */}
                <div className="w-full aspect-square rounded-lg bg-background overflow-hidden mb-3 sm:mb-4 border border-primary/10">
                  <img
                    src="/PROFILE.jpg.jpeg"
                    alt="Bhavya Mishra Portrait"
                    className="w-full h-full object-cover brightness-95 contrast-125 transition-all duration-750"
                  />
                </div>

              </div>

              {/* Floating Experience Card below Polaroid */}
              <div className="absolute -bottom-8 sm:-bottom-10 -left-4 sm:-left-6 w-56 sm:w-64 p-3 sm:p-4 rounded-xl border border-primary/15 bg-card/90 backdrop-blur-md shadow-2xl flex items-center justify-between gap-2 sm:gap-3 hover:border-primary/40 transition-colors duration-500">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[9px] sm:text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Project Admin</h4>
                    <p className="text-[10px] sm:text-xs font-bold text-foreground mt-0.5">at SSOC & GSSOC</p>
                  </div>
                </div>
                <div className="px-1.5 sm:px-2 py-1 rounded bg-primary/15 border border-primary/25 text-[8px] sm:text-[9px] font-bold text-primary uppercase tracking-wider">
                  2025
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM: Tech Stack Marquee */}
      <div className="relative border-t border-primary/10 bg-background/60 backdrop-blur-[2px] py-4 overflow-hidden select-none">
        <div className="marquee-track">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="mx-8 text-[10px] uppercase font-bold tracking-widest text-muted-foreground flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {tech}
            </span>
          ))}
        </div>
        {/* Gradients to blend marquee edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Hero;
