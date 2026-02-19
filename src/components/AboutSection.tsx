import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-colefar.jpg";

const highlights = [
"Licenças ambientais atualizadas",
"Veículos rastreados por GPS",
"Equipe certificada em segurança",
"Emissão de CDF para cada coleta",
"Atendimento em todo o estado",
"Mais de 10 anos de experiência"];


const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative">

            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImg}
                alt="Profissional COLEFAR em operação"
                className="w-full h-[450px] object-cover" />

            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 bg-primary rounded-xl p-6 shadow-elevated">
              <p className="text-4xl font-heading font-extrabold text-primary-foreground">+2000

              </p>
              <p className="text-primary-foreground/80 text-sm mt-1">Empresas atendidas</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>

            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary bg-white px-3 py-1 rounded-full">
              Sobre a COLEFAR
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
              Transportando com Responsabilidade Ambiental
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A COLEFAR é referência no transporte e coleta de resíduos perigosos. Atuamos com
              excelência e conformidade, garantindo que cada resíduo tenha a destinação correta
              e segura. Nossa missão é proteger o meio ambiente enquanto simplificamos a gestão
              de resíduos da sua empresa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) =>
              <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;