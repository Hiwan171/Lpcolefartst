declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & {
      queue?: unknown[];
      push?: (...args: unknown[]) => void;
      loaded?: boolean;
      version?: string;
    };
    _fbq?: Window["fbq"];
  }
}

type TrackPayload = Record<string, unknown>;

type AnalyticsStatus = {
  hasGtm: boolean;
  hasGa4: boolean;
  hasMetaPixel: boolean;
};

const analyticsStatus: AnalyticsStatus = {
  hasGtm: false,
  hasGa4: false,
  hasMetaPixel: false,
};

const PIXEL_STANDARD_EVENTS: Record<string, string> = {
  page_view: "PageView",
  lead_form_success: "Lead",
  whatsapp_click: "Contact",
  phone_click: "Contact",
  email_click: "Contact",
  map_click: "Contact",
};

let initialized = false;

const normalizeId = (value?: string) => value?.trim() ?? "";

const isTruthyFlag = (value?: string) => {
  const normalized = (value ?? "").trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "on";
};

const ensureDataLayer = () => {
  if (typeof window === "undefined") return [];
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
};

const injectScript = (id: string, src: string) => {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

const initGtm = (containerId: string) => {
  ensureDataLayer().push({ "gtm.start": Date.now(), event: "gtm.js" });
  injectScript("gtm-script", `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`);
  analyticsStatus.hasGtm = true;
};

const initGa4 = (measurementId: string) => {
  ensureDataLayer();

  if (typeof window.gtag !== "function") {
    window.gtag = (...args: unknown[]) => {
      ensureDataLayer().push(args);
    };
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
  injectScript("ga4-script", `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`);
  analyticsStatus.hasGa4 = true;
};

const initMetaPixel = (pixelId: string) => {
  if (typeof window.fbq !== "function") {
    const fbq = ((...args: unknown[]) => {
      fbq.queue = fbq.queue || [];
      fbq.queue.push(args);
    }) as NonNullable<Window["fbq"]>;

    fbq.push = (...args: unknown[]) => fbq(...args);
    fbq.loaded = true;
    fbq.version = "2.0";

    window.fbq = fbq;
    window._fbq = fbq;
  }

  injectScript("meta-pixel-script", "https://connect.facebook.net/en_US/fbevents.js");
  window.fbq("init", pixelId);
  analyticsStatus.hasMetaPixel = true;
};

const trackMetaPixel = (eventName: string, payload: TrackPayload) => {
  if (typeof window.fbq !== "function") return;

  const standardEvent = PIXEL_STANDARD_EVENTS[eventName];
  if (standardEvent) {
    window.fbq("track", standardEvent, payload);
    return;
  }

  window.fbq("trackCustom", eventName, payload);
};

export const initAnalytics = () => {
  if (typeof window === "undefined") return analyticsStatus;
  if (initialized) return analyticsStatus;

  const gtmId = normalizeId(import.meta.env.VITE_GTM_ID);
  const ga4Id = normalizeId(import.meta.env.VITE_GA4_ID);
  const metaPixelId = normalizeId(import.meta.env.VITE_META_PIXEL_ID);
  const ga4DirectMode = isTruthyFlag(import.meta.env.VITE_GA4_DIRECT);

  if (gtmId) {
    initGtm(gtmId);
  }

  if (ga4Id && (!gtmId || ga4DirectMode)) {
    initGa4(ga4Id);
  }

  if (metaPixelId) {
    initMetaPixel(metaPixelId);
  }

  initialized = true;
  return analyticsStatus;
};

export const trackEvent = (eventName: string, payload: TrackPayload = {}) => {
  if (typeof window === "undefined") return;

  const eventPayload = { event: eventName, ...payload };
  ensureDataLayer().push(eventPayload);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  trackMetaPixel(eventName, payload);
};

export const trackPageView = (pagePath?: string) => {
  if (typeof window === "undefined") return;

  const path = pagePath ?? `${window.location.pathname}${window.location.search}${window.location.hash}`;
  trackEvent("page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

