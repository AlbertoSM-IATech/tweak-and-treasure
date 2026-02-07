import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import dashboardPreview from "@/assets/dashboard-preview.png";

const DashboardShowcase = () => {
  // Placeholder images - user will provide actual carousel images later
  const carouselImages = [
    { src: dashboardPreview, alt: "Dashboard Principal" },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const highlights = [
    "Dashboard centralizado",
    "Interfaz intuitiva",
    "Acceso desde cualquier lugar"
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="dashboard" className="py-20 bg-card/50">
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
            {highlights.map((highlight) => (
              <div 
                key={highlight} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-white"
              >
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection delay={0.3}>
          <div className="relative max-w-5xl mx-auto">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl glow-secondary">
              <img 
                src={carouselImages[currentIndex].src} 
                alt={carouselImages[currentIndex].alt} 
                className="w-full h-auto transition-opacity duration-300"
              />
            </div>

            {/* Navigation Arrows - Only show if more than 1 image */}
            {carouselImages.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-border hover:bg-card"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-border hover:bg-card"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

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

            {/* Dots indicator - Only show if more than 1 image */}
            {carouselImages.length > 1 && (
              <div className="flex justify-center gap-2 mt-12">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-secondary w-6" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DashboardShowcase;
