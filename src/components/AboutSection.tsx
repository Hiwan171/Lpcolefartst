import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Building2, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-colefar.jpg";
import { openContactModal } from "@/lib/contact-modal";

const aboutStats = [
  { icon: MapPinned, value: 300, label: "municipios atendidos" },
  { icon: Building2, value: 1600, label: "empresas ativas" },
];

const CountUpValue = ({ value, className }: { value: number; className?: string }) => {
  const valueRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(valueRef, { once: true, amount: 0.7 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let animationFrame = 0;
    let startTime = 0;
    const durationMs = 1200;

    const animateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateValue);
      }
    };

    animationFrame = requestAnimationFrame(animateValue);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <span ref={valueRef} className={className}>
      +{displayValue.toLocaleString("pt-BR")}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="relative -mt-8 overflow-hidden bg-background pt-[clamp(4.5rem,7.5vw,6.5rem)] pb-[clamp(4rem,7vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,66,33,0.76)_42%,rgba(0,0,0,0))]" />
        <div className="absolute left-12 top-10 h-56 w-56 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-8 bottom-8 h-64 w-64 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-16 xl:gap-x-20">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 mx-auto w-full max-w-3xl text-center lg:order-2 lg:mx-0 lg:flex lg:min-h-[600px] lg:max-w-[600px] lg:flex-col lg:justify-between lg:justify-self-end lg:text-left"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                <Building2 className="h-4 w-4 text-accent" />
                QUEM SOMOS
              </span>

              <h2 className="mt-3 font-heading text-[clamp(1.85rem,2.45vw,2.65rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
                Ha mais de 20 anos transformando responsabilidade ambiental em tranquilidade para empresas mineiras.
              </h2>
              <p className="mt-4 text-[clamp(0.95rem,0.9vw,1.02rem)] leading-relaxed text-white/88">
                Fundada em 2002, a Colefar nasceu da uniao de um farmaceutico e seu tecnico farmaceutico, com um
                proposito claro: oferecer solucoes seguras para o tratamento de residuos e garantir o cumprimento
                rigoroso das exigencias legais.
              </p>
              <p className="mt-2 text-[clamp(0.95rem,0.9vw,1.02rem)] leading-relaxed text-white/88">
                Com sede em Belo Horizonte, iniciamos atendendo pequenos geradores e crescemos com responsabilidade,
                inovacao e compromisso ambiental, tornando-nos referencia no estado.
              </p>

              <p className="mt-5 text-[0.98rem] font-semibold text-white sm:text-base">Experiencia que gera seguranca.</p>
              <p className="mt-1 text-[0.98rem] font-semibold text-white sm:text-base">Estrutura que gera confianca.</p>
            </div>

            <div className="mt-6 flex justify-center lg:mt-4 lg:justify-start">
              <Button
                variant="cta"
                size="lg"
                className="h-11 rounded-full px-7 text-sm"
                onClick={() => openContactModal("about_cta")}
              >
                Receber proposta para minha empresa
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 relative mx-auto w-full max-w-3xl lg:order-1 lg:max-w-[620px] lg:justify-self-start"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/22 via-primary/8 to-accent/18 blur-xl" />

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/18 bg-white/10 p-2 shadow-elevated backdrop-blur">
              <img src={aboutImg} alt="Equipe COLEFAR em operacao" className="h-[420px] w-full rounded-[1.2rem] object-cover lg:h-[600px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#014423]/72 via-[#014423]/24 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                {aboutStats.map((item) => (
                  <div key={`image-${item.label}`} className="rounded-xl border border-white/35 bg-[#014423]/46 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-accent" />
                      <CountUpValue value={item.value} className="text-3xl font-bold leading-none text-white" />
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/90">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
