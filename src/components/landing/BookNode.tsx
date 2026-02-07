import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const BookNode = () => {
  return (
    <AnimatedSection className="mb-12">
      <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/30 max-w-3xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white">
            El libro como <span className="text-primary">nodo central</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada libro es el eje central de tu ecosistema. Todos los pilares se conectan 
            y nutren de la información de cada título para darte una visión 360° de tu negocio.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default BookNode;
