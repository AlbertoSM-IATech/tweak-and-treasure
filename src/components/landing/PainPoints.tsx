import { Card, CardContent } from "@/components/ui/card";
import { FileSpreadsheet, FolderOpen, EyeOff, Clock, Calculator, BookX } from "lucide-react";
const PainPoints = () => {
  const painPoints = [{
    icon: FileSpreadsheet,
    title: "Datos dispersos",
    description: "Información de ventas, royalties y gastos repartidos en mil hojas de cálculo diferentes."
  }, {
    icon: FolderOpen,
    title: "Archivos perdidos",
    description: "Portadas, manuscritos y recursos desperdigados entre carpetas sin organización."
  }, {
    icon: EyeOff,
    title: "Decisiones a ciegas",
    description: "Publicas sin saber si el nicho tiene demanda o cómo se comporta la competencia."
  }, {
    icon: Clock,
    title: "Horas perdidas",
    description: "Demasiado tiempo en tareas administrativas que no generan ingresos directos."
  }, {
    icon: Calculator,
    title: "Sin control financiero",
    description: "No sabes realmente cuánto ganas por libro ni cuál es tu rentabilidad real."
  }, {
    icon: BookX,
    title: "Libros olvidados",
    description: "Títulos que podrían optimizarse pero quedan abandonados sin seguimiento."
  }];
  return <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ser publisher independiente{" "}
            <span className="text-primary">no debería ser así</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-full mx-auto">
            Estos son los problemas más comunes que enfrentan los publishers de Amazon KDP.
            ¿Te sientes identificado?
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => <Card key={point.title} className="bg-card border-border hover:border-destructive/50 transition-all duration-300 group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors bg-fuchsia-300">
                  <point.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Transition to Solution */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-2xl">​</span>
            <span className="font-display text-lg font-semibold text-primary">
              Imagina tenerlo todo bajo control
            </span>
            <span className="text-2xl">​</span>
          </div>
        </div>
      </div>
    </section>;
};
export default PainPoints;