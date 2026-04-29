import { Phone, Calendar } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-4 inset-x-4 z-40 sm:hidden animate-fade-in-up">
      <div className="grid grid-cols-2 gap-2 glass rounded-2xl p-2 shadow-[var(--shadow-elegant)]">
        <a href="tel:+4791760787" className="flex items-center justify-center gap-2 h-12 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm">
          <Phone className="w-4 h-4" /> Ring
        </a>
        <a href="#contact" className="flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-primary text-primary-foreground font-bold text-sm animate-pulse-glow">
          <Calendar className="w-4 h-4" /> Bestill nå
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
