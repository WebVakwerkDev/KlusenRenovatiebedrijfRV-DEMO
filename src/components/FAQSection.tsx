import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wat doet Klus en Renovatiebedrijf RV precies?",
    a: "Allround vakbedrijf voor onderhoud en renovatie van woningen: schilderwerk binnen/buiten, reiniging van gevels en kozijnen, houtrot reparatie, timmerwerk en glasvervanging. U hoeft niet meerdere aannemers in te schakelen — één aanspreekpunt regelt alles van begin tot eind.",
  },
  {
    q: "Kan ik een vrijblijvende inspectie aanvragen?",
    a: "Ja, altijd. Wij komen gratis en zonder verplichtingen langs. Daarna ontvangt u een heldere offerte met vaste prijs. Geen kleine lettertjes, geen verborgen kosten. U beslist zelf of u verder gaat.",
  },
  {
    q: "Werken jullie ook bij spoed of schade?",
    a: "Ja. Bij een gebroken ruit, houtrot dat uitbreidt of vochtproblemen, proberen wij zo snel mogelijk langs te komen. Bel direct: +31 6 10983715.",
  },
  {
    q: "Hoe weet ik waar ik aan toe ben?",
    a: "Na de inspectie ontvangt u altijd een schriftelijke offerte met vaste prijs per opdracht. Wij starten pas na uw akkoord. Tijdens de uitvoering houden we u op de hoogte en bij oplevering lopen we samen het resultaat door.",
  },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
      <div className="text-center mb-14">
        <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Veelgestelde vragen</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground uppercase">FAQ</h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-accent/40">
            <AccordionTrigger className="text-left font-heading font-bold text-foreground uppercase hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
