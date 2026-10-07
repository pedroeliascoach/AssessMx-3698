import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Award,
  BookOpen,
  Network,
  Users,
  MonitorCog,
  Menu,
  X,
  Check,
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "../components/contact-form";
import { ContactDetails } from "../components/contact-details";

const services = [
  {
    icon: Award,
    title: "Certificación de competencias",
    text: "Dale respaldo a lo que sabes hacer. Te orientamos en la alineación, evaluación y gestión de tu certificación en Estándares de Competencia.",
    tag: "RECONOCE TU EXPERIENCIA",
  },
  {
    icon: BookOpen,
    title: "Formación a la medida",
    text: "Diseñamos experiencias de aprendizaje que responden a tus necesidades y se traducen en capacidades para el mundo real.",
    tag: "APRENDE PARA TRANSFORMAR",
  },
  {
    icon: Network,
    title: "Desarrollo organizacional",
    text: "Fortalecemos la estructura, los procesos y la cultura de tu organización para construir un mejor desempeño, juntos.",
    tag: "EVOLUCIONA TU ORGANIZACIÓN",
  },
  {
    icon: Users,
    title: "Coaching ejecutivo y de equipos",
    text: "Acompañamos a líderes y equipos para potenciar su talento, fortalecer la colaboración y avanzar hacia sus objetivos.",
    tag: "CONECTA CON TU POTENCIAL",
  },
  {
    icon: MonitorCog,
    title: "Herramientas digitales",
    text: "Creamos soluciones que simplifican la formación, la administración y la gestión, conectando tecnología con tus necesidades.",
    tag: "SIMPLIFICA E INNOVA",
  },
];
const standards = [
  {
    code: "EC0076",
    title: "Evaluación de competencias",
    full: "Evaluación de la competencia de candidatos con base en Estándares de Competencia.",
    audience:
      "Para profesionales que buscan evaluar competencias con objetividad y apego a una metodología.",
  },
  {
    code: "EC0217.01",
    title: "Impartición de cursos presenciales",
    full: "Impartición de cursos de formación del capital humano de manera presencial grupal.",
    audience: "Para instructores, capacitadores y facilitadores de grupos.",
  },
  {
    code: "EC0301",
    title: "Diseño de cursos de formación",
    full: "Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso.",
    audience: "Para quienes diseñan experiencias de capacitación, materiales y evaluaciones.",
  },
  {
    code: "EC0366",
    title: "Desarrollo de cursos en línea",
    full: "Desarrollo de cursos de formación en línea.",
    audience:
      "Sujeto a disponibilidad y condiciones operativas. Consulta el alcance antes de iniciar un proceso.",
  },
];
const nav = [
  ["Servicios", "servicios"],
  ["Certificaciones", "certificaciones"],
  ["Nosotros", "nosotros"],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [service, setService] = useState("Quiero orientación");
  const [open, setOpen] = useState<string | null>(null);
  function choose(value: string) {
    setService(value);
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" aria-label="AssessMx — Inicio" className="brand">
            <img src="/images/logo.png" alt="ASSESSMX" />
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="button primary header-cta" href="#contacto">
            Hablemos de tu proyecto <ArrowUpRight size={17} />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu}
            aria-controls="mobile-nav"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Navegación móvil">
            {[...nav, ["Contacto", "contacto"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> PERSONAS · COMPETENCIAS · TRANSFORMACIÓN
              </p>
              <h1>
                El siguiente paso
                <br />
                de tu desarrollo
                <br />
                empieza <span>aquí.</span>
              </h1>
              <p className="hero-description">
                Desarrollamos competencias. Impulsamos tu transformación y la de tu organización con
                formación, certificación y acompañamiento a la medida.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#servicios">
                  Descubre nuestras soluciones <ArrowUpRight size={18} />
                </a>
                <a className="hero-link" href="#contacto">
                  Conversemos <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-foot">
                <div className="tiny-people">
                  <Users size={22} />
                </div>
                <p>
                  Tu experiencia es el punto de partida.
                  <br />
                  <strong>Tu mejor versión, el destino.</strong>
                </p>
              </div>
            </div>
            <div className="hero-visual">
              <div className="photo-frame">
                <img
                  className="hero-photo"
                  src="/images/team.jpg"
                  alt="Personas colaborando en una sesión de trabajo"
                />
                <div className="photo-overlay" />
                <div className="photo-caption">
                  <span className="photo-dot" /> CONSTRUIMOS CONTIGO
                </div>
                <svg className="hero-line" viewBox="0 0 480 500" fill="none" aria-hidden="true">
                  <path
                    d="M490 85C345 26 282 167 409 233S432 394 314 499"
                    stroke="white"
                    strokeOpacity=".38"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M460 49C315 0 248 143 375 218S401 379 282 484"
                    stroke="white"
                    strokeOpacity=".18"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="floating-note">
                <span className="note-icon">
                  <Sparkles size={23} />
                </span>
                <div>
                  <strong>Más que formación.</strong>
                  <span>Transformación con propósito.</span>
                </div>
              </div>
              <div className="photo-index">01 / EL POTENCIAL NOS CONECTA</div>
            </div>
          </div>
          <a className="explore" href="#servicios">
            <ArrowDown size={16} /> EXPLORA LO QUE PODEMOS HACER JUNTOS
          </a>
        </section>
        <div className="audience-band">
          <div className="container">
            <span>CRECEMOS CONTIGO</span>
            <p>Profesionales independientes</p>
            <i />
            <p>Empresas y equipos</p>
            <i />
            <p>Instituciones y organizaciones</p>
          </div>
        </div>
        <section className="services section" id="servicios">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / NUESTRAS SOLUCIONES</p>
                <h2>
                  Distintos caminos.
                  <br />
                  Un mismo propósito: <span>crecer.</span>
                </h2>
              </div>
              <p>
                Cada persona y cada organización es única.
                <br />
                Por eso, nuestras soluciones también lo son.
              </p>
            </div>
            <div className="services-grid">
              {services.map((item, i) => (
                <article className="service-card" key={item.title}>
                  <div className="card-top">
                    <item.icon size={29} strokeWidth={1.5} />
                    <span>0{i + 1}</span>
                  </div>
                  <p className="service-tag">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <button onClick={() => choose(item.title)} className="service-link">
                    Quiero saber más <ArrowUpRight size={19} />
                  </button>
                </article>
              ))}
              <article className="service-invite">
                <span className="invite-symbol">
                  <Users size={39} strokeWidth={1.2} />
                </span>
                <h3>
                  ¿Por dónde
                  <br />
                  empezamos?
                </h3>
                <p>
                  Cuéntanos qué quieres lograr.
                  <br />
                  Diseñemos juntos el camino.
                </p>
                <a className="button primary" href="#contacto">
                  Encuentra tu solución <ArrowUpRight size={18} />
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="certifications section" id="certificaciones">
          <div className="container cert-grid">
            <div className="cert-copy">
              <p className="eyebrow">02 / COMPETENCIAS QUE CUENTAN</p>
              <h2>
                Lo que sabes hacer
                <br />
                merece <span>respaldo.</span>
              </h2>
              <p>
                La certificación de competencias reconoce los conocimientos, habilidades, actitudes,
                hábitos y valores que aplicas en tu trabajo.
              </p>
              <div className="cert-path">
                <p>
                  <Check size={17} /> Orientación y diagnóstico inicial
                </p>
                <p>
                  <Check size={17} /> Alineación al estándar, cuando aplique
                </p>
                <p>
                  <Check size={17} /> Evaluación e integración de evidencias
                </p>
              </div>
              <button className="button light" onClick={() => choose(services[0].title)}>
                Explora tu ruta de certificación <ArrowUpRight size={18} />
              </button>
              <div className="accreditation-note">
                <span />{" "}
                <p>
                  <strong>Renovación de acreditación en proceso.</strong>
                  <br />
                  Los servicios de evaluación y gestión de certificación están sujetos a la
                  confirmación de vigencia y disponibilidad. La emisión se gestiona a través del
                  Organismo Certificador ICEMéxico, conforme al marco SEP–CONOCER; no es automática.
                </p>
              </div>
            </div>
            <div className="standards">
              <div className="standards-heading">
                <Award size={21} />
                <span>ESTÁNDARES DE COMPETENCIA</span>
              </div>
              {standards.map((item) => (
                <div className={`standard ${open === item.code ? "is-open" : ""}`} key={item.code}>
                  <button
                    aria-expanded={open === item.code}
                    aria-controls={`detail-${item.code}`}
                    onClick={() => setOpen(open === item.code ? null : item.code)}
                  >
                    <div>
                      <span className="standard-code">
                        {item.code}
                        {item.code === "EC0366" && <small>SUJETO A DISPONIBILIDAD</small>}
                      </span>
                      <h3>{item.title}</h3>
                    </div>
                    {open === item.code ? <Minus size={19} /> : <Plus size={19} />}
                  </button>
                  {open === item.code && (
                    <div className="standard-details" id={`detail-${item.code}`}>
                      <p>{item.full}</p>
                      <p>{item.audience}</p>
                      <button className="text-button" onClick={() => choose(services[0].title)}>
                        Solicitar orientación <ArrowUpRight size={15} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <p className="standards-foot">
                Una ruta clara, un proceso objetivo y acompañamiento humano.
              </p>
            </div>
          </div>
        </section>
        <section className="process section" id="metodologia">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 / ASÍ TE ACOMPAÑAMOS</p>
                <h2>
                  Tu objetivo. Nuestro <span>compromiso.</span>
                </h2>
              </div>
              <p>
                No creemos en soluciones genéricas.
                <br />
                Creemos en construir contigo.
              </p>
            </div>
            <div className="steps">
              {[
                ["Escuchamos", "Conocemos tu contexto, tus retos y lo que necesitas lograr."],
                ["Diseñamos", "Cocreamos una ruta pertinente, con objetivos y métodos claros."],
                ["Acompañamos", "Implementamos la solución con cercanía y rigor metodológico."],
                [
                  "Evaluamos",
                  "Revisamos los resultados y las oportunidades para seguir creciendo.",
                ],
              ].map(([title, text], i) => (
                <article key={title}>
                  <div className="step-number">
                    0{i + 1}
                    <ArrowRight size={18} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="about section" id="nosotros">
          <div className="container about-grid">
            <div className="about-heading">
              <p className="eyebrow">04 / SOMOS ASSESSMX</p>
              <h2>
                El desarrollo tiene
                <br />
                sentido cuando
                <br />
                <span>transforma.</span>
              </h2>
              <div className="about-mark" aria-hidden="true">
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                Somos una empresa dedicada al desarrollo y la transformación de personas,
                organizaciones y sus entornos.
              </p>
              <p>
                Integramos formación, certificación, consultoría, coaching y herramientas digitales
                en un modelo con enfoque humano, ético y metodológico.
              </p>
              <div className="mission">
                <h3>Nuestra misión</h3>
                <p>
                  Desarrollamos soluciones y experiencias que contribuyen a la formación y
                  transformación mediante un proceso de acompañamiento técnico, metodológico y
                  educativo.
                </p>
                <h3>Nuestra visión</h3>
                <p>
                  Ser un referente nacional por nuestras aportaciones y la aplicación de
                  metodologías innovadoras en procesos educativos exitosos.
                </p>
              </div>
              <div className="values">
                <span>Cocreación</span>
                <span>Integridad</span>
                <span>Respeto</span>
                <span>Enfoque en el cliente</span>
                <span>Objetividad e imparcialidad</span>
                <span>Diversidad</span>
              </div>
            </div>
          </div>
        </section>
        <section className="contact section" id="contacto">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">05 / HAGAMOS QUE SUCEDA</p>
              <h2>
                Las grandes
                <br />
                transformaciones
                <br />
                empiezan con una
                <br />
                <span>conversación.</span>
              </h2>
              <p>
                Cuéntanos qué necesitas. Queremos conocer tus objetivos y explorar cómo podemos
                acompañarte.
              </p>
              <ContactDetails />
              <div className="contact-mini">
                <Network size={28} strokeWidth={1.3} />
                <p>
                  Para ti. Para tu equipo.
                  <br />
                  <strong>Para lo que viene.</strong>
                </p>
              </div>
            </div>
            <ContactForm service={service} setService={setService} />
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-top">
          <div>
            <a className="brand" href="#inicio">
              <img src="/images/logo.png" alt="ASSESSMX" />
            </a>
            <p>
              Centro de Estudio, Desarrollo y Evaluación
              <br />
              de Competencias Laborales.
            </p>
          </div>
          <div className="footer-links">
            <a href="#servicios">Soluciones</a>
            <a href="#certificaciones">Certificaciones</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">
              Hablemos <ArrowUpRight size={15} />
            </a>
          </div>
          <ContactDetails compact />
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} AssessMx. Todos los derechos reservados.</p>
          <a href="/aviso-de-privacidad">Aviso integral de privacidad</a>
          <a href="#inicio">Volver al inicio ↑</a>
        </div>
      </footer>
    </div>
  );
}
