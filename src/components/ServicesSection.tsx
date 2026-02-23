import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Battery,
  Building2,
  CheckCircle2,
  Droplets,
  FlaskConical,
  Package,
  Paintbrush,
  Pill,
  ShieldCheck,
  Syringe,
  TestTube,
  TriangleAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { openContactModal } from "@/lib/contact-modal";

type SegmentKey = "industrial" | "saude";

const IMG = {
  industrial: {
    banner: "/services/banner2.jpeg",
    quimicos: "/services/quimicos.jpeg",
    oleosos: "/services/oleosos.jpeg",
    baterias: "/services/baterias-eletronicos.jpeg",
    tintas: "/services/tintas-solventes.jpeg",
    embalagens: "/services/embalagens-contaminadas.jpeg",
    perigosos: "/services/perigosos-classe1.jpeg",
  },
  saude: {
    banner: "/services/banner.jpg",
    perfuro: "/services/perfurocortantes.jpeg",
    medicamentos: "/services/medicamentos-vencidos.jpeg",
    laboratorio: "/services/laboratoriais.jpeg",
    quimicos: "/services/quimicos.jpeg",
    liquidos: "/services/liquidos-contaminados.jpeg",
    infectantes: "/services/infectantes.jpeg",
  },
};

type SegmentData = {
  label: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  pitchTitle: string;
  pitchText: string;
  sellingPoints: string[];
  establishments: Array<{ name: string; description: string }>;
  residuos: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  }>;
};

const segments: Record<SegmentKey, SegmentData> = {
  industrial: {
    label: "Residuos industriais",
    subtitle: "Gerados por processos produtivos, manutencao e utilidades industriais.",
    image: IMG.industrial.banner,
    imageAlt: "Operacao industrial com manejo de residuos perigosos",
    pitchTitle: "Evite multa, embargo e parada operacional na sua planta",
    pitchText:
      "Assumimos o ciclo completo de coleta industrial com rastreabilidade e documentacao para auditoria.",
    sellingPoints: [
      "Plano de coleta alinhado ao ritmo da producao",
      "Transporte licenciado para materiais classe I",
      "CDF valido para compliance e fiscalizacao",
    ],
    establishments: [
      {
        name: "Industrias de transformacao",
        description: "Metalurgica, quimica, plastica, alimentos, textil e automotiva.",
      },
      {
        name: "Centros logisticos e manutencao",
        description: "Galpoes, oficinas, frotas e operacoes com uso de oleos e solventes.",
      },
      {
        name: "Construcao e infraestrutura",
        description: "Empresas com sobras de tintas, quimicos e embalagens contaminadas.",
      },
    ],
    residuos: [
      {
        icon: FlaskConical,
        title: "Residuos quimicos",
        description: "Solventes, acidos, bases e reagentes com potencial de contaminacao.",
        image: IMG.industrial.quimicos,
        imageAlt: "Tambores com residuos quimicos industriais",
      },
      {
        icon: Droplets,
        title: "Residuos oleosos",
        description: "Oleos usados, graxas e emulsoes contaminadas.",
        image: IMG.industrial.oleosos,
        imageAlt: "Coleta de residuos oleosos em ambiente industrial",
      },
      {
        icon: Battery,
        title: "Baterias e eletronicos",
        description: "Pilhas, baterias e componentes com metais pesados.",
        image: IMG.industrial.baterias,
        imageAlt: "Baterias e componentes eletronicos para descarte tecnico",
      },
      {
        icon: Paintbrush,
        title: "Tintas e solventes",
        description: "Tintas, vernizes e subprodutos de limpeza industrial.",
        image: IMG.industrial.tintas,
        imageAlt: "Latas de tinta e solventes para destinacao adequada",
      },
      {
        icon: Package,
        title: "Embalagens contaminadas",
        description: "Tambores, bombonas e embalagens com contato quimico.",
        image: IMG.industrial.embalagens,
        imageAlt: "Embalagens contaminadas em area de residuos perigosos",
      },
      {
        icon: TriangleAlert,
        title: "Outros perigosos classe I",
        description: "Materiais com inflamabilidade, corrosividade, reatividade ou toxicidade.",
        image: IMG.industrial.perigosos,
        imageAlt: "Sinalizacao de material perigoso classe I",
      },
    ],
  },
  saude: {
    label: "Residuos de saude",
    subtitle: "Gerados por assistencia, diagnostico, pesquisa e apoio em saude.",
    image: IMG.saude.banner,
    imageAlt: "Equipe de coleta para residuos de saude",
    pitchTitle: "Proteja pacientes, equipe e reputacao da sua instituicao",
    pitchText:
      "Coleta tecnica para RSS com fluxo seguro, recorrente e auditavel para hospitais, clinicas e laboratorios.",
    sellingPoints: [
      "Rotina de coleta para reduzir risco biologico",
      "Segregacao e manejo conforme exigencias tecnicas",
      "Comprovacao documental para orgaos de controle",
    ],
    establishments: [
      {
        name: "Hospitais e clinicas",
        description: "Unidades de internacao, pronto atendimento, centros cirurgicos e ambulatorios.",
      },
      {
        name: "Laboratorios e diagnostico",
        description: "Analises clinicas, anatomia patologica e centros de imagem.",
      },
      {
        name: "Consultorios e veterinarias",
        description: "Odontologia, medicina, estetica e saude animal com geracao de RSS.",
      },
    ],
    residuos: [
      {
        icon: Syringe,
        title: "Perfurocortantes",
        description: "Agulhas, laminas, bisturis e materiais com risco de acidente biologico.",
        image: IMG.saude.perfuro,
        imageAlt: "Descarte de perfurocortantes em recipiente apropriado",
      },
      {
        icon: Pill,
        title: "Medicamentos vencidos",
        description: "Farmacos e insumos fora de validade ou improprios para uso.",
        image: IMG.saude.medicamentos,
        imageAlt: "Medicamentos para descarte controlado",
      },
      {
        icon: TestTube,
        title: "Residuos laboratoriais",
        description: "Amostras, meios de cultura e materiais de analise contaminados.",
        image: IMG.saude.laboratorio,
        imageAlt: "Residuos laboratoriais em area de analises",
      },
      {
        icon: FlaskConical,
        title: "Residuos quimicos de saude",
        description: "Reagentes e saneantes com exigencia de destinacao controlada.",
        image: IMG.saude.quimicos,
        imageAlt: "Reagentes quimicos de uso hospitalar",
      },
      {
        icon: Droplets,
        title: "Liquidos contaminados",
        description: "Fluidos e descartes com risco biologico e necessidade de manejo especifico.",
        image: IMG.saude.liquidos,
        imageAlt: "Manejo de liquidos contaminados em saude",
      },
      {
        icon: TriangleAlert,
        title: "Infectantes",
        description: "Materiais com possivel presenca de agentes biologicos patogenicos.",
        image: IMG.saude.infectantes,
        imageAlt: "Saco de residuos infectantes em ambiente hospitalar",
      },
    ],
  },
};

const ServicesSection = () => {
  const [segment, setSegment] = useState<SegmentKey>("industrial");
  const [showAll, setShowAll] = useState(false);
  const current = segments[segment];
  const visibleResidues = showAll ? current.residuos : current.residuos.slice(0, 3);

  useEffect(() => {
    setShowAll(false);
  }, [segment]);

  return (
    <section id="servicos" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,22,0),rgba(8,18,30,0.74)_42%,rgba(7,14,22,0))]" />
        <div className="absolute left-12 top-10 h-56 w-56 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-8 bottom-8 h-64 w-64 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-6 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/78">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Solucoes de coleta
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Escolha seu segmento e veja como iniciamos sua coleta com seguranca
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/66 sm:text-base">
            Visao rapida dos residuos atendidos para voce decidir sem ruido.
          </p>
        </motion.div>

        <div className="mx-auto mb-6 flex max-w-3xl flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            type="button"
            variant={segment === "industrial" ? "cta" : "hero-outline"}
            className="h-11 rounded-full px-6"
            onClick={() => setSegment("industrial")}
          >
            Residuos industriais
          </Button>
          <Button
            type="button"
            variant={segment === "saude" ? "cta" : "hero-outline"}
            className="h-11 rounded-full px-6"
            onClick={() => setSegment("saude")}
          >
            Residuos de saude
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`segment-${segment}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{current.label}</p>
                  <h3 className="mt-3 text-2xl font-bold text-primary-foreground sm:text-3xl">{current.pitchTitle}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/72 sm:text-base">{current.pitchText}</p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {current.sellingPoints.slice(0, 2).map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-primary-foreground/82">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="cta"
                    className="mt-6 h-11 rounded-full px-7"
                    onClick={() =>
                      openContactModal(`services_${segment}_banner`, {
                        residueType: segment === "industrial" ? "Industrial" : "Saude",
                      })
                    }
                  >
                    Solicitar diagnostico
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="relative min-h-64 self-start lg:min-h-[280px]">
                  <img
                    src={current.image}
                    alt={current.imageAlt}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="h-full w-full object-cover contrast-110 saturate-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-background/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-background/55 p-4 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Atendimento especializado</p>
                    <p className="mt-1 text-sm font-semibold text-primary-foreground">Equipe tecnica para iniciar sem burocracia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Estabelecimentos atendidos</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">{current.subtitle}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {current.establishments.map((establishment) => (
                  <span
                    key={establishment.name}
                    className="rounded-full border border-white/12 bg-background/60 px-3 py-1.5 text-xs font-medium text-primary-foreground/85"
                    title={establishment.description}
                  >
                    {establishment.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleResidues.map((service, index) => (
                <motion.article
                  key={`${segment}-${service.title}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, delay: index * 0.04 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] shadow-card backdrop-blur"
                >
                  <div className="relative h-28 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/35 bg-accent/10 text-accent">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/75">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-6 pt-5">
                    <h3 className="text-xl font-semibold text-primary-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{service.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            {current.residuos.length > 3 && (
              <div className="mt-6 text-center">
                <Button
                  type="button"
                  variant="hero-outline"
                  className="h-10 rounded-full px-6"
                  onClick={() => setShowAll((prev) => !prev)}
                >
                  {showAll ? "Ver menos residuos" : "Ver todos os residuos"}
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 rounded-2xl border border-white/12 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] p-5 text-center shadow-card sm:p-6">
          <p className="text-sm font-semibold text-primary-foreground sm:text-base">
            Nao encontrou seu tipo de residuo? Validamos o enquadramento tecnico para voce em minutos.
          </p>
          <Button
            variant="cta"
            size="lg"
            className="mt-4 h-11 rounded-full px-7"
            onClick={() =>
              openContactModal("services_footer_cta", {
                residueType: segment === "industrial" ? "Industrial" : "Saude",
              })
            }
          >
            Solicitar diagnostico
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
