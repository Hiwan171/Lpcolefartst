import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";

const Footer = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cpfCnpj: "",
    razaoSocial: "",
    telefone: "",
    mensagem: ""
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

  const contactInfo = [
  { icon: Phone, text: "(31) 3434-7565" },
  { icon: Mail, text: "suporte@colefar.com" },
  {
    icon: Clock,
    text: "Segunda a sexta-feira, das 08h00 às 17h45",
    sub: "Logística, Comercial, Transporte, Compras, Manutenção, Faturamento, Recursos Humanos e SAC."
  },
  { icon: MapPin, text: "Rua Governador Milton Campos, 1154", sub: "Tupi – Belo Horizonte/MG" }];


  return (
    <footer id="contato" className="bg-muted border-primary-foreground">
      {/* Contact section */}
      <div className="container mx-auto px-4 py-20 bg-primary-dark">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div className="lg:w-5/12 flex flex-col">
            <h2 className="text-3xl font-heading font-extrabold text-foreground mb-2 sm:text-5xl">
              Fale conosco
            </h2>
            <p className="mb-8 text-gray-950 text-lg">
              Entre em contato conosco para dúvidas, sugestões ou suporte técnico.
            </p>

            <div className="space-y-5 flex-1">
              {contactInfo.map((item, i) =>
              <div key={i} className="gap-4 flex items-start justify-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-base">{item.text}</p>
                    {item.sub &&
                  <p className="text-muted-foreground text-xs mt-0.5">{item.sub}</p>
                  }
                  </div>
                </div>
              )}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {[Facebook, Instagram, Linkedin].map((Icon, i) =>
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-dark transition-colors">

                  <Icon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="lg:w-7/12 bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
              <div>
                <Label htmlFor="nome" className="text-foreground font-semibold text-sm">Nome *</Label>
                <Input id="nome" name="nome" placeholder="Insira seu nome..." value={form.nome} onChange={handleChange} maxLength={100} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground font-semibold text-sm">E-mail *</Label>
                <Input id="email" name="email" type="email" placeholder="Insira seu e-mail..." value={form.email} onChange={handleChange} maxLength={255} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="cpfCnpj" className="text-foreground font-semibold text-sm">CPF / CNPJ</Label>
                <Input id="cpfCnpj" name="cpfCnpj" placeholder="Insira o CPF ou CNPJ" value={form.cpfCnpj} onChange={handleChange} maxLength={18} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="razaoSocial" className="text-foreground font-semibold text-sm">Razão Social</Label>
                <Input id="razaoSocial" name="razaoSocial" placeholder="Insira a razão social" value={form.razaoSocial} onChange={handleChange} maxLength={200} className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="telefone" className="text-foreground font-semibold text-sm">Telefone *</Label>
                <Input id="telefone" name="telefone" placeholder="Insira o telefone" value={form.telefone} onChange={handleChange} maxLength={20} className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="mensagem" className="text-foreground font-semibold text-sm">Sua mensagem</Label>
                <Textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..." value={form.mensagem} onChange={handleChange} maxLength={1000} rows={4} className="mt-1.5 resize-none" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={sending}>
                  <Send className="w-4 h-4" />
                  {sending ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-foreground">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo variant="light" />
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} COLEFAR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;