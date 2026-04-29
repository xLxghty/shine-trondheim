import { Car, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "Utvendig vask",
    desc: "Skånsom skumvask, felger og dekkglans. Bilen din skinner som ny igjen.",
    price: "250 kr",
    duration: "30 min",
  },
  {
    icon: Sparkles,
    title: "Innvendig vask",
    desc: "Støvsuging, rens av sete, tepper og dashbord — friskt og som nytt innvendig.",
    price: "250 kr",
    duration: "45 min",
    featured: true,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Tjenester
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Premium pakker, ærlige priser.
          </h2>
          <p className="text-lg text-muted-foreground">
            Velg den tjenesten som passer din bil — hver eneste vask utføres med samme nøyaktighet og stolthet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {services.map((service, i) => (
            <div
              key={i}
              className={`premium-card relative overflow-hidden rounded-2xl p-7 group ${
                service.featured ? "lg:row-span-1 ring-1 ring-primary/30" : ""
              }`}
            >
              {service.featured && (
                <div className="absolute top-5 right-5 text-[10px] uppercase tracking-widest font-bold bg-gradient-primary text-primary-foreground px-2.5 py-1 rounded-full">
                  Mest populær
                </div>
              )}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-700" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-display text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.desc}</p>

                <div className="flex items-end justify-between pt-5 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground">Pris</div>
                    <div className="font-display font-bold text-lg text-foreground">{service.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Varighet</div>
                    <div className="font-medium text-sm text-foreground/90">{service.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <a href="#contact">Bestill din pakke</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
