import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    num: "01",
    title: "Frontend Developer",
    organization: "Naya Growth",
    period: "May 2026 – Present",
    bullets: [
      "Delivered UI improvements and new frontend features across multiple client projects using React.js and JavaScript.",
      "Worked directly with clients to scope requirements, translating feedback into functional interface changes.",
      "Rebuilt key page layouts for responsiveness, reducing UI inconsistencies across mobile and desktop views."
    ],
    colorClass: "bg-[#FFF9E6] border-[#FCD34D] text-[#B45309]",
    badgeBg: "bg-[#FCD34D]/20 text-[#B45309]"
  },
  {
    num: "02",
    title: "Frontend Developer",
    organization: "Varak Welfare Society",
    period: "Nov 2025 – Mar 2026",
    bullets: [
      "Redesigned sections of the organization's website, improving UI consistency and page usability.",
      "Identified and resolved recurring frontend bugs, maintaining consistent design across the site.",
      "Built reusable responsive components used across multiple pages, cutting duplicate CSS."
    ],
    colorClass: "bg-[#FDF2F8] border-[#FBCFE8] text-[#BE185D]",
    badgeBg: "bg-[#FBCFE8]/20 text-[#BE185D]"
  },
  {
    num: "03",
    title: "Project Administrator",
    organization: "GirlScript Summer of Code",
    period: "Jul – Sep 2025",
    bullets: [
      "Triaged issues and guided new contributors to their first merged PR.",
      "Reviewed pull requests and collaborated to resolve bugs and merge updates."
    ],
    colorClass: "bg-[#F0FDF4] border-[#C6F6D5] text-[#15803D]",
    badgeBg: "bg-[#C6F6D5]/20 text-[#15803D]"
  },
  {
    num: "04",
    title: "Bachelor of Technology",
    organization: "JSSATE Noida",
    period: "2023 – 2027",
    bullets: [
      "Pursuing Electronics and Communication Engineering.",
      "Actively exploring advanced frontend technologies, creative animation libraries, and web design architectures."
    ],
    colorClass: "bg-[#EFF6FF] border-[#BFDBFE] text-[#1D4ED8]",
    badgeBg: "bg-[#BFDBFE]/20 text-[#1D4ED8]"
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Section heading animation
      gsap.fromTo(
        ".experience-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".experience-heading",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Experience cards staggered animation
      gsap.fromTo(
        ".experience-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#experience",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-2 xs:px-3 sm:px-4 md:px-6 relative overflow-hidden bg-background">

      {/* Background Matrix/Dot pattern */}
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">

        {/* Main Grid Layout matching the reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 items-stretch relative">

          {/* SVG Connection Lines for Desktop (only visible on lg and up) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
            <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Path 1: Card 01 to Card 02 */}
              <path
                d="M 520, 200 L 680, 200"
                stroke="#FCD34D"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <circle cx="680" cy="200" r="4" fill="#FCD34D" />

              {/* Path 2: Card 02 to Card 03 (diagonal transition) */}
              <path
                d="M 850, 380 C 850, 480 500, 420 500, 520"
                stroke="#FBCFE8"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <circle cx="500" cy="520" r="4" fill="#FBCFE8" />

              {/* Path 3: Card 03 to Card 04 */}
              <path
                d="M 680, 720 L 780, 720"
                stroke="#C6F6D5"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <circle cx="780" cy="720" r="4" fill="#C6F6D5" />
            </svg>
          </div>

          {/* Left Title Box (Spans 2 rows on desktop) */}
          <div className="lg:row-span-2 flex flex-col justify-center pr-3 xs:pr-4 sm:pr-5 md:pr-6 lg:pr-8 py-4 xs:py-5 sm:py-6 z-10 order-1 lg:order-1 experience-heading">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-foreground leading-[1.15]">
              Professional <br />
              <span className="font-serif italic font-semibold text-primary">Experience</span>
            </h2>
            <p className="text-xs xs:text-sm sm:text-sm md:text-sm text-muted-foreground mt-3 xs:mt-4 sm:mt-4 leading-relaxed max-w-xs xs:max-w-sm sm:max-w-sm md:max-w-sm">
              A structured view of my frontend developer milestones, academic background, and open-source contributions.
            </p>
          </div>

          {/* Grid Cards (Experiences) */}
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`experience-card flex flex-col justify-between p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl xs:rounded-2.5xl sm:rounded-3xl border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 z-10 ${exp.colorClass}`}
            >
              <div>
                {/* Header: Number */}
                <div className="flex items-center justify-between mb-4 xs:mb-5 sm:mb-6">
                  <span className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-mono font-bold opacity-80">{exp.num}</span>
                </div>

                {/* Title and Organization */}
                <div className="mb-3 xs:mb-4 sm:mb-4">
                  <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-serif font-bold tracking-tight text-neutral-900 leading-snug">
                    {exp.title}
                  </h3>
                  <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-xs font-semibold opacity-90 mt-1 xs:mt-1.5 sm:mt-1.5 flex items-center gap-1.5 whitespace-nowrap">
                    <span>{exp.organization}</span>
                    <span className="opacity-60">&middot;</span>
                    <span className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider">{exp.period}</span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="text-[10px] xs:text-xs sm:text-xs md:text-[13px] leading-relaxed text-neutral-700 font-normal space-y-1.5 xs:space-y-2 sm:space-y-2 list-disc pl-3 xs:pl-4 sm:pl-4 mt-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="marker:text-current">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
