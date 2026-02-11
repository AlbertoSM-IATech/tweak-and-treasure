import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, PenTool, BarChart3, Rocket, BookOpen, Key, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import publifyLogoFull from "@/assets/publify-logo-full.png";

const NOTION_FORM_URL = "https://wild-paperback-a33.notion.site/2f083e512fb2809aa82cd9439dd91cd9?pvs=105";

const Hero = () => {
  const pillItems = [
  { icon: Search, label: "Investiga" },
  { icon: PenTool, label: "Crea" },
  { icon: BarChart3, label: "Analiza" },
  { icon: Rocket, label: "Escala" }];


  const features = [
  { icon: BookOpen, label: "Ficha por libro" },
  { icon: Key, label: "Análisis de Keywords" },
  { icon: Target, label: "Gestión de ADS" }];


  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="w-[90%] mx-auto relative z-10">
        {/* Full-width centered title block */}
        <div className="text-center mb-12">
          {/* Founders Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>

            <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/50 bg-primary/10 text-primary font-medium">
              🎯 Programa de Fundadores - Solo 20 plazas
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight max-w-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>

            El Sistema Operativo{" "}
            <span className="text-primary">Editorial</span> para Publishers KDP
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>

            Centraliza la operativa de tu editorial KDP en un único panel. Cada libro tiene su ficha y todo gira alrededor: investigación, producción, finanzas y marketing. Menos dispersión, más claridad para decidir.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>

            {pillItems.map((item) =>
            <div key={item.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">{item.label}</span>
              </div>
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary"
              onClick={() => window.open(NOTION_FORM_URL, "_blank")}>

              Reservar mi Plaza
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold px-8 py-6 text-lg border-border hover:bg-card"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>

              Ver Funcionalidades
            </Button>
          </motion.div>

          {/* Feature Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}>

            {features.map((feature) =>
            <div key={feature.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <feature.icon className="h-4 w-4 text-secondary" />
                <span>{feature.label}</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Dashboard Preview with Badges */}
        <motion.div
          className="relative max-w-4xl mx-auto px-10 md:px-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}>

          {/* Logo above image */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}>

            
          </motion.div>

          <div className="relative rounded-xl overflow-visible border border-border shadow-2xl glow-primary">
            <img
              alt="Publify Dashboard - Antes y Después"
              className="w-full h-auto object-cover"
              src="/lovable-uploads/1505b5cd-6525-42f7-8ec2-abd33da406e2.png" />


            {/* Before Badge - smaller */}
            <motion.div
              className="absolute -left-4 md:-left-6 top-4 md:top-8 bg-card/95 backdrop-blur-sm border border-destructive/50 rounded-xl px-3 py-2.5 shadow-lg z-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 1.0 },
                x: { duration: 0.5, delay: 1.0 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.0 }
              }}>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-destructive/30">
                  <svg className="w-4 h-4 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-destructive">Antes</p>
                  <p className="text-sm font-bold text-white">Archivos dispersos</p>
                </div>
              </div>
            </motion.div>

            {/* After Badge - smaller */}
            <motion.div
              className="absolute -right-4 md:-right-6 bottom-4 md:bottom-8 bg-card/95 backdrop-blur-sm border border-primary/50 rounded-xl px-3 py-2.5 shadow-lg z-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 1.2 },
                x: { duration: 0.5, delay: 1.2 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
              }}>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-primary uppercase tracking-wider font-medium">Después</p>
                  <p className="text-sm font-bold text-white">Todo en un panel</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Hero;