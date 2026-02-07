import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import DashboardShowcase from "@/components/landing/DashboardShowcase";
import Features from "@/components/landing/Features";
import Ecosystem from "@/components/landing/Ecosystem";
import Modules from "@/components/landing/Modules";
import Pricing from "@/components/landing/Pricing";
import FoundersProgram from "@/components/landing/FoundersProgram";
import FAQ from "@/components/landing/FAQ";
import FinalBenefits from "@/components/landing/FinalBenefits";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        {/* 1. Tu Sistema Operativo Editorial */}
        <Hero />
        
        {/* 2. Ser publisher independiente no debería ser así */}
        <PainPoints />
        
        {/* 3. Tu centro de mando editorial */}
        <DashboardShowcase />
        
        {/* 4. Todo lo que necesitas en un solo lugar */}
        <Features />
        
        {/* 5. Los 4 pilares de tu ecosistema */}
        <Ecosystem />
        
        {/* 6. 10 módulos para dominar KDP */}
        <Modules />
        
        {/* 7. Planes pensados para cada etapa */}
        <Pricing />
        
        {/* 8. Únete como Fundador */}
        <FoundersProgram />
        
        {/* 9. Preguntas frecuentes */}
        <FAQ />
        
        {/* 10. Beneficios exclusivos para fundadores */}
        <FinalBenefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
