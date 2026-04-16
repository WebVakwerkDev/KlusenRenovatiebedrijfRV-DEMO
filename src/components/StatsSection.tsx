import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "5+", label: "Jaar ervaring", sub: "Vakkundige uitvoering" },
  { value: "80+", label: "Tevreden klanten", sub: "Van klein tot groot" },
  { value: "150+", label: "Projecten afgerond", sub: "Van kozijnen tot volledig huis" },
];

const StatsSection = () => {
  const ref = useInView<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Top/bottom accent lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      {/* Subtle background photo */}
      <div className="absolute inset-0 opacity-[0.055]">
        <img
          src="https://klusenrenorv.com/wp-content/uploads/2026/03/Buiten-schilder-werken.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid grid-cols-3 divide-x divide-dark-foreground/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`rv-scroll rv-count rv-d${i * 150} text-center py-14 lg:py-20 px-4 lg:px-8`}
            >
              {/* Big number — the hero of each column */}
              <p className="font-heading font-black text-accent leading-none mb-3
                text-[3.8rem] sm:text-[5rem] lg:text-[7rem] xl:text-[9rem]">
                {s.value}
              </p>
              <p className="text-dark-foreground text-xs sm:text-sm font-body font-semibold uppercase tracking-[0.15em] mb-1">
                {s.label}
              </p>
              <p className="hidden sm:block text-dark-muted text-xs font-body">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
