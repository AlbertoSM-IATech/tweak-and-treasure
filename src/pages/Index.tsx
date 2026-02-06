import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import Features from "@/components/landing/Features";
import DashboardShowcase from "@/components/landing/DashboardShowcase";
import Ecosystem from "@/components/landing/Ecosystem";
import Modules from "@/components/landing/Modules";
import Pricing from "@/components/landing/Pricing";
import FoundersProgram from "@/components/landing/FoundersProgram";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <DashboardShowcase />
        <Ecosystem />
        <Modules />
        <Pricing />
        <FoundersProgram />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
