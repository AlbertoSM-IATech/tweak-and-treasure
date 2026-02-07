import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Users, Zap, Gift, Crown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const NOTION_FORM_URL = "https://wild-paperback-a33.notion.site/2f083e512fb2809aa82cd9439dd91cd9?pvs=105";

// TODO: Replace with real counter from backend when available
const OCCUPIED_SPOTS = 17;
const TOTAL_SPOTS = 20;
const AVAILABLE_SPOTS = TOTAL_SPOTS - OCCUPIED_SPOTS;

const FoundersProgram = () => {
  const benefits = [
    "Acceso de por vida al precio de fundador",
    "Todas las actualizaciones incluidas",
    "Acceso anticipado a nuevas funciones",
    "Grupo privado de fundadores",
    "Soporte directo con el equipo",
    "Participación en roadmap del producto",
    "Badge exclusivo de Fundador",
    "Sesión de onboarding 1:1"
  ];

  const stats = [
    { number: OCCUPIED_SPOTS.toString(), label: "plazas ocupadas", icon: Users },
    { number: AVAILABLE_SPOTS.toString(), label: "plazas disponibles", icon: Zap }
  ];

  const progressPercentage = (OCCUPIED_SPOTS / TOTAL_SPOTS) * 100;

  return (
    <section id="founders" className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/50 bg-primary/10 text-primary font-medium">
              <Crown className="h-4 w-4 mr-2" />
              Programa Exclusivo
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Únete como <span className="text-primary">Fundador</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sé parte del grupo exclusivo de {TOTAL_SPOTS} publishers que darán forma al futuro 
              de Publify con beneficios únicos de por vida.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center gap-8 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="h-6 w-6 text-primary" />
                  <span className="text-4xl font-bold text-primary">{stat.number}</span>
                </div>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Progress bar */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-xl mx-auto mb-12">
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>{OCCUPIED_SPOTS} de {TOTAL_SPOTS} plazas</span>
              <span className="text-primary font-medium">¡Últimas {AVAILABLE_SPOTS}!</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Card */}
        <AnimatedSection delay={0.3}>
          <Card className="max-w-4xl mx-auto bg-card border-primary/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Left side - Pricing */}
                <div className="p-8 bg-primary/5 border-r border-border">
                  <div className="mb-6">
                    <span className="text-muted-foreground line-through text-xl font-bold">€588/año</span>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-5xl font-bold text-primary">€299</span>
                      <span className="text-muted-foreground">total</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                      <span className="text-sm">Reserva ahora</span>
                      <span className="font-bold text-primary">€49</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                      <span className="text-sm">Al lanzamiento</span>
                      <span className="font-bold">€250</span>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary"
                    onClick={() => window.open(NOTION_FORM_URL, "_blank")}
                  >
                    <Gift className="h-5 w-5 mr-2" />
                    Reservar mi Plaza de Fundador
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Pago seguro. Garantía de devolución de 14 días.
                  </p>
                </div>

                {/* Right side - Benefits */}
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold mb-6">
                    Beneficios exclusivos para fundadores
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FoundersProgram;
