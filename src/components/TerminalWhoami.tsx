import { useEffect, useRef, useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TerminalWhoami = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [typedOutput, setTypedOutput] = useState("");

  const terminalOutput = [
    { label: "Name", value: "Bhavya Mishra" },
    { label: "Role", value: "Frontend Developer & Open Source Enthusiast" },
    { label: "Location", value: "Noida, India 🇮🇳" },
    { label: "Education", value: "B.Tech ECE, JSSATE Noida" },
    { label: "Current Focus", value: "React, TypeScript, Building Cool Stuff" },
    { label: "Fun Fact", value: "I debug my dreams sometimes 😅" },
    { label: "Coffee Status", value: "☕ Always running low" },
    { label: "Bug Count", value: "∞ (but I fix them... eventually)" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Terminal container animation
      gsap.fromTo(
        ".terminal-container",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".terminal-container",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Typing animation for output
      gsap.fromTo(
        ".terminal-line",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".terminal-output",
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = () => {
    const text = terminalOutput.map(item => `${item.label}: ${item.value}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" ref={sectionRef} className="py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-2 xs:px-3 sm:px-4 md:px-6 bg-card/25 dot-bg relative border-b border-border/40">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <div className="mb-6 xs:mb-8 sm:mb-10 md:mb-14">
          <div className="inline-block border-2 border-primary/30 bg-card/80 px-4 py-2">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-foreground">
              Terminal <span className="font-serif italic font-bold text-foreground">Whoami</span>
            </h2>
          </div>
        </div>

        {/* Terminal Container */}
        <div className="terminal-container max-w-3xl mx-auto">
          <div className="rounded-xl bg-[#0d1117] border border-border/60 shadow-2xl overflow-hidden">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3 xs:px-4 py-2 xs:py-3 bg-[#161b22] border-b border-border/40">
              <div className="flex items-center gap-1.5 xs:gap-2">
                <div className="flex gap-1 xs:gap-1.5">
                  <span className="w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] xs:text-xs font-mono text-muted-foreground ml-1 xs:ml-2">bhavya@portfolio:~</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 xs:gap-1.5 px-1.5 xs:px-2 py-1 rounded bg-primary/10 hover:bg-primary/20 text-primary text-[9px] xs:text-[10px] font-mono transition-colors"
              >
                {copied ? <Check className="w-2.5 h-2.5 xs:w-3 h-3" /> : <Copy className="w-2.5 h-2.5 xs:w-3 h-3" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-3 xs:p-4 sm:p-6 font-mono text-xs xs:text-sm">
              {/* Command */}
              <div className="flex items-center gap-1.5 xs:gap-2 mb-3 xs:mb-4">
                <span className="text-green-400">$</span>
                <span className="text-foreground">whoami</span>
              </div>

              {/* Output */}
              <div className="terminal-output space-y-1.5 xs:space-y-2 text-muted-foreground">
                {terminalOutput.map((item, index) => (
                  <div
                    key={index}
                    className="terminal-line flex gap-2 xs:gap-3 py-1"
                  >
                    <span className="text-blue-400 min-w-[80px] xs:min-w-[100px] sm:min-w-[120px]">
                      {item.label}:
                    </span>
                    <span className="text-foreground text-[10px] xs:text-xs sm:text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Prompt */}
              <div className="flex items-center gap-1.5 xs:gap-2 mt-3 xs:mt-4 pt-3 xs:pt-4 border-t border-border/30">
                <span className="text-green-400">$</span>
                <span className="text-muted-foreground animate-pulse">_</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TerminalWhoami;
