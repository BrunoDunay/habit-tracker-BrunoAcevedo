# Sistema visual y estructura UI — Habit Tracker

## 1. Paleta de colores funcional

- **Primario**: `#2563eb` — azul claro y confiable para acciones principales, botones primarios y enlaces activos.
- **Fondo**: `#f8fafc` — gris muy claro para la base de la interfaz y secciones de contenido ligeras.
- **Texto principal**: `#111827` — gris antracita para máxima legibilidad en títulos y texto clave.
- **Éxito**: `#16a34a` — verde para estados cumplidos, indicadores positivos, rachas y resultados correctos.
- **Error**: `#dc2626` — rojo para mensajes de error, validación inválida y estados de acción fallida.

> Los tonos neutros adicionales se derivan de blanco `#ffffff` para superficies y `#6b7280` para texto secundario y descripciones.

## 2. Stack tipográfico

- Fuente principal: **Inter** (Google Font) con fallback sistema.
- Stack: `font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;`
- Uso:
  - Titulares y bloques clave: `font-semibold` o `font-bold`.
  - Texto de cuerpo y formularios: `font-normal`.

## 3. Escala de espaciado basada en Tailwind

- `0` → `0px`
- `1` → `0.25rem`
- `2` → `0.5rem`
- `3` → `0.75rem`
- `4` → `1rem`
- `5` → `1.25rem`
- `6` → `1.5rem`
- `8` → `2rem`
- `10` → `2.5rem`

Uso recomendado:
- `p-4`, `px-4`, `py-4` para contenedores principales.
- `gap-4` o `space-y-4` para separación entre bloques.
- `p-6` para tarjetas importantes y paneles de datos.
- `rounded-2xl` o `rounded-xl` para superficies suaves y contemporáneas.

## 4. Inventario de componentes UI necesarios

- Layout general y app shell con navegación principal.
- Header público con CTA de login/signup.
- Formularios de autenticación: login, signup, campos e inputs.
- Tarjeta de resumen de hábitos activos y estado de hoy.
- Lista de hábitos activos con elementos de hábito.
- Item de hábito con título, frecuencia, estado y botón/checkbox de check-in.
- Formulario de creación/edición de hábito.
- Página de detalle de hábito con información, historial y acciones.
- Vista de calendario mensual para revisar cumplimiento.
- Sección de estadísticas simples: rachas, cumplimiento y resumen de últimos 14 días.
- Lista de hábitos archivados y estado de archivado.
- Componentes de estado vacío para dashboards sin hábitos activos.
- Alertas/avisos de error y confirmación.
- Badges/pills para frecuencia y estado.
- Botones primarios y secundarios.

## 5. Páginas necesarias

- `/` — landing pública con información breve y CTA para iniciar sesión o registrarse.
- `/login` — página de inicio de sesión.
- `/signup` — página de registro.
- `/app` — dashboard principal con hábitos activos, estado de hoy y resumen rápido.
- `/app/habitos/[id]` — detalle de hábito con historial, check-in y acciones.
- `/app/estadisticas` — estadísticas de cumplimiento y rachas.
- `/app/archivados` — lista de hábitos archivados.

## 6. Directrices de estilo

- Aplica una estética limpia y funcional, priorizando legibilidad y jerarquía clara.
- Usa Tailwind utilities para layout y espaciado, evitando componentes pesados.
- Prioriza una experiencia mobile-first, pero con diseño sencillo y bien estructurado en escritorio.
- Mantén los estados de acción claros: success verde, error rojo, acción primaria azul.
