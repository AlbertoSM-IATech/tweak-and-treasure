import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Calculator, Cog, Sparkles, Cloud, Key, Target, Wallet } from "lucide-react";
const Features = () => {
  const features = [{
    icon: TrendingUp,
    title: "Estudio de Mercado",
    description: "Analiza nichos, demanda y competencia antes de publicar."
  }, {
    icon: Calculator,
    title: "Calculadora de Viabilidad",
    description: "Calcula el ROI potencial de cada libro antes de invertir."
  }, {
    icon: Cog,
    title: "Gestión de Producción",
    description: "Coordina portadistas, escritores y editores en un solo lugar."
  }, {
    icon: Sparkles,
    title: "Optimización de Libros",
    description: "Mejora títulos, descripciones y keywords de tu catálogo."
  }, {
    icon: Cloud,
    title: "Biblioteca en la Nube",
    description: "Almacena portadas, manuscritos y recursos organizados."
  }, {
    icon: Key,
    title: "Análisis de Keywords",
    description: "Encuentra las mejores palabras clave para posicionar tus libros."
  }, {
    icon: Target,
    title: "Gestión de ADS",
    description: "Controla tus campañas publicitarias y su rendimiento."
  }, {
    icon: Wallet,
    title: "Control de Finanzas",
    description: "Visualiza ingresos, gastos y rentabilidad por libro."
  }];
  return <section id="features" className="py-20 bg-inherit">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Todo en <span className="text-primary">uno</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8 herramientas esenciales integradas en una sola plataforma para gestionar 
            tu negocio editorial de principio a fin.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <Card key={feature.title} className="bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Features;