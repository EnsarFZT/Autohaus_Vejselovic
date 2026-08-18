import { ArrowLink, PageHero } from "../components/UI";

export function NotFoundPage() { return <><PageHero eyebrow="Fehler 404" title="Seite nicht gefunden" text="Die gewünschte Seite ist nicht verfügbar."/><section className="section not-found"><div className="container"><p>Bitte kehren Sie zur Startseite zurück oder öffnen Sie unseren Fahrzeugbestand.</p><ArrowLink to="/">ZUR STARTSEITE</ArrowLink></div></section></>; }
