import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const NOTION_FORM_URL = "https://wild-paperback-a33.notion.site/2f083e512fb2809aa82cd9439dd91cd9?pvs=105";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "19",
      period: "/mes",
      description: "Perfecto para empezar tu carrera como publisher.",
      featured: false,
      available: true,
      features: [
        { text: "Hasta 5 libros", included: true },
        { text: "Biblioteca Editorial", included: true },
        { text: "Dashboard básico", included: true },
        { text: "Calculadora de viabilidad", included: true },
        { text: "Gestión de Finanzas", included: false },
        { text: "Análisis de Keywords", included: false },
        { text: "Gestión de ADS", included: false },
        { text: "Soporte prioritario", included: false }
      ]
    },
    {
      name: "Plus",
      price: "49",
      period: "/mes",
      description: "Para publishers que quieren escalar su negocio.",
      featured: true,
      available: true,
      badge: "Más Popular",
      features: [
        { text: "Hasta 20 libros", included: true },
        { text: "Biblioteca Editorial", included: true },
        { text: "Dashboard completo", included: true },
        { text: "Calculadora de viabilidad", included: true },
        { text: "Finanzas por libro y globales", included: true },
        { text: "Análisis de Keywords", included: true },
        { text: "Gestión de ADS", included: true },
        { text: "Soporte prioritario", included: true }
      ]
    },
    {
      name: "Pro",
      price: "99",
      period: "/mes",
      description: "Para publishers profesionales con grandes catálogos.",
      featured: false,
      available: false,
      badge: "Próximamente",
      features: [
        { text: "Libros ilimitados", included: true },
        { text: "Todo lo del plan Plus", included: true },
        { text: "Marketing 360 integrado", included: true },
        { text: "Landings y constructor web", included: true },
        { text: "CRM de contactos + listas", included: true },
        { text: "Email marketing + automatizaciones", included: true },
        { text: "Hasta 2.000 emails/mes", included: true },
        { text: "Pipeline de leads", included: true },
        { text: "QR trackeables", included: true },
        { text: "Métricas de conversión", included: true },
        { text: "Onboarding personalizado", included: true },
        { text: "Soporte 24/7", included: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Planes pensados para <span className="text-primary">cada etapa</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu volumen de publicaciones 
              y escala cuando lo necesites.
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.1}>
              <Card 
                className={`relative bg-card border-2 h-full ${
                  plan.featured 
                    ? 'border-primary shadow-xl shadow-primary/10 scale-105' 
                    : 'border-border'
                } ${!plan.available ? 'opacity-75' : ''}`}
              >
                {plan.badge && (
                  <Badge 
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 ${
                      plan.featured 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader className="text-center pb-0">
                  <CardTitle className="font-display text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                            <X className="h-3 w-3 text-muted-foreground" />
                          </div>
                        )}
                        <span className={`text-sm ${!feature.included ? 'text-muted-foreground' : ''}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.featured 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-card border border-border hover:bg-muted'
                    }`}
                    disabled={!plan.available}
                    onClick={() => plan.available && window.open(NOTION_FORM_URL, "_blank")}
                  >
                    {plan.available ? 'Únete como Fundador' : 'Próximamente'}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
