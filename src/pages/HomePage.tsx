import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import { AboutSection, BenefitsSection, ContactBand, ServicesSection, VehicleCTA } from "../components/Sections";
import { Icon } from "../components/Icon";
import { InventoryLink } from "../components/UI";

export function HomePage() {
  const schema = { "@context": "https://schema.org", "@type": "AutoDealer", name: siteConfig.companyName, description: "Unabhängiges Autohaus für Fahrzeugverkauf und persönliche Beratung." };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,11,11,.82) 0%, rgba(8,11,11,.4) 52%, rgba(8,11,11,.18) 100%), url(${siteConfig.images.hero})` }}>
      <div className="container hero__content">
        <div className="hero__eyebrow"><span/>Unabhängig. Persönlich. Verlässlich.</div>
        <h1>Autohaus<br/><em>Vejselovic</em></h1>
        <p>Ihr Partner rund ums Automobil.</p>
        <div className="hero__actions"><InventoryLink variant="light">FAHRZEUGE ENTDECKEN</InventoryLink><Link to="/kontakt" className="button button--ghost">KONTAKT AUFNEHMEN <Icon name="arrow" size={19}/></Link></div>
      </div>
      <div className="hero__rail"><span>Entdecken</span><div/><span>Scroll</span></div>
      <div className="hero__quick"><Link to="/fahrzeuge"><Icon name="car"/><span><small>Direkt zum</small>Fahrzeugbestand</span><Icon name="arrow"/></Link><Link to="/kontakt"><Icon name="phone"/><span><small>Persönlich</small>Kontakt aufnehmen</span><Icon name="arrow"/></Link></div>
    </section>
    <AboutSection />
    <VehicleCTA />
    <ServicesSection />
    <BenefitsSection />
    <ContactBand />
  </>;
}
