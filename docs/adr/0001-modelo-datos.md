# ADR 0001: Modelo de datos para hábitos y check-ins

## Contexto

El proyecto Habit Tracker necesita almacenar hábitos de usuarios, su frecuencia y el historial de cumplimiento diario o semanal. La spec define que cada usuario tiene hábitos propios, check-ins solo sobre el día actual y que los hábitos archivados conservan historial pero no permiten nuevos check-ins.

## Decisión

Usar un modelo relacional en Postgres con tablas normalizadas para `users`, `habits` y `check_ins`, con las siguientes reglas:

- `habits` contiene `id`, `user_id`, `name`, `description`, `frequency_type`, `weekly_target`, `category`, `created_at`, `archived_at` y `archived_reason` opcional.
- `check_ins` contiene `id`, `habit_id`, `user_id`, `check_in_date` (tipo DATE), `status` y `created_at`.
- Forzar unicidad de hábito activo por usuario y nombre con un índice parcial que solo incluya hábitos no archivados.
- Forzar unicidad de check-in por `user_id`, `habit_id` y `check_in_date`.
- Usar `user_id` en `habits` y `check_ins` para facilitar RLS y evitar cruces entre usuarios.
- Representar archivado con `archived_at`; un hábito archivado queda fuera de los activos y bloquea nuevos check-ins.

## Alternativas consideradas

### Alternativa 1: Modelo completamente embebido en un solo documento JSON para hábitos y check-ins.

- Pros
  - Menos tablas y joins.
  - Más flexible para cambios rápidos de esquema.
- Contras
  - Dificulta consultas por día y por usuario en SQL.
  - Complica constraints de unicidad y políticas de RLS.
  - No es consistente con la estructura relacional esperada en Supabase/Postgres.

### Alternativa 2: Tabla de `habits` con check-ins parcelados en un campo JSONB.

- Pros
  - Menos filas de check-ins, lectura de historial más compacta.
- Contras
  - Difícil de validar `check_in_date` único y de calcular rachas/estadísticas SQL.
  - Más carga de lógica en la aplicación.
  - Contradicción con el requisito de migraciones SQL versionadas y constraints explícitas.

## Consecuencias

- Positivas
  - Las reglas de negocio quedan expresadas en la base de datos con constraints y relaciones claras.
  - Soporta fácilmente consultas de último 14 días, calendario y rachas.
  - Facilita RLS y previene accesos cruzados entre usuarios.
- Negativas / trade-offs
  - Requiere diseño de migraciones y cuidados de performance en joins si hay mucho historial.
  - La normalización agrega complejidad inicial frente a un prototipo más simple.
  - El bloqueo de nuevos check-ins sobre hábitos archivados debe implementarse en la capa de aplicación y en RLS para evitar inconsistencias.
