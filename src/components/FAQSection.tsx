import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wat doet Klus en Renovatiebedrijf RV precies?",
    a: "Allround vakbedrijf: schilderwerk binnen/buiten, kozijnreiniging, houtrot reparatie, timmerwerk, glasvervanging. Één aanspreekpunt regelt alles.",
  },
  {
    q: "Kan ik een vrijblijvende inspectie aanvragen?",
    a: "Ja, gratis en zonder verplichtingen. U ontvangt daarna een heldere offerte met vaste prijs.",
  },
  {
    q: "Werken jullie ook bij spoed of schade?",
    a: "Ja. Bij een gebroken ruit of houtrot bellen wij zo snel mogelijk terug. Bel +31 6 10983715.",
  },
  {
    q: "Hoe weet ik waar ik aan toe ben?",
    a: "Schriftelijke offerte met vaste prijs, pas start na uw akkoord.",
  },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Veelgestelde vragen</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">FAQ</h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
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
