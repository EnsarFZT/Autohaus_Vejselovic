export const siteConfig = {
  companyName: "Autohaus Vejselovic",
  shortName: "Vejselovic",
  address: "[ADRESSE]",
  phone: "[TELEFONNUMMER]",
  email: "[E-MAIL]",
  openingHours: "[ÖFFNUNGSZEITEN]",
  autoscoutUrl: "https://www.autoscout24.at/",
  instagram: "INSTAGRAM_URL_PLACEHOLDER",
  facebook: "FACEBOOK_URL_PLACEHOLDER",
  tiktok: "TIKTOK_URL_PLACEHOLDER",
  googleMapsUrl: "GOOGLE_MAPS_URL_PLACEHOLDER",
  logo: "/assets/logo-placeholder.svg",
  mark: "/assets/mark-placeholder.svg",
  images: {
    hero: "/assets/generated/hero-ai.jpg",
    dealership: "/assets/generated/dealership-ai.jpg",
    aboutHero: "/assets/generated/about-ai.jpg",
    team: [
      "/assets/generated/team-1-ai.jpg",
      "/assets/generated/team-2-ai.jpg",
      "/assets/generated/team-3-ai.jpg",
    ],
    vehicles: [
      "/assets/generated/vehicle-ai.jpg",
      "/assets/generated/vehicle-2-ai.jpg",
      "/assets/generated/vehicle-3-ai.jpg",
    ],
  },
} as const;

export const isConfiguredUrl = (value: string) => /^https?:\/\//i.test(value);
export const getPhoneHref = (phone: string) => phone.startsWith("[") ? undefined : `tel:${phone.replace(/[^+\d]/g, "")}`;
export const getEmailHref = (email: string) => email.startsWith("[") ? undefined : `mailto:${email}`;

export const services = [
  { icon: "car", title: "Fahrzeugverkauf", text: "Professionelle Beratung beim Kauf Ihres nächsten Fahrzeugs." },
  { icon: "key", title: "Fahrzeugankauf", text: "Wir kaufen Fahrzeuge nach individueller Bewertung an." },
  { icon: "swap", title: "Eintausch", text: "Möglichkeit, das bestehende Fahrzeug beim Fahrzeugkauf einzutauschen." },
  { icon: "finance", title: "Finanzierung", text: "Individuelle Finanzierungsmöglichkeiten, abgestimmt auf Ihre Situation." },
  { icon: "search", title: "Fahrzeugvermittlung", text: "Unterstützung bei der Suche nach dem passenden Fahrzeug." },
  { icon: "chat", title: "Beratung", text: "Persönliche und kompetente Beratung rund um den Fahrzeugkauf." },
] as const;

export const benefits = [
  { number: "01", title: "Persönliche Beratung", text: "Individuell, direkt und mit einem offenen Ohr für Ihre Wünsche." },
  { number: "02", title: "Ausgewählte Fahrzeuge", text: "Ein sorgfältig zusammengestelltes Angebot mit klarem Qualitätsanspruch." },
  { number: "03", title: "Faire Abwicklung", text: "Transparent, nachvollziehbar und zuverlässig vom Erstkontakt bis zur Übergabe." },
  { number: "04", title: "Kompetenter Service", text: "Verlässliche Begleitung rund um Ihren Fahrzeugkauf." },
] as const;
