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
- Actualización automática de rachas y progreso después de cada check-in.

### No entra

- Registro mediante Google, Apple u otros proveedores externos.
- Edición de nombre, descripción o categorías después de crear un hábito.
- Edición de check-ins de días pasados o futuros.
- Categorías personalizadas creadas por el usuario.
- Funciones sociales o hábitos compartidos.
- Notificaciones, recordatorios o mensajes motivacionales.
- Estadísticas históricas avanzadas fuera del calendario visual.
- Funcionamiento offline.

## Criterios de aceptación

1. Dado que un usuario no tiene cuenta registrada, cuando ingresa un email válido, una contraseña y confirma el registro, entonces la cuenta se crea y el usuario accede a la aplicación.

2. Dado que un usuario intenta registrarse con un email que ya existe, cuando envía el formulario de registro, entonces la aplicación muestra un mensaje de error y no crea una nueva cuenta.

3. Dado que un usuario ya tiene una cuenta registrada, cuando ingresa correctamente su email y contraseña en la pantalla de login, entonces accede a su dashboard personal.

4. Dado que un usuario ingresa credenciales incorrectas en el login, cuando intenta iniciar sesión, entonces la aplicación muestra un mensaje de error y permanece en la pantalla de login.

5. Dado que un usuario tiene sesión iniciada, cuando selecciona la opción de cerrar sesión, entonces es redirigido a la pantalla de login y la sesión finaliza.

6. Dado que un usuario tiene sesión iniciada, cuando crea un hábito ingresando nombre, descripción, frecuencia y entre 1 y 3 categorías, entonces el hábito aparece inmediatamente en su lista principal.

7. Dado que un usuario intenta crear un hábito sin completar nombre, descripción, frecuencia o categorías, cuando intenta guardar el hábito, entonces la aplicación muestra un mensaje de error y el hábito no se guarda.

8. Dado que un usuario intenta crear un hábito con más de 3 categorías seleccionadas, cuando intenta guardar el hábito, entonces la aplicación muestra un mensaje de error y el hábito no se guarda.

9. Dado que un usuario elimina un hábito existente, cuando confirma la acción desde el mensaje de confirmación, entonces el hábito desaparece de la lista principal.

10. Dado que un hábito ya existe, cuando el usuario accede a la edición del hábito, entonces únicamente puede modificar la frecuencia del hábito.

11. Dado que el usuario cambia la frecuencia de un hábito existente y guarda los cambios, entonces la racha actual del hábito se reinicia a cero.

12. Dado que un usuario tiene un hábito diario activo, cuando marca el hábito como completado en el día actual, entonces el estado del hábito cambia a completado y la racha actual se actualiza automáticamente.

13. Dado que un usuario ya marcó un hábito como completado en el día actual, cuando decide desmarcarlo el mismo día, entonces el estado del hábito, la racha y los registros relacionados se actualizan nuevamente.

14. Dado que un usuario consulta días futuros o días anteriores al actual, entonces no existen opciones visibles para agregar, editar o eliminar check-ins en esas fechas.

15. Dado que un usuario tiene un hábito semanal con una meta definida de N check-ins por semana, cuando completa la cantidad requerida de check-ins dentro de la misma semana, entonces el hábito cambia a estado completado y la racha semanal se mantiene activa.

16. Dado que un usuario ya alcanzó la meta semanal de un hábito, cuando realiza check-ins adicionales durante la misma semana, entonces los nuevos registros se guardan en el calendario sin modificar nuevamente el estado de cumplimiento semanal.

17. Dado que inicia una nueva semana calendario, cuando el usuario consulta un hábito semanal, entonces el conteo semanal vuelve a iniciar desde cero para la nueva semana.

18. Dado que finaliza una semana calendario y un hábito semanal no alcanzó la cantidad mínima de check-ins requerida, entonces la racha actual de ese hábito se reinicia.

19. Dado que un usuario tiene hábitos registrados, cuando entra a la pantalla principal, entonces visualiza para cada hábito su nombre, categorías, estado actual y racha activa.

20. Dado que un usuario tiene hábitos registrados en distintas categorías, cuando selecciona una categoría desde el filtro principal, entonces la lista muestra únicamente los hábitos asociados a esa categoría.

21. Dado que existen check-ins registrados, cuando el usuario abre la vista de calendario, entonces cada día muestra los hábitos que fueron marcados como completados en esa fecha.

22. Dado que un hábito fue eliminado después de tener check-ins registrados, cuando el usuario consulta fechas anteriores en el calendario, entonces los registros históricos de cumplimiento siguen siendo visibles.

23. Dado que el usuario consulta un día pasado desde el calendario, entonces puede visualizar los hábitos completados en esa fecha pero no puede modificar ni agregar check-ins históricos.

24. Dado que el usuario no tiene hábitos creados, cuando entra a la pantalla principal, entonces se muestra un mensaje indicando que aún no tiene hábitos configurados y un botón para crear un nuevo hábito.

25. Dado que el usuario pierde conexión a internet, cuando intenta acceder a la aplicación o realizar acciones dentro de ella, entonces la aplicación no permite interacción hasta recuperar conexión.

## No-goals

## No-goals

- No habrá autenticación mediante Google, Apple u otros servicios externos.
- No habrá funciones sociales, hábitos compartidos ni perfiles públicos.
- No habrá frases motivacionales, recompensas, logros ni sistemas de gamificación.
- No habrá categorías personalizadas creadas por el usuario.
- No habrá edición de check-ins de días pasados o futuros.
- No habrá notificaciones ni recordatorios automáticos.
- No habrá estadísticas históricas avanzadas fuera del calendario visual.
- No habrá funcionamiento offline ni sincronización automática al recuperar conexión.
- No habrá edición de nombre, descripción o categorías después de crear un hábito.