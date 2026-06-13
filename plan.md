# plan.md — Plan inicial (10 tareas)

1. Inicializar proyecto Next.js mínimo
- Descripción: Crear app Next.js con estructura básica y configuración de TypeScript.
- Criterio de verificación: `npm run build` compila sin errores y la página `/` muestra "Hello World".
- ADR: 0001 (decisión de stack)
- Dependencias: 0

2. Configurar cliente de Supabase (env y cliente)
- Descripción: Añadir variables de entorno, instalar `@supabase/supabase-js` y configurar cliente en `lib/supabase.ts`.
- Criterio de verificación: `lib/supabase.ts` exporta `supabase` y un ejemplo de conexión se ejecuta sin error en dev.
- ADR: 0002
- Depende de: 1

3. Definir modelo de datos inicial para hábitos
- Descripción: Crear esquema para `habits` y `habit_entries` en `prisma/schema.prisma` o migración SQL.
- Criterio de verificación: migración aplicada localmente y tablas creadas (`habits`, `habit_entries`).
- ADR: 0001, 0003
- Prueba manual: PR-001
- Depende de: 2

4. Implementar autenticación básica (email/password)
- Descripción: Integrar flujo de registro/login con Supabase Auth.
- Criterio de verificación: Usuario puede registrarse y acceder; sesión persiste entre recargas.
- ADR: 0002
- Prueba manual: PR-002
- Depende de: 2

5. Crear primer CRUD: Crear y listar hábitos
- Descripción: Endpoints y UI para crear un hábito y listar los existentes del usuario.
- Criterio de verificación: UI muestra hábito recién creado en la lista tras creación.
- Pruebas: PR-003
- Depende de: 3,4

6. Registrar entrada de hábito (habit entry)
- Descripción: Endpoint y UI para registrar una instancia del hábito (fecha, metadata).
- Criterio de verificación: Al registrar, la entrada aparece en historial y se asocia al hábito.
- Pruebas: PR-004
- Depende de: 3,5

7. Página de resumen/estadísticas básica
- Descripción: Mostrar resumen diario/semanal de hábitos completados.
- Criterio de verificación: Panel muestra contadores correctos tras registrar entradas.
- Pruebas: PR-005
- Depende de: 5,6

8. Añadir validaciones y tipos estrictos (TypeScript)
- Descripción: Asegurar validaciones en fronteras y tipos en server/client.
- Criterio de verificación: `tsc --noEmit` pasa sin errores.
- Depende de: 1,3

9. Tests end-to-end básicos (smoke) para flujo principal
- Descripción: Añadir 1-2 e2e tests que cubran registro → crear hábito → registrar entrada.
- Criterio de verificación: E2E local pasa (ej. Playwright/local runner).
- Depende de: 4,5,6

10. Documentar en README instrucciones para correr localmente
- Descripción: Incluir pasos de setup, variables de entorno y comando para migraciones.
- Criterio de verificación: Seguir README reproduce entorno local en una máquina limpia.
- Depende de: 1,2
