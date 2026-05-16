# Habit Tracker Spec

## Objetivo

Crear una aplicación web simple para que usuarios puedan registrar hábitos personales, marcar cumplimiento diario y revisar su progreso sin distracciones sociales, gamificación ni configuración excesiva.

## Scope

### Sí entra

- Registro, inicio de sesión y cierre de sesión con email y contraseña.
- Separación entre experiencia pública y experiencia autenticada.
- Creación, visualización y eliminación de hábitos propios.
- Hábitos con nombre, descripción opcional y categoría opcional.
- Check-in diario para marcar un hábito como cumplido hoy.
- Posibilidad de desmarcar un check-in hecho durante el día actual.
- Vista principal con hábitos activos, estado del día y racha.
- Filtro básico por categoría o estado.
- Calendario visual mensual para revisar cumplimiento por día.
- Uso de Next.js 15, App Router, Supabase, TypeScript estricto y Tailwind.

### No entra

- Hábitos semanales en la primera versión.
- Edición de check-ins de días pasados o futuros.
- Categorías complejas o etiquetas avanzadas.
- Funciones sociales, hábitos compartidos o perfiles públicos.
- Gamificación, logros, recompensas o mensajes motivacionales.
- Notificaciones o recordatorios.
- Exportación de datos.
- Funcionamiento offline.
- Pagos, equipos, roles administrativos o planes comerciales.

## Criterios de aceptación

1. Dado un usuario nuevo, cuando se registra con email y contraseña válidos, entonces puede acceder a su cuenta.
2. Dado un usuario registrado, cuando inicia sesión con credenciales válidas, entonces entra a su dashboard.
3. Dado un usuario autenticado, cuando cierra sesión, entonces vuelve a la experiencia pública.
4. Dado un usuario autenticado, cuando crea un hábito con nombre válido, entonces aparece en su lista.
5. Dado un formulario incompleto, cuando el usuario intenta crear un hábito, entonces se muestra un error.
6. Dado un hábito existente, cuando el usuario lo elimina, entonces deja de aparecer en la lista principal.
7. Dado un hábito activo, cuando el usuario lo marca como cumplido hoy, entonces se registra el check-in.
8. Dado un hábito marcado hoy, cuando el usuario lo desmarca hoy, entonces se elimina ese check-in.
9. Dado un hábito con cumplimiento consecutivo, cuando se registra un nuevo día cumplido, entonces la racha aumenta.
10. Dado un usuario con hábitos, cuando entra al dashboard, entonces ve estado actual, racha y progreso reciente.
11. Dado un usuario con historial, cuando abre el calendario, entonces ve los días con hábitos cumplidos.
12. Dado un usuario sin hábitos, cuando entra al dashboard, entonces ve un estado vacío con opción de crear uno.

## No-goals

- No construir una plataforma completa de productividad.
- No optimizar para grandes volúmenes de datos.
- No crear un sistema de diseño visual premium.
- No cubrir todos los tamaños de pantalla de forma perfecta.
- No implementar estadísticas avanzadas.
- No incluir integraciones externas.
