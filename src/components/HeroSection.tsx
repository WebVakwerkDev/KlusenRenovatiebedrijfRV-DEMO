import { Phone, ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen bg-dark overflow-hidden flex items-center">
    {/* Ambient orbs */}
    <div className="rv-orb-1 absolute top-[10%] right-[5%] w-[700px] h-[700px] rounded-full bg-amber-400/10 blur-[160px] pointer-events-none" />
    <div className="rv-orb-2 absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-300/6 blur-[130px] pointer-events-none" />
    <div className="rv-orb-3 absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

    {/* Subtle grid */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* Mobile background photo */}
    <div className="lg:hidden absolute inset-0">
      <img
        src="https://klusenrenorv.com/wp-content/uploads/2026/03/Buiten-schilder-werken.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-dark/88" />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full container mx-auto px-6 lg:px-8 pt-28 pb-20">
      <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center min-h-[calc(100svh-180px)]">

        {/* ── Left: text ── */}
        <div className="space-y-8 max-w-xl">

          {/* Label */}
          <div className="rv-fade-left rv-d100 flex items-center gap-3">
            <span className="block w-10 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-accent font-body">
              Klus en Renovatiebedrijf RV
            </span>
          </div>

          {/* Headline */}
          <h1 className="rv-fade-up rv-d200 font-heading font-black uppercase leading-[0.84] tracking-tight text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem] xl:text-[5.4rem] text-dark-foreground">
            Uw woning,<br />
            vakkundig<br />
            <span className="text-accent">opgeknapt</span>
            <span className="text-dark-foreground">.</span>
          </h1>

          {/* Sub — confirmed from original */}
          <p className="rv-fade-up rv-d300 text-base lg:text-lg text-dark-muted font-body leading-relaxed max-w-sm">
            Schilderwerk, houtrot reparatie en glasvervanging door een vakman
            die u kent. Gratis offerte, vaste prijs, nette oplevering.
          </p>

          {/* CTAs */}
          <div className="rv-fade-up rv-d400 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="glow-btn inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-dark px-8 py-4 text-base font-semibold hover:brightness-110 transition-all duration-300 group font-body"
            >
              Gratis offerte aanvragen
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+31610983715"
              className="glass-light inline-flex items-center justify-center gap-2.5 rounded-xl text-dark-foreground px-8 py-4 text-base font-medium hover:bg-white/10 transition-all duration-300 font-body"
            >
              <Phone size={15} className="text-accent" />
              +31 6 10983715
            </a>
          </div>

          {/* Trust signals — only confirmed facts */}
          <div className="rv-fade-up rv-d500 flex flex-wrap gap-x-6 gap-y-2.5 pt-2 border-t border-dark-foreground/10">
            {[
              "5+ jaar ervaring",
              "80+ tevreden klanten",
              "Gratis offerte",
              "Vakkundige uitvoering",
            ].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm text-dark-muted font-body">
                <span className="text-accent font-bold text-base leading-none">✓</span>
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: framed photo ── */}
        <div className="rv-scale-up rv-d300 hidden lg:block relative">

          {/* Decorative offset frames */}
          <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl border border-accent/20 pointer-events-none" />
          <div className="absolute -bottom-9 -right-9 w-[85%] h-[85%] rounded-3xl border border-accent/10 pointer-events-none" />

          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <img
              src="https://klusenrenorv.com/wp-content/uploads/2026/03/Huis-Schilderwerk-Rowen-Verhoef-e1772968164109-768x978.webp"
              alt="Huis schilderwerk"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/15 to-transparent" />

            {/* Proof badge top-left — dark backing for contrast */}
            <div className="absolute top-5 left-5 bg-dark/75 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/10">
              <p className="text-[9px] font-bold text-dark-foreground/75 uppercase tracking-widest font-body mb-0.5">Afgerond</p>
              <p className="font-heading text-2xl font-black text-accent leading-none">150+</p>
              <p className="text-[10px] text-dark-foreground/70 font-body">projecten</p>
            </div>

            {/* Bottom trust badge — dark backing for contrast */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="bg-dark/70 backdrop-blur-md rounded-2xl px-5 py-3.5 flex items-center gap-3.5 border border-white/10">
                <div className="rv-pulse-ring w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-dark-foreground uppercase tracking-wide font-body">Vrijblijvende offerte</p>
                  <p className="text-[11px] text-dark-foreground/70 font-body">Gratis, zonder verplichtingen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left accent line */}
          <div className="absolute -left-7 top-16 bottom-16 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
        </div>

      </div>
    </div>

    <div className="rv-bounce absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-foreground/30 z-10">
      <ChevronDown size={22} />
    </div>
  </section>
);

export default HeroSection;
