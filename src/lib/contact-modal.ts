import { trackEvent } from "@/lib/analytics";

const OPEN_CONTACT_MODAL_EVENT = "open-contact-modal";

export type ContactModalPayload = {
  source: string;
  residueType?: string;
};

const inferResidueType = (source: string) => {
  const normalized = source.toLowerCase();
  if (normalized.includes("industrial")) return "Industrial";
  if (normalized.includes("saude") || normalized.includes("health")) return "Saude";
  return undefined;
};

export const openContactModal = (source = "unknown", payload: Partial<ContactModalPayload> = {}) => {
  const residueType = payload.residueType ?? inferResidueType(source);

  trackEvent("lead_modal_open", { source, residueType: residueType ?? "none" });
  window.dispatchEvent(
    new CustomEvent<ContactModalPayload>(OPEN_CONTACT_MODAL_EVENT, {
      detail: { source, residueType },
    }),
  );
};

export const CONTACT_MODAL_EVENT = OPEN_CONTACT_MODAL_EVENT;
