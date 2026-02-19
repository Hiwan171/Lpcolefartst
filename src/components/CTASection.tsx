import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              Precisa coletar resíduos perigosos?{" "}
              <span className="text-accent">Fale conosco agora!</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">Solicite um orçamento sem compromisso. Nossa equipe responde em até 24 horas com uma proposta personalizada para sua empresa.


            </p>
            <Button variant="cta" size="lg" className="text-lg px-10 py-6" asChild>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5531972639866">
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
          </motion.div>

          {/* Right - Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6">

            {[
            { icon: Phone, label: "Telefone", value: "(00) 0000-0000" },
            { icon: Mail, label: "E-mail", value: "contato@colefar.com.br" },
            { icon: MapPin, label: "Endereço", value: "Sua cidade, Estado - Brasil" }].
            map((info) =>
            <div
              key={info.label}
              className="flex items-center gap-5 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10">

                <div className="w-12 h-12 rounded-full bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">{info.label}</p>
                  <p className="text-primary-foreground font-semibold">{info.value}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

};

export default CTASection;