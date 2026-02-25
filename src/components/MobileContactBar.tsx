import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openContactModal } from "@/lib/contact-modal";

const MobileContactBar = () => {
  return (
    <div className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[65] md:hidden">
      <div className="rounded-2xl border border-white/15 bg-background/92 p-2.5 shadow-[0_14px_34px_rgba(0,0,0,0.4)] backdrop-blur">
        <Button
          variant="cta"
          className="h-11 w-full rounded-xl text-sm"
          onClick={() => openContactModal("mobile_sticky")}
        >
          Quero receber proposta
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MobileContactBar;
