import { Star, Zap, Tag, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Star, label: "5.0 Kundetilfredshet", highlight: true },
  { icon: Zap, label: "Rask levering" },
  { icon: Tag, label: "Rimelige priser" },
  { icon: Sparkles, label: "Premium finish" },
  { icon: ShieldCheck, label: "Lokalt anbefalt i Trondheim" },
];

const TrustBar = () => {
  return (
    <section className="border-y border-border bg-card/40 backdrop-blur-sm">
      <div className="container py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 group"
            >
              <item.icon
                className={`w-5 h-5 ${item.highlight ? "fill-primary text-primary" : "text-primary"} transition-transform group-hover:scale-110`}
              />
              <span className="text-sm sm:text-base font-medium text-foreground/90 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
