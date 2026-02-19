import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 px-4 py-2 text-sm font-medium text-primary-foreground mb-6">
              <ShieldCheck className="w-4 h-4" />
              Licenciada pelos órgãos ambientais
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6"
          >
            Coleta de Resíduos Perigosos com{" "}
            <span className="text-accent">Responsabilidade Ambiental</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed"
          >
            Somos especialistas na coleta, transporte e destinação final de resíduos perigosos
            — exceto radioativos. Segurança, conformidade legal e sustentabilidade em cada etapa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="cta" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#contato">
                Solicitar Orçamento Gratuito
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="px-8 py-6" asChild>
              <a href="#processo">Como Funciona</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
