interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const Logo = ({ className = "", variant = "dark" }: LogoProps) => {
  return (
    <img
      src="/logo-white.png"
      alt="COLEFAR - Transportando com responsabilidade ambiental"
      data-variant={variant}
      className={`h-9 w-auto object-contain sm:h-10 ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};

export default Logo;
