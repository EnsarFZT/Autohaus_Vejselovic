import { ContactBand, ServicesSection, VehicleCTA } from "../components/Sections";
import { PageHero } from "../components/UI";

export function ServicesPage() {
  return <>
    <PageHero eyebrow="Rund ums Automobil" title="Unsere Leistungen" text="Persönliche Lösungen für Kauf, Verkauf und Fahrzeugwechsel."/>
    <ServicesSection full />
    <VehicleCTA condensed />
    <ContactBand />
  </>;
}
