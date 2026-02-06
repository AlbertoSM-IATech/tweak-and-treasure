import { Badge } from "@/components/ui/badge";
import dashboardPreview from "@/assets/dashboard-preview.png";
const DashboardShowcase = () => {
  const highlights = ["Dashboard centralizado", "Métricas en tiempo real", "Interfaz intuitiva", "Acceso desde cualquier lugar"];
  return <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-secondary/50 bg-secondary/10 text-secondary font-medium">
            Vista previa
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Tu centro de <span className="text-secondary">comando</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualiza toda la información de tu negocio editorial en un dashboard 
            diseñado para tomar decisiones inteligentes.
          </p>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {highlights.map(highlight => <div key={highlight} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-medium">{highlight}</span>
            </div>)}
        </div>

        {/* Dashboard Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl glow-secondary">
            <img src={dashboardPreview} alt="Publify Dashboard Preview" className="w-full h-auto" />
          </div>

          {/* Stats overlay */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8 bg-card border border-border rounded-xl px-8 py-4 shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">47+</div>
              <div className="text-xs text-muted-foreground">Funcionalidades</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">10</div>
              <div className="text-xs text-muted-foreground">Módulos</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DashboardShowcase;