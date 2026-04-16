const Footer = () => (
  <footer className="bg-dark border-t border-dark-foreground/10">
    <div className="h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />

    <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid sm:grid-cols-3 gap-10 mb-10">

        {/* Brand */}
        <div>
          <img
            src="/logo.svg"
            alt="Klus en Renovatiebedrijf RV"
            className="h-10 w-auto mb-4"
          />
          <p className="text-sm text-dark-muted font-body leading-relaxed max-w-[200px]">
            Vakwerk in schilder-, hout- en glaswerk. Al meer dan 5 jaar
            vakkundige uitvoering, van klein tot groot.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark-foreground font-body mb-4">
            Navigatie
          </p>
          <div className="space-y-3">
            {[["#diensten","Onze diensten"],["#over-ons","Over ons"],["#contact","Gratis inspectie aanvragen"]].map(([href, label]) => (
              <a key={href} href={href} className="block text-sm text-dark-muted hover:text-dark-foreground transition-colors duration-300 font-body">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark-foreground font-body mb-4">
            Contact
          </p>
          <div className="space-y-3">
            <a href="tel:+31610983715" className="block text-sm text-dark-muted hover:text-accent transition-colors duration-300 font-body font-medium">
              +31 6 10983715
            </a>
            <a href="mailto:klusenrenorv@gmail.com" className="block text-sm text-dark-muted hover:text-accent transition-colors duration-300 font-body">
              klusenrenorv@gmail.com
            </a>
            <p className="text-sm text-dark-muted font-body">Rowen Verhoef, eigenaar</p>
          </div>
        </div>

      </div>

      <div className="border-t border-dark-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-dark-muted font-body">
          &copy; {new Date().getFullYear()} Klus en Renovatiebedrijf RV. Alle rechten voorbehouden.
        </p>
        <p className="text-xs text-dark-muted/50 font-body">Vakwerk waar u op kunt vertrouwen.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
