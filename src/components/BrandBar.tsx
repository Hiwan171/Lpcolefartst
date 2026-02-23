import Logo from "@/components/Logo";

const BrandBar = () => {
  return (
    <header className="border-b border-white/10 bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center px-4">
        <a href="#inicio" aria-label="Ir para o inicio">
          <Logo variant="light" className="scale-90 origin-left sm:scale-100" />
        </a>
      </div>
    </header>
  );
};

export default BrandBar;
