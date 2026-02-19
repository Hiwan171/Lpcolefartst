import { motion } from "framer-motion";
import { FlaskConical, Droplets, Pill, Battery, Paintbrush, Package } from "lucide-react";

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
    <section id="servicos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary bg-white px-3 py-1 rounded-full">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
            Tipos de Resíduos que Coletamos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Atendemos todos os tipos de resíduos perigosos classificados pela ABNT NBR 10004,
            exceto materiais radioativos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
