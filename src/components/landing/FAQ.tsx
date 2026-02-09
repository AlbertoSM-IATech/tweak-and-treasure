import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Visión general",
      faqs: [
        {
          question: "¿Qué es Publify?",
          answer: "Publify es el sistema operativo editorial para el publisher profesional de Amazon KDP. Centraliza la gestión con el libro como nodo central, para operar con orden, foco y centralización y tomar decisiones con contexto."
        },
        {
          question: "¿Qué problema resuelve Publify?",
          answer: "Resuelve la dispersión de datos, archivos y herramientas (el \"Frankenstack\") y sus consecuencias: caos operativo, errores de versión, retrabajo, poca visibilidad y fatiga de decisión."
        },
        {
          question: "¿Para quién es Publify?",
          answer: "Para publishers en profesionalización o profesionales. Rango típico: 1–100 libros, solopreneur con o sin equipo pequeño, con necesidad de método, visibilidad y ROI."
        },
        {
          question: "¿Para quién NO es Publify?",
          answer: "No está pensado para quien busca \"una app que haga marketing por mí\", ni para quien no quiere un método/sistema de gestión, ni para quien solo quiere \"espiar nichos\" sin ejecutar."
        },
      ]
    },
    {
      title: "Primeros pasos y reserva",
      faqs: [
        {
          question: "¿Cómo entro en Publify Founders?",
          answer: "1) Rellenas el formulario. 2) Reservas tu plaza pagando 49€. 3) En la fecha indicada en la landing, completas el pago hasta 299€ y se activa el acceso."
        },
        {
          question: "¿Cuánto cuesta la reserva y para qué sirve?",
          answer: "La reserva es de 49€ y sirve para bloquear una plaza dentro del cupo de Founders."
        },
        {
          question: "¿La reserva es reembolsable?",
          answer: "Sí. Es reembolsable si decides no continuar antes del 1 de marzo de 2026. El procedimiento de cancelación está en las Condiciones Founders."
        },
        {
          question: "¿Cómo solicito el reembolso de la reserva?",
          answer: "Escribe a test.publify@gmail.com con el asunto \"Cancelación reserva Founders\". Una vez verificada la solicitud, se tramita la devolución por el mismo medio de pago. Solo aplica si se solicita antes del 1 de marzo de 2026."
        },
      ]
    },
    {
      title: "Funcionalidades y módulos",
      faqs: [
        {
          question: "¿Cuáles son los pilares / áreas de Publify?",
          answer: "Biblioteca (hub), Research, Producción, Finanzas (por libro + global) y Marketing 360."
        },
        {
          question: "¿Qué incluye el módulo Biblioteca?",
          answer: "Incluye CRUD de libros, ficha completa con metadatos, series/colecciones, research tipo Notion (texto, imágenes, links, checklists) y archivos (portada/contraportada/interior) con QR por libro."
        },
        {
          question: "¿Qué incluye Finanzas en el MVP?",
          answer: "Registro manual de ingresos/gastos por libro, dashboard mensual con beneficio por libro y global, e importación rápida (CSV/copy-paste) y exportación."
        },
        {
          question: "¿Qué incluye Marketing 360?",
          answer: "Marketing 360 es parte del Plan Pro e incluye: landings y formularios RGPD, CRM, emails esenciales y automatizaciones, pipeline básico de leads, QR trackeables e integración con GHL."
        },
      ]
    },
    {
      title: "Limitaciones y planes",
      faqs: [
        {
          question: "¿Qué NO es Publify en el MVP?",
          answer: "No es el panel de KDP (no sube ni edita en Amazon). No es una spy tool tipo Helium10. No es un gestor de Ads dentro de la app. No es un maquetador/diseñador. No es contabilidad completa."
        },
        {
          question: "¿Hay fechas cerradas para funcionalidades futuras?",
          answer: "No. Publify está en fase de evolución y no hay compromiso de fechas cerradas para funcionalidades futuras."
        },
        {
          question: "¿Qué incluye la licencia Founders (Plus lifetime)?",
          answer: "Incluye acceso de por vida al Plan Plus y acceso a mejoras/funcionalidades incluidas dentro del Plan Plus. No incluye ampliaciones, add-ons, servicios, planes superiores (Pro) o elementos fuera de Plus."
        },
        {
          question: "¿Cuánto es el pago total de Founders?",
          answer: "El total es 299€ (tras completar el pago después de la reserva de 49€). Equivale a aproximadamente 8 meses del Plan Plus."
        },
        {
          question: "¿Qué pasa con el precio del Plan Plus en el futuro?",
          answer: "El precio inicial del Plan Plus es 39,99€/mes y puede modificarse para nuevos clientes a medida que aumente el valor del plan. Los Founders mantienen su precio bloqueado."
        },
      ]
    },
    {
      title: "Glosario",
      faqs: [
        {
          question: "¿Qué significa \"libro como nodo central\"?",
          answer: "Que cada libro tiene una ficha única y actúa como fuente de verdad. Todo lo relacionado con ese libro (datos, research, producción, tareas, archivos, finanzas) cuelga de esa ficha."
        },
        {
          question: "¿Qué significa \"Frankenstack\"?",
          answer: "Se usa para describir un mosaico de herramientas genéricas y dispersas (Drive, Excels, Notion, notas, chats, capturas, etc.) que obliga a cambios constantes de contexto y genera fricción."
        },
      ]
    },
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

        {/* FAQ Categories */}
        <div className="max-w-3xl mx-auto space-y-10">
          {faqCategories.map((category, catIndex) => (
            <AnimatedSection key={catIndex} delay={0.1 * catIndex}>
              <h3 className="font-display text-xl font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <Accordion type="single" collapsible className="space-y-3">
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`cat-${catIndex}-item-${index}`}
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
            </AnimatedSection>
          ))}
        </div>

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
