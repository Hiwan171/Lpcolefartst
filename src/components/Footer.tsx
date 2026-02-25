import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-black/12 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between gap-3 px-4">
        <Logo variant="dark" className="h-8 sm:h-10" />
        <p className="text-right text-[11px] leading-tight text-[#004221]">
          (c) {new Date().getFullYear()} COLEFAR
          <span className="hidden sm:inline">. Todos os direitos reservados.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

