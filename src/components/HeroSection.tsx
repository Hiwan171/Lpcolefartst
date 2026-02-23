import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { CONTACT } from "@/lib/contact";
import { openContactModal } from "@/lib/contact-modal";
import { trackEvent } from "@/lib/analytics";

const highlights = [
  "Reduza risco de multa e passivo ambiental",
  "Coleta com transporte licenciado e rastreado",
  "CDF valido para auditoria e compliance",
];

const quickTrust = [
  { label: "Resposta comercial", target: 15, prefix: "ate ", suffix: " min" },
  { label: "Empresas atendidas", target: 2000, prefix: "+", suffix: "" },
  { label: "Experiencia", target: 20, prefix: "+ de ", suffix: " anos" },
];

type CountUpProps = {
  target: number;
  prefix: string;
  suffix: string;
};

const CountUp = ({ target, prefix, suffix }: CountUpProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 1100;
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const next = Math.round(target * progress);
      setValue(next);
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return (
    <span>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-24">
      <div className="absolute inset-0 -z-20">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(166,241,99,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(65,148,93,0.35),transparent_35%),linear-gradient(115deg,rgba(4,10,20,0.95),rgba(7,22,30,0.88)_44%,rgba(9,29,19,0.76))]" />
      <div className="absolute -left-24 top-32 -z-10 h-72 w-72 rounded-full bg-accent/25 blur-[120px]" />
      <div className="absolute -right-16 bottom-24 -z-10 h-72 w-72 rounded-full bg-primary/35 blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
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
            className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl"
          >
            Venda sem travar sua operacao:
            <span className="bg-gradient-to-r from-accent to-[#f6ff9a] bg-clip-text text-transparent"> coletas rapidas, legais e previsiveis</span>
            {" "}para residuos perigosos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-primary-foreground/78 sm:text-lg"
          >
            A COLEFAR assume coleta, transporte e destinacao final (exceto radioativos) para sua equipe focar no
            core do negocio, com documentacao valida para fiscalizacao e auditoria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              variant="cta"
              size="lg"
              className="h-12 rounded-full px-7 text-sm sm:text-base"
              onClick={() => openContactModal("hero_primary")}
            >
              Solicitar diagnostico
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              variant="hero-outline"
              className="h-11 rounded-full border-white/30 px-5 text-xs text-primary-foreground/90 sm:text-sm"
              asChild
            >
              <a
                href={`https://wa.me/${CONTACT.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { source: "hero_button" })}
              >
                <PhoneCall className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mx-auto mt-8 grid max-w-3xl gap-2 text-left text-sm text-primary-foreground/82 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-3"
          >
            {quickTrust.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3 backdrop-blur">
                <p className="text-[11px] uppercase tracking-wider text-primary-foreground/55">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-primary-foreground">
                  <CountUp target={item.target} prefix={item.prefix} suffix={item.suffix} />
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
