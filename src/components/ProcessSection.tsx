import { motion } from "framer-motion";
import { ClipboardList, Truck, Factory, FileCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Solicitação e Diagnóstico",
    description: "Você entra em contato e nossa equipe realiza uma análise detalhada dos resíduos a serem coletados.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Coleta Especializada",
    description: "Equipe treinada e veículos licenciados fazem a coleta no seu local, seguindo todas as normas de segurança.",
  },
  {
    icon: Factory,
    step: "03",
    title: "Tratamento e Destinação",
    description: "Os resíduos são encaminhados para unidades de tratamento licenciadas, garantindo a destinação final correta.",
  },
  {
    icon: FileCheck,
    step: "04",
    title: "Certificado de Destinação",
    description: "Você recebe o Certificado de Destinação Final (CDF) comprovando a conformidade ambiental do processo.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Processo
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
            Como Funciona Nossa Coleta
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Um processo simples, seguro e totalmente documentado para sua tranquilidade.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center shadow-elevated mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Etapa {step.step}
                </span>
                <h3 className="text-lg font-heading font-bold text-foreground mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
