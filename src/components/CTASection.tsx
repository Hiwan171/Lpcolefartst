import { motion } from "framer-motion";
import { ArrowRight, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, MAPS_LINK } from "@/lib/contact";
import { openContactModal } from "@/lib/contact-modal";

const contactInfo = [
  { icon: Phone, label: "Telefone", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneRaw}` },
  { icon: Mail, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    icon: MapPin,
    label: "Endereco",
    value: `${CONTACT.addressLine1} - ${CONTACT.addressLine2}`,
    href: MAPS_LINK,
  },
  { icon: Clock3, label: "Horario", value: "Segunda a sexta, 8h as 17h45" },
];

const CTASection = () => {
  return (
    <section id="contato" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,11,17,0.98),rgba(8,20,25,0.9)_48%,rgba(15,48,31,0.84))]" />
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-primary/30 blur-[130px]" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/12 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="w-full rounded-3xl border border-white/12 bg-white/[0.05] p-6 text-center backdrop-blur-xl sm:p-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              <ShieldCheck className="h-3.5 w-3.5" />
              Time tecnico-comercial
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl">
              Receba sua proposta e inicie sua coleta ainda hoje
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
              Cada dia sem destinacao correta aumenta risco de autuacao e gargalo interno. Clique abaixo e abra o
              formulario para receber orientacao pratica e comecar rapido.
            </p>

            <div className="mt-5 rounded-2xl border border-white/12 bg-background/55 p-4">
              <p className="text-sm font-semibold text-primary-foreground">O que voce recebe no primeiro contato:</p>
              <ul className="mt-3 space-y-2 text-sm text-primary-foreground/78">
                <li>- enquadramento tecnico do residuo</li>
                <li>- sugestao de frequencia de coleta</li>
                <li>- orientacao documental para iniciar</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="cta" size="lg" className="h-12 rounded-full px-7 text-sm sm:text-base" onClick={openContactModal}>
                Abrir formulario de proposta
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 rounded-full px-7 text-sm sm:text-base" asChild>
                <a href={`tel:${CONTACT.phoneRaw}`}>Ligar agora</a>
              </Button>
            </div>

            <div className="mt-7 space-y-3 text-left">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-background/55 p-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                    <info.icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/50">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary-foreground/88 hover:text-accent"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-primary-foreground/88">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="w-full rounded-3xl border border-white/15 bg-background/85 p-6 text-center shadow-elevated sm:p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Formulario suspenso</p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">Abra o formulario sem sair da pagina</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Ao clicar em qualquer botao de contato, o formulario abre em modal sobre a landing.
            </p>

            <Button variant="cta" size="lg" className="mt-6 h-12 rounded-full px-7" onClick={openContactModal}>
              Quero preencher agora
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;