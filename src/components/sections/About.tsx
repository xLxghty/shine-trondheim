import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import detailImg from "@/assets/detail-polish.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <img src={detailImg} alt="Kevin polerer en bil med mikrofiberklut" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Personlig håndverk</div>
                <div className="font-display text-lg font-bold">Hver detalj betyr noe.</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Om Kevin</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">
              Lokalt drevet. Personlig levert.
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                Kevin Rosvold Bilvaskeri hjelper sjåfører i Trondheim med å holde bilene sine rene, friske og klare til å imponere — hver eneste gang.
              </p>
              <p>
                Med personlig service, høye kvalitetskrav og ærlig prising har vi blitt en av byens mest betrodde lokale spesialister. Du leverer bilen, vi gir deg en bil som ser ny ut igjen.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { n: "5.0★", l: "Rangering" },
                { n: "100%", l: "Anbefalt" },
                { n: "Lokal", l: "Spesialist" },
              ].map((s, i) => (
                <div key={i} className="premium-card rounded-xl p-4 text-center">
                  <div className="font-display font-bold text-2xl text-gradient-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#booking"><Calendar className="w-5 h-5" /> Bestill din vask</a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="tel:+4791760787"><Phone className="w-5 h-5" /> 91 76 07 87</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
