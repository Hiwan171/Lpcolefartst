import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import logoColefar from "@/assets/logo-colefar-dark.png";

const Footer = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cpfCnpj: "",
    razaoSocial: "",
    telefone: "",
    mensagem: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.telefone.trim()) {
      toast({ title: "Preencha os campos obrigatórios", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
      setForm({ nome: "", email: "", cpfCnpj: "", razaoSocial: "", telefone: "", mensagem: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <footer id="contato" className="bg-background border-t border-border">
      {/* Contact section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mb-3">
              Fale conosco
            </h2>
            <p className="text-muted-foreground mb-10">
              Entre em contato conosco para dúvidas, sugestões ou suporte técnico.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-foreground">(31) 3434-7565</span>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-foreground">suporte@colefar.com</span>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-foreground">
                  <p>Segunda a sexta-feira, das 08h00 às 17h45</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Logística, Comercial, Transporte, Compras, Manutenção, Faturamento, Recursos Humanos e SAC.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-foreground">
                  <p>Rua Governador Milton Campos, 1154</p>
                  <p>Tupi – Belo Horizonte/MG</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-10">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-dark transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-8 space-y-5">
            <div>
              <Label htmlFor="nome" className="text-foreground font-semibold">Nome</Label>
              <Input id="nome" name="nome" placeholder="Insira seu nome..." value={form.nome} onChange={handleChange} maxLength={100} className="mt-1.5 bg-secondary border-primary/20 focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground font-semibold">Endereço de e-mail</Label>
              <Input id="email" name="email" type="email" placeholder="Insira seu e-mail..." value={form.email} onChange={handleChange} maxLength={255} className="mt-1.5 bg-secondary border-primary/20 focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="cpfCnpj" className="text-foreground font-semibold">CPF / CNPJ</Label>
              <Input id="cpfCnpj" name="cpfCnpj" placeholder="Insira o CPF ou CNPJ" value={form.cpfCnpj} onChange={handleChange} maxLength={18} className="mt-1.5 bg-secondary border-primary/20 focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="razaoSocial" className="text-foreground font-semibold">Razão Social</Label>
              <Input id="razaoSocial" name="razaoSocial" placeholder="Insira a razão social" value={form.razaoSocial} onChange={handleChange} maxLength={200} className="mt-1.5 bg-secondary border-primary/20 focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="telefone" className="text-foreground font-semibold">Telefone</Label>
              <Input id="telefone" name="telefone" placeholder="Insira o telefone" value={form.telefone} onChange={handleChange} maxLength={20} className="mt-1.5 bg-secondary border-primary/20 focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="mensagem" className="text-foreground font-semibold">Sua mensagem</Label>
              <Textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..." value={form.mensagem} onChange={handleChange} maxLength={1000} rows={4} className="mt-1.5 bg-secondary border-primary/20 focus:border-primary resize-none" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={sending}>
              <Send className="w-4 h-4" />
              {sending ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-foreground py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logoColefar} alt="COLEFAR" className="h-8 object-contain" />
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} COLEFAR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
