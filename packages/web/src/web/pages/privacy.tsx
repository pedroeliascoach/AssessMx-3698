import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Download, ShieldCheck, Mail } from "lucide-react";
import content from "../data/privacy.json";

const blocks = content.text.trim().split(/\n\s*\n/);
const headings = blocks.filter((block) => /^\d+\. [^\n]+$/.test(block));
const sectionId = (heading: string) => `apartado-${heading.split(".")[0]}`;

export default function PrivacyPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Aviso integral de privacidad — AssessMx";
    return () => {
      document.title = previous;
    };
  }, []);
  return (
    <div className="privacy-page">
      <a className="skip-link" href="#aviso">
        Ir al aviso de privacidad
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="brand" aria-label="AssessMx — Inicio">
            <img src="/images/logo.png" alt="ASSESSMX" />
          </a>
          <a href="/#contacto" className="privacy-return">
            <ArrowLeft size={16} /> Volver al sitio
          </a>
        </div>
      </header>
      <main className="container privacy-layout">
        <aside className="privacy-sidebar" aria-label="Índice del aviso">
          <div className="privacy-index desktop-index">
            <p className="eyebrow">EN ESTE AVISO</p>
            <nav aria-label="Apartados del aviso">
              {headings.map((heading) => (
                <a key={heading} href={`#${sectionId(heading)}`}>
                  {heading}
                </a>
              ))}
            </nav>
          </div>
          <details className="privacy-index mobile-index">
            <summary>Consultar los 17 apartados</summary>
            <nav aria-label="Apartados del aviso móvil">
              {headings.map((heading) => (
                <a key={heading} href={`#${sectionId(heading)}`}>
                  {heading}
                </a>
              ))}
            </nav>
          </details>
          <a
            className="privacy-download"
            href="/documents/aviso-integral-de-privacidad-assessmx.txt"
            download
          >
            <Download size={16} /> Descargar aviso original (.txt)
          </a>
        </aside>
        <div className="privacy-reading">
          <p className="eyebrow">
            <ShieldCheck size={16} /> TRANSPARENCIA Y PROTECCIÓN DE DATOS
          </p>
          <article id="aviso" className="privacy-document">
            {blocks.map((block, i) => {
              if (i === 0) return <h1 key={i}>{block}</h1>;
              if (/^\d+\. [^\n]+$/.test(block))
                return (
                  <h2 id={sectionId(block)} key={i}>
                    {block}
                  </h2>
                );
              return (
                <p key={i} className={i === 1 ? "privacy-date" : undefined}>
                  {block}
                </p>
              );
            })}
          </article>
          <div className="privacy-help">
            <Mail size={24} strokeWidth={1.4} />
            <div>
              <h3>Contacto en materia de privacidad</h3>
              <a href="mailto:contacto.assessmx@gmail.com">
                contacto.assessmx@gmail.com <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} AssessMx. Todos los derechos reservados.</p>
          <a href="/">
            Volver al inicio <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </div>
  );
}
