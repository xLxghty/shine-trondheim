import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Tjenester" },
    { href: "#about", label: "Om oss" },
    { href: "#booking", label: "Bestill" },
    { href: "#location", label: "Finn oss" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""}`}>
      <div className="container flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="font-display font-bold text-lg sm:text-xl">
          Kevin Rosvold <span className="text-gradient-primary">Bilvaskeri</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="glass" size="sm">
            <a href="tel:+4791760787"><Phone className="w-4 h-4" /> 91 76 07 87</a>
          </Button>
          <Button asChild variant="hero" size="sm">
            <a href="#booking">Bestill nå</a>
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Meny">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base py-2 border-b border-border/50">
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-2">
              <a href="#booking" onClick={() => setOpen(false)}>Bestill nå</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
