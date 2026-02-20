export const CONTACT = {
  phoneDisplay: "(31) 3434-7565",
  phoneRaw: "3134347565",
  whatsappRaw: "5531972639866",
  email: "suporteti@colefar.com.br",
  addressLine1: "Rua Governador Milton Campos, 1154",
  addressLine2: "Tupi – Belo Horizonte/MG",
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/colefar",
  instagram: "https://www.instagram.com/colefar",
  linkedin: "https://www.linkedin.com/company/colefar",
};

export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Rua+Governador+Milton+Campos,+1154,+Belo+Horizonte,+MG";

const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT.email}`;

export type ContactFormPayload = {
  nome: string;
  email: string;
  cpfCnpj: string;
  razaoSocial: string;
  telefone: string;
  clientType: string;
  residueType: string;
  mensagem: string;
};

export const sendContactFormEmail = async (form: ContactFormPayload) => {
  const subject = `[LEAD SITE COLEFAR] ${form.nome} - ${form.residueType}`;

  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _replyto: form.email,
      _template: "table",
      _captcha: "false",
      nome: form.nome,
      email: form.email,
      cpf_cnpj: form.cpfCnpj || "Nao informado",
      razao_social: form.razaoSocial || "Nao informada",
      telefone: form.telefone,
      tipo_cliente: form.clientType || "Nao informado",
      tipo_residuo: form.residueType,
      mensagem: form.mensagem || "Sem detalhes adicionais",
    }),
  });

  const data = await response.json().catch(() => null);
  const success = data?.success === true || data?.success === "true";

  if (!response.ok || !success) {
    const details = data?.message ? ` ${data.message}` : "";
    throw new Error(`Nao foi possivel enviar o formulario por e-mail.${details}`);
  }
};
