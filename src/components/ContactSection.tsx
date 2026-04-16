import { useState } from "react";
import { Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const ContactSection = () => {
  const [form, setForm] = useState({ naam: "", locatie: "", omschrijving: "" });
  const [submitted, setSubmitted] = useState(false);
  const leftRef = useInView<HTMLDivElement>();
  const rightRef = useInView<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      <div className="rv-orb-1 absolute -left-32 bottom-0 w-[500px] h-[500px] rounded-full bg-amber-400/8 blur-[120px] pointer-events-none" />
      <div className="rv-orb-2 absolute right-0 top-1/4 w-[350px] h-[350px] rounded-full bg-amber-300/5 blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto items-start">

          {/* ── Left ── */}
          <div ref={leftRef} className="rv-fade-left rv-d100">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 font-body">
              <span className="w-8 h-px bg-accent" />
              Direct contact
            </p>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-dark-foreground uppercase leading-[0.88] tracking-tight mb-5">
              Gratis inspectie<br />
              aanvragen<span className="text-accent">.</span>
            </h2>

            <p className="text-dark-muted font-body text-base leading-relaxed mb-10 max-w-sm">
              Wij komen gratis langs, beoordelen het werk en sturen u een heldere
              offerte met vaste prijs. U beslist zelf of u verder gaat.
            </p>

            {/* Phone */}
            <div className="mb-7">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 font-body">Bel direct</p>
              <a href="tel:+31610983715" className="inline-flex items-center gap-3 group">
                <span className="rv-pulse-ring w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                <span className="font-heading text-3xl lg:text-4xl font-black text-dark-foreground hover:text-accent transition-colors duration-300 uppercase tracking-tight">
                  +31 6 10983715
                </span>
              </a>
            </div>

            {/* Email */}
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 font-body">E-mail</p>
              <a
                href="mailto:klusenrenorv@gmail.com"
                className="inline-flex items-center gap-2.5 text-dark-muted font-body font-medium hover:text-accent transition-colors duration-300"
              >
                <Mail size={15} className="text-accent flex-shrink-0" />
                klusenrenorv@gmail.com
              </a>
            </div>

            {/* Trust checklist — only confirmed from original site */}
            <div className="glass rounded-2xl p-5 space-y-3.5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-dark-foreground/60 font-body mb-1">Wat u kunt verwachten</p>
              {[
                "Gratis inspectie, geen verplichtingen",
                "Schriftelijke offerte met vaste prijs",
                "Pas start na uw akkoord",
                "Nette oplevering, samen doorlopen",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <CheckCircle size={14} className="text-accent flex-shrink-0" />
                  {/* text-dark-muted on bg-dark = 4.9:1 — passes AA */}
                  <span className="text-sm text-dark-muted font-body">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Form ── */}
          <div ref={rightRef} className="rv-scale-up rv-d200">
            {submitted ? (
              <div className="glass rounded-2xl p-10 text-center space-y-5">
                <div className="w-16 h-16 rounded-full glass-accent flex items-center justify-center mx-auto glow-sm">
                  <span className="text-accent text-3xl font-bold leading-none">✓</span>
                </div>
                <p className="font-heading text-2xl font-black text-dark-foreground uppercase tracking-wide">
                  Aanvraag ontvangen
                </p>
                <p className="text-dark-foreground/75 font-body text-sm">
                  Wij nemen zo snel mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 lg:p-10 space-y-6">
                <div>
                  <p className="font-heading text-lg font-bold text-dark-foreground uppercase tracking-wide mb-1">
                    Inspectie aanvragen
                  </p>
                  <p className="text-dark-foreground/70 text-xs font-body">Gratis en vrijblijvend.</p>
                </div>

                {[
                  { id: "naam",    label: "Uw naam",        type: "text", placeholder: "Voor- en achternaam" },
                  { id: "locatie", label: "Adres of plaats", type: "text", placeholder: "Stad of adres" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    {/* text-dark-foreground/75 = white 75% on dark: sufficient contrast */}
                    <label className="block text-xs font-semibold text-dark-foreground/75 mb-2 uppercase tracking-widest font-body">
                      {label}
                    </label>
                    <input
                      required
                      type={type}
                      value={(form as Record<string, string>)[id]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full rounded-xl border border-dark-foreground/15 bg-dark-foreground/5 px-4 py-3 text-sm text-dark-foreground placeholder:text-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/30 transition-all duration-300 font-body"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-semibold text-dark-foreground/75 mb-2 uppercase tracking-widest font-body">
                    Wat moet er gedaan worden?
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.omschrijving}
                    onChange={(e) => setForm({ ...form, omschrijving: e.target.value })}
                    placeholder="Beschrijf kort wat u nodig heeft..."
                    className="w-full rounded-xl border border-dark-foreground/15 bg-dark-foreground/5 px-4 py-3 text-sm text-dark-foreground placeholder:text-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/30 transition-all duration-300 resize-none font-body"
                  />
                </div>

                <button
                  type="submit"
                  className="glow-btn inline-flex items-center justify-center gap-2 w-full rounded-xl bg-accent text-dark px-6 py-4 text-base font-semibold hover:brightness-110 transition-all duration-300 group font-body"
                >
                  Gratis inspectie aanvragen
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p className="text-center text-xs text-dark-foreground/50 font-body">
                  Geen verplichtingen. Wij nemen contact op om een afspraak in te plannen.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
