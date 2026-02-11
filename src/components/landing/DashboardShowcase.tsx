import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import img001 from "@/assets/carousel/001_dashboard_principal.png";
import img002 from "@/assets/carousel/002_ficha_de_libro.png";
import img003 from "@/assets/carousel/003_agrupacion_series.png";
import img004 from "@/assets/carousel/004_calculadora_viabilidad.png";
import img005 from "@/assets/carousel/005_analisis_keywords.png";
import img006 from "@/assets/carousel/006_gestion_ads.png";
import img007 from "@/assets/carousel/007_gestor_tareas.png";
import img008 from "@/assets/carousel/008_calendario_editorial.png";
import img009 from "@/assets/carousel/009_generador_qr.png";
import img010 from "@/assets/carousel/010_playground.png";
const DashboardShowcase = () => {
  const carouselImages = [
  { src: img001, alt: "Dashboard Principal" },
  { src: img002, alt: "Ficha de Libro" },
  { src: img003, alt: "Agrupación por Series" },
  { src: img004, alt: "Calculadora de Viabilidad" },
  { src: img005, alt: "Análisis de Keywords" },
  { src: img006, alt: "Gestión de ADS" },
  { src: img007, alt: "Gestor de Tareas y Notas" },
  { src: img008, alt: "Calendario Editorial" },
  { src: img009, alt: "Generador de QRs" },
  { src: img010, alt: "Playground de Investigación" }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const highlights = ["Dashboard centralizado", "Interfaz intuitiva", "Acceso desde cualquier lugar"];
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };
  return <section id="dashboard" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-secondary/50 bg-secondary/10 text-secondary font-medium">
              Vista previa
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Tu centro de <span className="text-secondary">mando editorial</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Tus libros en el centro de tu negocio. Visualiza toda la información de tu negocio editorial en un dashboard diseñado para tomar decisiones inteligentes.
            </p>
          </div>
        </AnimatedSection>

        {/* Highlights */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {highlights.map((highlight) => <div key={highlight} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-white">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>)}
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection delay={0.3}>
          <div className="relative max-w-5xl mx-auto">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl glow-secondary">
              <img src={carouselImages[currentIndex].src} alt={carouselImages[currentIndex].alt} className="w-full h-auto transition-opacity duration-300" />
            </div>

            {/* Navigation Arrows - Only show if more than 1 image */}
            {carouselImages.length > 1 && <>
                <Button variant="outline" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-border hover:bg-card" onClick={prevSlide}>
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-border hover:bg-card" onClick={nextSlide}>
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>}

            {/* Stats overlay */}
            
















            {/* Dots indicator - Only show if more than 1 image */}
            {carouselImages.length > 1 && <div className="flex justify-center gap-2 mt-12">
                {carouselImages.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-secondary w-6" : "bg-border"}`} />)}
              </div>}
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default DashboardShowcase;