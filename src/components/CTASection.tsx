import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Send,
  Clock3,
  MessageCircleMore,
  FileEdit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CONTACT, MAPS_LINK } from "@/lib/contact";

type FormState = {
  nome: string;
  email: string;
  cpfCnpj: string;
  razaoSocial: string;
  telefone: string;
  clientType: "Pessoa Física" | "Pessoa Jurídica" | "";
  residueType: string;
  mensagem: string;
};

const initialForm: FormState = {
  nome: "",
  email: "",
  cpfCnpj: "",
  razaoSocial: "",
  telefone: "",
  clientType: "",
  residueType: "",
  mensagem: "",
};

const CTASection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initialForm);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome.trim() || !form.email.trim() || !form.telefone.trim() || !form.residueType) {
      toast({
        title: "Preencha os campos obrigatórios",
        description: "Nome, e-mail, telefone e tipo de resíduo são essenciais para o orçamento.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    const payload = [
      "*Novo contato pelo site COLEFAR*",
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `CPF/CNPJ: ${form.cpfCnpj || "Não informado"}`,
      `Razão social: ${form.razaoSocial || "Não informada"}`,
      `Telefone: ${form.telefone}`,
      `Perfil: ${form.clientType || "Não informado"}`,
      `Tipo de resíduo: ${form.residueType}`,
      `Detalhes: ${form.mensagem || "Sem detalhes adicionais"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(payload)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast({
      title: "Mensagem pronta no WhatsApp",
      description: "Finalize o envio para receber seu retorno técnico.",
    });

    setForm(initialForm);
    setSending(false);
  };

  const contactInfo = [
    { icon: Phone, label: "Telefone", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneRaw}` },
    { icon: Mail, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    {
      icon: MapPin,
      label: "Endereço",
      value: `${CONTACT.addressLine1} - ${CONTACT.addressLine2}`,
      href: MAPS_LINK,
    },
    { icon: Clock3, label: "Horário", value: "Segunda a sexta, 8h às 17h45" },
  ];

  return (
    <section id="contato" className="py-14 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-primary bg-primary-foreground px-3 py-1 rounded-full">
                <MessageCircleMore className="w-3.5 h-3.5" />
                Contato rapido
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-bold text-primary-foreground leading-tight">
                Coleta de resíduos perigoso com atendimento rápido
              </h2>
              <p className="text-primary-foreground/80 text-sm sm:text-base mt-2 max-w-xl">
                Envie seus dados e retornamos com orientação inicial e proposta de coleta.
              </p>
            </div>

            <Button variant="cta" size="lg" className="text-sm px-6 py-4" asChild>
              <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${CONTACT.whatsappRaw}`}>
                Falar no WhatsApp
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>

            <div className="space-y-2.5">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-3 rounded-lg p-3 bg-primary-foreground/10 border border-primary-foreground/10"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-[11px] uppercase tracking-wide">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-foreground text-sm font-medium hover:underline leading-snug"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-primary-foreground text-sm font-medium leading-snug">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-card rounded-xl p-4 sm:p-5 shadow-card border border-border"
          >
            <div className="mb-3.5">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                <FileEdit className="w-3.5 h-3.5" />
                Formulario de contato
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="nome" className="text-xs font-semibold text-foreground/90">Nome *</Label>
                <Input id="nome" name="nome" value={form.nome} onChange={handleChange} className="mt-1 h-9" />
              </div>

              <div>
                <Label htmlFor="email" className="text-xs font-semibold text-foreground/90">Endereço de e-mail *</Label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="mt-1 h-9" />
              </div>

              <div>
                <Label htmlFor="cpfCnpj" className="text-xs font-semibold text-foreground/90">CPF / CNPJ</Label>
                <Input id="cpfCnpj" name="cpfCnpj" value={form.cpfCnpj} onChange={handleChange} placeholder="Insira o CPF ou CNPJ" className="mt-1 h-9" />
              </div>

              <div>
                <Label htmlFor="razaoSocial" className="text-xs font-semibold text-foreground/90">Razão Social</Label>
                <Input id="razaoSocial" name="razaoSocial" value={form.razaoSocial} onChange={handleChange} placeholder="Insira a razão social" className="mt-1 h-9" />
              </div>

              <div>
                <Label htmlFor="telefone" className="text-xs font-semibold text-foreground/90">Telefone *</Label>
                <Input id="telefone" name="telefone" value={form.telefone} onChange={handleChange} className="mt-1 h-9" />
              </div>

              <div>
                <Label htmlFor="residueType" className="text-xs font-semibold text-foreground/90">Tipo de resíduo *</Label>
                <select
                  id="residueType"
                  name="residueType"
                  value={form.residueType}
                  onChange={handleChange}
                  className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-xs"
                >
                  <option value="">Selecione</option>
                  <option value="Saúde">Saúde</option>
                  <option value="Industrial">Industrial</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="clientType" className="text-xs font-semibold text-foreground/90">Tipo de cliente</Label>
                <select
                  id="clientType"
                  name="clientType"
                  value={form.clientType}
                  onChange={handleChange}
                  className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-xs"
                >
                  <option value="">Selecione</option>
                  <option value="Pessoa Física">Pessoa Física</option>
                  <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="mensagem" className="text-xs font-semibold text-foreground/90">Detalhes (opcional)</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  rows={3}
                  value={form.mensagem}
                  onChange={handleChange}
                  className="mt-1 resize-none text-sm"
                  placeholder="Ex.: quantidade, frequência, endereço da coleta"
                />
              </div>

              <div className="sm:col-span-2 pt-1">
                <Button type="submit" variant="hero" className="w-full h-10 text-sm" disabled={sending}>
                  <Send className="w-4 h-4" />
                  {sending ? "Preparando..." : "Enviar no WhatsApp"}
                </Button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
