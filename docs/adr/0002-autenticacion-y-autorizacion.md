# ADR 0002: Autenticación y autorización con Supabase Auth y RLS

## Contexto

La spec exige registro, inicio de sesión y cierre de sesión con email y contraseña, y una experiencia pública separada de la experiencia autenticada. El backend está basado en Supabase/Postgres y la app se despliega en Vercel.

## Decisión

Usar Supabase Auth para la autenticación de usuarios con email y contraseña, y aplicar Row-Level Security (RLS) en Postgres para autorización de datos. La app debe:

- Registrar usuarios con email/contraseña en Supabase Auth.
- Autenticar sesión y usar el `user_id` de Supabase para todas las consultas.
- Proteger las rutas bajo `/app` en el frontend.
- Implementar RLS en las tablas `habits` y `check_ins` para que cada usuario solo lea y escriba sus propios datos.
- Realizar servidor-side checks adicionales para las reglas de negocio críticas: único hábito activo por nombre, evitar check-ins en hábitos archivados, y validaciones de frecuencia.

## Alternativas consideradas

### Alternativa 1: Autenticación personalizada con NextAuth y sesiones propias.

- Pros
  - Control total sobre el flujo de auth y la sesión.
  - Posible integración más directa con lógica de aplicación.
- Contras
  - Añade complejidad de implementación y mantenimiento.
  - Duplica funcionalidades ya cubiertas por Supabase Auth.
  - No aprovecha las políticas de RLS disponibles en Supabase/Postgres.

### Alternativa 2: Usar auth solo en el frontend y gestionar permisos en la aplicación sin RLS.

- Pros
  - Menos configuración de base de datos.
  - Simplicidad inicial para un prototipo rápido.
- Contras
  - Mucho más inseguro: cualquier bypass del frontend podría acceder a datos de otro usuario.
  - No cumple con la idea de aislamiento de datos y pruebas técnicas de RLS.
  - Mayor riesgo de bugs y filtración de datos.

## Consecuencias

- Positivas
  - Se garantiza aislamiento de datos y seguridad a nivel de base de datos.
  - La experiencia pública y la autenticada quedan separadas con rutas protegidas claramente definidas.
  - El uso de Supabase Auth reduce el costo de construcción de la infraestructura de auth.
- Negativas / trade-offs
  - Requiere configurar políticas RLS y escribir tests para verificarlas.
  - Puede implicar reglas extras en el backend para validaciones de negocio que no son fáciles de expresar solo con RLS.
  - Dependencia directa en la plataforma Supabase para auth y datos.
