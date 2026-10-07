import { useState, useRef, useEffect, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle, ShieldCheck, X } from "lucide-react";
import { useCreateRequest } from "../queries/requests";

export const serviceNames = [
  "Certificación de competencias",
  "Formación a la medida",
  "Desarrollo organizacional",
  "Coaching ejecutivo y de equipos",
  "Herramientas digitales",
  "Quiero orientación",
] as const;

export function ContactForm({
  service,
  setService,
}: {
  service: string;
  setService: (value: string) => void;
}) {
  const request = useCreateRequest();
  const [privacy, setPrivacy] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (privacy) dialog.current?.showModal();
  }, [privacy]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    request.mutate({
      name: String(form.get("name")),
      email: String(form.get("email")),
      organization: String(form.get("organization")),
      service: service as (typeof serviceNames)[number],
      message: String(form.get("message")),
      consent: true,
      website: String(form.get("website")),
    });
  }
  return (
    <>
      {request.isSuccess ? (
        <output className="success-box">
          <CheckCircle2 size={42} />
          <h3>Tu solicitud está registrada.</h3>
          <p>
            Gracias por compartir lo que necesitas. Guardamos tu información con el folio{" "}
            <strong>{request.data.reference}</strong>.
          </p>
          <p className="small">No se ha enviado un correo de confirmación.</p>
          <button className="button primary" onClick={() => request.reset()}>
            Enviar otra solicitud <ArrowUpRight size={18} />
          </button>
        </output>
      ) : (
        <form onSubmit={submit} className="contact-form">
          <div className="form-row">
            <label>
              Nombre completo <span>*</span>
              <input
                aria-label="Nombre completo"
                name="name"
                autoComplete="name"
                placeholder="¿Cómo te llamas?"
                minLength={2}
                maxLength={120}
                required
              />
            </label>
            <label>
              Correo electrónico <span>*</span>
              <input
                aria-label="Correo electrónico"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="tu@correo.com"
                maxLength={254}
                required
              />
            </label>
          </div>
          <label>
            Empresa u organización <span className="optional">(opcional)</span>
            <input
              aria-label="Empresa u organización"
              name="organization"
              autoComplete="organization"
              placeholder="Nombre de tu organización"
              maxLength={160}
            />
          </label>
          <label>
            ¿En qué podemos ayudarte? <span>*</span>
            <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
              {serviceNames.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </label>
          <label>
            Cuéntanos sobre tu proyecto <span>*</span>
            <textarea
              aria-label="Cuéntanos sobre tu proyecto"
              name="message"
              placeholder="Tus objetivos, retos o la competencia que te gustaría desarrollar…"
              rows={4}
              minLength={10}
              maxLength={3000}
              required
            />
          </label>
          <div className="honeypot" aria-hidden="true">
            <label>
              Sitio web
              <input aria-label="Sitio web" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <label className="consent">
            <input
              aria-label="Autorizo el uso de mis datos para atender esta solicitud"
              name="consent"
              type="checkbox"
              required
            />
            <span>
              Autorizo el uso de mis datos para atender esta solicitud.{" "}
              <button type="button" className="text-button" onClick={() => setPrivacy(true)}>
                Ver resumen de privacidad.
              </button>{" "}
              <a
                className="text-button"
                href="/aviso-de-privacidad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer aviso integral.
              </a>
            </span>
          </label>
          {request.isError && (
            <p className="form-error" role="alert">
              No pudimos guardar tu solicitud. Revisa tus datos e inténtalo nuevamente.
            </p>
          )}
          <button
            type="submit"
            className="button primary submit-button"
            disabled={request.isPending}
          >
            {request.isPending ? (
              <>
                Guardando solicitud <LoaderCircle className="spin" size={18} />
              </>
            ) : (
              <>
                Enviar solicitud <ArrowUpRight size={19} />
              </>
            )}
          </button>
          <p className="form-note">
            <ShieldCheck size={14} /> Tus datos se utilizan únicamente para atender tu solicitud.
          </p>
        </form>
      )}
      {privacy && (
        <div>
          <dialog
            ref={dialog}
            onCancel={() => setPrivacy(false)}
            aria-modal="true"
            aria-labelledby="privacy-title"
            className="privacy-modal"
          >
            <button
              autoFocus
              aria-label="Cerrar información de privacidad"
              className="modal-close"
              onClick={() => setPrivacy(false)}
            >
              <X />
            </button>
            <p className="eyebrow">TRANSPARENCIA</p>
            <h3 id="privacy-title">Datos de tu solicitud</h3>
            <p>
              AssessMx, Centro de Estudio, Desarrollo y Evaluación de Competencias Laborales, S.A.S.
              de C.V., recibe el nombre, correo, organización (si la proporcionas), servicio de
              interés y mensaje para atender tu solicitud.
            </p>
            <p>
              La información se guarda en la base de datos del sitio. No se utiliza para publicidad
              ni se envía automáticamente a un servicio de correo. No incluyas datos sensibles en tu
              mensaje.
            </p>
            <p className="small">
              El responsable tiene su domicilio en Privada Luis Elizondo 639 interior 6, Colonia
              Roma Privada, Monterrey, Nuevo León, México, C.P. 64740. Para ejercer tus derechos
              ARCO, revocar tu consentimiento o limitar el uso de tus datos, escribe a{" "}
              <a className="text-button" href="mailto:contacto.assessmx@gmail.com">
                contacto.assessmx@gmail.com
              </a>
              .
            </p>
            <p>
              <a
                className="text-button"
                href="/aviso-de-privacidad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar el Aviso Integral de Privacidad completo
              </a>
            </p>
            <button className="button primary" onClick={() => setPrivacy(false)}>
              Entendido
            </button>
          </dialog>
        </div>
      )}
    </>
  );
}
