# Habit Tracker Spec

## Objetivo

Una aplicación web de seguimiento de hábitos personales para usuarios que desean registrar y visualizar su progreso de manera práctica y ordenada, sin elementos sociales, motivacionales ni gamificación.

## Scope

### Sí entra

- Registro e inicio de sesión mediante email y contraseña.
- Gestión de hábitos personales mediante creación, visualización y eliminación.
- Hábitos con nombre, descripción, frecuencia y entre 1 y 3 categorías.
- Hábitos con frecuencia diaria o semanal.
- Check-ins únicamente sobre el día actual.
- Visualización del estado actual y la racha de cada hábito.
- Calendario visual con historial de hábitos completados.
- Filtro de hábitos por categoría.
- Actualización de racha después de cada check-in.

### No entra

- Registro mediante Google, Apple u otros proveedores externos.
- Edición de nombre, descripción o categorías después de crear un hábito.
- Edición de check-ins de días pasados o futuros.
- Categorías personalizadas creadas por el usuario.
- Funciones sociales o hábitos compartidos.
- Notificaciones, recordatorios o mensajes motivacionales.
- Estadísticas históricas avanzadas fuera del calendario visual.
- Funcionamiento offline.
- Edición de frecuencia después de crear un hábito.

---

## Criterios de aceptación

### Autenticación

1. Dado que un usuario no tiene cuenta registrada, cuando ingresa un email válido y una contraseña y confirma el registro, entonces la cuenta se crea y el usuario accede a la aplicación.
2. Dado que un usuario intenta registrarse con un email que ya existe, cuando envía el formulario, entonces se muestra un error y no se crea una cuenta.
3. Dado que un usuario ingresa credenciales correctas, cuando inicia sesión, entonces accede a su dashboard.
4. Dado que un usuario ingresa credenciales incorrectas, cuando intenta iniciar sesión, entonces se muestra un error y permanece en login.
5. Dado que un usuario tiene sesión activa, cuando cierra sesión, entonces es redirigido a login y la sesión se elimina.

### Hábitos

6. Dado que un usuario está autenticado, cuando crea un hábito con nombre, descripción, frecuencia y 1 a 3 categorías, entonces el hábito aparece en su lista.
7. Dado que un usuario intenta crear un hábito sin completar campos obligatorios, cuando guarda, entonces se muestra error y no se crea el hábito.
8. Dado que un usuario intenta crear un hábito con más de 3 categorías, cuando guarda, entonces se muestra error.
9. Dado que un usuario elimina un hábito, cuando confirma la acción, entonces el hábito desaparece de la lista.

10. Dado que un usuario edita un hábito, cuando modifica únicamente la frecuencia y guarda, entonces la frecuencia se actualiza y la racha del hábito se reinicia a 0.

### Check-ins

11. Dado un hábito diario activo, cuando el usuario marca el hábito como completado en el día actual, entonces el check-in se registra y la racha se recalcula en +1 si es consecutivo o se reinicia a 1 si no lo es.
12. Dado un hábito ya completado en el día actual, cuando el usuario lo desmarca el mismo día, entonces el check-in se elimina y la racha se recalcula correctamente.
13. Dado que el usuario intenta interactuar con días pasados o futuros, entonces no existen acciones de creación, edición o eliminación de check-ins.

### Hábitos semanales

14. Dado un hábito semanal con meta de N check-ins por semana, cuando el usuario completa N check-ins dentro de la misma semana calendario, entonces el hábito se marca como completado para esa semana.
15. Dado que el usuario ya alcanzó la meta semanal, cuando realiza check-ins adicionales en la misma semana, entonces los check-ins se registran sin modificar el estado de completado semanal.
16. Dado que inicia una nueva semana calendario, cuando el usuario consulta el hábito, entonces el conteo semanal se reinicia a 0.
17. Dado que termina una semana sin cumplir la meta semanal, entonces la racha del hábito se reinicia.

### Vista y calendario

18. Dado que un usuario tiene hábitos creados, cuando entra al dashboard, entonces ve nombre, categorías, estado del día actual y racha de cada hábito.
19. Dado que un usuario usa el filtro por categoría, cuando selecciona una categoría, entonces solo ve hábitos asociados a esa categoría.
20. Dado que existen check-ins, cuando abre el calendario, entonces puede ver qué hábitos se completaron por día.
21. Dado que un hábito fue eliminado, cuando el usuario revisa el calendario, entonces los registros históricos de check-ins siguen visibles.
22. Dado que el usuario consulta un día pasado en el calendario, entonces puede ver los check-ins de ese día pero no editarlos.
23. Dado que el usuario no tiene hábitos, cuando entra al dashboard, entonces ve un estado vacío con opción de crear hábito.

### Conectividad

24. Dado que el usuario pierde conexión a internet, cuando intenta interactuar con la app, entonces la UI bloquea acciones y muestra estado de reconexión.

---

## No-goals

- No habrá autenticación mediante Google, Apple u otros servicios externos.
- No habrá funciones sociales, hábitos compartidos ni perfiles públicos.
- No habrá frases motivacionales, recompensas, logros ni gamificación.
- No habrá categorías personalizadas creadas por el usuario.
- No habrá edición de check-ins de días pasados o futuros.
- No habrá notificaciones ni recordatorios automáticos.
- No habrá estadísticas históricas avanzadas fuera del calendario visual.
- No habrá funcionamiento offline ni sincronización automática al recuperar conexión.
- No habrá edición de nombre, descripción o categorías después de crear un hábito.
- No habrá edición de frecuencia después de crear un hábito.