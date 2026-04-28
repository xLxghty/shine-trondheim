import { useState, useRef, useEffect } from "react";
import beforeExt from "@/assets/before-exterior.jpg";
import afterExt from "@/assets/after-exterior.jpg";
import beforeInt from "@/assets/before-interior.jpg";
import afterInt from "@/assets/after-interior.jpg";

const transformations = [
  { before: beforeExt, after: afterExt, label: "Utvendig vask & polering" },
  { before: beforeInt, after: afterInt, label: "Interiør dyprens" },
];

const Slider = ({ before, after, label }: { before: string; after: string; label: string }) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      handleMove(x);
    };
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div
        ref={ref}
        className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl select-none cursor-ew-resize border border-border shadow-[var(--shadow-card)]"
        onMouseDown={(e) => { dragging.current = true; handleMove(e.clientX); }}
        onTouchStart={(e) => { dragging.current = true; handleMove(e.touches[0].clientX); }}
      >
        <img src={after} alt={`Etter ${label}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt={`Før ${label}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur text-xs font-semibold uppercase tracking-wider">Før</div>
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">Etter</div>

        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] pointer-events-none" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-2xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-background">
              <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const BeforeAfter = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-dark">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Før / Etter</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Resultater som taler for seg selv.
          </h2>
          <p className="text-lg text-muted-foreground">Dra glidebryteren og se transformasjonen.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {transformations.map((t, i) => <Slider key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
