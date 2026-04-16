import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ naam: "", locatie: "", omschrijving: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-foreground uppercase">
            Klaar voor vakwerk zonder gedoe<span className="text-accent">?</span>
          </h2>
          <p className="text-dark-muted text-lg mt-3">Vraag vandaag nog een gratis en vrijblijvende offerte aan.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div className="bg-dark-surface rounded-lg border border-dark-foreground/10 p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <p className="font-heading text-xl font-bold text-dark-foreground uppercase">Bedankt!</p>
                <p className="text-dark-muted">Wij nemen zo snel mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-dark-foreground mb-1.5 uppercase tracking-wide">Naam</label>
                  <input
                    required
                    type="text"
                    value={form.naam}
                    onChange={(e) => setForm({ ...form, naam: e.target.value })}
                    className="w-full rounded-md border border-dark-foreground/15 bg-dark px-4 py-3 text-sm text-dark-foreground placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark-foreground mb-1.5 uppercase tracking-wide">Locatie / Adres</label>
                  <input
                    required
                    type="text"
                    value={form.locatie}
                    onChange={(e) => setForm({ ...form, locatie: e.target.value })}
                    className="w-full rounded-md border border-dark-foreground/15 bg-dark px-4 py-3 text-sm text-dark-foreground placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Stad of adres"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark-foreground mb-1.5 uppercase tracking-wide">Omschrijving aanvraag</label>
                  <textarea
                    required
                    rows={4}
                    value={form.omschrijving}
                    onChange={(e) => setForm({ ...form, omschrijving: e.target.value })}
                    className="w-full rounded-md border border-dark-foreground/15 bg-dark px-4 py-3 text-sm text-dark-foreground placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Beschrijf kort wat u nodig heeft"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-accent text-accent-foreground px-6 py-3.5 text-sm font-bold uppercase tracking-wide hover:brightness-110 transition"
                >
                  <Send size={16} />
                  Aanvraag versturen
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Bel direct</p>
              <a
                href="tel:+31610983715"
                className="inline-flex items-center gap-3 text-3xl sm:text-4xl font-heading font-extrabold text-dark-foreground hover:text-accent transition-colors"
              >
                <Phone className="text-accent" size={32} />
                +31 6 10983715
              </a>
            </div>
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">E-mail</p>
              <a
                href="mailto:klusenrenorv@gmail.com"
                className="inline-flex items-center gap-3 text-lg font-bold text-dark-foreground hover:text-accent transition-colors"
              >
                <Mail className="text-accent" size={22} />
                klusenrenorv@gmail.com
              </a>
            </div>
            <div className="pt-4 border-t border-dark-foreground/10">
              <p className="text-dark-muted leading-relaxed">
                Bel of stuur een bericht — wij reageren doorgaans binnen enkele uren. Gratis inspectie en vrijblijvende offerte.
              </p>
            </div>
            <div className="text-sm text-dark-muted">
              <p className="font-bold text-dark-foreground">Klus en Renovatiebedrijf RV</p>
              <p>Rowen Verhoef — Eigenaar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
