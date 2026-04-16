const Footer = () => (
  <footer className="bg-primary py-8">
    <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
      <span>© {new Date().getFullYear()} Klus en Renovatiebedrijf RV. Alle rechten voorbehouden.</span>
      <a href="tel:+31610983715" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
        +31 6 10983715
      </a>
    </div>
  </footer>
);

export default Footer;
