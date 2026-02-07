import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué es exactamente Publify?",
      answer: "Publify es un Sistema Operativo Editorial diseñado específicamente para publishers de Amazon KDP. Es una plataforma todo-en-uno que integra gestión de catálogo, análisis de mercado, control financiero y herramientas de productividad en un solo lugar."
    },
    {
      question: "¿Cuándo estará disponible la plataforma?",
      answer: "Estamos en fase de desarrollo activo y planeamos lanzar la versión beta para fundadores en los próximos meses. Los fundadores tendrán acceso anticipado antes del lanzamiento público."
    },
    {
      question: "¿Qué incluye la reserva de €49?",
      answer: "La reserva asegura tu plaza como fundador y te da acceso a todos los beneficios exclusivos: precio bloqueado de por vida, acceso anticipado, grupo privado, sesión de onboarding 1:1 y participación en el roadmap del producto."
    },
    {
      question: "¿Puedo cancelar y obtener un reembolso?",
      answer: "Sí, ofrecemos una garantía de devolución de 14 días desde el momento de la reserva. Si cambias de opinión, te devolvemos el 100% del importe sin preguntas."
    },
    {
      question: "¿Necesito conocimientos técnicos?",
      answer: "No. Publify está diseñado para ser intuitivo y fácil de usar. Además, los fundadores recibirán una sesión de onboarding personalizada para aprovechar al máximo la plataforma."
    },
    {
      question: "¿Funciona con Amazon de cualquier país?",
      answer: "Sí, Publify está diseñado para trabajar con todos los marketplaces de Amazon donde KDP está disponible, incluyendo Estados Unidos, Reino Unido, Alemania, España, Francia, Italia, y más."
    },
    {
      question: "¿Qué pasa si tengo más de 20 libros?",
      answer: "Para catálogos grandes, lanzaremos el plan Pro que incluirá libros ilimitados y funcionalidades avanzadas de automatización y marketing. Los fundadores tendrán acceso prioritario."
    },
    {
      question: "¿Cómo puedo contactar con el equipo?",
      answer: "Puedes escribirnos directamente a test.publify@gmail.com o a través de nuestras redes sociales. Los fundadores también tendrán acceso a un canal directo de comunicación con el equipo."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Preguntas <span className="text-primary">frecuentes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre Publify y el programa de fundadores.
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

        {/* Contact CTA */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-2">¿Tienes más preguntas?</p>
            <a 
              href="mailto:test.publify@gmail.com" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Escríbenos a test.publify@gmail.com →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
