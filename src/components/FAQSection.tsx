import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    q: "Wat doet Klus en Renovatiebedrijf RV?",
    a: "Wij bieden binnen- en buitenschilderwerk, reiniging van gevels en kozijnen, houtrot reparatie, timmerwerk en glasvervanging. Alles via één aanspreekpunt, zodat u niet meerdere aannemers nodig heeft.",
  },
  {
    q: "Kan ik een gratis inspectie aanvragen?",
    a: "Ja, dat kan altijd vrijblijvend. Wij komen gratis langs en sturen u daarna een duidelijke offerte met vaste prijs. Er zijn geen verborgen kosten en u bepaalt zelf of u verder wilt gaan.",
  },
  {
    q: "Voert u spoedreparaties uit?",
    a: "Ja. Heeft u acute schade, zoals een kapot raam, houtrot dat verder uitbreidt of vochtproblemen? Bel ons dan direct op +31 6 10983715.",
  },
  {
    q: "Hoe weet ik wat ik kan verwachten?",
    a: "U ontvangt altijd een schriftelijke offerte met een vaste prijs voordat het werk begint. Wij houden u op de hoogte tijdens de uitvoering en bespreken het resultaat samen bij oplevering. Geen verrassingen, alleen duidelijke afspraken.",
  },
  {
    q: "In welk gebied werken jullie?",
    a: "Wij werken in de regio rondom onze locatie, maar nemen ook regelmatig projecten buiten het standaardgebied aan. Neem contact op om te overleggen of wij bij u in de buurt kunnen werken.",
  },
];

const FAQSection = () => {
  const labelRef = useInView<HTMLDivElement>();
  const listRef = useInView<HTMLDivElement>();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 max-w-5xl mx-auto items-start">

          <div ref={labelRef} className="rv-scroll rv-fade-left lg:sticky lg:top-32">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3 font-body">
              <span className="w-8 h-px bg-accent" />
              Veelgestelde vragen
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-foreground uppercase leading-[0.9] tracking-tight mb-6">
              Heeft u een vraag<span className="text-accent">?</span>
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
              Staat uw vraag er niet bij? Bel of mail ons direct.
            </p>
            <a
              href="tel:+31610983715"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent font-body hover:gap-3 transition-all duration-300 group"
            >
              Direct bellen
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </a>
          </div>

          <div ref={listRef} className="rv-scroll rv-fade-up">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-accent/40 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left font-heading font-bold text-foreground uppercase hover:no-underline py-5 text-sm lg:text-base tracking-wide leading-snug data-[state=open]:text-accent transition-colors duration-300">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed font-body">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
