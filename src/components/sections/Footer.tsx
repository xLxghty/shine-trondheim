import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display font-bold text-2xl mb-3">
              Kevin Rosvold <span className="text-gradient-primary">Bilvaskeri</span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              Premium bilvask og interiørrens i Trondheim. Rask, rimelig og 5-stjerners kundetilfredshet.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg glass hover:border-primary/50 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-lg glass hover:border-primary/50 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-primary mt-0.5" /><a href="tel:+4791760787" className="hover:text-foreground transition-colors">91 76 07 87</a></li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary mt-0.5" /><span>Njardarvollen 37<br />7032 Trondheim</span></li>
              <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-primary mt-0.5" /><span>Åpent til 20:00</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Lenker</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Tjenester</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors">Om oss</a></li>
              <li><a href="#booking" className="hover:text-foreground transition-colors">Bestill</a></li>
              <li><a href="#location" className="hover:text-foreground transition-colors">Finn oss</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Kevin Rosvold Bilvaskeri. Alle rettigheter forbeholdt.</div>
          <div>krbilvaskeri.no</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
