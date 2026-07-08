import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Info, Sparkles, Pin } from "lucide-react";

const Sandbox = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    const cards = gsap.utils.toArray(".sandbox-card") as HTMLElement[];

    // Random initial placement and rotation inside standard canvas area
    cards.forEach((card, index) => {
      const angle = (Math.random() - 0.5) * 20; // -10 to 10 deg
      // Distribute them inside the area (approx width 500, height 300)
      const xOffset = (Math.random() - 0.5) * 250;
      const yOffset = (Math.random() - 0.5) * 150;
      
      gsap.set(card, {
        rotation: angle,
        x: xOffset,
        y: yOffset,
      });

      // Staggered elastic load animation
      gsap.fromTo(
        card,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.1 * index,
          ease: "elastic.out(1, 0.75)",
        }
      );

      // Initialize Draggable with elastic zIndex sorting
      Draggable.create(card, {
        bounds: containerRef.current,
        onDragStart: function() {
          gsap.to(card, { scale: 1.05, zIndex: 100, duration: 0.2 });
          cards.forEach((c) => {
            if (c !== card) {
              gsap.set(c, { zIndex: 10 });
            }
          });
        },
        onDragEnd: function() {
          gsap.to(card, { scale: 1, duration: 0.2 });
        }
      });
    });

  }, []);

  return (
    <section id="sandbox" className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden bg-background/50 border-t border-b border-border/40">
      <div className="absolute inset-0 dot-bg opacity-[0.06] pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-foreground flex items-center justify-center gap-2">
            Creative <span className="font-serif italic font-semibold text-primary">Playground</span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            A sandbox containing interactive notes, records, and snaps. Drag them around to clean the desktop!
          </p>
        </div>

        {/* The dragging board */}
        <div
          ref={containerRef}
          className="relative w-full h-[500px] border border-border/60 bg-card/25 rounded-2xl overflow-hidden flex items-center justify-center select-none"
        >
          {/* Card 1: Polaroid photo */}
          <div className="sandbox-card absolute w-44 sm:w-48 bg-white text-black p-3 pb-6 shadow-2xl flex flex-col items-center cursor-grab active:cursor-grabbing">
            <div className="absolute top-2 left-2 text-red-500 opacity-60">
              <Pin className="w-4 h-4 rotate-12" />
            </div>
            <div className="w-full aspect-square bg-gray-200 overflow-hidden mb-3 border border-gray-100">
              <img
                src="/hero-image.jpg"
                alt="Profile Snapshot"
                className="w-full h-full object-cover grayscale brightness-95"
              />
            </div>
            <span className="font-serif italic text-[10px] text-gray-500">Bhavya Mishra (2026)</span>
          </div>

          {/* Card 2: Quote */}
          <div className="sandbox-card absolute w-52 sm:w-56 bg-neutral-900 border border-neutral-800 p-5 rounded-lg shadow-xl text-left cursor-grab active:cursor-grabbing">
            <div className="flex items-center gap-1.5 text-xs font-bold text-primary mb-2">
              <Info className="w-3.5 h-3.5" />
              <span>INTERN LIFE</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              "Developing responsive front-ends at Naya Growth. Bridging design specifications with clean codebases."
            </p>
          </div>

          {/* Card 3: Hackathon Winner */}
          <div className="sandbox-card absolute w-56 sm:w-60 bg-primary/10 border border-primary/30 p-5 rounded-lg shadow-xl text-left cursor-grab active:cursor-grabbing">
            <span className="text-2xl mb-2 block">🏆</span>
            <h4 className="text-xs sm:text-sm font-bold text-primary mb-1">IronLabs AI Hackathon</h4>
            <p className="text-[11px] text-muted-foreground">
              Won 1st place in the GTM Track for developing a cutting-edge artificial intelligence project.
            </p>
          </div>

          {/* Card 4: Playful note */}
          <div className="sandbox-card absolute w-40 sm:w-44 bg-yellow-100 text-neutral-800 p-4 rounded shadow-lg rotate-3 cursor-grab active:cursor-grabbing">
            <p className="font-serif text-xs sm:text-sm italic font-medium leading-relaxed">
              "Open-source enthusiast. Served as Project Admin for GirlScript &amp; Social Summer of Code."
            </p>
          </div>

          {/* Card 5: Noida location card */}
          <div className="sandbox-card absolute w-48 sm:w-52 bg-card border border-border/80 p-4 rounded-xl shadow-lg cursor-grab active:cursor-grabbing">
            <p className="text-[10px] uppercase font-bold text-accent tracking-wider mb-1">CURRENT LOCATION</p>
            <p className="text-xs font-medium text-foreground">JSSATE Noida, ECE</p>
            <p className="text-[10px] text-muted-foreground mt-2">Study, code, repeat.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sandbox;
