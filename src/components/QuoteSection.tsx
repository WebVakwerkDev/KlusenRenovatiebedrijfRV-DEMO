import { Quote } from "lucide-react";

const QuoteSection = () => (
  <section className="py-20 lg:py-28 bg-primary">
    <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
      <Quote className="mx-auto mb-6 text-accent" size={40} />
      <blockquote className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground leading-snug mb-6">
        "Vakwerk leveren waar je op kunt vertrouwen. Van begin tot eind staan we voor kwaliteit, betrouwbaarheid en persoonlijk contact."
      </blockquote>
      <p className="text-primary-foreground/60 font-medium">
        — Rowen Verhoef, schilder &amp; eigenaar
      </p>
    </div>
  </section>
);

export default QuoteSection;
