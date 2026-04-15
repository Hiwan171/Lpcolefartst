const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const REQUIRED_FIELDS = [
  "razao_social",
  "nome",
  "cpf_cnpj",
  "telefone",
  "cidade",
  "segmento",
  "email",
];

function fieldValue(body, field) {
  const value = body && body[field];
  return typeof value === "string" ? value.trim() : "";
}

function htmlValue(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildRows(lead) {
  const cells = Object.entries(lead).map(([label, value]) => `
      <td width="50%" valign="top" style="width:50%;padding:5px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" bgcolor="#070707" style="width:100%;border:1px solid #123d36;background:#070707;border-collapse:separate;">
          <tr>
            <td style="padding:10px 12px;">
              <div style="font-size:9px;line-height:1.2;text-transform:uppercase;letter-spacing:.08em;color:#34d399;font-weight:800;">${htmlValue(label)}</div>
              <div style="margin-top:4px;font-size:14px;line-height:1.35;color:#f8fafc;font-weight:650;">${htmlValue(value)}</div>
            </td>
          </tr>
        </table>
      </td>`);

  const rows = [];
  for (let index = 0; index < cells.length; index += 2) {
    rows.push(`
      <tr>
        ${cells[index]}
        ${cells[index + 1] || '<td width="50%" style="width:50%;padding:5px;">&nbsp;</td>'}
      </tr>`);
  }

  return rows.join("");
}

function buildHtmlEmail(lead, logoCid) {
  const logo = logoCid
    ? `<img src="cid:${htmlValue(logoCid)}" width="116" alt="Colefar" style="display:block;width:116px;max-width:116px;height:auto;margin:0;">`
    : '<div style="margin:0;font-size:18px;line-height:1;color:#ffffff;font-weight:800;letter-spacing:.08em;">COLEFAR</div>';

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo lead tecnico-comercial - Colefar</title>
  </head>
  <body bgcolor="#050505" style="margin:0;padding:0;background:#050505;color:#ffffff;font-family:Inter,Segoe UI,Arial,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">Novo lead recebido pelo site Colefar.</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" bgcolor="#050505" style="width:100%;background:#050505;">
      <tr>
        <td align="center" style="padding:22px 14px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" bgcolor="#101010" style="width:100%;max-width:640px;border:1px solid #145c50;background:#101010;border-collapse:separate;border-spacing:0;">
            <tr>
              <td bgcolor="#101010" style="background:#101010;padding:24px;border:1px solid #0b211d;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;margin:0 0 16px;">
                  <tr>
                    <td align="left" valign="top">
                      ${logo}
                    </td>
                    <td align="right" valign="top">
                      <div style="display:inline-block;padding:6px 9px;border:1px solid #145c50;background:#0d241e;font-size:9px;line-height:1;text-transform:uppercase;letter-spacing:.09em;color:#34d399;font-weight:800;">Novo lead do site</div>
                    </td>
                  </tr>
                </table>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
                  ${buildRows(lead)}
                </table>
                <p style="margin:14px 0 0;color:#64748b;font-size:10px;line-height:1.4;">Mensagem gerada automaticamente.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildTextEmail(lead) {
  return [
    "Novo lead recebido pelo site Colefar",
    "",
    ...Object.entries(lead).map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
}

function getSmtpConfig() {
  return {
    host: process.env.COLEFAR_SMTP_HOST || "smtp.office365.com",
    port: Number(process.env.COLEFAR_SMTP_PORT || 587),
    user: process.env.COLEFAR_SMTP_USER,
    pass: process.env.COLEFAR_SMTP_PASS,
    from: process.env.COLEFAR_SMTP_FROM || process.env.COLEFAR_SMTP_USER,
    fromName: process.env.COLEFAR_SMTP_FROM_NAME || "Colefar",
    to: process.env.COLEFAR_LEAD_TO || "analista.comercial@colefar.com.br",
  };
}

function parseRequestBody(req) {
  if (!req.body || typeof req.body === "object") {
    return req.body || {};
  }

  try {
    return JSON.parse(req.body);
  } catch (error) {
    return {};
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Metodo nao permitido." });
  }

  try {
    const body = parseRequestBody(req);
    const missingField = REQUIRED_FIELDS.find((field) => !fieldValue(body, field));

    if (missingField) {
      return res.status(422).json({ ok: false, message: "Preencha todos os campos obrigatorios." });
    }

    const email = fieldValue(body, "email");
    if (!isValidEmail(email)) {
      return res.status(422).json({ ok: false, message: "Informe um email valido." });
    }

    const config = getSmtpConfig();
    if (!config.user || !config.pass || !config.from) {
      return res.status(500).json({ ok: false, message: "SMTP nao configurado na Vercel." });
    }

    const lead = {
      "Razao social": fieldValue(body, "razao_social"),
      Nome: fieldValue(body, "nome"),
      "CPF ou CNPJ": fieldValue(body, "cpf_cnpj"),
      Telefone: fieldValue(body, "telefone"),
      Cidade: fieldValue(body, "cidade"),
      Segmento: fieldValue(body, "segmento"),
      Email: email,
      Origem: "Landing Page Colefar",
      "Data/Hora": new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date()),
    };

    const logoCid = "colefar-logo";
    const logoPath = path.join(process.cwd(), "assets", "logo-white.png");
    const hasLogo = fs.existsSync(logoPath);

    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.port === 465,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });

    await transporter.sendMail({
      from: `"${config.fromName}" <${config.from}>`,
      to: config.to,
      replyTo: email,
      subject: "Novo lead tecnico-comercial - Site Colefar",
      text: buildTextEmail(lead),
      html: buildHtmlEmail(lead, hasLogo ? logoCid : null),
      attachments: hasLogo
        ? [
            {
              filename: "logo-white.png",
              path: logoPath,
              cid: logoCid,
            },
          ]
        : [],
    });

    return res.status(200).json({ ok: true, message: "Email enviado com sucesso." });
  } catch (error) {
    console.error("Erro ao enviar proposta:", error);
    return res.status(500).json({ ok: false, message: "Nao foi possivel enviar o email agora." });
  }
};
