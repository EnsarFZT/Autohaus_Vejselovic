# Autohaus Vejselovic Website

Produktionsnah vorbereitete, responsive React/Vite-Website für Autohaus Vejselovic.

## Lokal starten

Voraussetzung: Node.js 20 oder neuer.

```bash
npm install
npm run dev
```

Produktionsbuild:

```bash
npm run build
npm run preview
```

## Inhalte konfigurieren

Alle wichtigen Unternehmensdaten, URLs, Leistungen und Bildpfade liegen in:

`src/config/site.ts`

Vor der Veröffentlichung müssen mindestens ersetzt werden:

- `AUTOSCOUT24_DEALER_URL`
- Adresse, Telefonnummer, E-Mail und Öffnungszeiten
- Telefonnummer und E-Mail-Adresse (die klickbaren `tel:`- und `mailto:`-Links werden automatisch daraus erzeugt)
- Social-Media- und Google-Maps-URLs
- Logo- und Bilddateien in `public/assets/`
- alle redaktionellen Textplatzhalter
- alle rechtlichen Platzhalter in Impressum und Datenschutz
- `DOMAIN_PLACEHOLDER` in `public/robots.txt` und `public/sitemap.xml`

## Kontaktformular

Das Formular validiert alle Pflichtfelder im Browser, versendet aber bewusst noch keine Nachricht. Die Übergabe an einen E-Mail-Dienst oder ein Backend wird zentral in `src/components/ContactForm.tsx` ergänzt. Erst danach darf die Bestätigung um eine echte Versandmeldung erweitert werden.

## Hosting

Die Anwendung verwendet clientseitiges Routing. Für Netlify liegt `public/_redirects` bei, für Vercel `vercel.json`. Bei anderen Hosts muss ein Fallback aller Seitenrouten auf `index.html` eingerichtet werden.
