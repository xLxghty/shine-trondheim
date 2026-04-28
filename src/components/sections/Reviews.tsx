import { Star, Quote } from "lucide-react";

const reviews = [
  { quote: "Veldig bra interiørrens til en svært rimelig pris. Anbefales!", name: "Fornøyd kunde", car: "Familebil" },
  { quote: "Rask, rimelig og god vask av min Toyota. Anbefales!", name: "Toyota-eier", car: "Toyota" },
  { quote: "Profesjonelle resultater og god verdi. Bilen ser ut som ny.", name: "Tilbakevendende kunde", car: "Sedan" },
];

const Reviews = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[140px]" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Anmeldelser</div>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
            <span className="ml-3 font-display text-2xl font-bold">5.0</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            Elsket av kunder i Trondheim.
          </h2>
          <p className="text-lg text-muted-foreground">Perfekt rangering, ekte tilbakemeldinger.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="premium-card rounded-2xl p-8 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/15" />
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">"{r.quote}"</p>
              <div className="pt-5 border-t border-border">
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.car}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
