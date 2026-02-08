import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Modules = () => {
  const modules = [
    {
      id: "biblioteca",
      title: "Biblioteca Editorial",
      description: "Tu catálogo completo de libros organizado y accesible desde cualquier lugar.",
      features: [
        "Fichas detalladas por cada libro",
        "Almacenamiento de portadas y manuscritos",
        "Historial de versiones",
        "Etiquetas y categorización personalizada",
        "Búsqueda y filtrado avanzado"
      ]
    },
    {
      id: "keywords",
      title: "Análisis de Keywords",
      description: "Encuentra las palabras clave perfectas para posicionar tus libros.",
      features: [
        "Investigación de keywords por nicho",
        "Volumen de búsqueda estimado",
        "Análisis de competencia",
        "Sugerencias de long-tail keywords",
        "Tracking de posiciones"
      ]
    },
    {
      id: "ads",
      title: "Gestión de ADS",
      description: "Controla y optimiza tus campañas publicitarias de Amazon.",
      features: [
        "Dashboard de campañas activas",
        "Métricas de rendimiento (ACoS, ROAS)",
        "Histórico de gasto publicitario",
        "Alertas de rendimiento",
        "Recomendaciones de optimización"
      ]
    },
    {
      id: "calculadora",
      title: "Calculadora de Viabilidad",
      description: "Evalúa la rentabilidad potencial antes de invertir en un libro.",
      features: [
        "Cálculo de costos de producción",
        "Estimación de royalties",
        "Proyección de ventas",
        "Análisis de punto de equilibrio",
        "Comparativa de formatos (ebook, paperback, hardcover)"
      ]
    },
    {
      id: "optimizacion",
      title: "Optimización de Libros",
      description: "Preconfigura tus libros para ver su viabilidad u optimízalos para ajustar la rentabilidad.",
      features: [
        "Análisis de títulos y subtítulos",
        "Optimización de descripciones",
        "Sugerencias de categorías",
        "Checklist de mejores prácticas",
        "Comparativa con competidores"
      ]
    },
    {
      id: "tareas",
      title: "Gestor de Tareas",
      description: "Organiza tu flujo de trabajo editorial de forma eficiente.",
      features: [
        "Tablero Kanban personalizable",
        "Asignación de tareas por proyecto",
        "Fechas límite y recordatorios",
        "Integración con calendario",
        "Seguimiento de progreso"
      ]
    },
    {
      id: "finanzas",
      title: "Finanzas",
      description: "Control total sobre la economía de tu negocio editorial.",
      features: [
        "Dashboard de ingresos y gastos",
        "Rentabilidad por libro",
        "Tracking de royalties mensuales",
        "Exportación de informes",
        "Gráficos de tendencias"
      ]
    },
    {
      id: "calendario",
      title: "Calendario Editorial",
      description: "Planifica lanzamientos y mantén tu pipeline organizado.",
      features: [
        "Vista mensual y semanal",
        "Fechas de lanzamiento",
        "Hitos de producción",
        "Sincronización con Google Calendar",
        "Recordatorios automáticos"
      ]
    },
    {
      id: "qr",
      title: "Generador de QR",
      description: "Crea códigos QR personalizados para tus libros físicos.",
      features: [
        "QR para páginas de producto",
        "QR para landing pages",
        "Personalización de diseño",
        "Tracking de escaneos",
        "Descarga en múltiples formatos"
      ]
    },
    {
      id: "dashboard",
      title: "Dashboard Principal",
      description: "Vista panorámica de todo tu negocio editorial.",
      features: [
        "KPIs principales en tiempo real",
        "Resumen de ventas del mes",
        "Alertas y notificaciones",
        "Accesos rápidos a módulos",
        "Personalización de widgets"
      ]
    }
  ];

  const [activeModule, setActiveModule] = useState(modules[0].id);

  return (
    <section id="modules" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              <span className="text-primary">10 módulos</span> para dominar KDP
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada módulo está diseñado para resolver un problema específico 
              de los publishers profesionales.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.2}>
          <Tabs value={activeModule} onValueChange={setActiveModule} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-8 h-auto">
              {modules.map((module) => (
                <TabsTrigger
                  key={module.id}
                  value={module.id}
                  className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border text-sm"
                >
                  {module.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {modules.map((module) => (
              <TabsContent key={module.id} value={module.id}>
                <Card className="bg-card border-border max-w-3xl mx-auto">
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl font-bold mb-3">{module.title}</h3>
                    <p className="text-muted-foreground mb-6">{module.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Modules;
