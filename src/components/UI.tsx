import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import { Icon } from "./Icon";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? "eyebrow--light" : ""}`}><span />{children}</div>;
}

export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center" }) {
  return <header className={`section-heading section-heading--${align}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </header>;
}

export function ArrowLink({ to, children, variant = "dark", external = false }: { to: string; children: React.ReactNode; variant?: "dark" | "light" | "outline"; external?: boolean }) {
  const cls = `button button--${variant}`;
  const content = <>{children}<Icon name="arrow" size={19} /></>;
  return external
    ? <a className={cls} href={to} target="_blank" rel="noopener noreferrer">{content}</a>
    : <Link className={cls} to={to}>{content}</Link>;
}

export function InventoryLink({ children, variant = "dark", className = "" }: { children: React.ReactNode; variant?: "dark" | "light" | "outline"; className?: string }) {
  return <a className={`button button--${variant} ${className}`} href={siteConfig.autoscoutUrl} target="_blank" rel="noopener noreferrer">
    {children}<Icon name="arrow" size={19} />
  </a>;
}

export function ImageFrame({ src, alt, className = "", loading = "lazy" }: { src: string; alt: string; className?: string; loading?: "lazy" | "eager" }) {
  return <figure className={`image-frame ${className}`}><img src={src} alt={alt} loading={loading} decoding="async" /></figure>;
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image?: string }) {
  return <section className={`page-hero ${image ? "page-hero--image" : ""}`} style={image ? { backgroundImage: `linear-gradient(90deg, rgba(11,14,14,.88), rgba(11,14,14,.28)), url(${image})` } : undefined}>
    <div className="container page-hero__inner">
      <Eyebrow light>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </div>
  </section>;
}
