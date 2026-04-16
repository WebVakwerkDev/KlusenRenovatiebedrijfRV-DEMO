import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-painting.jpg";

const badges = [
  "5+ jaar ervaring",
  "80+ tevreden klanten",
  "150+ projecten afgerond",
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Professioneel schilderwerk" width={1920} height={1080} className="w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-24 pb-16">
      <div className="max-w-2xl space-y-6">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight">
          Uw vaste partner in schilder-, hout- en glaswerk.
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/75 max-w-lg">
          Wij regelen het vakwerk. U geniet van het resultaat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-7 py-3.5 text-base font-semibold hover:bg-accent/90 transition-colors"
          >
            Offerte aanvragen
          </a>
          <a
            href="tel:+31610983715"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary-foreground/40 text-primary-foreground px-7 py-3.5 text-base font-semibold hover:border-primary-foreground/70 transition-colors"
          >
            <Phone size={18} />
            Bel ons: +31 6 10983715
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-6">
          {badges.map((b) => (
            <span key={b} className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <span className="text-accent">✓</span> {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
