import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="font-heading text-lg font-bold text-primary-foreground tracking-tight">
          RV Klus & Renovatie
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#diensten" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Diensten</a>
          <a href="#over-ons" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Over ons</a>
          <a href="#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-5 py-2 text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Offerte aanvragen
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-navy-light/30 px-4 pb-4 space-y-3">
          <a href="#diensten" onClick={() => setOpen(false)} className="block text-sm text-primary-foreground/80 py-2">Diensten</a>
          <a href="#over-ons" onClick={() => setOpen(false)} className="block text-sm text-primary-foreground/80 py-2">Over ons</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-sm text-primary-foreground/80 py-2">Contact</a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-5 py-2 text-sm font-semibold w-full"
          >
            Offerte aanvragen
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
