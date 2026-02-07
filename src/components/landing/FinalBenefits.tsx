import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Gift } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
const NOTION_FORM_URL = "https://wild-paperback-a33.notion.site/2f083e512fb2809aa82cd9439dd91cd9?pvs=105";
const FinalBenefits = () => {
  const benefits = ["Acceso de por vida al plan Plus por ser fundador", "Todas las actualizaciones incluidas", "Acceso a nuevas funciones incluidas", "Participación en mejoras del producto", "Badge exclusivo de Fundador", "Sesión de onboarding 1:1 (opcional)"];
  return <section className="py-20 bg-gradient-to-t from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Beneficios exclusivos para <span className="text-primary">fundadores</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Únete ahora y disfruta de ventajas únicas que solo los primeros 20 fundadores tendrán.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="max-w-2xl mx-auto bg-card border-primary/30">
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                {benefits.map(benefit => <li key={benefit} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </li>)}
              </ul>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 glow-primary" onClick={() => window.open(NOTION_FORM_URL, "_blank")}>
                <Gift className="h-5 w-5 mr-2" />
                Reservar mi Plaza de Fundador
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Pago seguro. Garantía de devolución hasta el dia de la preventa.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>;
};
export default FinalBenefits;