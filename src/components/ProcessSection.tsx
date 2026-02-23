import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, Factory, FileCheck, MoveRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openContactModal } from "@/lib/contact-modal";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Diagnostico tecnico",
    description: "Mapeamos tipo de residuo, volume e frequencia para reduzir custo e risco desde o inicio.",
  },
  {
    step: "02",
    icon: Truck,
    title: "Coleta e transporte",
    description: "Equipe treinada e veiculos licenciados executam a coleta sem parar sua operacao.",
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
    description: "Entrega de comprovacao formal para conformidade ambiental e tranquilidade em auditorias.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="relative overflow-hidden bg-muted py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,22,30,0.84),rgba(11,19,28,0.34)_45%,rgba(12,24,17,0.7))]" />
        <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/16 blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1160px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/78">
            Processo comercial
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">Como voce inicia sua coleta em 4 passos</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/68 sm:text-base">
            Fluxo objetivo para sair do risco, acelerar decisao e operar com seguranca juridica e ambiental.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              className="relative"
            >
              <article className="alive-card h-full rounded-2xl p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                  <step.icon className="h-5 w-5" />
                </div>

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/55">
                  Etapa {step.step}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-primary-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{step.description}</p>
              </article>

              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-accent/80 lg:block">
                  <MoveRight className="h-7 w-7" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="cta" size="lg" className="h-11 rounded-full px-7" onClick={() => openContactModal("process_cta")}>
            Iniciar minha coleta agora
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
