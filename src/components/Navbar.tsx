import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="font-heading text-xl font-bold text-dark-foreground uppercase tracking-wider">
          RV<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#diensten" className="text-sm text-dark-muted hover:text-dark-foreground transition-colors">Diensten</a>
          <a href="#over-ons" className="text-sm text-dark-muted hover:text-dark-foreground transition-colors">Over ons</a>
          <a href="#contact" className="text-sm text-dark-muted hover:text-dark-foreground transition-colors">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-5 py-2 text-sm font-bold uppercase tracking-wide hover:brightness-110 transition"
          >
            Offerte aanvragen
          </a>
        </div>

        <button className="md:hidden text-dark-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark px-4 pb-4 space-y-3 border-t border-dark-surface">
          <a href="#diensten" onClick={() => setOpen(false)} className="block text-sm text-dark-muted py-2">Diensten</a>
          <a href="#over-ons" onClick={() => setOpen(false)} className="block text-sm text-dark-muted py-2">Over ons</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-sm text-dark-muted py-2">Contact</a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-5 py-2.5 text-sm font-bold uppercase tracking-wide w-full"
          >
            Offerte aanvragen
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
