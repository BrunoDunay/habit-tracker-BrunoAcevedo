# AGENTS.md — Contrato del Proyecto Habit Tracker

## Stack
- **Frontend**: Next.js 15 con App Router
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Despliegue**: Vercel
- **Lenguaje**: TypeScript en modo estricto
- **Estilos**: Tailwind CSS

## Convenciones TypeScript
- Modo estricto obligatorio (`tsconfig.json`)
- Prohibido `any` sin justificación documentada en comentario
- Tipado explícito: funciones, parámetros y retornos
- Interfaces para contratos de datos; tipos para uniones y primitivos

## Estructura de Carpetas
- `/src/app` — App Router pages y layouts
- `/src/components` — Componentes React reutilizables
- `/src/lib` — Utilidades, configuración Supabase
- `/src/types` — Definiciones TypeScript globales
- `/src/styles` — Configuración Tailwind y estilos globales
- `/public` — Activos estáticos

## Política de Commits
- Commits atómicos: una unidad funcional por commit
- Formato: `tipo(alcance): descripción` (ej: `feat(auth): login Supabase`)
- Verificables: sin romper compilación ni tests
- Prohibidos commits "implement everything"

## Flujo Git — Gitflow
- `main` — rama estable, siempre deployable
- `develop` — rama de integración, fuente de verdad
- Ramas tipadas: `feat/`, `fix/`, `docs/`, `chore/` desde `develop`
- Merge a `develop` vía PR; `main` solo desde `develop` para releases

## CONTEXT.md
- Todo cambio manual de código no generado por agente se documenta en CONTEXT.md
- Justificación obligatoria en cada entrada
- Mantiene trazabilidad y contexto del equipo

## Prohibiciones Explícitas
- No usar `any` sin justificación documentada
- Prohibidas librerías de componentes pesadas (Material UI, Chakra UI)
- Sin tests automatizados en este alcance
- No mergear sin plan aprobado previamente
