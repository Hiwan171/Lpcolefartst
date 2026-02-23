import { motion } from "framer-motion";
import { ArrowRight, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";
import { openContactModal } from "@/lib/contact-modal";

const contactInfo = [
  { icon: Phone, label: "Telefone", value: CONTACT.phoneDisplay },
  { icon: Mail, label: "E-mail", value: CONTACT.email },
  {
    icon: MapPin,
    label: "Endereco",
    value: `${CONTACT.addressLine1} - ${CONTACT.addressLine2}`,
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
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="alive-card w-full rounded-3xl p-6 text-center sm:p-8"
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

            <div className="alive-card mt-5 rounded-2xl p-4">
              <p className="text-sm font-semibold text-primary-foreground">O que voce recebe no primeiro contato:</p>
              <ul className="mt-3 space-y-2 text-sm text-primary-foreground/78">
                <li>- enquadramento tecnico do residuo</li>
                <li>- sugestao de frequencia de coleta</li>
                <li>- orientacao documental para iniciar</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="cta" size="lg" className="h-12 rounded-full px-7 text-sm sm:text-base" onClick={() => openContactModal("cta_primary_form")}>
                Quero minha proposta personalizada
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-7 space-y-3 text-left">
              {contactInfo.map((info) => (
                <div key={info.label} className="alive-card flex items-start gap-3 rounded-xl p-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                    <info.icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/50">{info.label}</p>
                    <p className="text-sm font-medium text-primary-foreground/88">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
