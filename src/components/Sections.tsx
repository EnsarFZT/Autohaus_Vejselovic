import { benefits, services, siteConfig } from "../config/site";
import { Icon } from "./Icon";
import { ArrowLink, Eyebrow, ImageFrame, InventoryLink, SectionHeading } from "./UI";

export function AboutSection() {
  return <section className="section about-intro">
    <div className="container split-layout">
      <div className="split-layout__copy">
        <Eyebrow>Willkommen</Eyebrow>
        <h2>Automobile Leidenschaft.<br/><em>Persönlich gelebt.</em></h2>
        <p className="lead">Willkommen bei Autohaus Vejselovic – Ihrem unabhängigen Ansprechpartner rund um das Automobil.</p>
        <p>[TEXT PLACEHOLDER – Beschreibung des Autohauses, Philosophie, Erfahrung und Kundenservice. Dieser Inhalt wird durch die finale Unternehmensgeschichte ersetzt.]</p>
        <ArrowLink to="/ueber-uns" variant="outline">MEHR ÜBER UNS</ArrowLink>
      </div>
      <div className="split-layout__visual"><ImageFrame src={siteConfig.images.dealership} alt="KI-Beispielaufnahme eines modernen unabhängigen Autohauses"/><div className="image-accent"><strong>100%</strong><span>persönliche<br/>Betreuung</span></div></div>
    </div>
  </section>;
}

export function VehicleCTA({ condensed = false }: { condensed?: boolean }) {
  return <section className={`vehicle-cta ${condensed ? "vehicle-cta--condensed" : ""}`}>
    <div className="container vehicle-cta__grid">
      <div className="vehicle-cta__copy">
        <Eyebrow light>Fahrzeugbestand</Eyebrow>
        <h2>Aktuelle<br/><em>Fahrzeuge</em></h2>
        <p>Entdecken Sie unsere aktuell verfügbaren Fahrzeuge auf unserem AutoScout24 Händlerprofil.</p>
        <InventoryLink variant="light">JETZT FAHRZEUGE ANSEHEN</InventoryLink>
        <small>Sie werden sicher in einem neuen Tab zu AutoScout24 weitergeleitet.</small>
      </div>
      {!condensed && <div className="search-panel" aria-label="Vorschau der Fahrzeugsuche">
        <div className="search-panel__top"><span>Fahrzeugsuche</span><Icon name="search" size={25}/></div>
        <div className="search-panel__fields"><div><small>Kategorie</small><strong>Fahrzeugbestand</strong></div><div><small>Zustand</small><strong>Gebrauchtwagen</strong></div><div><small>Marke</small><strong>Alle Marken</strong></div><div><small>Modell</small><strong>Alle Modelle</strong></div><div><small>Preis</small><strong>Alle Preise</strong></div></div>
        <p>Die Bestandsverwaltung erfolgt ausschließlich über AutoScout24. Diese Darstellung ist keine lokale Suchfunktion.</p>
      </div>}
    </div>
  </section>;
}

export function ServicesSection({ full = false }: { full?: boolean }) {
  return <section className={`section services ${full ? "services--full" : ""}`}>
    <div className="container">
      <div className="heading-row"><SectionHeading eyebrow="Was wir für Sie tun" title="Unsere Leistungen" text="Kompetente Begleitung und klare Lösungen – persönlich auf Ihre Wünsche abgestimmt."/>{!full && <ArrowLink to="/leistungen" variant="outline">ALLE LEISTUNGEN</ArrowLink>}</div>
      <div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-card__icon"><Icon name={service.icon}/></div><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
      <p className="editable-note">Alle Leistungsbeschreibungen sind zentral gepflegte, editierbare Ausgangstexte.</p>
    </div>
  </section>;
}

export function BenefitsSection() {
  return <section className="section benefits"><div className="container"><SectionHeading eyebrow="Unser Anspruch" title="Warum Autohaus Vejselovic?" align="center"/><div className="benefit-grid">{benefits.map(item => <article key={item.title}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>;
}

export function ContactBand() {
  return <section className="contact-band"><div className="container"><div><Eyebrow light>Persönlich für Sie da</Eyebrow><h2>Bereit für den nächsten Schritt?</h2></div><ArrowLink to="/kontakt" variant="light">KONTAKT AUFNEHMEN</ArrowLink></div></section>;
}
