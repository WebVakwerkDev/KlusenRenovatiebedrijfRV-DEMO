import { SprayCanIcon, PaintBucket, GlassWater } from "lucide-react";

const services = [
  {
    icon: SprayCanIcon,
    title: "Reiniging van woningen en kozijnen",
    text: "Grondige reiniging als basis voor duurzaam onderhoud en strak schilderwerk.",
  },
  {
    icon: PaintBucket,
    title: "Binnen- en buitenschilderwerk",
    text: "Strakke afwerking, duurzame bescherming en een verzorgde uitstraling, binnen én buiten.",
  },
  {
    icon: GlassWater,
    title: "Glasvervanging & nieuw glas plaatsen",
    text: "Vervanging en plaatsing van glas voor betere isolatie, veiligheid en comfort.",
  },
];

const ServicesSection = () => (
  <section id="diensten" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Onze diensten</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Vakwerk op maat, van A tot Z
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((s) => (
          <div key={s.title} className="group bg-card rounded-lg border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
