# ADR 0003: F frontera cliente/servidor y revalidación en Next.js

## Contexto

La spec define que la app usará Next.js 15 con App Router, Server Components para lectura inicial y Server Actions para crear hábitos, archivar y marcar/desmarcar check-ins. Además, la interfaz no debe usar cache cliente con React Query o SWR y la sincronía entre dispositivos debe ser visible tras refrescar o navegar.

## Decisión

Adoptar la siguiente frontera cliente/servidor:

- Usar Server Components para todas las páginas principales (`/app`, `/app/habitos/[id]`, `/app/estadisticas`, `/app/archivados`) para carga inicial de datos.
- Usar Server Actions para mutaciones: creación de hábitos, archivado y toggle de check-ins.
- No implementar actualización optimista en el cliente; en su lugar, bloquear la acción durante la mutación y mostrar el estado correcto tras la revalidación del servidor.
- Revalidar datos del servidor tras cada mutación, apoyándonos en la invalidación de caché de rutas de App Router o en `revalidatePath` según corresponda.
- Mantener la experiencia pública bajo páginas estáticas/semis estáticas separadas de `/app`.

## Alternativas consideradas

### Alternativa 1: Usar Client Components con fetch directo y React Query/SWR.

- Pros
  - Mejor manejo de estados de carga y caché en el cliente.
  - Posible experiencia más responsiva.
- Contras
  - Contradice la restricción de la spec sobre no usar cache cliente con React Query ni SWR.
  - Complica la separación clara de frontend y server.
  - Aumenta el riesgo de datos stale sin una estrategia clara de invalidación.

### Alternativa 2: Usar fetch tradicional desde el cliente hacia API routes.

- Pros
  - Arquitectura común y explícita.
  - Control claro del ciclo de petición/respuesta.
- Contras
  - No aprovecha Server Actions ni App Router de Next.js 15.
  - Requiere escribir más endpoints y lógica de enrutamiento.
  - Puede fragmentar la lógica de negocio entre API routes y componentes.

## Consecuencias

- Positivas
  - La app se apega a la spec y aprovecha las capacidades modernas de Next.js 15.
  - Las mutaciones quedan centralizadas en Server Actions, facilitando validaciones y revalidación del servidor.
  - No se introduce caching cliente que pueda ocultar datos de sync entre dispositivos.
- Negativas / trade-offs
  - La UX puede sentirse menos instantánea sin actualizaciones optimistas.
  - Requiere controlar bien los estados de carga y errores en el servidor.
  - Algunas interacciones pueden necesitar más revalidaciones para mantener la consistencia visible inmediatamente.
