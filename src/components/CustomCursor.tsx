import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Center the custom cursors
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    // GSAP quickTo for lag-free cursor tracking
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power2.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power2.out" });

    let activeMagnetic: HTMLElement | null = null;

    const moveCursor = (e: MouseEvent) => {
      setVisible(true);

      if (activeMagnetic) {
        const rect = activeMagnetic.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        // 35% magnetic pull towards element center
        const pullX = cx + (e.clientX - cx) * 0.35;
        const pullY = cy + (e.clientY - cy) * 0.35;

        xToDot(pullX);
        yToDot(pullY);
        xToRing(pullX);
        yToRing(pullY);

        // Pull the element itself slightly towards cursor for elastic interactive feel
        gsap.to(activeMagnetic, {
          x: (e.clientX - cx) * 0.25,
          y: (e.clientY - cy) * 0.25,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        xToDot(e.clientX);
        yToDot(e.clientY);
        xToRing(e.clientX);
        yToRing(e.clientY);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest("a, button, [role='button'], input, textarea, select, .magnetic-item");

      if (hoverable) {
        setHovering(true);
        // Enable magnetic pull on buttons, custom magnetic items, and header links
        if (
          hoverable.classList.contains("magnetic-item") ||
          hoverable.tagName === "BUTTON" ||
          hoverable.closest("nav a") ||
          hoverable.closest(".flex.items-center.gap-2 a")
        ) {
          activeMagnetic = hoverable as HTMLElement;
        }
      } else {
        setHovering(false);
        if (activeMagnetic) {
          gsap.to(activeMagnetic, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.3)" });
          activeMagnetic = null;
        }
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
      if (activeMagnetic) {
        gsap.to(activeMagnetic, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.3)" });
        activeMagnetic = null;
      }
    };

    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      {/* Ring cursor */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full border transition-all duration-300 ease-out"
          style={{
            width: hovering ? 56 : 32,
            height: hovering ? 56 : 32,
            transform: "translate(-50%, -50%)",
            backgroundColor: hovering ? "rgba(166, 58, 80, 0.12)" : "transparent",
            borderColor: hovering ? "rgba(226, 109, 138, 0.7)" : "rgba(255, 246, 248, 0.25)",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
