import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { openContactModal } from "@/lib/contact-modal";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-24">
      <div className="absolute inset-0 -z-20">
        <img src={heroBg} alt="" className="h-full w-full object-cover object-[56%_center] lg:object-[90%_center]" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_16%,rgba(185,202,99,0.30),transparent_32%),radial-gradient(circle_at_86%_20%,rgba(185,202,99,0.16),transparent_40%),linear-gradient(115deg,rgba(7,43,27,0.68)_0%,rgba(6,83,50,0.62)_48%,rgba(5,102,61,0.58)_100%)]" />
      <div className="absolute -left-24 top-32 -z-10 h-72 w-72 rounded-full bg-accent/18 blur-[120px]" />
      <div className="absolute -right-16 bottom-24 -z-10 h-72 w-72 rounded-full bg-primary/24 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-24 bg-gradient-to-b from-transparent to-[#055a36]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:mx-0 lg:max-w-3xl lg:text-6xl"
          >
            Chegou a hora de operar com seguranca.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white sm:text-lg lg:mx-0 lg:max-w-2xl"
          >
            Gestao completa de residuos hospitalares e industriais com conformidade total e rastreabilidade garantida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 flex items-center justify-center lg:justify-start"
          >
            <Button
              variant="cta"
              size="lg"
              className="h-12 rounded-full px-7 text-sm sm:text-base"
              onClick={() => openContactModal("hero_primary")}
            >
              Solicitar orçamento agora!
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
