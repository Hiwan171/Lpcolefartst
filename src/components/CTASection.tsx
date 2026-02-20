import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CONTACT, MAPS_LINK, sendContactFormEmail } from "@/lib/contact";

type FormState = {
  nome: string;
  email: string;
  cpfCnpj: string;
  razaoSocial: string;
  telefone: string;
  clientType: "Pessoa Fisica" | "Pessoa Juridica" | "";
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

const contactInfo = [
  { icon: Phone, label: "Telefone", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneRaw}` },
  { icon: Mail, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    icon: MapPin,
    label: "Endereco",
    value: `${CONTACT.addressLine1} - ${CONTACT.addressLine2}`,
    href: MAPS_LINK,
  },
  { icon: Clock3, label: "Horario", value: "Segunda a sexta, 8h as 17h45" },
];

const CTASection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initialForm);
  const [sending, setSending] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.nome.trim() || !form.email.trim() || !form.telefone.trim() || !form.residueType) {
      toast({
        title: "Preencha os campos obrigatorios",
        description: "Nome, e-mail, telefone e tipo de residuo sao essenciais para o orcamento.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      await sendContactFormEmail(form);
      toast({
        title: "Solicitacao enviada",
        description: "Recebemos seu contato e vamos responder por e-mail.",
      });
      setForm(initialForm);
    } catch {
      toast({
        title: "Falha ao enviar",
        description: "Nao foi possivel enviar agora. Tente novamente em alguns minutos.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,11,17,0.98),rgba(8,20,25,0.9)_48%,rgba(15,48,31,0.84))]" />
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-primary/30 blur-[130px]" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/12 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              <ShieldCheck className="h-3.5 w-3.5" />
              Fale com nosso time tecnico
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl">
              Vamos montar sua estrategia de coleta agora
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
              Informe os dados da operacao e retornamos com orientacao tecnica, janela de coleta e condicoes para iniciar.
            </p>

            <Button variant="cta" size="lg" className="mt-6 h-12 rounded-full px-7 text-sm sm:text-base" asChild>
              <a href={`https://wa.me/${CONTACT.whatsappRaw}`} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <div className="mt-7 space-y-3">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-background/55 p-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                    <info.icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/50">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary-foreground/88 hover:text-accent"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-primary-foreground/88">{info.value}</p>
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
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-3xl border border-white/15 bg-background/85 p-6 shadow-elevated sm:p-8"
          >
            <div className="mb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Formulario de contato</p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">Solicite um retorno especializado</h3>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <Label htmlFor="nome" className="text-xs font-semibold text-foreground/90">
                  Nome *
                </Label>
                <Input id="nome" name="nome" value={form.nome} onChange={handleChange} className="mt-1 h-10" />
              </div>

              <div>
                <Label htmlFor="email" className="text-xs font-semibold text-foreground/90">
                  E-mail *
                </Label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="mt-1 h-10" />
              </div>

              <div>
                <Label htmlFor="cpfCnpj" className="text-xs font-semibold text-foreground/90">
                  CPF / CNPJ
                </Label>
                <Input
                  id="cpfCnpj"
                  name="cpfCnpj"
                  value={form.cpfCnpj}
                  onChange={handleChange}
                  className="mt-1 h-10"
                  placeholder="Opcional"
                />
              </div>

              <div>
                <Label htmlFor="razaoSocial" className="text-xs font-semibold text-foreground/90">
                  Razao social
                </Label>
                <Input
                  id="razaoSocial"
                  name="razaoSocial"
                  value={form.razaoSocial}
                  onChange={handleChange}
                  className="mt-1 h-10"
                  placeholder="Opcional"
                />
              </div>

              <div>
                <Label htmlFor="telefone" className="text-xs font-semibold text-foreground/90">
                  Telefone *
                </Label>
                <Input id="telefone" name="telefone" value={form.telefone} onChange={handleChange} className="mt-1 h-10" />
              </div>

              <div>
                <Label htmlFor="residueType" className="text-xs font-semibold text-foreground/90">
                  Tipo de residuo *
                </Label>
                <select
                  id="residueType"
                  name="residueType"
                  value={form.residueType}
                  onChange={handleChange}
                  className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="">Selecione</option>
                  <option value="Saude">Saude</option>
                  <option value="Industrial">Industrial</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="clientType" className="text-xs font-semibold text-foreground/90">
                  Tipo de cliente
                </Label>
                <select
                  id="clientType"
                  name="clientType"
                  value={form.clientType}
                  onChange={handleChange}
                  className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="">Selecione</option>
                  <option value="Pessoa Fisica">Pessoa Fisica</option>
                  <option value="Pessoa Juridica">Pessoa Juridica</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="mensagem" className="text-xs font-semibold text-foreground/90">
                  Detalhes adicionais
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 resize-none"
                  placeholder="Ex.: volume medio, frequencia e local da coleta"
                />
              </div>

              <div className="sm:col-span-2 pt-1">
                <Button type="submit" variant="hero" className="h-11 w-full text-sm" disabled={sending}>
                  <Send className="h-4 w-4" />
                  {sending ? "Enviando..." : "Enviar solicitacao"}
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
