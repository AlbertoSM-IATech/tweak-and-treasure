import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Wallet, Megaphone } from "lucide-react";
const Ecosystem = () => {
  const pillars = [{
    icon: Search,
    title: "Research",
    subtitle: "SEO + ADS",
    description: "Análisis de mercado, keywords y competencia para tomar decisiones basadas en datos.",
    color: "primary",
    available: true
  }, {
    icon: BookOpen,
    title: "Producción",
    subtitle: "Biblioteca Editorial",
    description: "Gestiona tu catálogo completo, desde manuscritos hasta portadas finales.",
    color: "secondary",
    available: true
  }, {
    icon: Wallet,
    title: "Finanzas",
    subtitle: "Control Económico",
    description: "Seguimiento de ingresos, gastos, royalties y rentabilidad por título.",
    color: "primary",
    available: true
  }, {
    icon: Megaphone,
    title: "Marketing",
    subtitle: "Plan Pro",
    description: "Herramientas avanzadas de promoción y automatización de campañas.",
    color: "muted",
    available: false
  }];
  const getColorClasses = (color: string, available: boolean) => {
    if (!available) {
      return {
        bg: "bg-muted/50",
        iconBg: "bg-muted",
        iconColor: "text-muted-foreground",
        border: "border-border"
      };
    }
    if (color === "primary") {
      return {
        bg: "bg-primary/5",
        iconBg: "bg-primary/20",
        iconColor: "text-primary",
        border: "border-primary/30 hover:border-primary/50"
      };
    }
    return {
      bg: "bg-secondary/5",
      iconBg: "bg-secondary/20",
      iconColor: "text-secondary",
      border: "border-secondary/30 hover:border-secondary/50"
    };
  };
  return <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Los <span className="text-primary">4 pilares</span> de tu ecosistema
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Publify integra todas las áreas clave de un negocio editorial 
            en un ecosistema cohesivo y potente.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(pillar => {
          const colors = getColorClasses(pillar.color, pillar.available);
          return <Card key={pillar.title} className={`${colors.bg} ${colors.border} border transition-all duration-300 relative overflow-hidden`}>
                {!pillar.available && <Badge className="absolute top-4 right-4 bg-muted-foreground/20 text-muted-foreground text-xs">
                    Próximamente
                  </Badge>}
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4`}>
                    <pillar.icon className={`h-7 w-7 ${colors.iconColor}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-1">{pillar.title}</h3>
                  <div className={`text-sm ${pillar.available ? colors.iconColor : 'text-muted-foreground'} font-medium mb-3`}>
                    {pillar.subtitle}
                  </div>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default Ecosystem;