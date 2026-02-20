import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, Gauge, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-colefar.jpg";

const strengths = [
  "Licencas ambientais atualizadas",
  "Operacao rastreada por GPS",
  "Equipe com treinamento tecnico",
  "Processo auditavel com CDF",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/20 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/12 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/28 via-transparent to-accent/20 blur-xl" />

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-2 shadow-elevated backdrop-blur">
              <img src={aboutImg} alt="Equipe COLEFAR em operacao" className="h-[420px] w-full rounded-[1.2rem] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/15 bg-background/65 p-4 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-widest text-primary-foreground/60">Experiencia</p>
                  <p className="mt-1 text-2xl font-bold text-primary-foreground">+10 anos</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-background/65 p-4 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-widest text-primary-foreground/60">Empresas atendidas</p>
                  <p className="mt-1 text-2xl font-bold text-primary-foreground">+2000</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/78">
              <Building2 className="h-4 w-4 text-accent" />
              Sobre a COLEFAR
            </span>

            <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
              Operacao ambiental com foco em seguranca e performance
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/66 sm:text-base">
              Atuamos no transporte e na gestao de residuos perigosos com padrao tecnico, governanca documental e
              execucao operacional para industrias, saude e empresas com alta exigencia de compliance.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <p className="text-sm text-primary-foreground/82">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                  <Shield className="h-4 w-4" />
                </div>
                <p className="mt-3 text-sm font-semibold text-primary-foreground">Conformidade legal</p>
                <p className="mt-1 text-sm text-primary-foreground/60">Documentacao valida para orgaos ambientais e auditorias.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                  <Gauge className="h-4 w-4" />
                </div>
                <p className="mt-3 text-sm font-semibold text-primary-foreground">Agilidade operacional</p>
                <p className="mt-1 text-sm text-primary-foreground/60">Planejamento e coleta no tempo da sua operacao.</p>
              </div>
            </div>

            <Button variant="cta" size="lg" className="mt-8 h-12 rounded-full px-7 text-sm sm:text-base" asChild>
              <a href="#contato">
                Solicitar proposta
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
