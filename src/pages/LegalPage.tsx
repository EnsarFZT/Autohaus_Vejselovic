import { PageHero } from "../components/UI";

function Placeholder() { return <strong className="legal-placeholder">[RECHTLICHE ANGABEN ERGÄNZEN]</strong>; }

export function LegalPage({ type }: { type: "impressum" | "datenschutz" }) {
  const privacy = type === "datenschutz";
  return <>
    <PageHero eyebrow="Rechtliches" title={privacy ? "Datenschutz" : "Impressum"} />
    <section className="section legal"><div className="container legal__content">
      <div className="legal-notice"><strong>Hinweis</strong><p>Diese Seite ist als klar gekennzeichnete Vorlage vorbereitet. Vor der Veröffentlichung müssen alle Platzhalter durch geprüfte, auf das Unternehmen und die eingesetzten Dienste abgestimmte Angaben ersetzt werden.</p></div>
      {privacy ? <>
        <h2>Datenschutzerklärung</h2><Placeholder />
        <h3>Verantwortlicher</h3><p>Rechtlicher Unternehmensname: <Placeholder/><br/>Anschrift: <Placeholder/><br/>Kontakt: <Placeholder/></p>
        <h3>Allgemeine Hinweise</h3><p>[TEXT ERGÄNZEN – Angaben zur Verarbeitung personenbezogener Daten, Rechtsgrundlagen, Speicherdauer und Betroffenenrechten.]</p>
        <h3>Kontaktformular</h3><p>[TEXT ERGÄNZEN – Verarbeitung der übermittelten Formulardaten. Die technische Versandlösung ist vor Veröffentlichung zu dokumentieren.]</p>
        <h3 id="cookies">Externe Dienste und Cookies</h3><p>[TEXT ERGÄNZEN – tatsächlich verwendete Hosting-, Analyse-, Karten-, Schrift- und Cookie-Dienste samt Rechtsgrundlage und Einwilligungsmechanismus.]</p>
        <h3>Ihre Rechte</h3><p>[TEXT ERGÄNZEN – Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und Beschwerderecht.]</p>
      </> : <>
        <h2>Angaben gemäß den anwendbaren gesetzlichen Bestimmungen</h2><Placeholder />
        <dl className="legal-list"><div><dt>Rechtlicher Unternehmensname</dt><dd><Placeholder/></dd></div><div><dt>Inhaber / Geschäftsführung</dt><dd><Placeholder/></dd></div><div><dt>Geschäftsanschrift</dt><dd><Placeholder/></dd></div><div><dt>UID-Nummer</dt><dd><Placeholder/></dd></div><div><dt>Firmenbuchnummer</dt><dd><Placeholder/></dd></div><div><dt>Firmenbuchgericht</dt><dd><Placeholder/></dd></div><div><dt>Zuständige Behörde</dt><dd><Placeholder/></dd></div><div><dt>Kontakt</dt><dd><Placeholder/></dd></div></dl>
        <h3>Unternehmensgegenstand</h3><Placeholder/>
        <h3>Haftung und Urheberrecht</h3><p>[RECHTSTEXT DURCH RECHTSBERATUNG PRÜFEN UND ERGÄNZEN]</p>
      </>}
    </div></section>
  </>;
}
