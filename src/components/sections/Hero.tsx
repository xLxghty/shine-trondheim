import { Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Premium bilvask i Trondheim - glansfull svart luksusbil"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105 animate-[float_8s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-glow/15 rounded-full blur-[120px]" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm text-foreground/90">Åpent nå · til 20:00 i dag</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6 animate-fade-in-up">
            <span className="text-gradient">Få bilen din til å</span>
            <br />
            <span className="text-gradient-primary">se ny ut igjen.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in-up animation-delay-200 leading-relaxed">
            Profesjonell innvendig og utvendig bilvask i Trondheim — rask, rimelig og med 5-stjerners kundetilfredshet.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up animation-delay-400">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">
                <Calendar className="w-5 h-5" />
                Bestill nå
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="tel:+4791760787">
                <Phone className="w-5 h-5" />
                Ring Kevin
              </a>
            </Button>
            <Button asChild variant="ghost-light" size="xl">
              <a href="https://maps.google.com/?q=Njardarvollen+37+7032+Trondheim" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5" />
                Veibeskrivelse
              </a>
            </Button>
          </div>

          {/* Quick info */}
          <div className="mt-12 flex flex-wrap gap-6 sm:gap-10 animate-fade-in-up animation-delay-600">
            <div>
              <div className="text-3xl font-display font-bold text-gradient-primary">5.0★</div>
              <div className="text-sm text-muted-foreground mt-1">Kundetilfredshet</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl font-display font-bold text-gradient">60min</div>
              <div className="text-sm text-muted-foreground mt-1">Rask levering</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl font-display font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Anbefalt lokalt</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground/60 animate-[float_3s_ease-in-out_infinite]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
