import { Paintbrush, TreeDeciduous, SprayCan, GlassWater } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Binnen- en buitenschilderwerk",
    text: "Strakke afwerking, duurzame bescherming en een verzorgde uitstraling, binnen én buiten. Inclusief kitwerkzaamheden.",
    num: "01",
  },
  {
    icon: TreeDeciduous,
    title: "Houtrot reparatie & timmerwerk",
    text: "Aangetast hout vormt risico's voor uw woning. Wij herstellen of vervangen het vakkundig, duurzaam en precies op maat.",
    num: "02",
  },
  {
    icon: SprayCan,
    title: "Reiniging van woningen en kozijnen",
    text: "Grondige reiniging als basis voor duurzaam onderhoud en strak schilderwerk.",
    num: "03",
  },
  {
    icon: GlassWater,
    title: "Glasvervanging & nieuw glas plaatsen",
    text: "Vervanging en plaatsing van glas voor betere isolatie, veiligheid en comfort.",
    num: "04",
  },
];

const ServicesSection = () => (
  <section id="diensten" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mb-14">
        <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Wat wij doen</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase leading-tight">
          Alles wat nodig is om uw woning netjes, duurzaam en verzorgd af te werken<span className="text-accent">.</span>
        </h2>
        <p className="text-muted-foreground mt-4">Uitgevoerd door één vaste partner.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.num} className="group relative bg-card rounded-lg border border-border p-7 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
            <span className="font-heading text-5xl font-extrabold text-muted/60 absolute top-4 right-5 select-none">{s.num}</span>
            <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mb-5">
              <s.icon className="text-accent" size={22} />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground uppercase mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
