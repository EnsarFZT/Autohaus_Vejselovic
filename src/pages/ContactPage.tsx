import { ContactForm } from "../components/ContactForm";
import { Icon } from "../components/Icon";
import { PageHero, SectionHeading } from "../components/UI";
import { getEmailHref, getPhoneHref, isConfiguredUrl, siteConfig } from "../config/site";

const phoneLink = getPhoneHref(siteConfig.phone);
const mailLink = getEmailHref(siteConfig.email);

export function ContactPage() {
  return <>
    <PageHero eyebrow="Wir sind für Sie da" title="Kontakt" text="Schreiben Sie uns oder vereinbaren Sie ein persönliches Gespräch." />
    <section className="section contact-overview"><div className="container contact-overview__grid">
      <div className="contact-details"><span className="contact-kicker">AUTOHAUS VEJSELOVIC</span><h2>Wie können wir<br/><em>Ihnen helfen?</em></h2><p>Wir freuen uns auf Ihre Anfrage und melden uns persönlich bei Ihnen.</p>
        <div className="contact-list"><div><Icon name="pin"/><span><small>Adresse</small>{siteConfig.address}</span></div><div><Icon name="phone"/><span><small>Telefon</small>{phoneLink ? <a href={phoneLink}>{siteConfig.phone}</a> : siteConfig.phone}</span></div><div><Icon name="mail"/><span><small>E-Mail</small>{mailLink ? <a href={mailLink}>{siteConfig.email}</a> : siteConfig.email}</span></div><div><Icon name="clock"/><span><small>Öffnungszeiten</small>{siteConfig.openingHours}</span></div></div>
        <div className="contact-buttons">{phoneLink ? <a className="button button--dark" href={phoneLink}>ANRUFEN</a> : <span className="button button--disabled">ANRUFEN</span>}{mailLink ? <a className="button button--outline" href={mailLink}>E-MAIL SENDEN</a> : <span className="button button--disabled">E-MAIL SENDEN</span>}{isConfiguredUrl(siteConfig.googleMapsUrl) ? <a className="button button--outline" href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">ROUTE PLANEN</a> : <span className="button button--disabled">ROUTE PLANEN</span>}</div>
      </div>
      <div className="form-panel"><SectionHeading eyebrow="Ihre Anfrage" title="Schreiben Sie uns"/><ContactForm/></div>
    </div></section>
    <section className="map-section"><div className="map-placeholder"><Icon name="pin" size={42}/><strong>[GOOGLE MAPS / LOCATION PLACEHOLDER]</strong><span>Google-Maps-Embed oder alternativen Kartenanbieter hier einsetzen.</span><code>siteConfig.googleMapsUrl</code></div></section>
  </>;
}
