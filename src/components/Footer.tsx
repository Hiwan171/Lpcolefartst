import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo variant="light" />
        <p className="text-xs text-background/50">© {new Date().getFullYear()} COLEFAR. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
