import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { openContactModal } from "@/lib/contact-modal";

const BrandBar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/12 bg-background/65 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between gap-3 px-4">
        <a href="#inicio" aria-label="Ir para o inicio">
          <Logo variant="light" className="scale-90 origin-left sm:scale-100" />
        </a>
        <Button
          variant="cta"
          size="sm"
          className="rounded-full px-4 text-xs sm:h-10 sm:px-5 sm:text-sm"
          onClick={() => openContactModal("topbar_cta")}
        >
          Solicitar proposta
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default BrandBar;
