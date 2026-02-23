declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackPayload = Record<string, unknown>;

export const trackEvent = (eventName: string, payload: TrackPayload = {}) => {
  if (typeof window === "undefined") return;

  const eventPayload = { event: eventName, ...payload };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }
};

