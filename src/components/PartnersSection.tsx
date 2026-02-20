import { Building2 } from "lucide-react";

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[] = [
  { name: "Stellantis", logo: "/Partners/stellantis.png" },
  { name: "Grupo Zelo", logo: "/Partners/zelo.png" },
  { name: "Drogaria Araujo", logo: "/Partners/araujo.png" },
  { name: "Universidade Federal de São João del-Rei", logo: "/Partners/ufsj.png" },
  { name: "Atletico MG", logo: "/Partners/cam.png" },
  { name: "Fiat", logo: "/Partners/fiat.png" },
  { name: "UFTM", logo: "/Partners/UFTM.png" },
];

const marqueeItems = [...partners, ...partners];

const PartnersSection = () => {
  return (
    <section className="relative overflow-hidden border-y border-border/80 bg-background py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-accent/15 blur-2xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm shadow-primary/10 backdrop-blur-sm">
            <Building2 className="w-3.5 h-3.5" />
            Empresas parceiras
          </span>
          <h3 className="mt-3 text-xl sm:text-2xl font-heading font-bold text-foreground">
            Marcas que atendemos
          </h3>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent via-primary/70 to-primary" />
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max gap-4 animate-partners-marquee">
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-20 w-52 items-center justify-center rounded-xl border border-primary/12 bg-background/80 px-4 shadow-card backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  loading="lazy"
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (image.src.endsWith(".png")) {
                      image.src = image.src.replace(/\.png$/, ".svg");
                    }
                  }}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
