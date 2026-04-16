import { SprayCan, Paintbrush, GlassWater, Hammer } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: SprayCan,
    num: "01",
    title: "Reiniging",
    sub: "woningen & kozijnen",
    text: "Een grondige reiniging is de basis voor duurzaam onderhoud. Wij zorgen dat het oppervlak perfect voorbereid is voor strak schilderwerk.",
    image: "https://klusenrenorv.com/wp-content/uploads/2026/03/Buiten-schilder-werken.png",
  },
  {
    icon: Paintbrush,
    num: "02",
    title: "Schilderwerk",
    sub: "binnen & buiten",
    text: "Strakke afwerking, duurzame bescherming en een verzorgde uitstraling. Inclusief grondige voorbereiding en kitwerkzaamheden.",
    image: "https://klusenrenorv.com/wp-content/uploads/2026/03/Huis-Schilderwerk-Rowen-Verhoef-e1772968164109-768x978.webp",
  },
  {
    icon: GlassWater,
    num: "03",
    title: "Glasvervanging",
    sub: "nieuw glas plaatsen",
    text: "Vervanging en plaatsing van glas voor betere isolatie, veiligheid en comfort. Snel en vakkundig uitgevoerd.",
    image: "https://klusenrenorv.com/wp-content/uploads/2026/03/Raam-kozijnen-geschilderd-Utrecht-Rowen-verhoef.webp",
  },
  {
    icon: Hammer,
    num: "04",
    title: "Houtrot reparatie",
    sub: "& timmerwerk",
    text: "Aangetast hout vormt risico's voor uw woning. Wij herstellen of vervangen het vakkundig, duurzaam en precies op maat.",
    image: "https://klusenrenorv.com/wp-content/uploads/2026/03/Schilder-werk-kozijnen-Rowen-Verhoef.webp",
  },
];

const ServicesSection = () => {
  const headerRef = useInView<HTMLDivElement>();
  const gridRef = useInView<HTMLDivElement>();

  return (
    <section id="diensten" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className="rv-fade-up rv-d100 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 font-body">
              <span className="w-8 h-px bg-accent" />
              Wat wij doen
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-foreground uppercase leading-[0.9] tracking-tight">
              Alles wat nodig is voor een<br className="hidden sm:block" />
              nette, duurzame woning<span className="text-accent">.</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-body lg:max-w-xs lg:text-right text-sm leading-relaxed">
            Uitgevoerd door één vaste partner, van eerste inspectie tot definitieve oplevering.
          </p>
        </div>

        {/* Photo cards grid */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`rv-scroll rv-scale-up rv-d${i * 100 + 100} group relative rounded-2xl overflow-hidden cursor-pointer`}
              style={{ aspectRatio: "3/4" }}
            >
              {/* Photo */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
              />

              {/* Gradient overlay — always dark at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/10" />
              {/* Hover: slightly more reveal */}
              <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-0 transition-opacity duration-500" />

              {/* Top: ghost number */}
              <div className="absolute top-5 right-5">
                <span className="font-heading text-5xl font-black text-white/10 leading-none select-none">
                  {s.num}
                </span>
              </div>

              {/* Bottom: content */}
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 space-y-2.5">
                {/* Icon */}
                <div className="w-9 h-9 rounded-lg glass-accent flex items-center justify-center mb-3">
                  <s.icon size={16} className="text-accent" />
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl font-black text-white uppercase leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <p className="font-heading text-sm font-bold text-accent/80 uppercase tracking-wide leading-tight">
                    {s.sub}
                  </p>
                </div>

                {/* Description — slides in on hover */}
                {/* white/85 on dark gradient background = well above 7:1 — passes AAA */}
                <p className="text-white/85 text-xs lg:text-sm font-body leading-relaxed translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {s.text}
                </p>
              </div>

              {/* Accent bar — slides in on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/50 hover:text-accent transition-colors duration-300 font-body group"
          >
            Alle diensten bespreekbaar via een gratis inspectie
            <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
