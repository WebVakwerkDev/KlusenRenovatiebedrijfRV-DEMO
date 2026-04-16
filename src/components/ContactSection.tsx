import { useState } from "react";
import { Phone, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ naam: "", locatie: "", omschrijving: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-warm-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Klaar voor vakwerk zonder gedoe?
          </h2>
          <p className="text-muted-foreground text-lg">Vraag vandaag nog een gratis offerte aan.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div className="bg-card rounded-lg border border-border p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <p className="font-heading text-xl font-bold text-foreground">Bedankt!</p>
                <p className="text-muted-foreground">Wij nemen zo snel mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Naam</label>
                  <input
                    required
                    type="text"
                    value={form.naam}
                    onChange={(e) => setForm({ ...form, naam: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Locatie / Adres</label>
                  <input
                    required
                    type="text"
                    value={form.locatie}
                    onChange={(e) => setForm({ ...form, locatie: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Stad of adres"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Omschrijving aanvraag</label>
                  <textarea
                    required
                    rows={4}
                    value={form.omschrijving}
                    onChange={(e) => setForm({ ...form, omschrijving: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Beschrijf kort wat u nodig heeft"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-navy-light transition-colors"
                >
                  <Send size={16} />
                  Verzenden
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">Direct contact</p>
              <a
                href="tel:+31610983715"
                className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-heading font-bold text-foreground hover:text-accent transition-colors"
              >
                <Phone className="text-accent" size={28} />
                +31 6 10983715
              </a>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Bel of stuur een bericht — wij reageren doorgaans binnen enkele uren. Gratis inspectie en vrijblijvende offerte.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Klus en Renovatiebedrijf RV</p>
              <p>Rowen Verhoef — Eigenaar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
