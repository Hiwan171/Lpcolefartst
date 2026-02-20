import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, PhoneCall, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicos", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="border-b border-primary/25 bg-primary/90 px-4 py-1.5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/85">
        Coleta licenciada de residuos perigosos - atendimento em MG
      </div>

      <nav
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-background/88 shadow-elevated backdrop-blur-xl"
            : "border-transparent bg-background/55 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <a href="#inicio" aria-label="Voltar para o inicio">
            <Logo variant="light" />
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/85 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}

            <Button variant="cta" size="lg" className="rounded-full px-6 text-sm" asChild>
              <a href="#contato">
                Falar com especialista
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-foreground md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t border-white/10 bg-background/95 px-4 pb-6 pt-2 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-white/5 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}

              <Button variant="cta" className="mt-4 w-full rounded-full" asChild>
                <a href="#contato" onClick={() => setMenuOpen(false)}>
                  <PhoneCall className="h-4 w-4" />
                  Solicitar orcamento
                </a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
