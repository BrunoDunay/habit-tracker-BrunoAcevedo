# Habit Tracker Spec

## Objetivo

Construir una aplicación web para que usuarios autenticados registren actividades diarias o semanales como hábitos, marquen cumplimiento, vean qué hicieron y qué falta durante el día, y revisen progreso simple mediante racha, últimos 14 días, calendario y estadísticas básicas.

## Scope

### Sí entra

- App web con Next.js 15, App Router, TypeScript estricto, Tailwind, Supabase Auth/Postgres y deploy en Vercel.
- Registro, inicio de sesión y cierre de sesión con email y contraseña.
- Experiencia pública separada de experiencia autenticada bajo `/app`.
- Gestión de hábitos propios: crear, ver detalle y archivar.
- Hábito con nombre, descripción opcional, frecuencia diaria o semanal, categoría opcional y fecha de archivado opcional.
- Frecuencia semanal como meta de N check-ins por semana calendario.
- Check-ins como fila única por usuario, hábito y fecha local del usuario.
- Check-in solo sobre el día actual; se puede marcar y desmarcar durante ese mismo día.
- Hábito archivado desaparece de activos, conserva historial y no permite nuevos check-ins.
- Dashboard con hábitos activos, estado de hoy, pendientes del día, racha actual y progreso reciente.
- Vista de últimos 14 días: hoy más 13 días anteriores; días previos a la creación aparecen como no aplicables.
- Calendario visual mensual para revisar cumplimiento y omisiones por día.
- Estadísticas simples calculadas por período activo, incluyendo hábitos archivados solo durante su período activo.
- Racha actual y mejor racha calculadas desde check-ins, no persistidas.
- Sincronía entre dispositivos visible después de refrescar o navegar.
- Rutas: `/`, `/login`, `/signup`, `/app`, `/app/habitos/[id]`, `/app/estadisticas`, `/app/archivados`.
- Server Components para lectura inicial y Server Actions para crear hábitos, archivar y marcar/desmarcar check-ins.
- Revalidación del servidor después de mutaciones, sin actualización optimista local.
- Migraciones SQL versionadas en repo y proyectos Supabase separados para dev/prod.

### No entra

- Edición de check-ins de días pasados o futuros.
- Check-ins nuevos sobre hábitos archivados.
- Borrado físico de hábitos desde la UI.
- Categorías complejas, etiquetas avanzadas o taxonomías administrables.
- Realtime automático entre dispositivos.
- API pública externa.
- Cache cliente con React Query o SWR.
- Estadísticas avanzadas fuera del resumen simple, últimos 14 días y calendario.

## Criterios de aceptación

1. Dado un visitante sin sesión, cuando entra a `/`, entonces ve la experiencia pública con opciones para iniciar sesión o registrarse.
2. Dado un usuario nuevo, cuando se registra con email y contraseña válidos, entonces accede a `/app`.
3. Dado un usuario registrado, cuando inicia sesión con credenciales válidas, entonces accede a `/app`.
4. Dado credenciales inválidas, cuando intenta iniciar sesión, entonces ve un mensaje de error genérico y permanece en login.
5. Dado un usuario autenticado, cuando cierra sesión, entonces vuelve a la experiencia pública.
6. Dado un usuario autenticado, cuando crea un hábito con nombre válido, frecuencia válida y datos opcionales permitidos, entonces aparece en su dashboard.
7. Dado un hábito sin check-ins, cuando aparece en el dashboard, entonces muestra racha 0.
8. Dado nombre vacío, nombre mayor a 80 caracteres, descripción mayor a 240 caracteres o más de 50 hábitos activos, cuando intenta crear un hábito, entonces ve un error y no se crea.
9. Dado un hábito diario activo pendiente hoy, cuando el usuario lo marca como cumplido, entonces el estado de hoy cambia a cumplido después de confirmación del servidor.
10. Dado un hábito marcado hoy, cuando el usuario lo desmarca hoy, entonces el estado vuelve a pendiente después de confirmación del servidor.
11. Dado un hábito semanal con meta N, cuando registra N check-ins dentro de la semana calendario, entonces aparece cumplido para esa semana.
12. Dado un hábito semanal con menos de N check-ins en la semana calendario, entonces aparece pendiente para esa semana.
13. Dado un hábito activo con días consecutivos cumplidos, cuando se consulta el dashboard, entonces la racha calculada refleja la continuidad correspondiente.
14. Dado un día previo a la creación del hábito, cuando aparece en últimos 14 días, entonces se muestra como no aplicable.
15. Dado un usuario con hábitos activos, cuando entra a `/app`, entonces ve cuáles están cumplidos hoy y cuáles faltan.
16. Dado un usuario sin hábitos activos, cuando entra a `/app`, entonces ve un estado vacío con opción de crear hábito.
17. Dado un hábito activo, cuando el usuario lo archiva, entonces desaparece de activos, aparece en `/app/archivados` y conserva su historial.
18. Dado un hábito archivado, cuando el usuario intenta consultarlo, entonces puede ver historial pero no puede registrar nuevos check-ins.
19. Dado historial existente, cuando abre `/app/estadisticas`, entonces ve cumplimiento calculado por período activo.
20. Dado un cambio hecho en otro dispositivo, cuando el usuario refresca o navega, entonces ve el cambio actualizado.
21. Dado un fallo de red, sesión expirada o fallo de toggle, cuando intenta una acción, entonces la UI bloquea la acción afectada, muestra mensaje visible y permite reintentar o volver a iniciar sesión según corresponda.

## Pruebas técnicas fuera de QA manual

- Verificar que las tablas propias relacionan usuarios de Supabase Auth con hábitos y check-ins mediante `user_id`.
- Verificar RLS para impedir lectura o escritura cruzada entre usuarios.
- Verificar constraint de nombre único por usuario entre hábitos activos.
- Verificar constraint de check-in único por usuario, hábito y fecha local.
- Verificar que `archived_at` bloquea nuevos check-ins desde servidor.
- Verificar que las migraciones SQL versionadas crean tablas, índices, constraints y policies requeridas.
- Verificar variables de entorno: `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## No-goals

- No construir mobile nativo para iOS o Android.
- No construir PWA, instalación offline, service worker ni app manifest avanzado.
- No implementar funcionamiento offline ni sincronización automática posterior.
- No implementar monetización, pagos, planes, pricing, trials, equipos ni roles administrativos.
- No implementar gamificación: badges, niveles, retos, recompensas o logros.
- No implementar notificaciones, recordatorios, emails programados ni push notifications.
- No implementar compartir social, amigos, perfiles públicos, hábitos compartidos ni colaboración.
- No implementar onboarding extenso, wizard largo, tours ni tutoriales multipaso.
- No implementar animaciones de celebración, confetti ni recompensas visuales.
- No implementar identidad de marca premium, sistema visual completo ni diseño comercial pulido.
- No optimizar para grandes volúmenes de hábitos o historial.
- No buscar responsive perfecto en todos los tamaños de pantalla.
- No incluir integraciones externas fuera de Supabase y Vercel.

## Decisiones tomadas en entrevista

- Frecuencia semanal significa N check-ins por semana calendario.
- Check-ins se modelan como fila por día, única por usuario, hábito y fecha local.
- Archivado se representa con `archived_at`.
- Hábitos archivados conservan historial y bloquean nuevos check-ins.
- Nombre de hábito es único por usuario entre hábitos activos.
- Rachas se calculan desde check-ins y no se persisten.
- Fechas de check-in se guardan como `DATE` local del usuario.
- Sincronía entre dispositivos se valida después de refrescar o navegar.
- Hábito recién creado muestra racha 0.
- Últimos 14 días incluye hoy y 13 días previos.
- Estadísticas usan período activo e incluyen archivados solo durante ese período.
- Aislamiento de datos, RLS y constraints se validan como pruebas técnicas.
- Auth QA cubre flujos básicos con errores genéricos.
- Rendering usa Server Components y Server Actions.
- Estado se actualiza por revalidación del servidor, sin optimismo local.
- Errores bloquean la acción afectada, muestran mensaje visible y permiten reintento.
- Validación compacta: nombre 1-80 caracteres, descripción hasta 240, máximo 50 hábitos activos.
- Inicialización con `create-next-app` usando TypeScript, App Router, Tailwind y ESLint.
- Supabase usa dev/prod separados y migraciones versionadas en repo.
- Mobile nativo, PWA, monetización, gamificación, notificaciones, social, onboarding extenso, celebraciones e identidad premium quedan como no-goals explícitos.
