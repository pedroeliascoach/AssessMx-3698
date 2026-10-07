# AssessMx — Diseño aprobado

Sitio institucional web en español. Profesional, humano y editorial; desarrolla confianza sin inventar resultados. Identidad basada en el logo compartido.

## Dirección definitiva
Azul petróleo #244657, azul #1c7ca0, dorado #917f3b; fondo marfil #fafaf6, tinta #213e4a, gris #68777b. Títulos Manrope 600–800 y texto Poppins 400–500, fuentes locales. Secciones de 100px, ancho máximo 1240px. Hero asimétrico con texto a la izquierda y foto editorial de colaboración a la derecha; esquinas de imagen redondeadas y sello flotante dorado. No atribuir la foto al equipo de la empresa. Servicios en cuadrícula de tres columnas con líneas finas, iconos sobrios y acento azul; certificaciones sobre azul petróleo con acordeón. Metodología numerada, nosotros con valores, contacto a dos columnas.

## Experiencia
Menú fijo con enlaces ancla, menú móvil accesible; botones con flecha. Seleccionar servicio rellena el formulario. Guardado mediante oRPC y Drizzle en solicitudes, estado pendiente, error y confirmación real. Sin panel ni notificaciones por correo. No mostrar contacto no proporcionado. Acreditación en renovación, EC0366 condicionado. Aviso transparente del tratamiento del formulario. Mobile apila todas las columnas. Movimiento de entrada breve y respetar reduced-motion.

## Archivos
pages/home.tsx, components/contact-form.tsx, queries/requests.ts, api/routes/requests.ts, api/database/schema.ts, styles.css. index.tsx compone Home. Recursos públicos únicamente en public/images y public/fonts.

## Aviso integral de privacidad
Página pública `/aviso-de-privacidad` con texto íntegro proporcionado por el propietario, sin cambios legales ni fechas inventadas. Diseño editorial: cabecera de marca, índice ancla de 17 apartados, columna de lectura y descarga del original TXT. En móvil el índice es desplegable. Enlazar desde formulario, resumen modal y pie. Consentimiento solo para atender solicitud; no añadir marketing ni cookies nuevas. No afirmar validación jurídica o implementación de todos los procesos descritos.

## Brand & Colors

One token set, consumed per platform:

- **Web & desktop**: CSS variables in `packages/web/src/web/styles.css` (desktop loads the web UI).
- **Mobile**: `Colors.light` / `Colors.dark` in `packages/mobile/constants/theme.ts`, read via `useColors()`; `userInterfaceStyle: "automatic"` follows the system light/dark setting.

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| primary | #1F1F1F | #E5E5E5 | Buttons, active tab, accents |
| background | #FFFFFF | #0A0A0A | Page/screen background |
| card | #FFFFFF | #1A1A1A | Cards, surfaces |
| foreground | #171717 | #FAFAFA | Primary text |
| mutedForeground | #737373 | #A3A3A3 | Secondary text |
| border | #E5E5E5 | #262626 | Hairlines |
| destructive | #DC2626 | #EF4444 | Delete / errors |

## Typography

Name the display + body pairing here. Web: set font families in `styles.css` (self-hosted files go in `packages/web/public/fonts/`). Mobile: system font by default; load custom fonts with `useFonts` from `expo-font` and reference them via `Fonts` in `constants/theme.ts`.

## Pages & Screens

List each page/screen, its route file, and what it shows. Example:

- **Web — Home** (`packages/web/src/web/pages/index.tsx`) — what the user sees first.
- **Mobile — Home** (`packages/mobile/app/(tabs)/index.tsx`) — main tab.
- Add web pages under `src/web/pages/` (+ route in `app.tsx`); mobile tabs under `app/(tabs)/`, stack/modal screens under `app/`.

## Key User Flows

1. Describe the primary flow end to end (open → action → result).
2. ...

## Architecture

- **API**: typed oRPC client (`lib/api.ts` in each package) → the backend in `@template/web`. Query/mutation hooks live in `queries/` (one file per feature); pages/screens call them with `@tanstack/react-query`.
- **State/sync**: TanStack Query with optimistic updates for instant-feel interactions.
- **Auth / payments / uploads**: see `skills/app/references/` when those features are needed.
