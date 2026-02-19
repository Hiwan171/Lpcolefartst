import logoColefar from "@/assets/logo-colefar.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logoColefar} alt="COLEFAR" className="h-10 object-contain brightness-200 mb-4" />
            <p className="text-sm text-background/60 max-w-xs">
              Transportando com responsabilidade ambiental. Coleta, transporte e destinação de resíduos perigosos.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              {["Início", "Serviços", "Processo", "Sobre", "Contato"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="block text-sm text-background/60 hover:text-background transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background mb-4">Conformidade</h4>
            <p className="text-sm text-background/60">
              Licenciada pela CETESB e demais órgãos ambientais. Operamos em conformidade com as normas
              ABNT NBR 10004, 12235 e 13221.
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} COLEFAR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
