import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section id="location" className="py-24 sm:py-32 bg-gradient-dark">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Finn oss</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            Du finner oss her.
          </h2>
          <p className="text-lg text-muted-foreground">Sentralt plassert i Trondheim — lett tilgjengelig.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border h-[400px] lg:h-[500px] relative bg-card">
            <iframe
              title="Kart - Kevin Rosvold Bilvaskeri"
              src="https://www.google.com/maps?q=Njardarvollen+37+7032+Trondheim&output=embed"
              className="w-full h-full grayscale-[40%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-4">
            <div className="premium-card rounded-2xl p-6">
              <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Adresse</div>
              <div className="font-display font-bold text-lg leading-tight">Njardarvollen 37<br />7032 Trondheim</div>
            </div>
            <div className="premium-card rounded-2xl p-6">
              <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Åpningstider</div>
              <div className="font-display font-bold text-lg">Åpent til 20:00</div>
              <div className="text-sm text-muted-foreground mt-1">Hver dag i uken</div>
            </div>
            <div className="premium-card rounded-2xl p-6">
              <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Telefon</div>
              <a href="tel:+4791760787" className="font-display font-bold text-lg hover:text-primary transition-colors">91 76 07 87</a>
            </div>
            <Button asChild variant="hero" size="lg" className="w-full">
              <a href="https://maps.google.com/?q=Njardarvollen+37+7032+Trondheim" target="_blank" rel="noopener noreferrer">
                <Navigation className="w-5 h-5" /> Åpne i kart
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
