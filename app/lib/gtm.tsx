export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const pageview = (url: string) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return;
  }

  // Ensure dataLayer exists before pushing
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};
