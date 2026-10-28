// Photos served from Unsplash's CDN (free under the Unsplash License).
// Credits are listed in the README.

const base = "https://images.unsplash.com/";

export function unsplash(id: string, width: number, height?: number) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: "75",
    w: String(width),
  });
  if (height) params.set("h", String(height));
  return `${base}${id}?${params.toString()}`;
}

export function srcSet(id: string, widths: number[], ratio?: number) {
  return widths
    .map((w) => `${unsplash(id, w, ratio ? Math.round(w * ratio) : undefined)} ${w}w`)
    .join(", ");
}

export const photos = {
  hero: "photo-1662837625421-5fd8ed6131a0", // Ozkan Guner
  treatmentRoom: "photo-1629909613654-28e377c37b09", // Benyamin Bohlouli
  waitingRoom: "photo-1762625570087-6d98fca29531", // Amy Vosters
  xrayReview: "photo-1588776814546-1ffcf47267a5", // Jonathan Borba
  chair: "photo-1728342057953-94bfad8f0e7e", // Katarzyna Zygnerska
  doctors: {
    sara: "photo-1758691462651-611d730c5272", // Vitaly Gariev
    ali: "photo-1758691463384-771db2f192b3", // Vitaly Gariev
    noor: "photo-1770134223774-13b735e29201", // Beatriz Mendez
  },
} as const;
