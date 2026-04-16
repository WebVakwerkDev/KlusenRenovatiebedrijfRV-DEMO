const stats = [
  { value: "5+", label: "Jaar ervaring" },
  { value: "80+", label: "Tevreden klanten" },
  { value: "150+", label: "Projecten afgerond" },
];

const StatsSection = () => (
  <section className="py-16 bg-dark border-y border-dark-foreground/10">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-3 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-accent leading-none">{s.value}</p>
            <p className="text-dark-muted text-sm sm:text-base mt-2 uppercase tracking-wide font-bold">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
