import { motion } from "framer-motion";
import { ClipboardList, Truck, Factory, FileCheck, ArrowUpRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Solicitação e Diagnóstico",
    description: "Você entra em contato e nossa equipe realiza uma análise detalhada dos resíduos a serem coletados.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Coleta Especializada",
    description: "Equipe treinada e veículos licenciados fazem a coleta no seu local, seguindo todas as normas de segurança.",
  },
  {
    icon: Factory,
    step: "03",
    title: "Tratamento e Destinação",
    description: "Os resíduos são encaminhados para unidades de tratamento licenciadas, garantindo a destinação final correta.",
  },
  {
    icon: FileCheck,
    step: "04",
    title: "Certificado de Destinação",
    description: "Você recebe o Certificado de Destinação Final (CDF) comprovando a conformidade ambiental do processo.",
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

const ProcessSection = () => {
  return (
    <section id="processo" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/15 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.5),rgba(255,255,255,0.02)_45%,rgba(20,94,57,0.08))]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm shadow-primary/10">
            <ClipboardList className="h-3.5 w-3.5" />
            Processo
          </span>
          <h2 className="mt-4 text-3xl font-heading font-bold text-foreground sm:text-4xl">
            Como Funciona Nossa Coleta
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Um processo simples, seguro e totalmente documentado para sua tranquilidade.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-accent via-primary/70 to-primary" />
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent xl:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, i) => (
              <motion.article
                key={step.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-primary/12 bg-background/80 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-elevated"
              >
                <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent via-primary/60 to-primary opacity-80" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />

                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-primary/20 bg-secondary/70 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                    Etapa {step.step}
                  </span>
                  <ArrowUpRight className="h-[18px] w-[18px] text-primary/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-secondary/90 text-primary transition-all duration-300 group-hover:scale-105 group-hover:border-primary/35 group-hover:bg-primary group-hover:text-primary-foreground">
                  <step.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-lg font-heading font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
