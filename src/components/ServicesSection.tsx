import { motion } from "framer-motion";
import { Battery, Droplets, FlaskConical, Package, Paintbrush, Pill, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Residuos Quimicos",
    description: "Coleta e tratamento de solventes, acidos, bases e reagentes industriais.",
  },
  {
    icon: Droplets,
    title: "Residuos Oleosos",
    description: "Oleos usados, graxas e emulsões contaminadas com destinacao correta.",
  },
  {
    icon: Pill,
    title: "Residuos Hospitalares",
    description: "Materiais biologicos, perfurocortantes e medicamentos vencidos.",
  },
  {
    icon: Battery,
    title: "Baterias e Eletronicos",
    description: "Pilhas, baterias e componentes eletrônicos com metais pesados.",
  },
  {
    icon: Paintbrush,
    title: "Tintas e Solventes",
    description: "Tintas, vernizes, solventes e subprodutos de limpeza industrial.",
  },
  {
    icon: Package,
    title: "Embalagens Contaminadas",
    description: "Tambores, bombonas e embalagens com contato com substancias perigosas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,22,0),rgba(8,18,30,0.74)_42%,rgba(7,14,22,0))]" />
        <div className="absolute left-12 top-10 h-56 w-56 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-8 bottom-8 h-64 w-64 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/78">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Nossos servicos
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Tipos de residuos que coletamos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/66 sm:text-base">
            Operamos com residuos perigosos classificados na ABNT NBR 10004, com excecao de materiais radioativos.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 shadow-card backdrop-blur"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/80 via-primary to-primary/20" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/18 blur-3xl transition-all duration-300 group-hover:bg-primary/30" />

              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/35 bg-accent/10 text-accent">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/55">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-primary-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
