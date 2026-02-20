import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, CircleDashed, FileCheck2, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  "Coleta e transporte com licenca ambiental",
  "Rastreabilidade completa em todas as etapas",
  "Emissao de CDF para auditoria e compliance",
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-16 pt-48 sm:pb-24">
      <div className="absolute inset-0 -z-20">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(166,241,99,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(65,148,93,0.35),transparent_35%),linear-gradient(115deg,rgba(4,10,20,0.95),rgba(7,22,30,0.88)_44%,rgba(9,29,19,0.76))]" />
      <div className="absolute -left-24 top-32 -z-10 h-72 w-72 rounded-full bg-accent/25 blur-[120px]" />
      <div className="absolute -right-16 bottom-24 -z-10 h-72 w-72 rounded-full bg-primary/35 blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/80 backdrop-blur"
            >
              <ShieldCheck className="h-4 w-4 text-accent" />
              Operacao com compliance ambiental
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl"
            >
              Sua empresa precisa de{" "}
              <span className="bg-gradient-to-r from-accent to-[#f6ff9a] bg-clip-text text-transparent">
                coleta segura
              </span>{" "}
              de residuos perigosos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/78 sm:text-lg"
            >
              A COLEFAR realiza coleta, transporte e destinacao final para residuos perigosos (exceto radioativos),
              com documentacao valida para auditorias, fiscalizacoes e exigencias da sua operacao.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button variant="cta" size="lg" className="h-12 rounded-full px-7 text-sm sm:text-base" asChild>
                <a href="#contato">
                  Solicitar diagnostico tecnico
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                className="h-12 rounded-full border-white/40 px-7 text-sm text-white hover:border-white/70 sm:text-base"
                asChild
              >
                <a href="#processo">Entender o processo</a>
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-8 grid gap-2 text-sm text-primary-foreground/82 sm:grid-cols-2"
            >
              {highlights.map((item) => (
                <li key={item} className="inline-flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-elevated backdrop-blur-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent">
              Atendimento comercial
            </div>

            <h2 className="mt-4 text-2xl font-bold text-primary-foreground">Fluxo rapido para comecar sua coleta</h2>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Sem burocracia desnecessaria: voce envia os dados e recebe orientacao tecnica com plano de coleta.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-background/55 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/55">Passo 1</p>
                <div className="mt-2 flex items-center gap-2 text-sm font-medium text-primary-foreground">
                  <CircleDashed className="h-4 w-4 text-accent" />
                  Diagnostico do resíduo e da frequencia
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background/55 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/55">Passo 2</p>
                <div className="mt-2 flex items-center gap-2 text-sm font-medium text-primary-foreground">
                  <Truck className="h-4 w-4 text-accent" />
                  Coleta com transporte licenciado
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background/55 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/55">Passo 3</p>
                <div className="mt-2 flex items-center gap-2 text-sm font-medium text-primary-foreground">
                  <FileCheck2 className="h-4 w-4 text-accent" />
                  Destinacao final e emissao de CDF
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
