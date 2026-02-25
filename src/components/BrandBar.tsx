import Logo from "@/components/Logo";

const BrandBar = () => {
  return (
    <header className="border-b border-black/12 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4">
        <a href="#inicio" aria-label="Ir para o inicio">
          <Logo variant="dark" className="scale-90 origin-left sm:scale-100" />
        </a>
      </div>
    </header>
  );
};

export default BrandBar;
