import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-colefar.jpg";

const highlights = [
  "Licenças ambientais atualizadas",
  "Veículos rastreados por GPS",
  "Equipe certificada em segurança",
  "Emissão de CDF para cada coleta",
  "Atendimento em todo o estado",
  "Mais de 10 anos de experiência",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="relative overflow-hidden bg-muted py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/15 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(255,255,255,0.5),rgba(255,255,255,0.05)_50%,rgba(20,94,57,0.08))]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-background/80 shadow-elevated backdrop-blur-sm">
              <img
                src={aboutImg}
                alt="Profissional COLEFAR em operação"
                className="h-[460px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 right-4 rounded-2xl border border-primary-foreground/10 bg-primary/95 px-6 py-5 shadow-elevated backdrop-blur-sm">
              <p className="text-4xl font-heading font-extrabold text-primary-foreground">+2000</p>
              <p className="mt-1 text-sm text-primary-foreground/80">Empresas atendidas</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm shadow-primary/10 backdrop-blur-sm">
              <Building2 className="h-3.5 w-3.5" />
              Sobre a COLEFAR
            </span>

            <h2 className="mt-4 text-3xl font-heading font-bold text-foreground sm:text-4xl">
              Transportando com Responsabilidade Ambiental
            </h2>
            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-accent via-primary/70 to-primary" />

            <p className="mb-8 mt-5 leading-relaxed text-muted-foreground">
              A COLEFAR é referência no transporte e coleta de resíduos perigosos. Atuamos com
              excelência e conformidade, garantindo que cada resíduo tenha a destinação correta
              e segura. Nossa missão é proteger o meio ambiente enquanto simplificamos a gestão
              de resíduos da sua empresa.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-xl border border-primary/12 bg-background/75 px-4 py-3 transition-all duration-300 hover:border-primary/30 hover:bg-background/95"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <CheckCircle2 className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
