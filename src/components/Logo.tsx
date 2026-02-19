interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const Logo = ({ className = "", variant = "dark" }: LogoProps) => {
  const textColor = variant === "light" ? "text-primary-foreground" : "text-primary-dark";
  const subtextColor = variant === "light" ? "text-primary-foreground/60" : "text-muted-foreground";

  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className={`font-heading font-extrabold text-2xl tracking-wider ${textColor}`}>
        C<span className="text-accent">O</span>LEFAR
      </span>
      <span className={`text-[8px] tracking-[0.2em] uppercase font-medium ${subtextColor}`}>
        Transportando com responsabilidade ambiental
      </span>
    </div>
  );
};

export default Logo;
