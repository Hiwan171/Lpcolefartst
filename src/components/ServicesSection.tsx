import { useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import {
  IconBatteryAutomotive,
  IconBuildingFactory,
  IconBuildings,
  IconBuildingHospital,
  IconDental,
  IconDroplet,
  IconFirstAidKit,
  IconHomeHeart,
  IconMedicineSyrup,
  IconNurse,
  IconPackage,
  IconPaint,
  IconPaw,
  IconRibbonHealth,
  IconSparkles,
  IconTool,
  IconTractor,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { openContactModal } from "@/lib/contact-modal";

type ResidueOptionKey = "saude" | "industrial";
type ServiceIcon = ComponentType<{
  className?: string;
  size?: number | string;
  stroke?: number | string;
  strokeWidth?: number | string;
}>;

type EstablishmentArt = {
  title: string;
  icon: ServiceIcon;
};

type ResidueOption = {
  label: string;
  source: string;
  residueType: "Saude" | "Industrial";
  artEyebrow: string;
  artTitle: string;
  establishments: EstablishmentArt[];
};

const IconEpiSafety: ServiceIcon = ({ className, size = 44, stroke = 1.7, strokeWidth }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    className={className}
    stroke="currentColor"
    strokeWidth={strokeWidth ?? stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4.7 11.9a7.3 7.3 0 0 1 14.6 0" />
    <path d="M3.2 12.1h17.6a1.2 1.2 0 0 1 1.2 1.2v.8H2v-.8a1.2 1.2 0 0 1 1.2-1.2" />
    <path d="M9.6 6h4.8l-.9 2.8h-3z" />
    <path d="M7.3 14.1v3.1" />
    <path d="M16.7 14.1v3.1" />
    <path d="M8 14.1c.3 1.5 1.9 2.6 4 2.6s3.7-1.1 4-2.6" />
    <path d="M19.1 10.9a3.3 3.3 0 1 1 0 6.6" />
    <path d="M20.9 14.1v2.2" />
    <path d="M20.9 16.3h-1.4" />
  </svg>
);

const IconPharmacyBottlePills: ServiceIcon = ({ className, size = 44, stroke = 1.75, strokeWidth }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    className={className}
    stroke="currentColor"
    strokeWidth={strokeWidth ?? stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3.5" y="7.5" width="10" height="13" rx="2.2" />
    <path d="M5.2 5.4h6.6a1.5 1.5 0 0 1 1.5 1.5v.6H3.7v-.6a1.5 1.5 0 0 1 1.5-1.5" />
    <path d="M8.5 10.5v6" />
    <path d="M5.5 13.5h6" />
    <path d="M16.2 15.8a2.3 2.3 0 0 1 3.2-3.2l1.4 1.4a2.3 2.3 0 0 1-3.2 3.2z" />
    <path d="M15.5 20a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6" />
  </svg>
);

const residueOptions: Record<ResidueOptionKey, ResidueOption> = {
  saude: {
    label: "Residuo de saude",
    source: "services_healthcare_cta",
    residueType: "Saude",
    artEyebrow: "Segmento saude",
    artTitle: "Estabelecimentos atendidos com rotina segura e rastreavel",
    establishments: [
      { title: "Hospitais", icon: IconBuildingHospital },
      { title: "Clinicas Médicas", icon: IconNurse },
      { title: "Clínicas Odontológicas", icon: IconDental },
      { title: "Farmácias", icon: IconPharmacyBottlePills },
      { title: "Clinicas de Diagnóstico", icon: IconRibbonHealth },
      { title: "Home Care", icon: IconHomeHeart },
      { title: "Clinicas Estéticas", icon: IconSparkles },
      { title: "Consultorios Veterinários", icon: IconPaw },
    ],
  },
  industrial: {
    label: "Residuo industrial",
    source: "services_industrial_cta",
    residueType: "Industrial",
    artEyebrow: "Segmento industrial",
    artTitle: "Estruturas atendidas com foco em continuidade operacional",
    establishments: [
      { title: "Agronegócios", icon: IconTractor },
      { title: "Indústria Automotiva", icon: IconBatteryAutomotive },
      { title: "Mecânica", icon: IconTool },
      { title: "Metalúrgica", icon: IconBuildingFactory },
      { title: "Têxtil", icon: IconEpiSafety },
      { title: "Indústria Farmacêutica", icon: IconMedicineSyrup },
      { title: "Ambulatórios Industriais", icon: IconFirstAidKit },
      { title: "Pequenas e Grandes Indústrias", icon: IconBuildings },
    ],
  },
};

const ServicesSection = () => {
  const [selectedResidue, setSelectedResidue] = useState<ResidueOptionKey>("saude");
  const currentOption = residueOptions[selectedResidue];
  const isSaude = selectedResidue === "saude";

  return (
    <section id="servicos" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,66,33,0.76)_42%,rgba(0,0,0,0))]" />
        <div className="absolute left-12 top-10 h-56 w-56 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-8 bottom-8 h-64 w-64 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/93">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Solucoes de coleta
          </span>

          <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Atendimento completo para geradores de residuos de saude e industriais
          </h2>

          <p className="mt-5 text-base leading-relaxed text-primary-foreground/92">
            Oferecemos solucoes para pequenos, medios e grandes geradores de residuos sejam eles: infectantes,
            patologicos, medicamentos vencidos e outros que estejam relacionados ao setor de saude e industrial.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              type="button"
              variant={selectedResidue === "saude" ? "cta" : "hero-outline"}
              className="h-10 rounded-full px-6"
              onClick={() => setSelectedResidue("saude")}
            >
              Residuo de saude
            </Button>
            <Button
              type="button"
              variant={selectedResidue === "industrial" ? "cta" : "hero-outline"}
              className="h-10 rounded-full px-6"
              onClick={() => setSelectedResidue("industrial")}
            >
              Residuo industrial
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/22 via-primary/8 to-accent/18 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/18 bg-white/10 p-2 shadow-elevated backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.2rem] px-3 py-4 sm:px-5 sm:py-5">
                <div
                  className={`pointer-events-none absolute inset-0 ${
                    isSaude
                      ? "bg-[radial-gradient(circle_at_22%_18%,rgba(185,202,99,0.30),rgba(1,68,35,0.26)_42%,rgba(0,0,0,0)_72%)]"
                      : "bg-[radial-gradient(circle_at_78%_16%,rgba(185,202,99,0.24),rgba(1,68,35,0.2)_44%,rgba(0,0,0,0)_74%)]"
                  }`}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_35%,rgba(0,0,0,0.24)_100%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedResidue}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <div className="mb-4 max-w-2xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/95">
                        {currentOption.artEyebrow}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white sm:text-base">{currentOption.artTitle}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {currentOption.establishments.map((item, index) => (
                        <motion.article
                          key={`${selectedResidue}-${item.title}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{
                            y: -6,
                            scale: 1.018,
                            borderColor: "rgba(185,202,99,0.92)",
                            boxShadow:
                              "0 24px 42px -24px rgba(185,202,99,0.85), inset 0 0 0 1px rgba(185,202,99,0.45)",
                          }}
                          whileTap={{ scale: 0.99 }}
                          transition={{ delay: index * 0.04, duration: 0.24 }}
                          className="group relative min-h-40 cursor-pointer overflow-hidden rounded-2xl border border-white/22 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] p-4 backdrop-blur-md transition-all duration-300 hover:border-[#B9CA63] hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))]"
                        >
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/16 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-accent/22 blur-2xl opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="relative inline-flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#2B6647]/75 bg-[radial-gradient(circle_at_30%_24%,rgba(255,255,255,0.98),rgba(235,243,238,0.96)_64%,rgba(205,223,213,0.93)_100%)] shadow-[0_18px_30px_-20px_rgba(0,0,0,0.95),inset_0_2px_8px_rgba(255,255,255,0.75)] transition-all duration-300 group-hover:scale-[1.08] group-hover:border-[#1F5A3A] group-hover:shadow-[0_22px_34px_-18px_rgba(185,202,99,0.6),inset_0_2px_10px_rgba(255,255,255,0.85)]">
                              <span className="absolute inset-[6px] rounded-full border border-[#2B6647]/18" />
                              <item.icon size={44} stroke={1.7} className="relative text-[#1E5A3A] drop-shadow-[0_1px_0_rgba(255,255,255,0.55)]" />
                            </div>
                            <p className="mt-3 text-[17px] font-semibold leading-tight text-white">{item.title}</p>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="cta"
            className="h-11 rounded-full px-7 text-sm sm:text-base"
            onClick={() => openContactModal(currentOption.source, { residueType: currentOption.residueType })}
          >
            Ver se meu residuo se enquadra
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
