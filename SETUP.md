# SETUP.md — Preparación para tarea 1 (readiness)

1. Crear proyecto Supabase (dev):
   - Ir a https://app.supabase.com y crear un proyecto nuevo.
   - Copiar `URL` y `anon key` desde Settings → API.
   - Pegar en `.env` como `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
2. (Opcional) Crear proyecto Supabase prod y copiar `SERVICE_ROLE_KEY`:
   - Desde Settings → API obtener `service_role` key y guardarla en entorno de producción (`SUPABASE_SERVICE_ROLE_KEY`).
3. (Si aplica) Configurar provider externo para la extensión:
   - Crear cuenta en el servicio externo y obtener API key.
   - Añadir variable `API_KEY_THIRD_SERVICE` en `.env` local y en secretos del entorno de despliegue.
4. Instalar dependencias (local):
   - `npm install` o `pnpm install` según el proyecto.
5. Ejecutar migraciones (si usa Prisma u otro):
   - Configurar `DATABASE_URL` y ejecutar `npx prisma migrate dev --name init` (si aplica).
6. Verificar:
   - Ejecutar `npm run dev` y abrir http://localhost:3000
   - Confirmar que la app arranca sin errores y que la conexión a Supabase no falla.

## Checklist — la tarea 1 podría ejecutarse
- [ ] Crear proyecto Supabase dev y obtener `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- [ ] (Opcional) Obtener `SUPABASE_SERVICE_ROLE_KEY` para entorno server.
- [ ] Completar `.env` local con variables necesarias.
- [ ] Ejecutar `npm install`.
- [ ] (Si aplica) Configurar `DATABASE_URL` y ejecutar migraciones.
- [ ] `npm run dev` arranca y la página `/` responde.
