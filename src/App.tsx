import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header, Footer } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { VehiclesPage } from "./pages/VehiclesPage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const metadata: Record<string, [string, string]> = {
  "/": ["Autohaus Vejselovic | Fahrzeuge & persönlicher Service", "Autohaus Vejselovic – ausgewählte Fahrzeuge, persönliche Beratung und zuverlässiger Service rund ums Automobil."],
  "/fahrzeuge": ["Fahrzeuge | Autohaus Vejselovic", "Entdecken Sie den aktuellen Fahrzeugbestand von Autohaus Vejselovic auf AutoScout24."],
  "/ueber-uns": ["Über uns | Autohaus Vejselovic", "Lernen Sie Autohaus Vejselovic, unsere Philosophie und unsere Werte kennen."],
  "/leistungen": ["Leistungen | Autohaus Vejselovic", "Fahrzeugverkauf, Ankauf, Eintausch, Finanzierung und persönliche Beratung."],
  "/kontakt": ["Kontakt | Autohaus Vejselovic", "Kontaktieren Sie Autohaus Vejselovic telefonisch, per E-Mail oder über unser Anfrageformular."],
  "/impressum": ["Impressum | Autohaus Vejselovic", "Rechtliche Informationen zu Autohaus Vejselovic."],
  "/datenschutz": ["Datenschutz | Autohaus Vejselovic", "Informationen zum Datenschutz bei Autohaus Vejselovic."],
};

function PageEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const [title, description] = metadata[pathname] ?? ["Seite nicht gefunden | Autohaus Vejselovic", "Die angeforderte Seite wurde nicht gefunden."];
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", description);
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) { ogTitle = document.createElement("meta"); ogTitle.setAttribute("property", "og:title"); document.head.appendChild(ogTitle); }
    ogTitle.setAttribute("content", title);
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) { ogDescription = document.createElement("meta"); ogDescription.setAttribute("property", "og:description"); document.head.appendChild(ogDescription); }
    ogDescription.setAttribute("content", description);
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) { ogType = document.createElement("meta"); ogType.setAttribute("property", "og:type"); document.head.appendChild(ogType); }
    ogType.setAttribute("content", "website");
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <PageEffects />
      <a className="skip-link" href="#main">Zum Inhalt springen</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fahrzeuge" element={<VehiclesPage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/leistungen" element={<ServicesPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/impressum" element={<LegalPage type="impressum" />} />
          <Route path="/datenschutz" element={<LegalPage type="datenschutz" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
