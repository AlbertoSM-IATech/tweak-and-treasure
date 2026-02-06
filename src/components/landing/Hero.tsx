import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, PenTool, BarChart3, Rocket, BookOpen, Key, Target } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";
const Hero = () => {
  const pillItems = [{
    icon: Search,
    label: "Investiga"
  }, {
    icon: PenTool,
    label: "Crea"
  }, {
    icon: BarChart3,
    label: "Analiza"
  }, {
    icon: Rocket,
    label: "Escala"
  }];
  const features = [{
    icon: BookOpen,
    label: "Ficha por libro"
  }, {
    icon: Key,
    label: "Análisis de Keywords"
  }, {
    icon: Target,
    label: "Gestión de ADS"
  }];
  return <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-full mx-auto text-center mb-12">
          {/* Founders Badge */}
          <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/50 bg-primary/10 text-primary font-medium animate-fade-in">
            🎯 Programa de Fundadores - Solo 20 plazas
          </Badge>

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white" style={{
          animationDelay: "0.1s"
        }}>
            Tu Sistema Operativo{" "}
            <span className="text-primary">Editorial</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-full mx-auto animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            Centraliza la operativa de tu editorial KDP en un único panel. La plataforma todo-en-uno diseñada específicamente para Publishers de Amazon KDP.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            {pillItems.map(item => <div key={item.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">{item.label}</span>
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary">
              Reservar mi Plaza
            </Button>
            <Button size="lg" variant="outline" className="font-semibold px-8 py-6 text-lg border-border hover:bg-card">
              Ver Funcionalidades
            </Button>
          </div>

          {/* Feature Indicators */}
          <div className="flex-wrap mb-12 animate-fade-in flex items-start justify-center mx-[42px] my-0 gap-[40px]" style={{
          animationDelay: "0.5s"
        }}>
            {features.map(feature => <div key={feature.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <feature.icon className="h-4 w-4 text-secondary" />
                <span>{feature.label}</span>
              </div>)}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto animate-fade-in-up" style={{
        animationDelay: "0.6s"
      }}>
          <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl glow-primary">
            <img src={dashboardPreview} alt="Publify Dashboard" className="w-full h-auto object-cover" />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>

          {/* Floating cards - Before/After */}
          <div className="absolute -left-4 md:-left-8 top-1/4 bg-card border border-border rounded-lg p-4 shadow-xl animate-float hidden lg:block">
            <div className="text-xs text-muted-foreground mb-1">Antes</div>
            <div className="text-2xl font-bold text-destructive">-32%</div>
            <div className="text-xs text-muted-foreground">ROI mensual</div>
          </div>

          <div className="absolute -right-4 md:-right-8 top-1/3 bg-card border border-border rounded-lg p-4 shadow-xl animate-float hidden lg:block" style={{
          animationDelay: "0.5s"
        }}>
            <div className="text-xs text-muted-foreground mb-1">Después</div>
            <div className="text-2xl font-bold text-primary">+127%</div>
            <div className="text-xs text-muted-foreground">ROI mensual</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;