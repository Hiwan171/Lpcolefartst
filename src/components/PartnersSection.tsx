import { Building2 } from "lucide-react";

type Partner = {
  name: string;
  logos: string[];
};

const partners: Partner[] = [
  {
    name: "Drogaria Araujo",
    logos: ["/Partners/araujo.png", "/partners/araujo.png", "/partners/drogaria-araujo.svg"],
  },
  {
    name: "CAM",
    logos: ["/Partners/cam.png", "/partners/cam.png", "/partners/atletico-mg.svg"],
  },
  {
    name: "Fiat",
    logos: ["/Partners/fiat.png", "/partners/fiat.png", "/partners/stellantis.svg"],
  },
  {
    name: "Stellantis",
    logos: ["/Partners/stellantis.png", "/partners/stellantis.png", "/partners/stellantis.svg"],
  },
  {
    name: "UFSJ",
    logos: ["/Partners/ufsj.png", "/partners/ufsj.png", "/partners/ufsj.svg"],
  },
  {
    name: "UFTM",
    logos: ["/Partners/UFTM.png", "/partners/UFTM.png", "/partners/ufsj.svg"],
  },
  {
    name: "Grupo Zelo",
    logos: ["/Partners/zelo.png", "/partners/zelo.png", "/partners/grupo-zelo.svg"],
  },
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
                  src={partner.logos[0]}
                  alt={`Logo ${partner.name}`}
                  loading="lazy"
                  data-fallback-index="0"
                  onError={(event) => {
                    const image = event.currentTarget;
                    const currentIndex = Number(image.dataset.fallbackIndex ?? "0");
                    const nextIndex = currentIndex + 1;
                    if (nextIndex < partner.logos.length) {
                      image.dataset.fallbackIndex = String(nextIndex);
                      image.src = partner.logos[nextIndex];
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
