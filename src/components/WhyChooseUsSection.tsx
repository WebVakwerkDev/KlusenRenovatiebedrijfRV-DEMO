import { CheckCircle2 } from "lucide-react";

const points = [
  "Snel beschikbaar, ook op korte termijn",
  "Meer dan 5 jaar vakervaring",
  "Duidelijke afspraken, vaste prijs vooraf",
  "Persoonlijk contact met de eigenaar",
  "Gratis inspectie en vrijblijvende offerte",
  "Eerlijke prijzen, geen verborgen kosten",
];

const WhyChooseUsSection = () => (
  <section id="over-ons" className="py-20 lg:py-28 bg-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Waarom wij</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-foreground uppercase leading-tight">
            Omdat u wilt dat het goed gebeurt<span className="text-accent">.</span>
          </h2>
          <p className="text-dark-muted mt-4 text-lg">Zonder gedoe, zonder verrassingen.</p>
        </div>

        <div className="space-y-5">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-4">
              <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={22} />
              <span className="text-dark-foreground font-medium">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
