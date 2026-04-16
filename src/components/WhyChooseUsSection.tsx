import { CheckCircle2, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const points = [
  { label: "Gratis inspectie, vaste prijs", detail: "U weet vooraf precies wat het kost" },
  { label: "Meer dan 5 jaar vakervaring", detail: "Dagelijks actief in schilder- en renovatiewerk" },
  { label: "Persoonlijk contact met de eigenaar", detail: "Geen tussenpersonen, direct overleg" },
  { label: "Duidelijke afspraken", detail: "Schriftelijke offerte, u geeft akkoord voor de start" },
  { label: "Eerlijke prijzen, geen verborgen kosten", detail: "Wat afgesproken is, wordt geleverd" },
];

const WhyChooseUsSection = () => {
  const textRef = useInView<HTMLDivElement>();
  const photoRef = useInView<HTMLDivElement>();

  return (
    <section id="over-ons" className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      <div className="rv-orb-2 absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-amber-400/6 blur-[140px] pointer-events-none" />
      <div className="rv-orb-3 absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-amber-300/4 blur-[120px] pointer-events-none" />

      {/* Decorative ghost text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-heading font-black text-[18rem] leading-none text-dark-foreground/[0.02] select-none pointer-events-none hidden xl:block">
        RV
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Text ── */}
          <div ref={textRef} className="rv-fade-left rv-d100 order-2 lg:order-1 lg:pt-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 font-body">
              <span className="w-8 h-px bg-accent" />
              Waarom RV kiezen
            </p>

            {/* Heading — from original site */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-dark-foreground uppercase leading-[0.88] tracking-tight mb-4">
              Vakwerk dat u<br />
              niet hoeft te<br />
              <span className="text-accent">controleren</span>
              <span className="text-dark-foreground">.</span>
            </h2>

            {/* Sub — original site language */}
            <p className="text-dark-muted font-body text-base leading-relaxed mb-10 max-w-sm">
              Omdat u wilt dat het goed gebeurt, zonder gedoe en zonder verrassingen.
              Bij Klus en Renovatiebedrijf RV werkt u rechtstreeks met de eigenaar.
            </p>

            {/* Checklist */}
            <div className="space-y-5 mb-10">
              {points.map((p, i) => (
                <div key={p.label} className={`rv-scroll rv-fade-left rv-d${(i + 1) * 100} flex items-start gap-4`}>
                  <div className="w-6 h-6 rounded-full glass-accent flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="text-accent" size={13} />
                  </div>
                  <div>
                    {/* Primary label — full contrast */}
                    <p className="text-dark-foreground font-body font-semibold text-sm leading-tight">{p.label}</p>
                    {/* Detail — dark-muted passes AA on bg-dark (4.9:1) */}
                    <p className="text-dark-muted font-body text-xs mt-0.5">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-dark rounded-xl px-6 py-3 text-sm font-semibold font-body hover:brightness-110 transition-all duration-300 group glow-btn"
            >
              Vraag een gratis offerte aan
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* ── Photo mosaic ── */}
          <div ref={photoRef} className="rv-scale-up rv-d200 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3">

              {/* Left: house — tall */}
              <div className="row-span-2 rounded-2xl overflow-hidden relative" style={{ minHeight: "380px" }}>
                <img
                  src="https://klusenrenorv.com/wp-content/uploads/2026/03/Huis-Schilderwerk-Rowen-Verhoef-e1772968164109-768x978.webp"
                  alt="Huis schilderwerk"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                {/* Caption — dark backing ensures contrast */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-dark/70 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10">
                    <p className="text-[10px] font-bold text-dark-foreground uppercase tracking-wider font-body">Buitenschilderwerk</p>
                  </div>
                </div>
              </div>

              {/* Top-right */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://klusenrenorv.com/wp-content/uploads/2026/03/Raam-kozijnen-geschilderd-Utrecht-Rowen-verhoef.webp"
                  alt="Kozijnen geschilderd"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom-right */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://klusenrenorv.com/wp-content/uploads/2026/03/Schilder-werk-kozijnen-Rowen-Verhoef.webp"
                  alt="Schilderwerk kozijnen"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
