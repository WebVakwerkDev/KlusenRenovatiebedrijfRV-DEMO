import { Quote } from "lucide-react";

const QuoteSection = () => (
  <section className="py-20 lg:py-28 bg-dark-surface">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="mx-auto mb-8 text-accent" size={44} />
        <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-foreground leading-snug uppercase mb-8">
          "Onze missie is eenvoudig: vakwerk leveren waar je op kunt vertrouwen. Bij Klus en Renovatiebedrijf RV pakken we elke klus zorgvuldig aan, zodat jij altijd tevreden bent met het resultaat."
        </blockquote>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
        <p className="text-accent font-bold uppercase tracking-wide text-sm mb-2">
          Rowen Verhoef
        </p>
        <p className="text-dark-muted text-sm">Schilder &amp; eigenaar</p>
        <p className="text-dark-muted text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Klus en Renovatiebedrijf RV biedt al meer dan 5 jaar vakkundige oplossingen voor schilderwerk, houtrot reparatie en glasvervanging. Snel, betrouwbaar en persoonlijk — altijd gericht op kwaliteit.
        </p>
      </div>
    </div>
  </section>
);

export default QuoteSection;
