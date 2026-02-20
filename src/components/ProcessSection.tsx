import { motion } from "framer-motion";
import { ClipboardList, Factory, FileCheck, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Diagnostico inicial",
    description: "Mapeamento do tipo de resíduo, volume e frequencia para definir o plano de coleta ideal.",
  },
  {
    step: "02",
    icon: Truck,
    title: "Coleta e transporte",
    description: "Equipe treinada e veiculos licenciados executam a coleta conforme requisitos legais.",
  },
  {
    step: "03",
    icon: Factory,
    title: "Tratamento e destinacao",
    description: "Encaminhamento para unidades homologadas com rastreabilidade completa do processo.",
  },
  {
    step: "04",
    icon: FileCheck,
    title: "Emissao de CDF",
    description: "Entrega de comprovacao formal de destinacao final para conformidade ambiental da empresa.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="relative overflow-hidden bg-muted py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,22,30,0.84),rgba(11,19,28,0.34)_45%,rgba(12,24,17,0.7))]" />
        <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/16 blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/78">
            Processo
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">Como funciona a operacao</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/68 sm:text-base">
            Fluxo objetivo para acelerar sua coleta com seguranca juridica e ambiental.
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-6 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary/55 via-accent/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-5">
            {steps.map((step, index) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className={`relative grid items-center gap-5 rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm sm:grid-cols-[1fr_auto_1fr] ${
                  index % 2 === 0 ? "" : "sm:[&>*:first-child]:order-3 sm:[&>*:last-child]:order-1"
                }`}
              >
                <div className="hidden sm:block" />

                <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent sm:mx-auto">
                  <step.icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/55">
                    Etapa {step.step}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-primary-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{step.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
