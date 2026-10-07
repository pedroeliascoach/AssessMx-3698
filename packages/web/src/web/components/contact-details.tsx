import { Mail, MapPin, Phone } from "lucide-react";

export function ContactDetails({ compact = false }: { compact?: boolean }) {
  return (
    <address className={`contact-details${compact ? " compact" : ""}`}>
      <a href="mailto:contacto.assessmx@gmail.com">
        <Mail size={compact ? 15 : 19} strokeWidth={1.5} aria-hidden="true" />
        <span>{!compact && <small>CORREO ELECTRÓNICO</small>}contacto.assessmx@gmail.com</span>
      </a>
      <a href="tel:+528130977611">
        <Phone size={compact ? 15 : 19} strokeWidth={1.5} aria-hidden="true" />
        <span>{!compact && <small>TELÉFONO</small>}81 3097 7611</span>
      </a>
      <p>
        <MapPin size={compact ? 15 : 19} strokeWidth={1.5} aria-hidden="true" />
        <span>{!compact && <small>CIUDAD</small>}Monterrey, N.L., México</span>
      </p>
    </address>
  );
}
