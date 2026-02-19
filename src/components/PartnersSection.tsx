import { Building2 } from "lucide-react";

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[] = [
  { name: "Stellantis", logo: "/partners/stellantis.png" },
  { name: "Grupo Zelo", logo: "/partners/grupo-zelo.png" },
  { name: "Drogaria Araujo", logo: "/partners/drogaria-araujo.png" },
  { name: "Universidade Federal de São João del-Rei", logo: "/partners/ufsj.png" },
  { name: "Atletico MG", logo: "/partners/atletico-mg.png" },
];

const marqueeItems = [...partners, ...partners];

const PartnersSection = () => {
  return (
    <section className="py-12 bg-background border-y border-border/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary bg-secondary px-3 py-1 rounded-full">
            <Building2 className="w-3.5 h-3.5" />
            Empresas parceiras
          </span>
          <h3 className="mt-3 text-xl sm:text-2xl font-heading font-bold text-foreground">
            Marcas que atendemos
          </h3>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max gap-4 animate-partners-marquee">
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="h-20 w-52 rounded-xl border border-border bg-card px-4 flex items-center justify-center shadow-card"
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
                  className="max-h-10 w-auto object-contain"
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
