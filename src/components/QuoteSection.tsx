import { useInView } from "@/hooks/useInView";

const QuoteSection = () => {
  const ref = useInView<HTMLDivElement>();

  return (
    <section className="relative py-24 lg:py-32 bg-dark-surface overflow-hidden">
      <div className="rv-orb-1 absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-400/8 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div ref={ref} className="rv-scroll rv-fade-up max-w-4xl mx-auto">

          {/* Decorative quote mark */}
          <p className="font-heading text-[8rem] lg:text-[11rem] font-black text-accent/12 leading-none select-none -mb-8">
            "
          </p>

          {/* Quote — from original site */}
          <blockquote className="font-heading text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-dark-foreground leading-[1.15] uppercase mb-4">
            Onze missie is eenvoudig: vakwerk leveren waar u op kunt vertrouwen.
          </blockquote>

          {/* Elaboration — from original site */}
          {/* text-dark-foreground/75 instead of text-dark-muted because dark-muted on dark-surface fails WCAG AA (3.8:1) */}
          <p className="text-dark-foreground/75 font-body text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
            Bij Klus en Renovatiebedrijf RV pakken we elke klus zorgvuldig aan,
            zodat u altijd tevreden bent met het resultaat.
          </p>

          {/* Attribution */}
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent/30">
              <img
                src="https://klusenrenorv.com/wp-content/uploads/2026/03/Frame-48095748.webp"
                alt="Rowen Verhoef"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-10 h-px bg-gradient-to-r from-accent to-amber-300 shrink-0" />
            <div>
              <p className="font-semibold text-dark-foreground font-body">Rowen Verhoef</p>
              <p className="text-sm text-dark-foreground/70 font-body">
                Schilder en eigenaar, Klus en Renovatiebedrijf RV
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
