import { Building2, Sparkles } from "lucide-react";

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[] = [
  { name: "Stellantis", logo: "/Partners/stellantis.png" },
  { name: "Grupo Zelo", logo: "/Partners/zelo.png" },
  { name: "Drogaria Araujo", logo: "/Partners/araujo.png" },
  { name: "Universidade Federal de Sao Joao del-Rei", logo: "/Partners/ufsj.png" },
  { name: "Atletico MG", logo: "/Partners/cam.png" },
  { name: "Fiat", logo: "/Partners/fiat.png" },
  { name: "UFTM", logo: "/Partners/UFTM.png" },
];

const marqueeItems = [...partners, ...partners];

const PartnersSection = () => {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-background py-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,66,33,0.76)_42%,rgba(0,0,0,0))]" />
        <div className="absolute left-12 top-10 h-56 w-56 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-8 bottom-8 h-64 w-64 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1160px] px-4">
        <div className="mb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/91">
            <Building2 className="h-4 w-4 text-accent" />
            Prova social
          </span>

          <h3 className="mt-4 text-2xl font-bold text-primary-foreground sm:text-3xl">Empresas que confiam na COLEFAR</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-primary-foreground/84 sm:text-base">
            Operacao para clientes que exigem padrao tecnico, confiabilidade e conformidade ambiental.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:hidden">
          {partners.slice(0, 4).map((partner) => (
            <div key={partner.name} className="alive-card flex h-20 items-center justify-center rounded-xl px-4">
              <img src={partner.logo} alt={`Logo ${partner.name}`} loading="lazy" className="max-h-12 w-auto object-contain opacity-90" />
            </div>
          ))}
        </div>

        <div className="relative mx-auto hidden max-w-[1080px] overflow-hidden md:block [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-4 animate-partners-marquee" style={{ animationDuration: "22s" }}>
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="alive-card flex h-20 w-56 items-center justify-center rounded-xl px-4"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  loading="lazy"
                  className="max-h-12 w-auto object-contain opacity-85 saturate-110 transition-all duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-primary-foreground/76">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          atendimento para industrias, saude e comercio especializado
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
