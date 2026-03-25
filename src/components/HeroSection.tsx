import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-background pt-[clamp(4.75rem,8vw,6.25rem)] pb-[clamp(4.5rem,8vw,7rem)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,66,33,0.76)_42%,rgba(0,0,0,0))]" />
        <div className="absolute left-12 top-10 h-56 w-56 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-8 bottom-8 h-64 w-64 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto w-full max-w-4xl text-center lg:mx-0 lg:max-w-[46rem] lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mx-auto mt-2 max-w-4xl font-heading text-[clamp(2.45rem,6vw,4.7rem)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white lg:mx-0 lg:max-w-3xl"
            >
              Chegou a hora de operar com seguranca.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mx-auto mt-5 max-w-3xl text-[clamp(1.05rem,1.2vw,1.3rem)] leading-relaxed text-white/95 lg:mx-0 lg:max-w-2xl"
            >
              Gestao completa de residuos hospitalares e industriais com conformidade total e rastreabilidade
              garantida.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[540px] lg:max-w-[560px] lg:justify-self-end"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/22 via-primary/8 to-accent/18 blur-xl" />

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/18 bg-white/10 p-2 shadow-elevated backdrop-blur">
              <img
                src={heroBg}
                alt="Caminhao da COLEFAR em operacao rodoviaria"
                className="aspect-[3/2] w-full rounded-[1.2rem] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#014423]/68 via-[#014423]/22 to-[#014423]/16" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
