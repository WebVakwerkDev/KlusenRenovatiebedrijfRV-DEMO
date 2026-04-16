const Footer = () => (
  <footer className="bg-dark border-t border-dark-foreground/10 py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-3 gap-8 items-start">
        {/* Logo + tagline */}
        <div>
          <p className="font-heading text-xl font-bold text-dark-foreground uppercase tracking-wider mb-2">
            RV<span className="text-accent">.</span>
          </p>
          <p className="text-sm text-dark-muted">Wij regelen het vakwerk. U geniet van het resultaat.</p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <a href="#diensten" className="block text-sm text-dark-muted hover:text-dark-foreground transition-colors">Diensten</a>
          <a href="#over-ons" className="block text-sm text-dark-muted hover:text-dark-foreground transition-colors">Over ons</a>
          <a href="#contact" className="block text-sm text-dark-muted hover:text-dark-foreground transition-colors">Contact</a>
        </div>

        {/* Contact */}
        <div className="space-y-2 text-sm text-dark-muted">
          <a href="tel:+31610983715" className="block hover:text-dark-foreground transition-colors">+31 6 10983715</a>
          <a href="mailto:klusenrenorv@gmail.com" className="block hover:text-dark-foreground transition-colors">klusenrenorv@gmail.com</a>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-dark-foreground/10 text-center text-xs text-dark-muted">
        © {new Date().getFullYear()} Klus en Renovatiebedrijf RV. Alle rechten voorbehouden.
      </div>
    </div>
  </footer>
);

export default Footer;
