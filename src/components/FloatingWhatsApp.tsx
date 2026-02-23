import { motion } from "framer-motion";
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
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(15,23,42,0.35)] transition-all duration-200 hover:scale-105 hover:shadow-[0_12px_28px_rgba(15,23,42,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full bg-[#25D366]/30 blur-xl" />
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M19.11 17.23c-.27-.14-1.61-.8-1.86-.9-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.33-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.61 1.11 2.79c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.61-.66 1.84-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32z"
          />
          <path
            fill="currentColor"
            d="M16 3.2C8.93 3.2 3.2 8.92 3.2 16c0 2.25.59 4.44 1.71 6.37L3 29l6.83-1.79A12.72 12.72 0 0 0 16 28.8c7.07 0 12.8-5.72 12.8-12.8S23.07 3.2 16 3.2zm0 23.28c-2.03 0-4.02-.55-5.75-1.59l-.41-.24-4.05 1.06 1.08-3.95-.26-.41a10.42 10.42 0 0 1-1.6-5.36c0-5.73 4.66-10.4 10.4-10.4 5.73 0 10.4 4.67 10.4 10.4 0 5.73-4.67 10.4-10.4 10.4z"
          />
        </svg>

        <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 hidden -translate-y-1/2 rounded-full border border-white/15 bg-background/95 px-3 py-1.5 text-xs font-semibold text-primary-foreground/90 opacity-0 shadow-card backdrop-blur transition-opacity duration-200 group-hover:opacity-100 md:block">
          Falar no WhatsApp
        </span>
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsApp;

