import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-painting.jpg";

const badges = [
  "5+ jaar ervaring",
  "80+ tevreden klanten",
  "150+ projecten afgerond",
  "Gratis offerte",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Professioneel schilderwerk" width={1920} height={1080} className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark" />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-28 pb-20">
      <div className="max-w-3xl space-y-8">
        <div className="inline-block bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Klus en Renovatiebedrijf RV</span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-dark-foreground leading-[1.05] uppercase">
          Uw vaste partner in schilder-, hout- en glaswerk<span className="text-accent">.</span>
        </h1>

        <p className="text-lg sm:text-xl text-dark-muted max-w-lg">
          Wij regelen het vakwerk. U geniet van het resultaat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-8 py-4 text-base font-bold uppercase tracking-wide hover:brightness-110 transition"
          >
            Offerte aanvragen
          </a>
          <a
            href="tel:+31610983715"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-dark-foreground/30 text-dark-foreground px-8 py-4 text-base font-bold hover:border-dark-foreground/60 transition-colors"
          >
            <Phone size={18} />
            Bel +31 6 10983715
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-8 border-t border-dark-foreground/10">
          {badges.map((b) => (
            <span key={b} className="flex items-center gap-2 text-sm text-dark-muted">
              <span className="text-accent font-bold">✓</span> {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
