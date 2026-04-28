import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Calendar, MessageCircle, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import foamImg from "@/assets/foam-wash.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Navn er påkrevd").max(100),
  phone: z.string().trim().min(6, "Gyldig telefon påkrevd").max(20),
  service: z.string().trim().min(2).max(100),
  message: z.string().trim().max(500).optional(),
});

const Booking = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "Utvendig vask", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: "Vennligst sjekk skjemaet", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    // Build WhatsApp/SMS link
    const text = encodeURIComponent(`Hei Kevin! Jeg vil bestille: ${form.service}.\nNavn: ${form.name}\nTlf: ${form.phone}\n${form.message ? "Melding: " + form.message : ""}`);
    setTimeout(() => {
      window.open(`sms:+4791760787?body=${text}`, "_self");
      toast({ title: "Forespørsel klar!", description: "Send meldingen for å bekrefte bestillingen." });
      setLoading(false);
    }, 400);
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={foamImg} alt="" loading="lazy" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/15 rounded-full blur-[140px]" />

      <div className="container relative">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">Begrenset antall plasser i dag</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1] text-gradient">
              Bestill din vask
              <br />
              <span className="text-gradient-primary">i dag.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Få bilen til å føles helt ny igjen. Bestill på minutter — vi tar oss av resten.
            </p>

            <div className="space-y-3">
              <a href="tel:+4791760787" className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/50 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Ring direkte</div>
                  <div className="font-display font-bold">91 76 07 87</div>
                </div>
              </a>
              <a href="sms:+4791760787" className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/50 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Send melding</div>
                  <div className="font-display font-bold">SMS / WhatsApp</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="premium-card rounded-2xl p-7 sm:p-8 shine-overlay relative">
            <h3 className="font-display text-2xl font-bold mb-6">Reserver plass</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Navn</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ditt navn" maxLength={100} required />
              </div>
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+47 ..." maxLength={20} required />
              </div>
              <div>
                <Label htmlFor="service">Tjeneste</Label>
                <select id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Utvendig vask</option>
                  <option>Interiør dyprens</option>
                  <option>Full Premium Detail</option>
                  <option>Støvsuging & oppfrisking</option>
                  <option>Familiebil rens</option>
                  <option>Salgsklargjøring</option>
                </select>
              </div>
              <div>
                <Label htmlFor="message">Melding (valgfritt)</Label>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Foretrukket dag/tid, bilmodell..." maxLength={500} rows={3} />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                <Calendar className="w-5 h-5" />
                {loading ? "Sender..." : "Reserver plass nå"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">Vi svarer vanligvis innen 15 minutter i åpningstiden.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
