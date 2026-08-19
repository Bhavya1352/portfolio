import { useEffect, useRef } from "react";
import { ArrowUpRight, Linkedin } from "lucide-react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Fade in container
      tl.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      // Slide in content from left
      tl.fromTo(
        contentRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );

      // Gentle entrance for image from right
      tl.fromTo(
        imageRef.current,
        { x: 40, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16 xs:pt-18 sm:pt-20 md:pt-24 lg:pt-26 xl:pt-28 pb-8 xs:pb-10 sm:pb-12 md:pb-16 lg:pb-18 xl:pb-20 overflow-hidden"
      style={{ backgroundColor: '#F5E6E2' }}
    >
      {/* Warm accent blob in background */}
      <div className="absolute top-1/4 right-0 w-[300px] xs:w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-primary/10 rounded-full blur-[80px] xs:blur-[90px] sm:blur-[100px] md:blur-[110px] lg:blur-[120px] xl:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[250px] xs:w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] bg-primary/5 rounded-full blur-[60px] xs:blur-[70px] sm:blur-[80px] md:blur-[90px] lg:blur-[100px] xl:blur-[110px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Large rounded card container */}
        <div className="relative bg-card/80 backdrop-blur-sm rounded-[1.5rem] xs:rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] xl:rounded-[3.5rem] p-4 xs:p-5 sm:p-6 md:p-8 lg:p-12 xl:p-16 border border-border/40 shadow-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-center">

            {/* LEFT: Main Content */}
            <div ref={contentRef} className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9">
              {/* Small label */}
              <div className="inline-block">
                <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold text-primary tracking-widest uppercase">
                  Frontend Developer
                </span>
              </div>

              {/* Large headline */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-foreground leading-[1.1] tracking-tight">
                Hi, I'm<br />
                <span className="text-foreground/90">Bhavya Mishra.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                I make websites, care about the details, and occasionally <span className="whitespace-nowrap">argue with CSS.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-5 pt-2 xs:pt-3 sm:pt-4">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-4 xs:px-5 sm:px-5 md:px-6 lg:px-6 xl:px-7 py-2 xs:py-2.5 sm:py-3 md:py-3 lg:py-3 xl:py-3.5 bg-primary text-primary-foreground rounded-full font-medium text-[11px] xs:text-xs sm:text-sm md:text-sm lg:text-base hover:bg-primary/90 transition-all hover:-translate-y-0.5"
                >
                  Projects
                </button>

                <a
                  href="https://linkedin.com/in/bhavya-mishra-7a3b09324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 xs:px-5 sm:px-5 md:px-6 lg:px-6 xl:px-7 py-2 xs:py-2.5 sm:py-3 md:py-3 lg:py-3 xl:py-3.5 border border-border text-foreground rounded-full font-medium text-[11px] xs:text-xs sm:text-sm md:text-sm lg:text-base hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-0.5"
                >
                  LinkedIn
                  <Linkedin className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </a>
              </div>
            </div>

            {/* RIGHT: Organic image composition */}
            <div ref={imageRef} className="relative flex justify-center lg:justify-end mt-6 xs:mt-7 sm:mt-8 md:mt-10 lg:mt-0 xl:mt-0">
              {/* Organic blob shape behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] xs:w-[200px] sm:w-[240px] md:w-[280px] lg:w-[350px] xl:w-[400px] h-[180px] xs:h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px] xl:h-[400px] bg-primary/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-sm" />

              {/* Image container with organic mask */}
              <div className="relative w-[160px] xs:w-[180px] sm:w-[200px] md:w-[240px] lg:w-[300px] xl:w-[340px] h-[220px] xs:h-[250px] sm:h-[280px] md:h-[320px] lg:h-[400px] xl:h-[440px] rounded-[1.5rem] xs:rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2rem] lg:rounded-[2.5rem] xl:rounded-[3rem] overflow-hidden shadow-2xl">
                <picture>
                  <source srcSet="/hero-right.avif" type="image/avif" />
                  <source srcSet="/hero-right.webp" type="image/webp" />
                  <img
                    src="/hero-right.jpeg"
                    alt="Bhavya Mishra"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    width="340"
                    height="440"
                  />
                </picture>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -bottom-3 -right-3 xs:-bottom-3.5 xs:-right-3.5 sm:-bottom-4 sm:-right-4 md:-bottom-4 md:-right-4 lg:-bottom-5 lg:-right-5 xl:-bottom-6 xl:-right-6 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-primary/30 rounded-full blur-xl" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
