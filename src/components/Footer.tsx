import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <Logo variant="light" />
        <p className="text-xs text-primary-foreground/50">
          (c) {new Date().getFullYear()} COLEFAR. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

