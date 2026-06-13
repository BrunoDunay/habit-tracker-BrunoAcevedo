name: nuevo-adr
description: "Invocar cuando se quiere registrar una nueva decisión arquitectónica del proyecto"

Instrucciones:

1) Plantilla canónica del ADR (reemplazar placeholders):

# ADR {{number}} — {{short-title}}

Estado: {{proposed|accepted|deprecated}}

Contexto:
{{context}}

Decisión:
{{decision}}

Alternativas consideradas:
- {{alternative-1}} — trade-offs: {{trade-offs-1}}
- {{alternative-2}} — trade-offs: {{trade-offs-2}}

Consecuencias:
- {{consequence-1-negativa}}
- {{consequence-2}}

2) Validaciones (procedimiento):
- Verificar que existe al menos una alternativa sustantiva (no "no hacer nada").
- Verificar que hay al menos una consecuencia negativa explícita.
- Verificar que el `context` no sea un placeholder genérico.

3) Auto-numeración:
- Leer `docs/adr/` y determinar el máximo `000N` actual; nuevo número = N+1.
- Generar slug seguro para el título y nombre de archivo `docs/adr/000N-<slug>.md`.

4) Resultado:
- Si válido: devolver `status: ok`, `file: docs/adr/000N-<slug>.md` y el contenido completo del ADR.
- Si inválido: devolver `status: error` con lista de problemas.
