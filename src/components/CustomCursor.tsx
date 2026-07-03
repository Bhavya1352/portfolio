import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseover", over);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Dot cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300"
        style={{
          opacity: visible ? 1 : 0,
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>
      {/* Ring cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-150 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: `translate(${pos.x - (hovering ? 24 : 16)}px, ${pos.y - (hovering ? 24 : 16)}px)`,
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
        }}
      >
        <div
          className="w-full h-full rounded-full border border-primary/50 transition-all duration-300"
          style={{
            borderColor: hovering ? "hsl(var(--primary))" : "rgba(255,255,255,0.3)",
            backgroundColor: hovering ? "hsl(var(--primary) / 0.1)" : "transparent",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
