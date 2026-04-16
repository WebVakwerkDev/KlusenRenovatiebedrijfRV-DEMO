import { CheckCircle2 } from "lucide-react";

const points = [
  "Snel beschikbaar, ook op korte termijn",
  "Meer dan 5 jaar vakervaring",
  "Duidelijke afspraken, vaste prijs",
  "Persoonlijk contact met de eigenaar",
  "Gratis inspectie en offerte",
];

const WhyChooseUsSection = () => (
  <section id="over-ons" className="py-20 lg:py-28 bg-warm-gray">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Waarom wij</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
            Omdat u wilt dat het goed gebeurt, zonder gedoe en zonder verrassingen.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Bij Klus en Renovatiebedrijf RV staat kwaliteit en betrouwbaarheid voorop. Wij leveren vakwerk waar u op kunt bouwen.
          </p>
        </div>

        {/* Checkmarks */}
        <div className="space-y-5">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-4">
              <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={22} />
              <span className="text-foreground font-medium">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
