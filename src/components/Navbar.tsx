import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/8 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Klus en Renovatiebedrijf RV"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            ["#diensten", "Diensten"],
            ["#over-ons", "Over ons"],
            ["#contact",  "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+31610983715"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-300"
          >
            <Phone size={13} className="text-accent" />
            +31 6 10983715
          </a>
          <a
            href="#contact"
            className="glow-btn inline-flex items-center justify-center rounded-xl bg-accent text-white px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition-all duration-300"
          >
            Offerte aanvragen
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white p-1 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/8 px-6 pb-6 pt-4">
          {(["#diensten", "#over-ons", "#contact"] as const).map((href, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-white/55 hover:text-white py-3 border-b border-white/6 transition-colors"
            >
              {["Diensten", "Over ons", "Contact"][i]}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-accent text-white px-5 py-3 text-sm font-semibold w-full hover:brightness-110 transition-all"
          >
            Offerte aanvragen
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
