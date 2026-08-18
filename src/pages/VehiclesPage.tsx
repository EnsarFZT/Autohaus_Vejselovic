import { siteConfig } from "../config/site";
import { ContactBand } from "../components/Sections";
import { Icon } from "../components/Icon";
import { Eyebrow, ImageFrame, InventoryLink, PageHero, SectionHeading } from "../components/UI";

export function VehiclesPage() {
  return <>
    <PageHero eyebrow="Fahrzeugbestand" title="Unsere Fahrzeuge" text="Ausgewählte Automobile. Transparent präsentiert. Persönlich betreut." />
    <section className="section vehicles-intro"><div className="container vehicles-intro__grid"><div><Eyebrow>Aktuell verfügbar</Eyebrow><h2>Ihr nächstes Fahrzeug<br/><em>ist nur einen Klick entfernt.</em></h2></div><div><p className="lead">Entdecken Sie unseren aktuellen Fahrzeugbestand. Alle derzeit verfügbaren Fahrzeuge finden Sie auf unserem AutoScout24 Händlerprofil.</p><InventoryLink>ZUM FAHRZEUGBESTAND</InventoryLink><small>Öffnet AutoScout24 in einem neuen Browser-Tab.</small></div></div></section>
    <section className="section vehicle-showcase"><div className="container"><SectionHeading eyebrow="Präsentationsvorschau" title="Raum für ausgewählte Fahrzeuge" text="Die KI-Beispielbilder zeigen die mögliche spätere Präsentation. Es werden weiterhin keine erfundenen Fahrzeugdaten angezeigt."/><div className="vehicle-card-grid">{["01","02","03"].map((n, index) => <article className="vehicle-card" key={n}><ImageFrame src={siteConfig.images.vehicles[index]} alt={`KI-Beispielbild eines markenfreien Fahrzeugs, Motiv ${n}`}/><div><span>BEISPIELFAHRZEUG {n}</span><h3>[MARKE / MODELL]</h3><p>Bild- und Textfläche für eine spätere redaktionelle Präsentation. Der aktuelle Bestand bleibt auf AutoScout24.</p></div></article>)}</div></div></section>
    <section className="inventory-process"><div className="container"><SectionHeading eyebrow="Einfach zum Angebot" title="So finden Sie Ihr Fahrzeug" align="center"/><div className="process-grid"><div><span>01</span><Icon name="search"/><h3>Bestand öffnen</h3><p>Mit einem Klick gelangen Sie zum Händlerprofil.</p></div><div><span>02</span><Icon name="car"/><h3>Fahrzeug wählen</h3><p>Vergleichen Sie die aktuell verfügbaren Angebote.</p></div><div><span>03</span><Icon name="chat"/><h3>Kontakt aufnehmen</h3><p>Wir beraten Sie persönlich zu Ihrem Wunschfahrzeug.</p></div></div></div></section>
    <ContactBand />
  </>;
}
