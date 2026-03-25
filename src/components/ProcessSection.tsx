import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Factory,
  FileCheck2,
  FlaskConical,
  ShieldCheck,
  Trash2,
  Truck,
} from "lucide-react";

type NodeItem = {
  step: string;
  label: string;
  detail: string;
  icon: LucideIcon;
  x: string;
  y: string;
};

const desktopNodes: NodeItem[] = [
  {
    step: "Etapa 01",
    label: "Gerador",
    detail: "Origem mapeada",
    icon: Trash2,
    x: "9%",
    y: "35%",
  },
  {
    step: "Etapa 02",
    label: "Coleta",
    detail: "Retirada programada",
    icon: Truck,
    x: "25%",
    y: "35%",
  },
  {
    step: "Etapa 03",
    label: "Tratamento",
    detail: "Analise tecnica",
    icon: FlaskConical,
    x: "41%",
    y: "35%",
  },
  {
    step: "Etapa 04",
    label: "Autoclave",
    detail: "Esterilizacao",
    icon: ShieldCheck,
    x: "59.5%",
    y: "15%",
  },
  {
    step: "Etapa 04",
    label: "Incineracao",
    detail: "Descarte termico",
    icon: Factory,
    x: "59.5%",
    y: "65%",
  },
  {
    step: "Etapa 05",
    label: "Aterro",
    detail: "Disposicao final",
    icon: Factory,
    x: "76%",
    y: "35%",
  },
  {
    step: "Etapa 06",
    label: "Certificado",
    detail: "Comprovacao legal",
    icon: FileCheck2,
    x: "91%",
    y: "35%",
  },
];

const mobileFlow: Omit<NodeItem, "className">[] = [
  { step: "Etapa 01", label: "Gerador", detail: "Origem mapeada", icon: Trash2 },
  { step: "Etapa 02", label: "Coleta", detail: "Retirada programada", icon: Truck },
  { step: "Etapa 03", label: "Tratamento", detail: "Analise tecnica", icon: FlaskConical },
  { step: "Etapa 04", label: "Autoclave", detail: "Esterilizacao", icon: ShieldCheck },
  { step: "Etapa 04", label: "Incineracao", detail: "Descarte termico", icon: Factory },
  { step: "Etapa 05", label: "Aterro", detail: "Disposicao final", icon: Factory },
  { step: "Etapa 06", label: "Certificado", detail: "Comprovacao legal", icon: FileCheck2 },
];

const ProcessNode = ({
  step,
  label,
  detail,
  icon: Icon,
  x,
  y,
}: {
  step: string;
  label: string;
  detail: string;
  icon: LucideIcon;
  x: string;
  y: string;
}) => (
  <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
    <div className="alive-card flex min-h-[170px] w-[152px] flex-col items-center rounded-2xl border border-white/24 px-3 py-3 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent/95">{step}</p>
      <div className="mt-2 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/60 bg-[linear-gradient(150deg,rgba(255,255,255,0.18),rgba(7,33,20,0.78))] text-accent shadow-[0_20px_28px_-20px_rgba(185,202,99,0.92)]">
        <Icon className="h-7 w-7" />
      </div>
      <p className="mt-2 text-sm font-semibold tracking-[0.02em] text-white">{label}</p>
      <p className="mt-1 text-[11px] text-primary-foreground/78">{detail}</p>
    </div>
  </div>
);

const ProcessSection = () => {
  return (
    <section id="processo" className="relative overflow-hidden bg-background py-[clamp(3.75rem,6vw,5.25rem)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,66,33,0.72)_40%,rgba(0,0,0,0))]" />
        <div className="absolute left-10 top-8 h-56 w-56 rounded-full bg-primary/24 blur-[120px]" />
        <div className="absolute -right-4 bottom-6 h-72 w-72 rounded-full bg-accent/14 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1240px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-header mb-9 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/95">
            <FileCheck2 className="h-3.5 w-3.5 text-accent" />
            Processo Colefar
          </span>
          <h2 className="section-title mt-5">
            Etapas que garantem coleta segura e rastreavel
          </h2>
          <p className="section-subtitle">
            Fluxo tecnico pensado para clientes que exigem conformidade, controle operacional e seguranca ambiental.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="relative mt-2 sm:mt-4"
        >
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[410px] w-full max-w-[1200px]">
              <ArrowRight className="absolute left-[17%] top-[35%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-accent/95" />
              <ArrowRight className="absolute left-[33%] top-[35%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-accent/95" />
              <ArrowUpRight className="absolute left-[50%] top-[25%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-accent/95" />
              <ArrowDownRight className="absolute left-[50%] top-[50%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-accent/95" />
              <ArrowDownRight className="absolute left-[68%] top-[25%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-accent/95" />
              <ArrowUpRight className="absolute left-[68%] top-[50%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-accent/95" />
              <ArrowRight className="absolute left-[83.5%] top-[35%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-accent/95" />

              {desktopNodes.map((node, index) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.26, delay: 0.04 + index * 0.04 }}
                  className="contents"
                >
                  <ProcessNode step={node.step} label={node.label} detail={node.detail} icon={node.icon} x={node.x} y={node.y} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative lg:hidden">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <div className="mx-auto flex w-max items-center gap-2">
                {mobileFlow.map((item, index) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="alive-card flex w-[136px] shrink-0 flex-col items-center rounded-xl border border-white/24 px-2.5 py-2.5 text-center">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-accent/95">{item.step}</p>
                      <div className="mt-1.5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/60 bg-[linear-gradient(150deg,rgba(255,255,255,0.18),rgba(7,33,20,0.78))] text-accent">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <p className="mt-1.5 text-xs font-semibold text-white">{item.label}</p>
                      <p className="text-[11px] text-primary-foreground/78">{item.detail}</p>
                    </div>
                    {index < mobileFlow.length - 1 && <ArrowRight className="h-6 w-6 shrink-0 text-accent/95" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
