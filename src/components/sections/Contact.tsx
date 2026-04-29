import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import foamImg from "@/assets/foam-wash.jpg";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={foamImg} alt="" loading="lazy" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/15 rounded-full blur-[140px]" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm">Vi svarer vanligvis innen 15 minutter</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1] text-gradient">
            Ta kontakt for å
            <br />
            <span className="text-gradient-primary">bestille din vask.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ring, send melding eller stikk innom — vi gjør det enkelt å få bilen din skinnende ren.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          <a href="tel:+4791760787" className="premium-card rounded-2xl p-7 group hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Ring direkte</div>
            <div className="font-display font-bold text-2xl">91 76 07 87</div>
            <div className="text-sm text-muted-foreground mt-2">Trykk for å ringe Kevin</div>
          </a>

          <a href="sms:+4791760787" className="premium-card rounded-2xl p-7 group hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">SMS / WhatsApp</div>
            <div className="font-display font-bold text-2xl">Send melding</div>
            <div className="text-sm text-muted-foreground mt-2">Rask respons hver dag</div>
          </a>

          <div className="premium-card rounded-2xl p-7">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Adresse</div>
            <div className="font-display font-bold text-xl leading-tight">Njardarvollen 37<br />7032 Trondheim</div>
          </div>

          <div className="premium-card rounded-2xl p-7">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Åpningstider</div>
            <div className="font-display font-bold text-xl">Åpent til 20:00</div>
            <div className="text-sm text-muted-foreground mt-1">Hver dag i uken</div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Button asChild variant="hero" size="xl">
            <a href="tel:+4791760787">
              <Phone className="w-5 h-5" />
              Ring nå
            </a>
          </Button>
          <Button asChild variant="glass" size="xl">
            <a href="sms:+4791760787">
              <MessageCircle className="w-5 h-5" />
              Send SMS
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
