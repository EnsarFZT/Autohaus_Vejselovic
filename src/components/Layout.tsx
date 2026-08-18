import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig, isConfiguredUrl, getPhoneHref, getEmailHref } from "../config/site";
import { Icon } from "./Icon";

const navigation = [
  ["STARTSEITE", "/"], ["FAHRZEUGE", "/fahrzeuge"], ["ÜBER UNS", "/ueber-uns"], ["LEISTUNGEN", "/leistungen"], ["KONTAKT", "/kontakt"],
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHeroPage = pathname === "/" || pathname === "/ueber-uns";
  useEffect(() => { const handler = () => setScrolled(window.scrollY > 36); handler(); window.addEventListener("scroll", handler, { passive: true }); return () => window.removeEventListener("scroll", handler); }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.classList.toggle("menu-open", open); return () => document.body.classList.remove("menu-open"); }, [open]);
  return <header className={`site-header ${scrolled || !isHeroPage ? "site-header--solid" : ""} ${open ? "site-header--open" : ""}`}>
    <div className="site-header__inner">
      <Link to="/" className="brand" aria-label="Autohaus Vejselovic Startseite"><img src={siteConfig.logo} alt="Autohaus Vejselovic – Logo Platzhalter" /></Link>
      <nav className="desktop-nav" aria-label="Hauptnavigation">{navigation.map(([label, href]) => <NavLink key={href} to={href} end={href === "/"}>{label}</NavLink>)}</nav>
      <div className="header-actions">
        <Link to="/kontakt" className="header-action" aria-label="Kontakt"><Icon name="mail" /></Link>
        <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Menü schließen" : "Menü öffnen"}><span/><span/></button>
      </div>
    </div>
    <div id="mobile-menu" className="mobile-menu" aria-hidden={!open}>
      <nav aria-label="Mobile Navigation">{navigation.map(([label, href], i) => <NavLink key={href} to={href} end={href === "/"}><small>0{i + 1}</small>{label}<Icon name="arrow" /></NavLink>)}</nav>
      <div className="mobile-menu__contact">
        <p>{siteConfig.companyName}</p><span>{siteConfig.address}</span><span>{siteConfig.phone}</span><span>{siteConfig.email}</span>
      </div>
    </div>
  </header>;
}

export function Footer() {
  const socials = [["Instagram", siteConfig.instagram], ["Facebook", siteConfig.facebook], ["TikTok", siteConfig.tiktok]];
  const phoneHref = getPhoneHref(siteConfig.phone);
  const emailHref = getEmailHref(siteConfig.email);
  return <footer className="site-footer">
    <div className="container footer-top">
      <div className="footer-brand"><img src={siteConfig.logo} alt="Autohaus Vejselovic – Logo Platzhalter"/><p>Ihr unabhängiger Partner für ausgewählte Fahrzeuge und persönliche Beratung.</p></div>
      <div><h3>Navigation</h3><ul>{navigation.map(([label, href]) => <li key={href}><Link to={href}>{label[0] + label.slice(1).toLowerCase()}</Link></li>)}</ul></div>
      <div><h3>Kontakt</h3><ul className="footer-contact"><li>{siteConfig.address}</li><li>{phoneHref ? <a href={phoneHref}>{siteConfig.phone}</a> : siteConfig.phone}</li><li>{emailHref ? <a href={emailHref}>{siteConfig.email}</a> : siteConfig.email}</li></ul></div>
      <div><h3>Öffnungszeiten</h3><p>{siteConfig.openingHours}</p><h3 className="footer-social-title">Folgen Sie uns</h3><div className="socials">{socials.map(([label, url]) => isConfiguredUrl(url) ? <a key={label} href={url} target="_blank" rel="noopener noreferrer">{label}</a> : <span key={label}>{label}</span>)}</div></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.companyName}</span><div><Link to="/impressum">Impressum</Link><Link to="/datenschutz">Datenschutz</Link><Link to="/datenschutz#cookies">Cookie-Einstellungen</Link></div></div>
  </footer>;
}
