import { motion } from "framer-motion";
import {
  FlaskConical,
  Droplets,
  Pill,
  Battery,
  Paintbrush,
  Package,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Resíduos Químicos",
    description: "Coleta e tratamento de solventes, ácidos, bases e reagentes químicos industriais.",
  },
  {
    icon: Droplets,
    title: "Resíduos Oleosos",
    description: "Óleos usados, graxas e emulsões contaminadas com destinação ambientalmente correta.",
  },
  {
    icon: Pill,
    title: "Resíduos Hospitalares",
    description: "Coleta segura de materiais biológicos, perfurocortantes e medicamentos vencidos.",
  },
  {
    icon: Battery,
    title: "Baterias e Eletrônicos",
    description: "Destinação de baterias, pilhas e componentes eletrônicos com metais pesados.",
  },
  {
    icon: Paintbrush,
    title: "Tintas e Solventes",
    description: "Resíduos de tintas, vernizes, solventes e produtos de limpeza industrial.",
  },
  {
    icon: Package,
    title: "Embalagens Contaminadas",
    description: "Tambores, bombonas e embalagens que tiveram contato com substâncias perigosas.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative overflow-hidden py-24 bg-muted">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[380px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-accent/15 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.55),rgba(255,255,255,0.05)_45%,rgba(20,94,57,0.08))]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm shadow-primary/10 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            Nossos Serviços
          </span>
          <h2 className="mt-4 text-3xl font-heading font-bold text-foreground sm:text-4xl">
            Tipos de Resíduos que Coletamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Atendemos todos os tipos de resíduos perigosos classificados pela ABNT NBR 10004,
            exceto materiais radioativos.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-accent via-primary/70 to-primary" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-primary/12 bg-background/80 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-elevated"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />
              <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent via-primary/60 to-primary opacity-80" />

              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-secondary/90 text-primary shadow-inner shadow-white/60 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/35 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6 transition-colors duration-300" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>

              <h3 className="mb-2 text-lg font-heading font-bold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
