import { motion } from "framer-motion";
import { IconBrandWhatsappFilled } from "@tabler/icons-react";
import { CONTACT } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

const FloatingWhatsApp = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, delay: 0.9 }}
      className="fixed bottom-[max(5.4rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[70] md:bottom-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <motion.a
        href={`https://wa.me/${CONTACT.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        onClick={() => trackEvent("whatsapp_click", { source: "floating_button" })}
        animate={{ scale: [1, 1, 1.06, 1] }}
        transition={{ duration: 0.85, times: [0, 0.6, 0.82, 1], repeat: 2, repeatDelay: 2.4 }}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_rgba(37,211,102,0.45)] transition-all duration-200 hover:scale-105 hover:bg-[#22C55E] hover:shadow-[0_14px_30px_rgba(37,211,102,0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full bg-[#25D366]/45 blur-xl" />
        <IconBrandWhatsappFilled
          aria-hidden="true"
          className="h-[2.1rem] w-[2.1rem] text-white"
          stroke={0}
        />
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsApp;

