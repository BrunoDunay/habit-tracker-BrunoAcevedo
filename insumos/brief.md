# Brief: Habit Tracker

## 1. El problema

Muchas personas quieren sostener hábitos diarios, pero pierden continuidad porque no tienen una forma simple de registrar qué hicieron, ver su progreso y detectar cuándo una rutina empieza a romperse. Las opciones comunes suelen ser demasiado manuales, como notas u hojas de cálculo, o demasiado cargadas, con gamificación, funciones sociales y configuraciones que distraen del seguimiento básico.

Este proyecto propone una app web acotada para llevar control de hábitos personales con una experiencia clara: crear hábitos, marcar cumplimiento y revisar progreso. El objetivo no es competir con una plataforma completa de productividad, sino construir una herramienta útil y mantenible dentro de un alcance de 2-3 semanas.

## 2. Núcleo obligatorio

1. Cuenta personal y acceso
   El usuario puede registrarse, iniciar sesión y cerrar sesión para mantener sus hábitos asociados a su cuenta.
   La app debe separar claramente la experiencia pública de la experiencia autenticada.
   Decisiones abiertas: ¿el registro requiere confirmación por email o se permite acceso inmediato?

2. Gestión de hábitos
   El usuario puede crear, consultar y eliminar hábitos propios desde una vista principal.
   Cada hábito debe tener información suficiente para reconocer qué se quiere practicar y con qué intención.
   Decisiones abiertas: ¿qué datos mínimos debe pedir el formulario sin volver pesada la creación?

3. Registro de cumplimiento
   El usuario puede marcar un hábito como cumplido en el periodo correspondiente y ver el estado actualizado.
   La experiencia debe permitir corregir una acción reciente sin convertir el historial completo en editable.
   Decisiones abiertas: ¿el producto manejará solo hábitos diarios o también hábitos semanales desde el inicio?

4. Seguimiento de progreso
   El usuario puede revisar una síntesis simple de continuidad, cumplimiento reciente y hábitos activos.
   La vista debe ayudar a entender avance y abandono sin exigir estadísticas avanzadas.
   Decisiones abiertas: ¿la métrica principal será racha, porcentaje de cumplimiento, calendario o una combinación?

5. Organización básica
   El usuario puede ordenar o filtrar hábitos para no perder claridad cuando tenga varios objetivos activos.
   La organización debe ser mínima y fácil de mantener en una primera versión.
   Decisiones abiertas: ¿se usarán categorías predefinidas, etiquetas libres o solo estados simples?

## 3. Extensiones (elegir máximo 1)

| Extensión | Descripción |
| --- | --- |
| Calendario visual | Vista mensual para revisar cumplimiento y omisiones por día. |
| Estadísticas simples | Resumen semanal o mensual con porcentajes básicos de cumplimiento. |
| Notas de check-in | Campo opcional para registrar contexto o reflexión al marcar un hábito. |
| Plantillas iniciales | Hábitos sugeridos que el usuario puede copiar para arrancar más rápido. |
| Exportación CSV | Descarga del historial para respaldo o análisis fuera de la app. |
| Modo enfoque | Vista reducida que muestra solo los hábitos pendientes del día. |

## 4. Restricciones técnicas

- Proyecto web con Next.js 15 y App Router.
- Supabase para Postgres y Auth.
- Deploy en Vercel.
- TypeScript estricto.
- Tailwind para estilos.
- Construido por un developer con experiencia básica dirigiendo agentes de IA.
- Alcance acotado a 2-3 semanas de trabajo enfocado.

## 5. Lo que NO se evalúa

- Diseño visual premium o sistema de diseño completo.
- Performance avanzada para grandes volúmenes de hábitos o historial.
- Cobertura exhaustiva de tests automatizados.
- Responsive perfecto en todos los dispositivos y tamaños de pantalla.
- Funciones comerciales como pagos, equipos, roles administrativos o planes.