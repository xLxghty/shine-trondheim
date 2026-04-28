import { Zap, Wallet, Eye, Heart, Calendar, Droplets } from "lucide-react";

const features = [
  { icon: Zap, title: "Rask & pålitelig", desc: "Inn og ut innen avtalt tid — uten kompromisser på kvalitet." },
  { icon: Wallet, title: "Ærlige priser", desc: "Premium resultater til lokal pris. Ingen skjulte kostnader." },
  { icon: Eye, title: "Sans for detaljer", desc: "Hver krok, hvert sete, hver felg — vi tar oss av alt." },
  { icon: Heart, title: "Vennlig service", desc: "Personlig kontakt fra Kevin selv, hver eneste gang." },
  { icon: Calendar, title: "Fleksibel booking", desc: "Lett å bestille på telefon, melding eller online." },
  { icon: Droplets, title: "Premium produkter", desc: "Kun profesjonelle midler som er trygge for lakk og interiør." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Hvorfor velge oss</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Trondheims foretrukne bilvaskeri.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <div key={i} className="bg-background p-8 hover:bg-card transition-colors duration-500 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
