import { FormEvent, useState } from "react";

type FormState = "idle" | "invalid" | "ready";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { setState("invalid"); form.reportValidity(); return; }
    setState("ready");
  };
  return <form className="contact-form" onSubmit={handleSubmit} noValidate>
    <div className="form-grid">
      <label><span>Vorname *</span><input name="firstName" autoComplete="given-name" required /></label>
      <label><span>Nachname *</span><input name="lastName" autoComplete="family-name" required /></label>
      <label><span>E-Mail *</span><input name="email" type="email" autoComplete="email" required /></label>
      <label><span>Telefonnummer</span><input name="phone" type="tel" autoComplete="tel" /></label>
      <label className="form-grid__full"><span>Betreff *</span><select name="subject" required defaultValue=""><option value="" disabled>Bitte auswählen</option><option>Fahrzeuganfrage</option><option>Fahrzeugankauf / Eintausch</option><option>Finanzierung</option><option>Allgemeine Anfrage</option></select></label>
      <label className="form-grid__full"><span>Nachricht *</span><textarea name="message" rows={6} required /></label>
    </div>
    <label className="consent"><input type="checkbox" name="privacy" required/><span>Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu. *</span></label>
    <button className="button button--dark" type="submit">ANFRAGE VORBEREITEN <span aria-hidden="true">→</span></button>
    {state === "invalid" && <p className="form-message form-message--error" role="alert">Bitte füllen Sie alle Pflichtfelder korrekt aus.</p>}
    {state === "ready" && <p className="form-message" role="status"><strong>Formular vollständig.</strong> Der Versand ist noch nicht aktiviert. Bitte verbinden Sie vor Veröffentlichung einen E-Mail-Dienst oder ein Backend in <code>ContactForm.tsx</code>.</p>}
  </form>;
}
