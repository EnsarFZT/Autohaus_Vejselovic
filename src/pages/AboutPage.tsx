import { siteConfig } from "../config/site";
import { BenefitsSection, ContactBand } from "../components/Sections";
import { Icon } from "../components/Icon";
import { Eyebrow, ImageFrame, PageHero, SectionHeading } from "../components/UI";

const values = [{ title: "Nähe", text: "[TEXT PLACEHOLDER – persönliche und direkte Betreuung]" }, { title: "Vertrauen", text: "[TEXT PLACEHOLDER – transparente und faire Zusammenarbeit]" }, { title: "Qualität", text: "[TEXT PLACEHOLDER – Anspruch an Fahrzeuge und Beratung]" }];

export function AboutPage() {
  return <>
    <PageHero eyebrow="Das Unternehmen" title="Über uns" text="Menschen, Werte und automobile Leidenschaft." image={siteConfig.images.aboutHero}/>
    <section className="section about-story"><div className="container split-layout"><div className="split-layout__copy"><Eyebrow>Unsere Geschichte</Eyebrow><h2>Ein Autohaus mit<br/><em>persönlicher Handschrift.</em></h2><p className="lead">[TEXT PLACEHOLDER – Unternehmensgeschichte, Gründung und Entwicklung von Autohaus Vejselovic]</p><p>[TEXT PLACEHOLDER – Erfahrung, Marktkenntnis und Anspruch an eine langfristige Kundenbeziehung. Alle Inhalte können später ohne Layoutänderung ersetzt werden.]</p></div><ImageFrame src={siteConfig.images.dealership} alt="KI-Beispielaufnahme eines modernen Autohauses"/></div></section>
    <section className="philosophy"><div className="container"><div><Eyebrow light>Unsere Philosophie</Eyebrow><h2>Gute Beratung beginnt<br/>mit <em>gutem Zuhören.</em></h2></div><p>[TEXT PLACEHOLDER – Philosophie, Beratungsansatz, Erfahrung und Kundenservice. Hier ist Raum für die finale Positionierung des Unternehmens.]</p></div></section>
    <section className="section values"><div className="container"><SectionHeading eyebrow="Wofür wir stehen" title="Unsere Werte" align="center"/><div className="value-grid">{values.map((value, index) => <article key={value.title}><span>0{index+1}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></div></section>
    <BenefitsSection />
    <section className="section team"><div className="container"><SectionHeading eyebrow="Persönlich für Sie da" title="Unser Team" text="Die dargestellten Personen sind fiktive KI-Beispielportraits und werden später durch die echten Teamfotos und Daten ersetzt."/><div className="team-grid">{[1,2,3].map((n, index) => <article className="team-card" key={n}><ImageFrame src={siteConfig.images.team[index]} alt={`Fiktives KI-Beispielportrait für Teamkarte ${n}`}/><div><small>TEAMMITGLIED {n}</small><h3>[NAME]</h3><p>[POSITION]</p><span><Icon name="phone" size={17}/> [TELEFON]</span><span><Icon name="mail" size={17}/> [E-MAIL]</span></div></article>)}</div></div></section>
    <ContactBand />
  </>;
}
