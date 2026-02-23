import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_MODAL_EVENT, type ContactModalPayload } from "@/lib/contact-modal";
import { sendContactFormEmail } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

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

const ContactModal = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const openModal = (event: Event) => {
      const customEvent = event as CustomEvent<ContactModalPayload>;
      const residueType = customEvent.detail?.residueType;

      setOpen(true);
      if (residueType) {
        setForm((prev) => ({ ...prev, residueType }));
      }
    };

    window.addEventListener(CONTACT_MODAL_EVENT, openModal);
    return () => window.removeEventListener(CONTACT_MODAL_EVENT, openModal);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.nome.trim() || !form.telefone.trim() || !form.residueType) {
      toast({
        title: "Preencha os campos obrigatorios",
        description: "Nome, telefone e tipo de residuo sao essenciais para o orcamento.",
        variant: "destructive",
      });
      return;
    }

    if (!consent) {
      toast({
        title: "Confirme o consentimento",
        description: "E necessario aceitar o uso dos dados para envio da solicitacao.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      trackEvent("lead_form_submit", { source: "contact_modal", residueType: form.residueType });
      await sendContactFormEmail(form);
      toast({
        title: "Solicitacao enviada",
        description: "Recebemos seu contato e retornaremos no menor prazo possivel.",
      });
      trackEvent("lead_form_success", { source: "contact_modal" });
      setForm(initialForm);
      setConsent(false);
      setOpen(false);
    } catch {
      trackEvent("lead_form_error", { source: "contact_modal" });
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl border-white/15 bg-background/95 p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary-foreground">Preencha seus dados para receber sua proposta</DialogTitle>
          <DialogDescription>Leva menos de 1 minuto. Sem compromisso.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <Label htmlFor="nome" className="text-xs font-semibold text-foreground/90">
              Nome *
            </Label>
            <Input id="nome" name="nome" value={form.nome} onChange={handleChange} className="mt-1 h-10" />
          </div>

          <div>
            <Label htmlFor="email" className="text-xs font-semibold text-foreground/90">
              E-mail
            </Label>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="mt-1 h-10" />
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
              <option value="Oleoso">Oleoso</option>
              <option value="Quimico">Quimico</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="mensagem" className="text-xs font-semibold text-foreground/90">
              Detalhes adicionais (opcional)
            </Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows={3}
              className="mt-1 resize-none"
              placeholder="Ex.: volume medio, frequencia e local da coleta"
            />
          </div>

          <label className="sm:col-span-2 flex items-start gap-2 rounded-md border border-white/10 bg-white/[0.02] p-3 text-xs text-foreground/75">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-input bg-background"
            />
            <span>
              Concordo com o uso dos meus dados para contato comercial da COLEFAR, conforme a politica de privacidade.
            </span>
          </label>

          <div className="sm:col-span-2 pt-1">
            <Button type="submit" variant="hero" className="h-11 w-full text-sm" disabled={sending}>
              <Send className="h-4 w-4" />
              {sending ? "Enviando..." : "Quero receber minha proposta"}
            </Button>
            <p className="mt-2 text-center text-xs text-foreground/60">Sem spam. Apenas contato para montar sua coleta.</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
