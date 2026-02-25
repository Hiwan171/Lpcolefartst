import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Factory,
  FileCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { openContactModal } from "@/lib/contact-modal";

const steps = [
  {
    step: "01",
    shortLabel: "Gerador",
    icon: Building2,
    title: "Gerador de residuos",
    description: "Levantamento inicial com o cliente para enquadramento tecnico e legal.",
  },
  {
    step: "02",
    shortLabel: "Coleta",
    icon: Truck,
    title: "Coleta e transporte",
    description: "Rota licenciada com equipe treinada e rastreabilidade da operacao.",
  },
  {
    step: "03",
    shortLabel: "Autoclave",
    icon: ClipboardList,
    title: "Autoclave",
    description: "Tratamento termico com processo controlado para residuos aplicaveis.",
  },
  {
    step: "04",
    shortLabel: "Incineracao",
    icon: Factory,
    title: "Incineracao",
    description: "Destinacao por unidade homologada para materiais de risco especifico.",
  },
  {
    step: "05",
    shortLabel: "Aterro",
    icon: ShieldCheck,
    title: "Aterro licenciado",
    description: "Disposicao final em local regularizado conforme normas ambientais.",
  },
  {
    step: "06",
    shortLabel: "Certificados",
    icon: FileCheck,
    title: "Certificados",
    description: "Emissao de CDF e comprovacoes para compliance e auditorias.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,66,33,0.76)_42%,rgba(0,0,0,0))]" />
        <div className="absolute left-12 top-10 h-56 w-56 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-8 bottom-8 h-64 w-64 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1240px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/93">
            Processo comercial
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Fluxo completo da coleta em 6 etapas
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/95 sm:text-base">
            Do gerador ao certificado: um processo continuo, rastreavel e desenhado para reduzir risco operacional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="relative mx-auto mt-10"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/16 via-transparent to-accent/16 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/16 bg-[linear-gradient(160deg,rgba(0,0,0,0.6),rgba(1,68,35,0.62)_58%,rgba(0,66,33,0.66)_100%)] p-4 shadow-elevated sm:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(185,202,99,0.2),rgba(0,0,0,0)_52%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative hidden xl:block">
              <div className="absolute left-8 right-8 top-5 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
              <div className="grid grid-cols-6 gap-3">
                {steps.map((step) => (
                  <div key={`header-${step.step}`} className="text-center">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/65 bg-[#014423] text-sm font-semibold text-accent shadow-[0_14px_20px_-16px_rgba(185,202,99,0.95)]">
                      {step.step}
                    </div>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/82">
                      {step.shortLabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:mt-7 xl:grid-cols-6">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <motion.article
                    key={step.step}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(185,202,99,0.92)",
                      boxShadow: "0 26px 42px -30px rgba(185,202,99,0.9)",
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/18 bg-[linear-gradient(150deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] p-5 transition-all duration-300"
                  >
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent/85 via-accent/40 to-transparent" />
                    <div className="pointer-events-none absolute right-4 top-2 text-[48px] font-bold leading-none text-white">
                      {step.step}
                    </div>

                    <div className="relative z-10">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/45 bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent/18">
                        <StepIcon className="h-6 w-6" />
                      </div>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/76">
                        Etapa {step.step}
                      </p>
                      <h3 className="mt-2 text-[22px] font-semibold leading-tight text-primary-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/84">{step.description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Button
            variant="cta"
            size="lg"
            className="h-11 rounded-full px-7"
            onClick={() => openContactModal("process_cta")}
          >
            Solicitar proposta e iniciar coleta
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
